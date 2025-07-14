// import React, { useState } from 'react';
// import { FiUpload } from "react-icons/fi"; // ✅ Import at the top

// const Cert2 = () => {
//   const [formData, setFormData] = useState({
//     file: null,
//   });

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
//       <form>
//         <div className="flex flex-col items-start">
//           <label className="mb-1 font-semibold">Upload File</label>

//           <label
//             htmlFor="file"
//             className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition duration-200"
//           >
//             <FiUpload className="text-xl" />
//             Choose File
//           </label>

//           <input
//             type="file"
//             id="file"
//             name="file"
//             onChange={(e) =>
//               setFormData({ ...formData, file: e.target.files[0] })
//             }
//             required
//             className="hidden"
//           />

//           {formData.file && (
//             <p className="mt-2 text-sm text-gray-600">
//               Selected: {formData.file.name}
//             </p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Cert2;


// import React, { useState } from 'react';
// import './cert.css'

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
//     branch:''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//     // TODO: Send form data to backend
//   };
//    const fileInputRef = useRef(null);

//   const handleImageClick = () => {
//     fileInputRef.current.click(); // Trigger file input click
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     console.log("Selected file (not shown to client):", file);

//   return (
//   <form onSubmit={handleSubmit} className="">
//   <div className="main">
//     <div className="form-row">
//       <label>Full Name:</label>
//       <input
//         type="text"
//         name="fullName"
//         value={formData.fullName}
//         onChange={handleChange}
//         required placeholder="Enter Your Full Name"
//       />
//     </div>

//     <div className="form-row">
//       <label>Reg. No.:</label>
//       <input
//         type="text"
//         name="regNo"
//         value={formData.regNo}
//         onChange={handleChange}
//         required placeholder="Enter Your RegNo"
//       />
//     </div>

//     <div className="form-row">
//       <label>Email ID:</label>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required placeholder="Enter Your Email"
//       />
//     </div>

//     <div className="form-row">
//       <label>Whatsapp <br />Number </label>
//       <input
//         type="text"
//         name="whatsappNumber"
//         value={formData.whatsappNumber}
//         onChange={handleChange}
//         required placeholder="Enter Your Number"
//       />
//     </div>

//     <div className="form-row">
//       <label>Branch:</label>
//       <select
//         name="branch"
//         value={formData.branch}
//         onChange={handleChange}
//         required
//       >
//         <option value="">-- Select The Branch --</option>
//         <option value="completion">Puthur</option>
//         <option value="internship">ThillaiNagar</option>
//         <option value="achievement">Kattur</option>
//       </select>
//     </div>

//     <div className="form-row">
//       <label>Course & Code:</label>
//       <input
//         type="text"
//         name="courseCode"
//         value={formData.courseCode}
//         onChange={handleChange}
//         required placeholder="Enter Your CourseCode"
//       />
//     </div>

//     <div className="form-row">
//       <label>Trainer Name:</label>
//       <input
//         type="text"
//         name="trainerName"
//         value={formData.trainerName}
//         onChange={handleChange}
//         required placeholder="Enter Your Trainer Name"
//       />
//     </div>

//     <div className="form-row">
//       <label>Date:</label>
//       <input
//         type="date"
//         name="date"
//         value={formData.date}
//         onChange={handleChange}
//         required
//       />
//     </div>

//     <div className="form-row">
//       <label>Upload File:</label>
//       {/* <input
//         type="file" 
//         name="file"
//         onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
//         required 
//       /> */}

//          <div>
//       {/* Hidden file input */}
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//         onChange={handleFileChange}
//       />

//       {/* Image as upload button */}
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
//         alt="Upload"
//         onClick={handleImageClick}
//         style={{ width: '100px', height: '100px', cursor: 'pointer' }}
//       />
//     </div>
//     </div>

//       <div className="mt-6">
//     <button type="submit">Submit Request</button>
//   </div>
//   </div>


// </form>

//   );
// };

// export default Cert

// import React, { useRef } from 'react';

// const ImageUploadButton = () => {
//   const fileInputRef = useRef(null);

//   const handleImageClick = () => {
//     fileInputRef.current.click(); // Trigger file input click
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     console.log("Selected file (not shown to client):", file);
//     // Optional: Send to backend or store in state
//   };

//   return (
//     <div>
//       {/* Hidden file input */}
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//         onChange={handleFileChange}
//       />

//       {/* Image as upload button */}
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
//         alt="Upload"
//         onClick={handleImageClick}
//         style={{ width: '100px', height: '100px', cursor: 'pointer' }}
//       />
//     </div>
//   );
// };

// export default ImageUploadButton;

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Cert2 = () => {
  return (
    <div style={{ width: 300, margin: 'auto', marginTop: 50 }}>
      <DotLottieReact
        src="https://lottie.host/1825f23c-2502-4542-9555-9f45f7a86d39/6LaaDBggbO.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Cert2;



