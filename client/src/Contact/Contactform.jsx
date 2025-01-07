import React, { useState } from 'react';

function Contactform() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    email: '',
    phno: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Validate on change
    validateField(e.target.name, e.target.value);
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

      case 'phno':
        if (!/^\+?[0-9]{6,15}$/.test(value)) {
          error = 'Enter valid Phone number.';
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleSubmit = (e) => {
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
      console.log('Form Submitted:', formData);
      // Handle submission logic
    }
  };

  return (
    <div className='bg-light contactformbgpart p-4 rounded-3 my-3'>
      <h2 className="py-2 text-dark sendmsg">Send Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder='Enter your Name'
            required
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation:</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="form-control"
            placeholder='Enter your Designation'
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="organisation">Organization:</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="form-control"
            placeholder='Enter your Organization'
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder='Enter your Email'
            required
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="phno">Phone Number:</label>
          <input
            type="text"
            id="phno"
            name="phno"
            value={formData.phno}
            onChange={handleChange}
            className="form-control"
            placeholder='Enter Phone Number'
            required
          />
          {errors.phno && <small className="text-danger">{errors.phno}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder='Enter your Message'
            rows="4"
            required
          ></textarea>
        </div>

        <div className="form-group mt-4">
          <button type="submit" className="btn btn-primary px-4 sendbtn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contactform;
