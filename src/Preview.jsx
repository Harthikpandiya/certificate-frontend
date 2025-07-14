import React, { useState } from 'react';

function Preview() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    setStep(2); // Go to preview
  };

  const handleBack = () => {
    setStep(1); // Back to form
  };

//   const handleSubmit = () => {
//     // You can send this data to backend here
//     alert('Form Submitted!\n' + JSON.stringify(formData, null, 2));
//   };
//    const handleSubmit = () => {
//     // You can send this data to backend here
//     alert('Form Submitted!');
//   };
  const handleSubmit=()=>{
    alert("succesfullea mameaa")
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {step === 1 && (
        <div>
          <h2>Step 1: Fill the Form</h2>
          <label>
            Name: <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label><br /><br />
          <label>
            Email: <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label><br /><br />
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Preview</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <button onClick={handleBack}>Back</button>{' '}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Preview;
