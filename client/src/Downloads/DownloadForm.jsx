// import React, { useState } from 'react';
// import axios from 'axios';

// const DownloadForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     designation: '',
//     organization: '',
//     phone_number: '',
//     email: '',
//     form_type: 2,
//   });
//   const [errors, setErrors] = useState({});
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     validateField(e.target.name, e.target.value);
// };

// const validateField = (fieldName, value) => {
//     let error = '';
//     switch (fieldName) {
//       case 'name':
//         if (!/^[A-Za-z\s]{2,}$/.test(value)) {
//           error = 'Enter your valid name';
//         }
//         break;
//       case 'email':
//         if (!/^[a-z0-9][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
//           error = 'Enter a valid email address.';
//         }
//         break;
//       case 'phone_number':
//         if (!/^\+?[0-9]{6,15}$/.test(value)) {
//           error = 'Enter valid Phone number.';
//         }
//         break;
//       default:
//         break;
//     }
//     setErrors((prev) => ({ ...prev, [fieldName]: error }));
//   };




//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let hasErrors = false;
//     Object.keys(formData).forEach((field) => {
//       validateField(field, formData[field]);
//       if (errors[field]) {
//         hasErrors = true;
//       }
//     });

//     if (!hasErrors) {
//       try {
//         // Ensure phone_number is sent as a string
//         const formDataToSend = {
//           ...formData,
//           phone_number: formData.phone_number.toString(), // Ensure it's a string
//         };

//         const response = await axios.post('http://192.168.139:248:5000/api/submit-form', formDataToSend);
//         if (response.status === 200) {
//           toast.success('Message sent successfully!');
//           setFormData({
//             name: '',
//             designation: '',
//             organization: '',
//             email: '',
//             phone_number: '', // Reset phone_number
//             message: '',
//             form_type: 1, // Reset form_type
//           });
//         }
//       } catch (error) {
//         if (error.response) {
//           // If the server responded with an error
//           console.error('Error response:', error.response.data);
//           toast.error(`Failed to send message: ${error.response.data.message || 'Please try again later.'}`);
//         } else {
//           // If the error is due to no response or other issues
//           console.error('Error submitting form:', error);
//           toast.error('Failed to send message. Please try again later.');
//         }
//       }
//     }
//   };


//   return (
//     <form className="d-flex flex-column p-3" onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">Name</label>
//         <input
//           type="text"
//           className="form-control"
//           id="name"
//           placeholder="Enter your name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="designation" className="form-label">Designation</label>
//         <input
//           type="text"
//           className="form-control"
//           id="designation"
//           placeholder="Enter your designation"
//           value={formData.designation}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="organization" className="form-label">Organization</label>
//         <input
//           type="text"
//           className="form-control"
//           id="organization"
//           placeholder="Enter your organization"
//           value={formData.organization}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="phone_number" className="form-label">Contact Number</label>
//         <input
//           type="text"
//           className="form-control"
//           id="phone_number"
//           placeholder="Enter your contact number"
//           value={formData.phone_number}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">Email</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           placeholder="Enter your email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <button
//         type="submit"
//         className="custom-btn btn btn-primary btn-width"
//       >
//         Download PDF
//       </button>
//     </form>
//   );
// };

// export default DownloadForm;





import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';  // Make sure you have react-toastify installed for notifications

const DownloadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    phone_number: '',
    email: '',
    form_type: 2,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Trigger real-time validation on each input change
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let error = '';
    switch (fieldName) {
      case 'name':
        if (!/^[A-Za-z\s]{2,}$/.test(value)) {
          error = 'Enter your valid name';
        }
        break;
      case 'email':
        if (!/^[a-z0-9][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          error = 'Enter a valid email address.';
        }
        break;
      case 'phone_number':
        if (!/^\+?[0-9]{6,15}$/.test(value)) {
          error = 'Enter valid Phone number.';
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    let hasErrors = false;
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
      if (errors[field]) {
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      try {
        // Ensure phone_number is sent as a string
        const formDataToSend = {
          ...formData,
          phone_number: formData.phone_number.toString(), // Ensure it's a string
        };

        const response = await axios.post('http://192.168.139:248:5000/api/submit-form', formDataToSend);
        if (response.status === 200) {
          toast.success('Message sent successfully!');
          // Reset form fields after successful submission
          setFormData({
            name: '',
            designation: '',
            organization: '',
            phone_number: '',
            email: '',
            form_type: 1,
          });
        }
      } catch (error) {
        if (error.response) {
          // If the server responded with an error
          console.error('Error response:', error.response.data);
          toast.error(`Failed to send message: ${error.response.data.message || 'Please try again later.'}`);
        } else {
          // If the error is due to no response or other issues
          console.error('Error submitting form:', error);
          toast.error('Failed to send message. Please try again later.');
        }
      }
    }
  };

  return (
    <form className="d-flex flex-column p-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="designation" className="form-label">Designation</label>
        <input
          type="text"
          className="form-control"
          id="designation"
          placeholder="Enter your designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="organization" className="form-label">Organization</label>
        <input
          type="text"
          className="form-control"
          id="organization"
          placeholder="Enter your organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone_number" className="form-label">Contact Number</label>
        <input
          type="text"
          className="form-control"
          id="phone_number"
          placeholder="Enter your contact number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        {errors.phone_number && <div className="text-danger">{errors.phone_number}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>
<div className='mb-4'><button
        type="submit"
        className="custom-btn btn btn-primary btn-width"
      >
        Download PDF
      </button></div>
      
    </form>
  );
};

export default DownloadForm;

