// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Blogbanner.css";
// import axios from "axios";

// function Blogbanner() {
//   const [blogs, setBlogs] = useState([]); // State to hold blog data
//   const navigate = useNavigate();

//   // Function to navigate based on category_id and blog id
//   const handleReadMoreClick = (categoryId, blogId) => {
//     // You can use the blogId in your route if needed
//     if (categoryId === 1) {
//       navigate(`/sap-blog/${blogId}`); // Pass blogId in URL
//     } else if (categoryId === 2) {
//       navigate(`/it-blog/${blogId}`); // Pass blogId in URL
//     } else if (categoryId === 3) {
//       navigate(`/digital-marketing-blog/${blogId}`); // Pass blogId in URL
//     } else {
//       console.warn("Unknown category ID:", categoryId);
//     }
//   };

//   useEffect(() => {
//     // Fetch latest three blogs from the API
//     axios
//       .get(`https://www.kggeniuslabs.com:5000/latestThreeBlogs`)
//       .then((res) => {
//         console.log(res.data);
//         setBlogs(res.data); // Set the fetched blog data to state
//       })
//       .catch((err) => {
//         console.error("Error fetching latest blogs:", err);
//       });
//   }, []);

//   return (
//     <div className="container-fluid" id="blogs">
//       <div className="row my-5 pb-5 insightspart">
//         <h1 className="text-center evolheading mb-5">
//           <b>News</b>
//         </h1>

//         {blogs.length === 0 ? ( // Check if there are no blogs
//           <div className="col-12 text-center">
//             <p>No News available.</p>
//           </div>
//         ) : (
//           blogs.map(
//             (
//               blog // Map over the fetched blogs
//             ) => (
//               <div key={blog.id} className="col-sm-12 col-lg-4">
//                 <div className="card colourcard text-light my-3 h-80">
//                   <img
//                     src={blog.blog_image} // Use the fetched image URL
//                     title={blog.title}
//                     alt={blog.title} // Use title as alt text
//                     className="card-img-top"/>
//                   <div className="card-body">
//                     <h5 className="card-title">
//                       <b className="title-ellipsis">{blog.title}</b>
//                     </h5>
//                     <button
//                       className="readbtn rounded-3 p-2"
//                       onClick={() =>
//                         handleReadMoreClick(blog.category_id, blog.unique_identifier)
//                       } // Pass both category_id and id
//                     >
//                       Read More
//                     </button>
//                     <div className="py-3"></div>
//                   </div>
//                 </div>
//               </div>
//             )
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default Blogbanner;



// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Blogbanner.css";
// import { LiaCalendar } from "react-icons/lia";
// import blogim1 from "../../assets/blogimg.png";
// import { LuCircleUserRound } from "react-icons/lu";
// function Blogbanner() {
//   const [blogs, setBlogs] = useState([]); // State to hold blog data
//   const navigate = useNavigate();

//   // Dummy blog data
//   const dummyData = [
//     {
//       id: 1,
//       blog_image: "blogim1",
//       title: "Understanding SAP for Business",
//       category_id: 1,
//       unique_identifier: "sap-blog-101",
//       time:"March 2024",
//       user:"admin"
//     },
//     {
//       id: 2,
//       blog_image: "../../assets/blogimg.png",
//       title: "Latest Trends in IT",
//       category_id: 2,
//       unique_identifier: "it-blog-202",
//       time:"March 2024",
//        user:"admin"
//     },
//     {
//       id: 3,
//       blog_image:
//         "https://via.placeholder.com/300x200.png?text=Digital+Marketing",
//       title: "Digital Marketing Strategies for 2025",
//       category_id: 3,
//       unique_identifier: "digital-marketing-blog-303",
//       time:"March 2024",
//        user:"admin"
//     },
   
//   ];

//   // Function to navigate based on category_id and blog id
//   const handleReadMoreClick = (categoryId, blogId) => {
//     if (categoryId === 1) {
//       navigate(`/sap-blog/${blogId}`); // Pass blogId in URL
//     } else if (categoryId === 2) {
//       navigate(`/it-blog/${blogId}`); // Pass blogId in URL
//     } else if (categoryId === 3) {
//       navigate(`/digital-marketing-blog/${blogId}`); // Pass blogId in URL
//     } else {
//       console.warn("Unknown category ID:", categoryId);
//     }
//   };

//   useEffect(() => {
//     // Set the dummy data to blogs state
//     setBlogs(dummyData);
//   }, []);

//   return (
//     <div className="container-fluid" id="blogs">
//       <div className="row my-5 pb-5 insightspart">
//         <h1 className="text-center subhead2 mb-5">News</h1>

//         {blogs.length === 0 ? ( // Check if there are no blogs
//           <div className="col-12 text-center">
//             <p>No News available.</p>
//           </div>
//         ) : (
//           blogs.map(
//             (blog) => (
//               <div key={blog.id} className="col-sm-12 col-lg-4 my-2">
//                 <div className="card colourcard mt-3 h-100 rounded-3">
//                   <img
//                     src={blog.blog_image} // Use the fetched image URL
//                     title={blog.title}
//                     alt={blog.title} // Use title as alt text
//                     className="card-img-top"
//                   />
//                   <div className="card-body">
//                     <div className="d-flex px-2 align-items-center readbtn">
//                     <p ><LuCircleUserRound style={{fontSize:"22px",verticalAlign: "middle",color:"#64B556"}}/> by {blog.user} /</p>
//                     <p><LiaCalendar style={{fontSize:"22px",verticalAlign: "middle",color:"#64B556"}}/>{blog.time}</p>
                   
//                     </div>
//                     <h5 className="card-title text-dark blogtitle px-2">
//                       <b className="title-ellipsis">{blog.title}</b>
//                     </h5>
//                     <Link className="px-2 readbtn my-2" onClick={() =>
//                         handleReadMoreClick(blog.category_id, blog.unique_identifier)
//                       } >Read More</Link>
                   
//                     <div className="py-3"></div>
//                   </div>
//                 </div>
//               </div>
//             )
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default Blogbanner;





import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Blogbanner.css";
import { LiaCalendar } from "react-icons/lia";
import blogim1 from "../../assets/blogimg.png"; // Import the image properly
import { LuCircleUserRound } from "react-icons/lu";

function Blogbanner() {
  const [blogs, setBlogs] = useState([]); // State to hold blog data
  const navigate = useNavigate();

  // Dummy blog data
  const dummyData = [
    {
      id: 1,
      blog_image: blogim1, // Use the imported image here
      title: "Understanding SAP for Business",
      category_id: 1,
      unique_identifier: "sap-blog-101",
      time:"March 2024",
      user:"admin"
    },
    {
      id: 2,
      blog_image: blogim1, // Make sure this is the correct relative path or import
      title: "Latest Trends in IT",
      category_id: 2,
      unique_identifier: "it-blog-202",
      time:"March 2024",
      user:"admin"
    },
    {
      id: 3,
      blog_image:
      blogim1, // External image URL
      title: "Digital Marketing Strategies for 2025",
      category_id: 3,
      unique_identifier: "digital-marketing-blog-303",
      time:"March 2024",
      user:"admin"
    },
  ];

  // Function to navigate based on category_id and blog id
  const handleReadMoreClick = (categoryId, blogId) => {
    if (categoryId === 1) {
      navigate(`/sap-blog/${blogId}`); // Pass blogId in URL
    } else if (categoryId === 2) {
      navigate(`/it-blog/${blogId}`); // Pass blogId in URL
    } else if (categoryId === 3) {
      navigate(`/digital-marketing-blog/${blogId}`); // Pass blogId in URL
    } else {
      console.warn("Unknown category ID:", categoryId);
    }
  };

  useEffect(() => {
    // Set the dummy data to blogs state
    setBlogs(dummyData);
  }, []);

  return (
    <div className="container-fluid" id="blogs">
      <div className="row my-5 pb-5 insightspart">
        <h1 className="text-center subhead2 mb-5">News</h1>

        {blogs.length === 0 ? ( // Check if there are no blogs
          <div className="col-12 text-center">
            <p>No News available.</p>
          </div>
        ) : (
          blogs.map(
            (blog) => (
              <div key={blog.id} className="col-sm-12 col-lg-4 my-2">
                <div className="card colourcard mt-3 h-100 rounded-3">
                  <img
                    src={blog.blog_image} // Use the correct image path here
                    title={blog.title}
                    alt={blog.title} // Use title as alt text
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <div className="d-flex px-2 align-items-center readbtn">
                      <p ><LuCircleUserRound style={{fontSize:"22px",verticalAlign: "middle",color:"#64B556"}}/> by {blog.user} /</p>
                      <p><LiaCalendar style={{fontSize:"22px",verticalAlign: "middle",color:"#64B556"}}/>{blog.time}</p>
                    </div>
                    <h5 className="card-title text-dark blogtitle px-2">
                      <b className="title-ellipsis">{blog.title}</b>
                    </h5>
                    <Link className="px-2 readbtn my-2" onClick={() =>
                        handleReadMoreClick(blog.category_id, blog.unique_identifier)
                      }>Read More</Link>
                    <div className="py-3"></div>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}

export default Blogbanner;
