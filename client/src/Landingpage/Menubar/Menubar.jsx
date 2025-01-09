// // import React from 'react';
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
// // import InputGroup from 'react-bootstrap/InputGroup';
// // import FormControl from 'react-bootstrap/FormControl';
// // import logo from "../../assets/logoicon.png";
// // import { Link } from 'react-router-dom';
// // import './Menubar.css';

// // function Menubar() {
// //   return (
// //     <Navbar expand="lg" className="navbarbg p-0 m-0 sticky-top">
// //       <Container className='p-0 m-0'>
// //         {/* Logo aligned left */}
// //         <Navbar.Brand href="#home" className="d-flex p-0 m-0">
// //           <img src={logo} alt="Logo"  className='logosize'/>
// //         </Navbar.Brand>
        
// //         {/* Toggle Button for Small Screens */}
// //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
// //         <Navbar.Collapse id="basic-navbar-nav ">
// //           <Nav className="me-auto ms-3 ms-lg-3">
// //             <Nav.Link as={Link} to="/" className='navtext px-2'>HOME</Nav.Link>
// //             <NavDropdown title={<span className='navtext2 px-2'>WHO WE ARE</span>} id="basic-nav-dropdown" className='text-light'>
// //               <NavDropdown.Item as={Link} to="/aboutfounder" className='navtext1'>About Us</NavDropdown.Item>
// //               <NavDropdown.Item as={Link} to="/founder"  className='navtext1'>Our Founder</NavDropdown.Item>
// //               <NavDropdown.Item as={Link} to="/boardmembers" className='navtext1' >Our Board</NavDropdown.Item>
// //             </NavDropdown>
// //             <NavDropdown title={<span className='navtext2 px-2'>SERVICES</span>} id="basic-nav-dropdown" className='text-light'>
// //               <NavDropdown.Item as={Link} to="/drugsafety" className='navtext1'>Drug Safety Services</NavDropdown.Item>
// //               <NavDropdown.Item as={Link} to="/pharmacovigilance" className='navtext1' >Pharmacovigilance Consulting</NavDropdown.Item>
// //               <NavDropdown.Item as={Link} to="/Strategy" className='navtext1'>Strategic Partnerships</NavDropdown.Item>
// //             </NavDropdown>
// //             <Nav.Link href="#link" className='navtext px-3'>NEWS</Nav.Link>
// //             <Nav.Link href="#link" className='navtext px-3'>DOWNLOADS</Nav.Link>
// //             <Nav.Link as={Link} to="/careers" className='navtext px-3'>CAREERS</Nav.Link>
// //             <Nav.Link as={Link} to="/contact" className='navtext px-3'>CONTACT</Nav.Link>
 
// //           </Nav>
// //           <InputGroup
// //         className="d-flex ms-0"
// //         style={{
// //           maxWidth: '400px',
// //           borderRadius: '100px',
// //           overflow: 'hidden', // Ensures child elements respect borderRadius
// //           boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
// //         }}
// //       >
// //         <InputGroup.Text
// //           id="search-addon"
// //           style={{ backgroundColor: 'white', border: 'none', color: 'var(--heading)' }}
// //         >
// //             <i className="bi bi-search"></i>
// //           </InputGroup.Text>
// //           <FormControl
// //             type="search"
// //             placeholder="Search"
// //             aria-label="Search"
// //             aria-describedby="search-addon"
// //             style={{
// //               borderRadius: '0', // Ensures the input field does not override parent radius
// //               outline: 'none', // Removes focus outline
// //               boxShadow: 'none', // Removes any shadow applied during focus
// //               border: 'none', // Removes the default border
// //             }}
// //           />
// //         </InputGroup>
// //         </Navbar.Collapse>
// //       </Container >
// //     </Navbar>
// //   );
// // }

// // export default Menubar;



// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import logo from "../../assets/logoicon.png";
// import { Link } from 'react-router-dom';
// import './Menubar.css';

// function Menubar() {
//   return (
   
//       <Navbar expand="lg" className="navbarbg p-0 m-0 w-100 w-100"  style={{zIndex:"3000"}}>
//       <Container className='p-0 m-0'>
//         {/* Logo aligned left */}
//         <Navbar.Brand href="#home" className="d-flex p-0 m-0">
//           <img src={logo} alt="Logo"  className='logosize'/>
//         </Navbar.Brand>
        
//         {/* Toggle Button for Small Screens */}
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
//         <Navbar.Collapse id="basic-navbar-nav ">
//           <Nav className="me-auto ms-3 ms-lg-3">
//             <Nav.Link as={Link} to="/" className='navtext px-3'>HOME</Nav.Link>
//             <NavDropdown title={<span className='navtext2 px-3'>WHO WE ARE</span>} id="basic-nav-dropdown" className='text-light'>
//               <NavDropdown.Item as={Link} to="/about-us" className='navtext1'>About Us</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/our-founder"  className='navtext1'>Our Founder</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/our-board" className='navtext1' >Our Board</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title={<span className='navtext2 px-3'>SERVICES</span>} id="basic-nav-dropdown" className='text-light'>
//               <NavDropdown.Item as={Link} to="/drug-safety-services" className='navtext1'>Drug Safety Services</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/pharmacovigilance-consulting" className='navtext1' >Pharmacovigilance Consulting</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/strategic-partnerships" className='navtext1'>Strategic Partnerships</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to="/newsletter"  className='navtext px-3'>NEWS</Nav.Link>
//             <Nav.Link as={Link} to="/downloads" href="#link" className='navtext px-3'>DOWNLOADS</Nav.Link>
//             <Nav.Link as={Link} to="/careers" className='navtext px-3'>CAREERS</Nav.Link>
//             <Nav.Link as={Link} to="/contact" className='navtext px-3'>CONTACT</Nav.Link>
 
//           </Nav>
//           <div className=' mb-3 mb-lg-0'>
//           <InputGroup
//             className="d-flex ms-4 me-4"
//             style={{
//               maxWidth: '345px',
//               borderRadius: '100px',
//               overflow: 'hidden',
//               boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
//             }}
//           >
//             <InputGroup.Text className=''
//               id="search-addon"
//               style={{ backgroundColor: 'white', border: 'none', color: 'var(--heading)' }}
//             >
//                 <i className="bi bi-search"></i>
//               </InputGroup.Text>
//             <FormControl
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               aria-describedby="search-addon"
//               style={{
//                 borderRadius: '0', // Ensures the input field does not override parent radius
//                 outline: 'none', // Removes focus outline
//                 boxShadow: 'none', // Removes any shadow applied during focus
//                 border: 'none', // Removes the default border
//               }}
//           />
//         </InputGroup>
//           </div>
          
//         </Navbar.Collapse>
//       </Container >
//     </Navbar>
   
    
//   );
// }

// export default Menubar;




import React, { useState } from 'react'
import LOGO from '../../assets/logoicon.png'
import Navbar from './Navbar'
import MobileNav from './MobileNav';
import './Menubar.css'


const Menubar = () => {

  const [hamToggle, setHamToggle] = useState(false);
  return (
    <div>
      {/* Desktop View */}
      <div
        className='d-none d-xl-flex'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: "linear-gradient(to right, var(--navgradientfrom), var(--navgradientto))"
        }}
      >
        <div>
          <img src={LOGO} alt="Logo" />
        </div>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Search Bar */}
        <div className="d-flex align-items-center" style={{paddingRight: '28px'}}>
          <div
            className="input-group"
            style={{
              maxWidth: '300px',
              borderRadius: '100px',
              overflow: 'hidden', // Ensures child elements respect borderRadius
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <span className="input-group-text bg-white border-0" style={{color: 'var(--heading)'}}>
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search"
              style={{
                borderRadius: '0', // Ensures the input field does not override parent radius
                outline: 'none', // Removes focus outline
                boxShadow: 'none', // Removes any shadow applied during focus
              }}
            />
          </div>
        </div>

      </div>

     {/* Mobile View */}
     <div
        className="d-flex d-xl-none align-items-center"
        style={{
          justifyContent: 'space-between',
          padding: '',
          background: "linear-gradient(to right, var(--navgradientfrom), var(--navgradientto))",
          height: '60px',
        }}
      >
        {/* Logo */}
        <div>
          <img src={LOGO} alt="Logo" style={{ height: '60px' }} />
        </div>

        {/* Hamburger Menu */}
        <div
          className="d-flex align-items-center"
          onClick={() => setHamToggle(!hamToggle)}
        >
          <i
            className="bi bi-list"
            style={{
              fontSize: '45px',
              color: 'white',
              paddingRight: '1rem',
            }}
          ></i>
        </div>
      </div>

      {/* Dropdown Container with Smooth Animation */}
      <div
        style={{
          maxHeight: hamToggle ? '370px' : '0', // Dynamic height
          overflow: 'hidden', // Prevent content overflow
          background: '#fff',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          transition: 'max-height 0.5s ease-in-out', // Smooth transition
          alignItems: 'right',
          
        }}
      >
        <MobileNav setHamToggle={setHamToggle} />

        {/* Search Bar */}
        <div className="d-flex align-items-center" style={{paddingLeft: '3rem', paddingBottom: '20px'}}>
          <div
            className="input-group"
            style={{
              maxWidth: '300px',
              borderRadius: '100px',
              overflow: 'hidden', // Ensures child elements respect borderRadius
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <span className="input-group-text bg-white border-0" style={{color: 'var(--heading)'}}>
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search"
              style={{
                borderRadius: '0', // Ensures the input field does not override parent radius
                outline: 'none', // Removes focus outline
                boxShadow: 'none', // Removes any shadow applied during focus
              }}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Menubar

