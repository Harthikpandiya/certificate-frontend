

// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import './cert.css';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const Certp = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     regNo: '',
//     email: '',
//     courseCode: '',
//     trainerName: '',
//     whatsappNumber: '',
//     date: '',
//     file: null,
//     filePath: '',
//     branch: ''
//   });
// const [step, setStep] = useState(1); 

// // 1 = Form, 2 = Preview
// const goToPreview = (e) => {
//   e.preventDefault();
//   setStep(2);
// };


//   const fileInputRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData({ ...formData, file });
//     }
//   };

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/students/${formData.regNo}`);
//       setFormData(prev => ({
//         ...prev,
//         ...response.data,
//         file: null, // don't overwrite file input
//         filePath: response.data.filePath || ''
//       }));
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         alert("❌ Student not found. Please check Reg No or submit a new entry.");
//       } else {
//         alert("⚠️ Error fetching student.");
//       }
//       console.error("Error fetching student:", error);
//     }
//   };

//   const prepareFormData = () => {
//     const form = new FormData();
//     Object.keys(formData).forEach((key) => {
//       if (key !== 'file' && key !== 'filePath') {
//         form.append(key, formData[key]);
//       }
//     });
//     if (formData.file) {
//       form.append('file', formData.file);
//     }
//     return form;
//   };



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = prepareFormData();
//       const response = await axios.post('http://localhost:5000/api/students', data, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       alert("✅ Student submitted successfully");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error submitting student:", error);
//       alert("❌ Error submitting student data.");
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       const data = prepareFormData();
//       const response = await axios.put(
//         `http://localhost:5000/api/students/${formData.regNo}`,
//         data,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' }
//         }
//       );
//       alert("✅ Student updated successfully");
//       console.log(response.data);
//     } catch (error) {
//       console.error("❌ Error updating student:", error);
//       alert("❌ Error updating student data.");
//     }
//   };

//   const handleDelete = async () => {
//     if (!formData.regNo) {
//       alert("⚠️ Please enter the Reg. No to delete.");
//       return;
//     }
//     const confirmDelete = window.confirm("Are you sure you want to delete this record?");
//     if (!confirmDelete) return;

//     try {
//       const response = await axios.delete(`http://localhost:5000/api/students/${formData.regNo}`);
//       alert("🗑️ Student deleted successfully");
//       setFormData({
//         fullName: '',
//         regNo: '',
//         email: '',
//         whatsappNumber: '',
//         branch: '',
//         courseCode: '',
//         trainerName: '',
//         date: '',
//         file: null,
//         filePath: ''
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error deleting student:", error);
//       alert("❌ Error deleting student data.");
//     }
//   };

//   return (
//     <div className="m">
//       <div className='m1'>
//         <div className='lot'>
//           <DotLottieReact
//             src="https://lottie.host/1825f23c-2502-4542-9555-9f45f7a86d39/6LaaDBggbO.lottie"
//             loop
//             autoplay
//           />
//         </div>
//       </div>

//       <div className='m2'>
//       {step === 1 && (
//         <form onSubmit={goToPreview}>
//           <div className="main">
//             <div className="certificate-container">
//               <h2 className="form-heading">CERTIFICATE REQUEST APPLICATION</h2>
//             </div>

//             <div className="form-row">
//               <label>Full Name:</label>
//               <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter Your Full Name" />
//             </div>

//             <div className="form-row">
//               <label>Reg. No.:</label>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} required placeholder="Enter Your RegNo" />
//                 <button id="b1" type="button" onClick={handleSearch} style={{ marginLeft: '10px' }}>
//                   Search
//                 </button>
//               </div>
//             </div>

//             <div className="form-row">
//               <label>Email ID:</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Your Email" />
//             </div>

//             <div className="form-row">
//               <label>Whatsapp <br /> Number:</label>
//               <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} required placeholder="Enter Your Number" />
//             </div>

//             <div className="form-row">
//               <label>Branch:</label>
//               <input type="text" name="branch" value={formData.branch} onChange={handleChange} required placeholder="Branch auto fills after Reg No search" />
//             </div>

//             <div className="form-row">
//               <label>Course & Code:</label>
//               <input type="text" name="courseCode" value={formData.courseCode} onChange={handleChange} required placeholder="Enter Your Course Code" />
//             </div>

//             <div className="form-row">
//               <label>Trainer Name:</label>
//               <input type="text" name="trainerName" value={formData.trainerName} onChange={handleChange} required placeholder="Enter Your Trainer Name" />
//             </div>

//             <div className="form-row">
//               <label>Date:</label>
//               <input type="date" name="date" value={formData.date} onChange={handleChange} required />
//             </div>

//             <div className="form-row">
//               <label>Upload File:</label>
//               <div>
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   style={{ display: 'none' }}
//                   accept="image/*"
//                   onChange={handleFileChange}
//                 />
//                 <img
//                   src="upload.png"
//                   alt="Upload"
//                   onClick={handleImageClick}
//                   style={{ width: '60px', height: '60px', cursor: 'pointer' }}
//                 />
//                 {formData.file && (
//                   <>
//                     <p style={{ fontSize: '14px' }}>{formData.file.name}</p>
//                     <img
//                       src={URL.createObjectURL(formData.file)}
//                       alt="Preview"
//                       style={{ width: '120px', marginTop: '10px', borderRadius: '10px' }}
//                     />
//                   </>
//                 )}
//                 {!formData.file && formData.filePath && (
//                   <img
//                     src={`http://localhost:5000/${formData.filePath}`}
//                     alt="Uploaded Preview"
//                     style={{ width: '120px', marginTop: '10px', borderRadius: '10px' }}
//                   />
//                 )}
//               </div>
//             </div>

//             <div className="form-row button-row">
//               <button type="submit" className="btn">Submit</button>
//               <button type="button" className="btn" onClick={handleUpdate}>Update</button>
//               <button type="button" className="btn" onClick={handleDelete}>Delete</button>
//             </div>
//           </div>
//         </form>
//  )}


// {step === 2 && (
//   <div className="preview-container">
//     <h2>🔍 Preview Your Details</h2>
//     <p><strong>Full Name:</strong> {formData.fullName}</p>
//     <p><strong>Reg. No:</strong> {formData.regNo}</p>
//     <p><strong>Email:</strong> {formData.email}</p>
//     <p><strong>Whatsapp Number:</strong> {formData.whatsappNumber}</p>
//     <p><strong>Branch:</strong> {formData.branch}</p>
//     <p><strong>Course & Code:</strong> {formData.courseCode}</p>
//     <p><strong>Trainer Name:</strong> {formData.trainerName}</p>
//     <p><strong>Date:</strong> {formData.date}</p>
    
//     {formData.file ? (
//       <div>
//         <p><strong>Uploaded Image:</strong></p>
//         <img
//           src={URL.createObjectURL(formData.file)}
//           alt="Preview"
//           style={{ width: '150px', borderRadius: '10px' }}
//         />
//       </div>
//     ) : formData.filePath ? (
//       <div>
//         <p><strong>Existing Image:</strong></p>
//         <img
//           src={`http://localhost:5000/${formData.filePath}`}
//           alt="Uploaded Preview"
//           style={{ width: '150px', borderRadius: '10px' }}
//         />
//       </div>
//     ) : null}

//     <div style={{ marginTop: '20px' }}>
//       <button onClick={() => setStep(1)} className="btn">⬅️ Edit</button>
//       <button onClick={handleSubmit} className="btn">✅ Confirm & Submit</button>
//     </div>
//   </div>
// )}












//       </div>
//     </div>
   
//   )}

// export default Certp;



import React, { useState, useRef } from 'react';
import axios from 'axios';
import './cert.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Certp = () => {
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

  const [imageName, setImageName] = useState(''); 
  // 👈 Add state to store image name



  const fileInputRef = useRef(null);

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
      const filePath = response.data.filePath || '';
      const fileName = filePath.split('/').pop(); // Extract just the filename
      setImageName(fileName); // 👈 Set filename from MongoDB

      setFormData(prev => ({
        ...prev,
        ...response.data,
        file: null,
        filePath: filePath
      }));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert("❌ Student not found. Please check Reg No or submit a new entry.");
      } else {
        alert("⚠️ Error fetching student.");
      }
      console.error("Error fetching student:", error);
    }


  try {
    const response = await axios.get(`http://localhost:5000/api/students/${formData.regNo}`);

    const fileNameFromDB = response.data.file || ''; // 👈 this is the actual field
    const fileName = fileNameFromDB.split('/').pop();

    setFormData(prev => ({
      ...prev,
      ...response.data,
      file: null,
      filePath: fileNameFromDB // 👈 save file name in filePath for preview purpose
    }));

    setImageName(fileName); // 👈 for showing below the upload icon
  } catch (error) {
    if (error.response && error.response.status === 404) {
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

  const handleUpdate = async () => {
    try {
      const data = prepareFormData();
      const response = await axios.put(
        `http://localhost:5000/api/students/${formData.regNo}`,
        data,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      );
      alert("✅ Student updated successfully");
      console.log(response.data);
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
      setImageName(''); // clear image name after deletion
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("❌ Error deleting student data.");
    }
  };

  const goToPreview = (e) => {
    e.preventDefault();
    setStep(2);
  };

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
        {step === 1 && (
          <form onSubmit={goToPreview}>
            <div className="main">
              <div className="certificate-container">
                <h2 className="form-heading">CERTIFICATE REQUEST APPLICATION</h2>
              </div>

              <div className="form-row">
                <label>Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter Your Full Name" />
              </div>

              <div className="form-row">
                <label>Reg. No.:</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} required placeholder="Enter Your RegNo" />
                  <button id="b1" type="button" onClick={handleSearch} style={{ marginLeft: '10px' }}>
                    Search
                  </button>
                </div>
              </div>

              <div className="form-row">
                <label>Email ID:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Your Email" />
              </div>

              <div className="form-row">
                <label>Whatsapp <br /> Number:</label>
                <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} required placeholder="Enter Your Number" />
              </div>

              <div className="form-row">
                <label>Branch:</label>
                <input type="text" name="branch" value={formData.branch} onChange={handleChange} required placeholder="Branch auto fills after Reg No search" />
              </div>

              <div className="form-row">
                <label>Course & Code:</label>
                <input type="text" name="courseCode" value={formData.courseCode} onChange={handleChange} required placeholder="Enter Your Course Code" />
              </div>

              <div className="form-row">
                <label>Trainer Name:</label>
                <input type="text" name="trainerName" value={formData.trainerName} onChange={handleChange} required placeholder="Enter Your Trainer Name" />
              </div>

              <div className="form-row">
                <label>Date:</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <label>Upload File:</label>
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <img
                    src="upload.png"
                    alt="Upload"
                    onClick={handleImageClick}
                    style={{ width: '60px', height: '60px', cursor: 'pointer' }}
                  />
                  {formData.file && (
                    <>
                      <p style={{ fontSize: '14px' }}>{formData.file.name}</p>
                      <img
                        src={URL.createObjectURL(formData.file)}
                        alt="Preview"
                        style={{ width: '120px', marginTop: '10px', borderRadius: '10px' }}
                      />
                    </>
                  )}
                
                  {/* Show image name from MongoDB */}
                  {imageName && (
                   <p style={{ fontStyle: 'italic', fontSize: '14px', marginTop: '8px', color: 'gray' }}>
                    📂 Image in DB: {imageName}
                  </p>
                  )}
                </div>
              </div>

              <div className="form-row button-row">
                <button type="submit" className="btn">Submit</button>
                <button type="button" className="btn" onClick={handleUpdate}>Update</button>
                <button type="button" className="btn" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="preview-container">
            <h2>🔍 Preview Your Details</h2>
            <p><strong>Full Name:</strong> {formData.fullName}</p>
            <p><strong>Reg. No:</strong> {formData.regNo}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Whatsapp Number:</strong> {formData.whatsappNumber}</p>
            <p><strong>Branch:</strong> {formData.branch}</p>
            <p><strong>Course & Code:</strong> {formData.courseCode}</p>
            <p><strong>Trainer Name:</strong> {formData.trainerName}</p>
            <p><strong>Date:</strong> {formData.date}</p>

            {formData.file ? (
              <div>
                <p><strong>Uploaded Image:</strong></p>
                <img
                  src={URL.createObjectURL(formData.file)}
                  alt="Preview"
                  style={{ width: '150px', borderRadius: '10px' }}
                />
              </div>
            ) : formData.filePath ? (
              <div>
                <p><strong>Existing Image:</strong></p>
                <img
                  src={`http://localhost:5000/${formData.filePath}`}
                  alt="Uploaded Preview"
                  style={{ width: '150px', borderRadius: '10px' }}
                />
              </div>
            ) : null}

            <div style={{ marginTop: '20px' }}>
              <button onClick={() => setStep(1)} className="btn">⬅️ Edit</button>
              <button onClick={handleSubmit} className="btn">✅ Confirm & Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certp;
