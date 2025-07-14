
  


// // import React, { useState, useRef } from 'react';
// // import './cert.css';

// // const Cert = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     regNo: '',
// //     email: '',
// //     courseCode: '',
// //     trainerName: '',
// //     whatsappNumber: '',
// //     date: '',
// //     file: null,
// //     branch: ''
// //   });

// //   const fileInputRef = useRef(null);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form Data Submitted:', formData);
// //     // TODO: Send formData to backend (use FormData if including file)
// //   };

// //   const handleImageClick = () => {
// //     fileInputRef.current.click();
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     console.log("Selected file (not shown to client):", file);
// //     setFormData({ ...formData, file });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="">
// //       <div className="main">
// //         <div className="form-row">
// //           <label>Full Name:</label>
// //           <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter Your Full Name" />
// //         </div>

// //         <div className="form-row">
// //           <label>Reg. No.:</label>
// //           <input type="text" name="regNo" value={formData.regNo} onChange={handleChange} required placeholder="Enter Your RegNo" />
// //         </div>

// //         <div className="form-row">
// //           <label>Email ID:</label>
// //           <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Your Email" />
// //         </div>

// //         <div className="form-row">
// //           <label>Whatsapp <br />Number </label>
// //           <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} required placeholder="Enter Your Number" />
// //         </div>

// //         <div className="form-row">
// //           <label>Branch:</label>
// //           <select name="branch" value={formData.branch} onChange={handleChange} required>
// //             <option value="">-- Select The Branch --</option>
// //             <option value="completion">Puthur</option>
// //             <option value="internship">ThillaiNagar</option>
// //             <option value="achievement">Kattur</option>
// //           </select>
// //         </div>

// //         <div className="form-row">
// //           <label>Course & Code:</label>
// //           <input type="text" name="courseCode" value={formData.courseCode} onChange={handleChange} required placeholder="Enter Your CourseCode" />
// //         </div>

// //         <div className="form-row">
// //           <label>Trainer Name:</label>
// //           <input type="text" name="trainerName" value={formData.trainerName} onChange={handleChange} required placeholder="Enter Your Trainer Name" />
// //         </div>

// //         <div className="form-row">
// //           <label>Date:</label>
// //           <input type="date" name="date" value={formData.date} onChange={handleChange} required />
// //         </div>

// //         <div className="form-row">
// //           <label>Upload File:</label>
// //           <div>
// //             <input
// //               type="file"
// //               ref={fileInputRef}
// //               style={{ display: 'none' }}
// //               onChange={handleFileChange}
// //             />
// //             <img
// //               src="https://e7.pngegg.com/pngimages/914/512/png-clipart-icloud-clip-cart-upload-computer-icons-computer-file-icon-drawing-upload-miscellaneous-blue-thumbnail.png"
// //               alt="Upload"
// //               onClick={handleImageClick}
// //               style={{ width: '8  0px', height: '50px', cursor: 'pointer' }}
// //             />
// //           </div>
// //         </div>

// //         <div className="mt-6">
// //           <button type="submit">Submit</button>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default Cert;
// //<----------------------------->






  


// // import React, { useState, useRef, useEffect } from 'react';
// // import axios from 'axios';
// // import './cert.css';



// // const Cert = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     regNo: '',
// //     email: '',
// //     courseCode: '',
// //     trainerName: '',
// //     whatsappNumber: '',
// //     date: '',
// //     file: null,
// //    branches:
// //   });

// // const branches = [
// //   { value: "pudhur", label: "Puthur" },
// //   { value: "thillainagr", label: "ThillaiNagar" },
// //   { value: "kattur", label: "Kattur" }
// // ];

// // useEffect(() => {
// //   axios.get('http://localhost:5000/api/branches')
// //     .then((res) => setBranches(res.data))
// //     .catch((err) => console.log(err));
// // }, []);



// //   const handleSearch = async () => {
// //   try {
// //     const response = await axios.get(`http://localhost:5000/api/students/${formData.regNo}`);
// //     if (response.data) {
// //       console.log("Student found:", response.data);
// //       setFormData((prev) => ({
// //         ...prev,
// //         ...response.data  // updates form with DB values
// //       }));
// //     } else {
// //       alert("No student found with that Reg No.");
// //     }
// //   } catch (error) {
// //     console.error("Error fetching student:", error);
// //     alert("Error fetching student data.");
// //   }
// // };



// //   const fileInputRef = useRef(null);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form Data Submitted:', formData);
// //     // TODO: Send formData to backend (use FormData if including file)
// //   };

// //   const handleImageClick = () => {
// //     fileInputRef.current.click();
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     console.log("Selected file (not shown to client):", file);
// //     setFormData({ ...formData, file });
// //   };

// //   return (
    


// //     <form onSubmit={handleSubmit} className="">

      
// //       <div className="main">

// //          <div className="certificate-container">
// //           <h2 className="form-heading">CERTIFICATE REQUEST APPLICATION</h2>
// //       </div>
// //         <div className="form-row">
// //           <label>Full Name:</label>
// //           <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter Your Full Name" />
// //         </div>

      

// //         <div className="form-row">
// //   <label>Reg. No.:</label>
// //   <div style={{ display: 'flex', alignItems: 'center' }}>
// //     <input
// //       type="text"
// //       name="regNo"
// //       value={formData.regNo}
// //       onChange={handleChange}
// //       required
// //       placeholder="Enter Your RegNo"
// //     />
// //     <button id='b1'
// //       type="button"
// //       onClick={handleSearch}
// //       style={{ marginLeft: '10px' }}
// //     >
// //       search
// //     </button>
// //   </div>
// // </div>

       
// //         <div className="form-row">
// //           <label>Email ID:</label>
// //           <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Your Email" />
// //         </div>

// //         <div className="form-row">
// //           <label>Whatsapp <br />Number </label>
// //           <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} required placeholder="Enter Your Number" />
// //         </div>

// //         <div className="form-row">
// //           <label>Branch:</label>
// //           {/* <select name="branch" value={formData.branch} onChange={handleChange} required>
// //             <option value="">-- Select The Branch --</option>
// //             <option value="completion">Puthur</option>
// //             <option value="internship">ThillaiNagar</option>
// //             <option value="achievement">Kattur</option>
// //           </select> */}


// //           <select
// //                 name="branch"
// //                 value={formData.branch}
// //                 onChange={handleChange}
// //                 required>
// //                 <option value="">-- Select The Branch --</option>
// //                 {branches.map((branch, index) => (
// //                   <option key={index} value={branch.value}>{branch.label}</option>
// //                 ))}
// //               </select>

// //         </div>

// //         <div className="form-row">
// //           <label>Course & Code:</label>
// //           <input type="text" name="courseCode" value={formData.courseCode} onChange={handleChange} required placeholder="Enter Your CourseCode" />
// //         </div>

// //         <div className="form-row">
// //           <label>Trainer Name:</label>
// //           <input type="text" name="trainerName" value={formData.trainerName} onChange={handleChange} required placeholder="Enter Your Trainer Name" />
// //         </div>

// //         <div className="form-row">
// //           <label>Date:</label>
// //           <input type="date" name="date" value={formData.date} onChange={handleChange} required />
// //         </div>

// //         <div className="form-row">
// //           <label>Upload File:</label>
// //           <div>
// //             <input
// //               type="file"
// //               ref={fileInputRef}
// //               style={{ display: 'none' }}
// //               onChange={handleFileChange}
// //             />
// //             <img
// //               src="upload.png"
// //               alt="Upload"
// //               onClick={handleImageClick}
// //               style={{ width: '60px', height: '60px', cursor: 'pointer'}}
// //             />
// //           </div>
// //         </div>

// //         <div className="mt-6">
// //           <button type="submit">Submit</button>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default Cert; 



// // import React, { useState, useRef, useEffect } from 'react';
// // import axios from 'axios';
// // import './cert.css';

// // const Cert = () => {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     regNo: '',
// //     email: '',
// //     courseCode: '',
// //     trainerName: '',
// //     whatsappNumber: '',
// //     date: '',
// //     file: null,
// //     branch: ''
// //   });

// //   const [branches, setBranches] = useState([]); // 🔥 Separate state for MongoDB branch list

// //   // Fetch branch data from MongoDB
// //   useEffect(() => {
// //     axios.get('http://localhost:5000/api/students')
// //       .then((res) => setBranches(res.data))
// //       .catch((err) => console.log(err));
// //   }, []);

// //   const fileInputRef = useRef(null);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     console.log("Selected file:", file);
// //     setFormData({ ...formData, file });
// //   };

// //   const handleImageClick = () => {
// //     fileInputRef.current.click();
// //   };

// //   const handleSearch = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:5000/api/students/${formData.regNo}`);
// //       if (response.data) {
// //         console.log("Student found:", response.data);
// //         setFormData((prev) => ({
// //           ...prev,
// //           ...response.data
// //         }));
// //       } else {
// //         alert("No student found with that Reg No.");
// //       }
// //     } catch (error) {
// //       console.error("Error fetching student:", error);
// //       alert("Error fetching student data.");
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Form Data Submitted:', formData);
// //     // You can now send formData to the backend using FormData if file is involved
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <div className="main">
// //         <div className="certificate-container">
// //           <h2 className="form-heading">CERTIFICATE REQUEST APPLICATION</h2>
// //         </div>

// //         <div className="form-row">
// //           <label>Full Name:</label>
// //           <input
// //             type="text"
// //             name="fullName"
// //             value={formData.fullName}
// //             onChange={handleChange}
// //             required
// //             placeholder="Enter Your Full Name"
// //           />
// //         </div>

// //         <div className="form-row">
// //           <label>Reg. No.:</label>
// //           <div style={{ display: 'flex', alignItems: 'center' }}>
// //             <input
// //               type="text"
// //               name="regNo"
// //               value={formData.regNo}
// //               onChange={handleChange}
// //               required
// //               placeholder="Enter Your RegNo"
// //             />
// //             <button
// //               id="b1"
// //               type="button"
// //               onClick={handleSearch}
// //               style={{ marginLeft: '10px' }}
// //             >
// //               search
// //             </button>
// //           </div>
// //         </div>

// //         <div className="form-row">
// //           <label>Email ID:</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //             placeholder="Enter Your Email"
// //           />
// //         </div>

// //         <div className="form-row">
// //           <label>Whatsapp <br /> Number:</label>
// //           <input
// //             type="text"
// //             name="whatsappNumber"
// //             value={formData.whatsappNumber}
// //             onChange={handleChange}
// //             required
// //             placeholder="Enter Your Number"
// //           />
// //         </div>

// //         <div className="form-row">
// //           <label>Branch:</label>
// //           <select
// //             name="branch"
// //             value={formData.branch}
// //             onChange={handleChange}
// //             required
// //           >
// //             <option value="">-- Select The Branch --</option>
// //             {branches.map((branch, index) => (
// //               <option key={index} value={branch.value}>{branch.label}</option>
// //             ))}
// //           </select>
// //         </div>

// //         <div className="form-row">
// //           <label>Course & Code:</label>
// //           <input
// //             type="text"
// //             name="courseCode"
// //             value={formData.courseCode}
// //             onChange={handleChange}
// //             required
// //             placeholder="Enter Your CourseCode"
// //           />
// //         </div>

// //         <div className="form-row">
// //           <label>Trainer Name:</label>
// //           <input
// //             type="text"
// //             name="trainerName"
// //             value={formData.trainerName}
// //             onChange={handleChange}
// //             required
// //             placeholder="Enter Your Trainer Name"
// //           />
// //         </div>

// //         <div className="form-row">
// //           <label>Date:</label>
// //           <input
// //             type="date"
// //             name="date"
// //             value={formData.date}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>

// //         <div className="form-row">
// //           <label>Upload File:</label>
// //           <div>
// //             <input
// //               type="file"
// //               ref={fileInputRef}
// //               style={{ display: 'none' }}
// //               onChange={handleFileChange}
// //             />
// //             <img
// //               src="upload.png"
// //               alt="Upload"
// //               onClick={handleImageClick}
// //               style={{ width: '60px', height: '60px', cursor: 'pointer' }}
// //             />
// //           </div>
// //         </div>

// //         <div className="mt-6">
// //           <button type="submit">Submit</button>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default Cert;













// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import './cert.css';

// const Cert = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     regNo: '',
//     email: '',
//     courseCode: '',
//     trainerName: '',
//     whatsappNumber: '',
//     date: '',
//     file: null,
//     branch: ''
//   });

//   const fileInputRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     console.log("Selected file:", file);
//     setFormData({ ...formData, file });
//   };

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/students/${formData.regNo}`);
//       if (response.data) {
//         console.log("Student found:", response.data);
//         setFormData((prev) => ({
//           ...prev,
//           ...response.data
//         }));
//       } else {
//         alert("No student found with that Reg No.");
//       }
//     } catch (error) {
//       console.error("Error fetching student:", error);
//       alert("Error fetching student data.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//     // You can now send formData to the backend using FormData if file is involved
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="main">
//         <div className="certificate-container">
//           <h2 className="form-heading">CERTIFICATE REQUEST APPLICATION</h2>
//         </div>

//         <div className="form-row">
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Full Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Reg. No.:</label>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="text"
//               name="regNo"
//               value={formData.regNo}
//               onChange={handleChange}
//               required
//               placeholder="Enter Your RegNo"
//             />
//             <button
//               id="b1"
//               type="button"
//               onClick={handleSearch}
//               style={{ marginLeft: '10px' }}
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="form-row">
//           <label>Email ID:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Email"
//           />
//         </div>

//         <div className="form-row">
//           <label>Whatsapp <br /> Number:</label>
//           <input
//             type="text"
//             name="whatsappNumber"
//             value={formData.whatsappNumber}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Number"
//           />
//         </div>

//         <div className="form-row">
//           <label>Branch:</label>
//           <input
//             type="text"
//             name="branch"
//             value={formData.branch}
//             onChange={handleChange}
//             placeholder="Branch auto fills after Reg No search"
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Course & Code:</label>
//           <input
//             type="text"
//             name="courseCode"
//             value={formData.courseCode}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Course Code"
//           />
//         </div>

//         <div className="form-row">
//           <label>Trainer Name:</label>
//           <input
//             type="text"
//             name="trainerName"
//             value={formData.trainerName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Trainer Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Upload File:</label>
//           <div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: 'none' }}
//               onChange={handleFileChange}
//             />
//             <img
//               src="upload.png"
//               alt="Upload"
//               onClick={handleImageClick}
//               style={{ width: '60px', height: '60px', cursor: 'pointer' }}
//             />
//           </div>
//         </div>

//         <div className="mt-6">
//           <button type="submit">Submit</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Cert;




// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import './cert.css';

// const Cert = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     regNo: '',
//     email: '',
//     courseCode: '',
//     trainerName: '',
//     whatsappNumber: '',
//     date: '',
//     file: null,
//     branch: ''
//   });

//   const fileInputRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     console.log("Selected file:", file);
//     setFormData({ ...formData, file });
//   };

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/students/${formData.regNo}`);
//       if (response.data) {
//         console.log("Student found:", response.data);
//         setFormData((prev) => ({
//           ...prev,
//           ...response.data
//         }));
//       } else {
//         alert("No student found with that Reg No.");
//       }
//     } catch (error) {
//       console.error("Error fetching student:", error);
//       alert("Error fetching student data.");
//     }
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post('http://localhost:5000/api/students', formData);
//     alert("Student submitted successfully");
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error submitting student:", error);
//     alert("Error submitting student data.");
//   }
// };
// const handleUpdate = async () => {
//   try {
//     const response = await axios.put(`http://localhost:5000/api/students/${formData.regNo}`, formData);
//     alert("Student updated successfully");
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error updating student:", error);
//     alert("Error updating student data.");
//   }
// };


// const handleDelete = async () => {
//   if (!formData.regNo) {
//     alert("Please enter the Reg. No to delete.");
//     return;
//   }

//   const confirmDelete = window.confirm("Are you sure you want to delete this record?");
//   if (!confirmDelete) return;

//   try {
//     const response = await axios.delete(`http://localhost:5000/api/students/${formData.regNo}`);
//     alert("Student deleted successfully");
//     setFormData({
//       fullName: '',
//       regNo: '',
//       email: '',
//       whatsappNumber: '',
//       branch: '',
//       courseCode: '',
//       trainerName: '',
//       date: '',
//       file: null
//     });
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error deleting student:", error);
//     alert("Error deleting student data.");
//   }
// };



//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="main">
//         <div className="certificate-container">
//           <h2 className="form-heading">CERTIFICATE REQUEST APPLICATION</h2>
//         </div>

//         <div className="form-row">
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Full Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Reg. No.:</label>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="text"
//               name="regNo"
//               value={formData.regNo}
//               onChange={handleChange}
//               required
//               placeholder="Enter Your RegNo"
//             />
//             <button
//               id="b1"
//               type="button"
//               onClick={handleSearch}
//               style={{ marginLeft: '10px' }}
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="form-row">
//           <label>Email ID:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Email"
//           />
//         </div>

//         <div className="form-row">
//           <label>Whatsapp <br /> Number:</label>
//           <input
//             type="text"
//             name="whatsappNumber"
//             value={formData.whatsappNumber}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Number"
//           />
//         </div>

//         <div className="form-row">
//           <label>Branch:</label>
//           <input
//             type="text"
//             name="branch"
//             value={formData.branch}
//             onChange={handleChange}
//             placeholder="Branch auto fills after Reg No search"
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Course & Code:</label>
//           <input
//             type="text"
//             name="courseCode"
//             value={formData.courseCode}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Course Code"
//           />
//         </div>

//         <div className="form-row">
//           <label>Trainer Name:</label>
//           <input
//             type="text"
//             name="trainerName"
//             value={formData.trainerName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Trainer Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Upload File:</label>
//           <div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: 'none' }}
//               onChange={handleFileChange}
//             />
//             <img
//               src="upload.png"
//               alt="Upload"
//               onClick={handleImageClick}
//               style={{ width: '60px', height: '60px', cursor: 'pointer' }}
//             />
//           </div>
//         </div>

//         <div className="form-row button-row">
//               <button type="submit" className='btn'>Submit</button>
//               <button type="button" className='btn' onClick={handleUpdate}>Update</button>
//               <button type="button" className='btn' onClick={handleDelete}>Delete</button>
//         </div>

//       </div>
//     </form>
//   );
// };

// export default Cert;














// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import './cert.css';

// const Cert = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     regNo: '',
//     email: '',
//     courseCode: '',
//     trainerName: '',
//     whatsappNumber: '',
//     date: '',
//     file: null,
//     branch: ''
//   });

//   const fileInputRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     console.log("Selected file:", file);
//     setFormData({ ...formData, file });
//   };

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/students/${formData.regNo}`);
//       if (response.data) {
//         console.log("Student found:", response.data);
//         setFormData((prev) => ({
//           ...prev,
//           ...response.data,
//           file: null // Don't set file here, backend doesn’t return it
//         }));
//       } else {
//         alert("No student found with that Reg No.");
//       }
//     } catch (error) {
//       console.error("Error fetching student:", error);
//       alert("Error fetching student data.");
//     }
//   };

//   const prepareFormData = () => {
//     const data = new FormData();
//     for (let key in formData) {
//       if (formData[key]) data.append(key, formData[key]);
//     }
//     return data;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = prepareFormData();
//       const response = await axios.post('http://localhost:5000/api/students', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert("Student submitted successfully");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error submitting student:", error);
//       alert("Error submitting student data.");
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       const data = prepareFormData();
//       const response = await axios.put(`http://localhost:5000/api/students/${formData.regNo}`, data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert("Student updated successfully");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error updating student:", error);
//       alert("Error updating student data.");
//     }
//   };

//   const handleDelete = async () => {
//     if (!formData.regNo) {
//       alert("Please enter the Reg. No to delete.");
//       return;
//     }

//     const confirmDelete = window.confirm("Are you sure you want to delete this record?");
//     if (!confirmDelete) return;

//     try {
//       const response = await axios.delete(`http://localhost:5000/api/students/${formData.regNo}`);
//       alert("Student deleted successfully");
//       setFormData({
//         fullName: '',
//         regNo: '',
//         email: '',
//         whatsappNumber: '',
//         branch: '',
//         courseCode: '',
//         trainerName: '',
//         date: '',
//         file: null
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error deleting student:", error);
//       alert("Error deleting student data.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="main">
//         <div className="certificate-container">
//           <h2 className="form-heading">CERTIFICATE REQUEST APPLICATION</h2>
//         </div>

//         <div className="form-row">
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Full Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Reg. No.:</label>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="text"
//               name="regNo"
//               value={formData.regNo}
//               onChange={handleChange}
//               required
//               placeholder="Enter Your RegNo"
//             />
//             <button
//               id="b1"
//               type="button"
//               onClick={handleSearch}
//               style={{ marginLeft: '10px' }}
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="form-row">
//           <label>Email ID:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Email"
//           />
//         </div>

//         <div className="form-row">
//           <label>Whatsapp <br /> Number:</label>
//           <input
//             type="text"
//             name="whatsappNumber"
//             value={formData.whatsappNumber}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Number"
//           />
//         </div>

//         <div className="form-row">
//           <label>Branch:</label>
//           <input
//             type="text"
//             name="branch"
//             value={formData.branch}
//             onChange={handleChange}
//             placeholder="Branch auto fills after Reg No search"
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Course & Code:</label>
//           <input
//             type="text"
//             name="courseCode"
//             value={formData.courseCode}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Course Code"
//           />
//         </div>

//         <div className="form-row">
//           <label>Trainer Name:</label>
//           <input
//             type="text"
//             name="trainerName"
//             value={formData.trainerName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Trainer Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Upload File:</label>
//           <div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: 'none' }}
//               onChange={handleFileChange}
//             />
//             <img
//               src="upload.png"
//               alt="Upload"
//               onClick={handleImageClick}
//               style={{ width: '60px', height: '60px', cursor: 'pointer' }}
//             />
//             {formData.file && <p style={{ fontSize: '14px' }}>{formData.file.name}</p>}
//           </div>
//         </div>

//         <div className="form-row button-row">
//           <button type="submit" className='btn'>Submit</button>
//           <button type="button" className='btn' onClick={handleUpdate}>Update</button>
//           <button type="button" className='btn' onClick={handleDelete}>Delete</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Cert;

// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import './cert.css';

// const Cert = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     regNo: '',
//     email: '',
//     courseCode: '',
//     trainerName: '',
//     whatsappNumber: '',
//     date: '',
//     file: null,
//     branch: ''
//   });

//   const fileInputRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     console.log("Selected file:", file);
//     setFormData({ ...formData, file });
//   };

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/students/${formData.regNo}`);
//       if (response.data) {
//         console.log("Student found:", response.data);
//         setFormData((prev) => ({
//           ...prev,
//           ...response.data,
//           file: null // backend doesn't return file
//         }));
//       } else {
//         alert("No student found with that Reg No.");
//       }
//     } catch (error) {
//       console.error("Error fetching student:", error);
//       alert("Error fetching student data.");
//     }
//   };

//   const prepareFormData = () => {
//     const data = new FormData();
//     for (let key in formData) {
//       if (formData[key]) data.append(key, formData[key]);
//     }
//     return data;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = prepareFormData();
//       const response = await axios.post('http://localhost:5000/api/students', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert("Student submitted successfully");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error submitting student:", error);
//       alert("Error submitting student data.");
//     }
//   };

//   const handleUpdate = async () => {
//     try {
//       const data = prepareFormData();
//       console.log("Sending update data:", formData);
//       const response = await axios.put(`http://localhost:5000/api/students/${formData.regNo}`, data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert("Student updated successfully");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error updating student:", error);
//       alert("Error updating student data.");
//     }
//   };

//   const handleDelete = async () => {
//     if (!formData.regNo) {
//       alert("Please enter the Reg. No to delete.");
//       return;
//     }

//     const confirmDelete = window.confirm("Are you sure you want to delete this record?");
//     if (!confirmDelete) return;

//     try {
//       const response = await axios.delete(`http://localhost:5000/api/students/${formData.regNo}`);
//       alert("Student deleted successfully");
//       setFormData({
//         fullName: '',
//         regNo: '',
//         email: '',
//         whatsappNumber: '',
//         branch: '',
//         courseCode: '',
//         trainerName: '',
//         date: '',
//         file: null
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error deleting student:", error);
//       alert("Error deleting student data.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="main">
//         <div className="certificate-container">
//           <h2 className="form-heading">CERTIFICATE REQUEST APPLICATION</h2>
//         </div>

//         <div className="form-row">
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Full Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Reg. No.:</label>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="text"
//               name="regNo"
//               value={formData.regNo}
//               onChange={handleChange}
//               required
//               placeholder="Enter Your RegNo"
//             />
//             <button
//               id="b1"
//               type="button"
//               onClick={handleSearch}
//               style={{ marginLeft: '10px' }}
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="form-row">
//           <label>Email ID:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Email"
//           />
//         </div>

//         <div className="form-row">
//           <label>Whatsapp <br /> Number:</label>
//           <input
//             type="text"
//             name="whatsappNumber"
//             value={formData.whatsappNumber}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Number"
//           />
//         </div>

//         <div className="form-row">
//           <label>Branch:</label>
//           <input
//             type="text"
//             name="branch"
//             value={formData.branch}
//             onChange={handleChange}
//             placeholder="Branch auto fills after Reg No search"
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Course & Code:</label>
//           <input
//             type="text"
//             name="courseCode"
//             value={formData.courseCode}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Course Code"
//           />
//         </div>

//         <div className="form-row">
//           <label>Trainer Name:</label>
//           <input
//             type="text"
//             name="trainerName"
//             value={formData.trainerName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Trainer Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Upload File:</label>
//           <div>

            
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: 'none' }}
//               onChange={handleFileChange}
//             />
//             <img
//               src="upload.png"
//               alt="Upload"
//               onClick={handleImageClick}
//               style={{ width: '60px', height: '60px', cursor: 'pointer' }}
//             />
//             {formData.file && <p style={{ fontSize: '14px' }}>{formData.file.name}</p>}
//           </div>
//         </div>

//         <div className="form-row button-row">
//           <button type="submit" className='btn'>Submit</button>
//           <button type="button" className='btn' onClick={handleUpdate}>Update</button>
//           <button type="button" className='btn' onClick={handleDelete}>Delete</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Cert;




// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import './cert.css';

// const Cert = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     regNo: '',
//     email: '',
//     courseCode: '',
//     trainerName: '',
//     whatsappNumber: '',
//     date: '',
//     file: null,
//     branch: ''
//   });

//   const fileInputRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     console.log("Selected file:", file);
//     setFormData({ ...formData, file });
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
//         file: null // Do not include file from backend
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



//   // const prepareFormData = () => {
//   //   const data = new FormData();
//   //   for (let key in formData) {
//   //     if (formData[key]) data.append(key, formData[key]);
//   //   }
//   //   return data;
//   // };




// const prepareFormData = () => {
//   const form = new FormData();
//   form.append('fullName', formData.fullName);
//   form.append('regNo', formData.regNo);
//   form.append('email', formData.email);
//   form.append('courseCode', formData.courseCode);
//   form.append('trainerName', formData.trainerName);
//   form.append('whatsappNumber', formData.whatsappNumber);
//   form.append('date', formData.date);
//   form.append('branch', formData.branch);

//   if (formData.file) {
//     form.append('file', formData.file); // Important: only if selected
//   }

//   return form;
// };









//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = prepareFormData();
//       const response = await axios.post('http://localhost:5000/api/students', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert("✅ Student submitted successfully");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error submitting student:", error);
//       alert("❌ Error submitting student data.");
//     }
//   };

//   // const handleUpdate = async () => {
//   //   try {
//   //     const data = prepareFormData();
//   //     const response = await axios.put(`http://localhost:5000/api/students/${formData.regNo}`, data, {
//   //       headers: {
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });
//   //     alert("✅ Student updated successfully");
//   //     console.log(response.data);
//   //   } catch (error) {
//   //     console.error("Error updating student:", error);
//   //     alert("❌ Error updating student data.");
//   //   }
//   // };


// const handleUpdate = async () => {
//   try {
//     const data = prepareFormData();
//     const response = await axios.put(
//       `http://localhost:5000/api/students/${formData.regNo}`,
//       data,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       }
//     );
//     alert("✅ Student updated successfully");
//     console.log(response.data);
//   } catch (error) {
//     console.error("❌ Error updating student:", error);
//     alert("❌ Error updating student data.");
//   }
// };







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
//         file: null
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error deleting student:", error);
//       alert("❌ Error deleting student data.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="main">
//         <div className="certificate-container">
//           <h2 className="form-heading">CERTIFICATE REQUEST APPLICATION</h2>
//         </div>

//         <div className="form-row">
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Full Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Reg. No.:</label>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="text"
//               name="regNo"
//               value={formData.regNo}
//               onChange={handleChange}
//               required
//               placeholder="Enter Your RegNo"
//             />
//             <button
//               id="b1"
//               type="button"
//               onClick={handleSearch}
//               style={{ marginLeft: '10px' }}
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="form-row">
//           <label>Email ID:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Email"
//           />
//         </div>

//         <div className="form-row">
//           <label>Whatsapp <br /> Number:</label>
//           <input
//             type="text"
//             name="whatsappNumber"
//             value={formData.whatsappNumber}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Number"
//           />
//         </div>

//         <div className="form-row">
//           <label>Branch:</label>
//           <input
//             type="text"
//             name="branch"
//             value={formData.branch}
//             onChange={handleChange}
//             placeholder="Branch auto fills after Reg No search"
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Course & Code:</label>
//           <input
//             type="text"
//             name="courseCode"
//             value={formData.courseCode}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Course Code"
//           />
//         </div>

//         <div className="form-row">
//           <label>Trainer Name:</label>
//           <input
//             type="text"
//             name="trainerName"
//             value={formData.trainerName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Trainer Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Upload File:</label>
//           <div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: 'none' }}
//               onChange={handleFileChange}
//             />
//             <img
//               src="upload.png"
//               alt="Upload"
//               onClick={handleImageClick}
//               style={{ width: '60px', height: '60px', cursor: 'pointer' }}
//             />
//             {formData.file && <p style={{ fontSize: '14px' }}>{formData.file.name}</p>}
//           </div>
//         </div>

//         <div className="form-row button-row">
//           <button type="submit" className='btn'>Submit</button>
//           <button type="button" className='btn' onClick={handleUpdate}>Update</button>
//           <button type="button" className='btn' onClick={handleDelete}>Delete</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Cert;


// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import './cert.css';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const Cert = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     regNo: '',
//     email: '',
//     courseCode: '',
//     trainerName: '',
//     whatsappNumber: '',
//     date: '',
//     file: null,
//     branch: ''
//   });

//   const fileInputRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       console.log("Selected file:", file);
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
//         file: null // Don't set file from backend
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
//       if (key !== 'file') {
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
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
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
//         file: null
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

//           <div className='lot'>
//               <DotLottieReact
//                 src="https://lottie.host/1825f23c-2502-4542-9555-9f45f7a86d39/6LaaDBggbO.lottie"
//                 loop
//                 autoplay
//               />
//             </div>

//       </div>
//       <div className='m2'>
//          <form onSubmit={handleSubmit}>
//       <div className="main">
//         <div className="certificate-container">
//           <h2 className="form-heading">CERTIFICATE REQUEST APPLICATION</h2>
//         </div>

//         <div className="form-row">
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Full Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Reg. No.:</label>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <input
//               type="text"
//               name="regNo"
//               value={formData.regNo}
//               onChange={handleChange}
//               required
//               placeholder="Enter Your RegNo"
//             />
//             <button
//               id="b1"
//               type="button"
//               onClick={handleSearch}
//               style={{ marginLeft: '10px' }}
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="form-row">
//           <label>Email ID:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Email"
//           />
//         </div>

//         <div className="form-row">
//           <label>Whatsapp <br /> Number:</label>
//           <input
//             type="text"
//             name="whatsappNumber"
//             value={formData.whatsappNumber}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Number"
//           />
//         </div>

//         <div className="form-row">
//           <label>Branch:</label>
//           <input
//             type="text"
//             name="branch"
//             value={formData.branch}
//             onChange={handleChange}
//             required
//             placeholder="Branch auto fills after Reg No search"
//           />
//         </div>

//         <div className="form-row">
//           <label>Course & Code:</label>
//           <input
//             type="text"
//             name="courseCode"
//             value={formData.courseCode}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Course Code"
//           />
//         </div>

//         <div className="form-row">
//           <label>Trainer Name:</label>
//           <input
//             type="text"
//             name="trainerName"
//             value={formData.trainerName}
//             onChange={handleChange}
//             required
//             placeholder="Enter Your Trainer Name"
//           />
//         </div>

//         <div className="form-row">
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-row">
//           <label>Upload File:</label>
//           <div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               style={{ display: 'none' }}
//               accept="image/*"
//               onChange={handleFileChange}
//             />
//             <img
//               src="upload.png"
//               alt="Upload"
//               onClick={handleImageClick}
//               style={{ width: '60px', height: '60px', cursor: 'pointer' }}
//             />
//             {formData.file && (
//               <p style={{ fontSize: '14px' }}>{formData.file.name}</p>
//             )}
//           </div>
//         </div>

//         <div className="form-row button-row">
//           <button type="submit" className="btn">Submit</button>
//           <button type="button" className="btn" onClick={handleUpdate}>Update</button>
//           <button type="button" className="btn" onClick={handleDelete}>Delete</button>
//         </div>
//       </div>
//     </form>

//       </div>

//     </div>


   
//   );
// };

// export default Cert;


import React, { useState, useRef } from 'react';
import axios from 'axios';
import './cert.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Cert = () => {
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
      setFormData(prev => ({
        ...prev,
        ...response.data,
        file: null, // don't overwrite file input
        filePath: response.data.filePath || ''
      }));
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
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("❌ Error deleting student data.");
    }
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
        <form onSubmit={handleSubmit}>
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
                {!formData.file && formData.filePath && (
                  <img
                    src={`http://localhost:5000/${formData.filePath}`}
                    alt="Uploaded Preview"
                    style={{ width: '120px', marginTop: '10px', borderRadius: '10px' }}
                  />
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
      </div>
    </div>
  );
};

export default Cert;


































