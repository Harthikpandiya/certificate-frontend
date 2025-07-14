import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function generateCertificateNumber(name, regNo, courseCode) {
  const input = `${name}-${regNo}-${courseCode}`;
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash = hash & hash;
  }
  const timestamp = Date.now();
  const randomPart = Math.floor(Math.random() * 100000);
  const combined = Math.abs(hash + timestamp + randomPart).toString(16);
  return combined.padEnd(16, "A2QTU").slice(0, 16).toUpperCase();
}

const Certp5copy6 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    regNo: "",
    email: "",
    courseCode: "",
    trainerName: "",
    whatsappNumber: "",
    date: "",
    file: null,
    filePath: "",
    branch: "",
  });

  const [step, setStep] = useState(1);
  const [mode, setMode] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [courseSuggestions, setCourseSuggestions] = useState([]);
  const courseRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (formData.file) {
      setPreviewUrl(URL.createObjectURL(formData.file));
    } else if (formData.filePath) {
      setPreviewUrl(`https://certificate-backend.onrender.com/uploads/${formData.filePath}`);
    }
  }, [formData.file, formData.filePath]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (courseRef.current && !courseRef.current.contains(event.target)) {
        setCourseSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchCourseSuggestions = async (value) => {
    try {
      const response = await axios.get(
        `https://certificate-backend.onrender.com/api/students/courses/search?q=${value}`
      );
      setCourseSuggestions(response.data);
    } catch (error) {
      console.error("Error fetching course suggestions:", error);
      setCourseSuggestions([]);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "courseCode") {
      fetchCourseSuggestions(e.target.value);
    }
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
      const searchQuery = formData.regNo;
      const response = await axios.get(
        `https://certificate-backend.onrender.com/api/students/search?q=${searchQuery}`
      );
      const data = response.data;
      const fileNameFromDB = data.file || "";
      const fileName = fileNameFromDB.split("/").pop();

      setFormData((prev) => ({
        ...prev,
        ...data,
        file: null,
        filePath: fileNameFromDB,
      }));
      setImageName(fileName);
      setMode("update");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("❌ Student not found. Please check the value or try again.");
      } else {
        alert("⚠️ Error fetching student.");
      }
      console.error("Error fetching student:", error);
    }
  };

  const prepareFormData = () => {
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "file" && key !== "filePath") {
        form.append(key, formData[key]);
      }
    });
    if (formData.file) {
      form.append("file", formData.file);
    }
    return form;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "fullName", "regNo", "email", "courseCode", "trainerName",
      "whatsappNumber", "date", "branch", "file"
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);
    if (emptyFields.length > 0) {
      alert(`⚠️ Please fill all required fields: ${emptyFields.join(", ")}`);
      return;
    }
    try {
      const checkRes = await axios.get(
        `https://certificate-backend.onrender.com/api/students/check-regno/${formData.regNo}`
      );
      if (checkRes.data.exists) {
        alert("❌ This Registration Number already exists!");
        return;
      }
    } catch (checkError) {
      console.error("Error checking regNo:", checkError);
      alert("❌ Error verifying registration number.");
      return;
    }
    const certificateNumber = generateCertificateNumber(
      formData.fullName,
      formData.regNo,
      formData.courseCode
    );
    try {
      const data = prepareFormData();
      data.append("certificateNumber", certificateNumber);
      const response = await axios.post(
        "https://certificate-backend.onrender.com/api/students",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("✅ Student submitted successfully!");
      console.log(response.data);
      resetForm();
    } catch (error) {
      console.error("Error submitting student:", error);
      alert("❌ Error submitting student data.");
    }
  };

  const confirmUpdate = async () => {
    try {
      const data = prepareFormData();
      const response = await axios.put(
        `https://certificate-backend.onrender.com/api/students/${formData.regNo}`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("✅ Student updated successfully");
      console.log(response.data);
      resetForm();
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
      const response = await axios.delete(
        `https://certificate-backend.onrender.com/api/students/${formData.regNo}`
      );
      alert("🗑️ Student deleted successfully");
      console.log(response.data);
      resetForm();
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("❌ Error deleting student data.");
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      regNo: "",
      email: "",
      courseCode: "",
      trainerName: "",
      whatsappNumber: "",
      date: "",
      file: null,
      filePath: "",
      branch: "",
    });
    setImageName("");
    setPreviewUrl("");
    setMode("");
    setStep(1);
  };

  const goToPreview = (e) => {
    e.preventDefault();
    if (!mode) setMode("submit");
    setStep(2);
  };

  const fntc = () => window.location.reload();

  return (
    <div className="m">
      <FontAwesomeIcon icon={faXmark} style={{ fontSize: "30px", position: "relative", left: "139%", padding: "10px" }} className="fntc" onClick={fntc} />
      <div className="m1">
        <div className="lot">
          <DotLottieReact src="https://lottie.host/1825f23c-2502-4542-9555-9f45f7a86d39/6LaaDBggbO.lottie" loop autoplay />
        </div>
      </div>
      <div className="m2">
        {/* Form logic and Preview UI is handled below (abbreviated here to save space) */}
      </div>
    </div>
  );
};

export default Certp5copy6;
