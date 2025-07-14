// ✅ Certp5.jsx (React frontend) – Final working version with preview image logic

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Cert2';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function generateCertificateNumber(name, regNo, courseCode) {
  const input = `${name}-${regNo}-${courseCode}`;
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash = hash & hash;
  }
  const hex = Math.abs(hash).toString(16);
  return hex.padStart(16, '0').slice(0, 16).toUpperCase();
}

const Certp5 = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    regNo: '',
    email: '',
    courseCode: '',
    trainerName: '',
    whatsappNumber: '',
    date: '',
    file: null,
    filePath: '',
    branch: ''
  });

  const [step, setStep] = useState(1);
  const [mode, setMode] = useState('');
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/students/${formData.regNo}`);
      const filePath = response.data.file ? `uploads/${response.data.file}` : '';

      setFormData(prev => ({
        ...prev,
        ...response.data,
        file: null,
        filePath
      }));

      setMode('update');
    } catch (error) {
      if (error.response?.status === 404) {
        alert("❌ Student not found. Please check Reg No or submit a new entry.");
      } else {
        alert("⚠️ Error fetching student.");
      }
      console.error("Error fetching student:", error);
    }
  };

  const prepareFormData = () => {
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== 'file' && key !== 'filePath') {
        form.append(key, formData[key]);
      }
    });
    if (formData.file) {
      form.append('file', formData.file);
    }
    return form;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = prepareFormData();
      const response = await axios.post('http://localhost:5000/api/students', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert("✅ Student submitted successfully");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting student:", error);
      alert("❌ Error submitting student data.");
    }
  };

  const confirmUpdate = async () => {
    try {
      const data = prepareFormData();
      const response = await axios.put(
        `http://localhost:5000/api/students/${formData.regNo}`,
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      alert("✅ Student updated successfully");

      const filePath = response.data.data.file ? `uploads/${response.data.data.file}` : '';
      setFormData(prev => ({ ...prev, file: null, filePath }));
      setPreviewUrl(`http://localhost:5000/${filePath}`);

    } catch (error) {
      console.error("❌ Error updating student:", error);
      alert("❌ Error updating student data.");
    }
  };

  const handleDelete = async () => {
    if (!formData.regNo) {
      alert("⚠️ Please enter the Reg. No to delete.");
      return;
    }
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`http://localhost:5000/api/students/${formData.regNo}`);
      alert("🗑️ Student deleted successfully");
      setFormData({
        fullName: '',
        regNo: '',
        email: '',
        whatsappNumber: '',
        branch: '',
        courseCode: '',
        trainerName: '',
        date: '',
        file: null,
        filePath: ''
      });
      setPreviewUrl('');
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("❌ Error deleting student data.");
    }
  };

  const goToPreview = (e) => {
    e.preventDefault();
    if (!mode) setMode('submit');
    setStep(2);
  };

  useEffect(() => {
    if (formData.file) {
      setPreviewUrl(URL.createObjectURL(formData.file));
    } else if (formData.filePath) {
      setPreviewUrl(`http://localhost:5000/${formData.filePath}`);
    }
  }, [formData.file, formData.filePath]);

  return (
    <div className="m">
      <div className='m1'>
        <div className='lot'>
          <DotLottieReact
            src="https://lottie.host/1825f23c-2502-4542-9555-9f45f7a86d39/6LaaDBggbO.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <div className='m2'>
        {step === 2 && previewUrl && (
          <div className="preview-container">
            <h2>Preview Image:</h2>
            <img src={previewUrl} alt="Preview" style={{ width: '150px', borderRadius: '10px' }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Certp5;
