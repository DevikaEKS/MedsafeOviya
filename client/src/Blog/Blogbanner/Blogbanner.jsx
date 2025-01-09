


// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Blogbanner.css";
// import { LiaCalendar } from "react-icons/lia";
// import blogim1 from "../../assets/blogimg.png"; // Import the image properly
// import { LuCircleUserRound } from "react-icons/lu";

// function Blogbanner() {
//   const [blogs, setBlogs] = useState([]); // State to hold blog data
//   const navigate = useNavigate();

//   // Dummy blog data
//   const dummyData = [
//     {
//       id: 1,
//       blog_image: blogim1, // Use the imported image here
//       title: "Oviya MedSafe – Convincing Leaders to Constitute Pharmacovigilance",
//       category_id: 1,
//       unique_identifier: "sap-blog-101",
//       time:"March 2024",
//       user:"admin"
//     },
//     {
//       id: 2,
//       blog_image: blogim1, // Make sure this is the correct relative path or import
//       title: "Oviya MedSafe – Accomplishing Pharmacovigilance Equilibrium Since 2012",
//       category_id: 2,
//       unique_identifier: "it-blog-202",
//       time:"March 2024",
//       user:"admin"
//     },
//     {
//       id: 3,
//       blog_image:
//       blogim1, // External image URL
//       title: "Oviya MedSafe – Perfecting Professionalism in Pharmacovigilance",
//       category_id: 3,
//       unique_identifier: "digital-marketing-blog-303",
//       time:"March 2024",
//       user:"admin"
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
//               <div key={blog.id} className="col-sm-12 col-lg-4 mb-2">
//                 <div className="card colourcard mt-3 h-100 rounded-3">
//                   <img
//                     src={blog.blog_image} // Use the correct image path here
//                     title={blog.title}
//                     alt={blog.title} // Use title as alt text
//                     className="card-img-top"
//                   />
//                   <div className="card-body">
//                     <div className="d-flex px-2 align-items-center readbtn">
//                       <p ><LuCircleUserRound style={{fontSize:"22px",verticalAlign: "middle",color:"#64B556"}}/> by {blog.user} /</p>
//                       <p><LiaCalendar style={{fontSize:"22px",verticalAlign: "middle",color:"#64B556"}}/>{blog.time}</p>
//                     </div>
//                     <h5 className="card-title text-dark blogtitle px-2">
//                       <b className="title-ellipsis">{blog.title}</b>
//                     </h5>
//                     <Link className="px-2 readbtn my-2" onClick={() =>
//                         handleReadMoreClick(blog.category_id, blog.unique_identifier)
//                       }>Read More</Link>
//                   </div>
//                 </div>
              
//               </div>
//             )
//           )
//         )}
//       </div>
//       <div className="text-center pb-4"> <Link to="/newsletter" style={{color:"#64B556"}}>View All</Link></div>
     
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
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(""); // State for error
  const navigate = useNavigate();

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
    // Fetch all blog data from the backend API
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://192.168.252.196:5000/api/news'); // Replace with your actual API URL
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          setError('Failed to fetch blog data');
        }
      } catch (error) {
        setError('An error occurred while fetching blog data');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container-fluid" id="blogs">
      <div className="row my-5 pb-5 insightspart">
        <h1 className="text-center subhead2 mb-5">News</h1>

        {loading ? (
          <div className="col-12 text-center">
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className="col-12 text-center">
            <p>{error}</p>
          </div>
        ) : blogs.length === 0 ? ( // Check if there are no blogs
          <div className="col-12 text-center">
            <p>No News available.</p>
          </div>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="col-sm-12 col-lg-4 mb-2">
              <div className="card colourcard mt-3 h-100 rounded-3">
                <img
                  src={blog.blog_image || blogim1} // Use the fetched image or fallback to the imported image
                  title={blog.title}
                  alt={blog.title} // Use title as alt text
                  className="card-img-top"
                />
                <div className="card-body">
                  <div className="d-flex px-2 align-items-center readbtn">
                    <p>
                      <LuCircleUserRound
                        style={{
                          fontSize: "22px",
                          verticalAlign: "middle",
                          color: "#64B556",
                        }}
                      />{" "}
                      by {blog.user} /
                    </p>
                    <p>
                      <LiaCalendar
                        style={{
                          fontSize: "22px",
                          verticalAlign: "middle",
                          color: "#64B556",
                        }}
                      />
                      {blog.time}
                    </p>
                  </div>
                  <h5 className="card-title text-dark blogtitle px-2">
                    <b className="title-ellipsis">{blog.title}</b>
                  </h5>
                  <Link
                    className="px-2 readbtn my-2"
                    onClick={() =>
                      handleReadMoreClick(blog.category_id, blog.unique_identifier)
                    }
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="text-center pb-4">
        <Link to="/newsletter" style={{ color: "#64B556" }}>
          View All
        </Link>
      </div>
    </div>
  );
}

export default Blogbanner;
