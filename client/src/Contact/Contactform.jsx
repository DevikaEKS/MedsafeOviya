import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function Contactform() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    email: '',
    phone_number: '', // Ensure the field name matches the backend
    message: '',
    form_type: 1, // Add form_type field (set default to 1, Contact form)
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

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
      case 'phone_number':
        if (!/^\+?[0-9]{6,15}$/.test(value)) {
          error = 'Enter valid Phone number.';
        }
        break;
      default:
        break;
    }
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          setFormData({
            name: '',
            designation: '',
            organization: '',
            email: '',
            phone_number: '', // Reset phone_number
            message: '',
            form_type: 1, // Reset form_type
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
    <div className='bg-light contactformbgpart p-4 rounded-3 my-3'>
      <ToastContainer /> {/* Add the ToastContainer */}
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
          <label htmlFor="organization">Organization:</label>
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
          <label htmlFor="phone_number">Phone Number:</label>
          <input
            type="text"
            id="phone_number"
            name="phone_number" // Ensure the field name matches the backend
            value={formData.phone_number}
            onChange={handleChange}
            className="form-control"
            placeholder='Enter Phone Number'
            required
          />
          {errors.phone_number && <small className="text-danger">{errors.phone_number}</small>}
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
            rows="4" ></textarea>
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
