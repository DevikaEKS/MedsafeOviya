// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { ToastContainer,toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// function Forgotpassword() {
//   const [email, setEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [retypePassword, setRetypePassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     if (newPassword !== retypePassword) {
//       setError('Passwords do not match');
//       toast.error("Passwords do not match. Please enter the correct password.")
//       return;
//     }
// toast.success("Password changed successfully")
//     // Handle password change logic here
//     console.log('Password changed successfully');
//     navigate('/medsafelogin');
//     setError('');
   
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//       <div className="card p-5 formbg" style={{ width: '100%', maxWidth: '400px' }}>
//         <h3 className="text-center mb-4 text-light">Forgot Password</h3>
//         <form onSubmit={handlesubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className='text-light'>Enter your Email</label>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="newPassword" className='text-light'>New Password</label>
//             <input
//               type="password"
//               id="newPassword"
//               className="form-control"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="retypePassword" className='text-light'>Retype Password</label>
//             <input
//               type="password"
//               id="retypePassword"
//               className="form-control"
//               value={retypePassword}
//               onChange={(e) => setRetypePassword(e.target.value)}
//               required
//             />
//           </div>
//           {error && <div className="text-light text-center mb-3">{error}</div>}
//           <div className="text-center">
//             <button type="submit" className="btn logbtn">Submit</button>
//           </div>
//         </form>
//       </div>
//       <ToastContainer/>
//     </div>
//   );
// }

// export default Forgotpassword;





import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Forgotpassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== retypePassword) {
      setError('Passwords do not match');
      toast.error("Passwords do not match. Please enter the correct password.");
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/update-password', {
        email,
        password: newPassword,
      });

      if (response.status === 200) {
        toast.success("Password changed successfully");
        navigate('/medsafelogin');
      } else {
        toast.error("Failed to reset password. Please try again.");
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      toast.error("An error occurred. Please check your connection and try again.");
    }
    setError('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-5 formbg" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4 text-light">Forgot Password</h3>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="email" className='text-light'>Enter your Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className='text-light'>New Password</label>
            <input
              type="password"
              id="newPassword"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="retypePassword" className='text-light'>Retype Password</label>
            <input
              type="password"
              id="retypePassword"
              className="form-control"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-light text-center mb-3">{error}</div>}
          <div className="text-center">
            <button type="submit" className="btn logbtn">Submit</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Forgotpassword;
