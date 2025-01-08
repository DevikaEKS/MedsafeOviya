


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import "./Adminblog.css";
// import { FaUserCircle } from "react-icons/fa";
// // import BlogUpdate from "../BlogDisplay/BlogUpdate";
// import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

// function Adminblog() {
//   const [blogs, setBlogs] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [categoryId, setCategoryId] = useState(null);
//   const navigate = useNavigate();

//   const {id} = useParams()

//   useEffect(() => {
//     setBlogs([]);
//     if (selectedCategory === "All") {
//       axios
//         .get(`https://www.kggeniuslabs.com:5000/content/blog?t=${Date.now()}`)
//         .then((res) => {
//           // console.log(res.data);

//           setBlogs(res.data);
//         })
//         .catch((err) => console.error("Error fetching blogs:", err));
//     } else if (categoryId) {
//       axios
//         .get(
//           `https://www.kggeniuslabs.com:5000/blog/content/category/${categoryId}?t=${Date.now()}`
//         )
//         .then((res) => {
//           console.log(res.data);
//           setBlogs(res.data);
//         })
//         .catch((err) => console.error("Error fetching category blogs:", err));
//     }
//   }, [selectedCategory, categoryId]);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     switch (category) {
//       case "Newsletter":
//         setCategoryId(1);
//         break;
//       case "Announcement":
//         setCategoryId(2);
//         break;
//       case "Article":
//         setCategoryId(3);
//         break;
//       default:
//         setCategoryId(null);
//         break;
//     }
//   };

//   const handleAddBlogClick = () => {
//     navigate(`/addblog`);
//   };

//   const handleupdate = (a) => {
//     navigate(`/careers/${btoa(a)}/${id}`);
//   };

//   const getPath = (category_id, blogId) => {    
//     switch (category_id) {
//       case 1:
//         return `/sap-blog/${blogId}`;
//       case 2:
//         return `/it-blog/${blogId}`;
//       case 3:
//         return `/digital-marketing-blog/${blogId}`;
//       default:
//         return "/";
//     }
//   };

//   const deleteBlog = (blogId) => {
//     axios
//       .delete(`https://www.kggeniuslabs.com:5000/blog/delete/${blogId}`)
//       .then((res) => {
//         if (res.data.message === "Blog deleted successfully") {
//           alert("Blog deleted successfully!");
//           setBlogs(blogs.filter((blog) => blog.id !== blogId));
//         } else {
//           alert(res.data.error || "Error deleting the blog.");
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         alert("Error deleting the blog.");
//       });
//   };

//   const togglePublish = (blogId, currentStatus) => {
//     axios
//       .put(`https://www.kggeniuslabs.com:5000/blog/togglePublish/${blogId}`)
//       .then((res) => {
//         if (res.data.success) {
//           setBlogs((prevBlogs) =>
//             prevBlogs.map((blog) =>
//               blog.id === blogId ? { ...blog, publish: !currentStatus } : blog
//             )
//           );
//         } else {
//           alert("Failed to toggle publish status.");
//         }
//       })
//       .catch((err) => {
//         console.error("Error toggling publish status:", err);
//         alert("Error toggling publish status.");
//       });
//   };

//   return (
//     <div className="container-fluid">
//       <h1 className="text-center newshead mb-5 text-center">News
//       </h1>

//       <div className="row m-1">
//         <div className="col d-flex flex-column flex-md-row justify-content-md-evenly text-start text-decoration-none text-dark">
//           {["All", "Newsletter", "Announcement", "Article"].map((category) => (
//             <Link
//               key={category}
//               className={`lnkfnt ${
//                 selectedCategory === category ? "active" : ""
//               } col-12 col-md-auto text-start mb-2 mb-md-0`}
//               onClick={() => handleCategoryClick(category)}
//             >
//               {category === "IT" ? "IT Services" : category}
//             </Link>
//           ))}
//           <button
//             className="btn addbtn col-12 col-md-auto mb-2 mb-md-0"
//             onClick={handleAddBlogClick}
//           >
//             + Add Blog
//           </button>

//           <button
//             className="btn logoutbtn col-12 col-md-auto mb-2 mb-md-0"
//             onClick={() => {
//               navigate("/");
//               //   window.location.assign("/");
//             }}
//           ><FaUserCircle style={{fontSize:"20px"}} className="mx-2"/>
//             Logout
//           </button>
//         </div>
//       </div>

//       <div className="row">
//         {blogs.map((blog) => (
//           <div key={blog.id} className="col-sm-12 col-lg-4">
//             <div className="card shadowcard my-4 position-relative">
//               <img
//                 src={blog.blog_image}
//                 alt={blog.title}
//                 className="card-img-top cm1"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">
//                   <b>{blog.title}</b>
//                 </h5>
//                 <div className="d-flex justify-content-around">
//                   <Link
//                     style={{ textDecoration: "none" }}
//                     to={getPath(blog.category_id, blog.unique_identifier)}
//                     className="btn btn-outline-info"
//                   >
//                     View
//                   </Link>
//                   <button
//                     className="btn btn-outline-info"
//                     onClick={() => handleupdate(blog.id)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => deleteBlog(blog.id)}
//                     className="btn btn-outline-info"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//               {/* Toggle Publish Button */}
//               <button
//                 className={`position-absolute top-0 end-0 btn ${
//                   blog.publish ? "btn-success" : "btn-secondary"
//                 }`}
//                 style={{ margin: "10px" }}
//                 onClick={() => togglePublish(blog.id, blog.publish)}
//               >
//                 {blog.publish ? "Published" : "Unpublished"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Adminblog;






import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Adminblog.css";
import { FaPlus } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Adminblog() {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryId, setCategoryId] = useState(null);
  const navigate = useNavigate();
  const {id} = useParams();


  useEffect(() => {
    setBlogs([]); // Clear blogs before setting new ones
  
    // Simulated data for testing
    const mockBlogs = [
      {
        id: 1,
        title: "Oviya MedSafe – Reinventing Ourselves for Tomorrow’s Pharmacovigilance",
        category_id: 3,
        blog_image: "https://via.placeholder.com/300",
        publish: true,
        unique_identifier: "tech-001",
      },
      {
        id: 2,
        title: "Oviya MedSafe – Accomplishing Pharmacovigilance Equilibrium Since 2012",
        category_id: 1,
        blog_image: "https://via.placeholder.com/300",
        publish: false,
        unique_identifier: "newsletter-001",
      },
      {
        id: 3,
        title: "Oviya MedSafe – Perfecting Professionalism in Pharmacovigilance",
        category_id: 2,
        blog_image: "https://via.placeholder.com/300",
        publish: true,
        unique_identifier: "announcement-001",
      },
      {
        id: 4,
        title: "Oviya MedSafe – Perfecting Professionalism in Pharmacovigilance",
        category_id: 3,
        blog_image: "https://via.placeholder.com/300",
        publish: true,
        unique_identifier: "article-001",
      },
    ];
  
    if (selectedCategory === "All") {
      setBlogs(mockBlogs); // Set all blogs
    } else if (categoryId) {
      setBlogs(mockBlogs.filter((blog) => blog.category_id === categoryId)); // Filter blogs by category
    }
  }, [selectedCategory, categoryId]);
  

  // useEffect(() => {
  //   setBlogs([]);
  //   if (selectedCategory === "All") {
  //     axios.get(`https://www.kggeniuslabs.com:5000/content/blog?t=${Date.now()}`)
  //       .then((res) => setBlogs(res.data))
  //       .catch((err) => console.error("Error fetching blogs:", err));
  //   } else if (categoryId) {
  //     axios.get(`https://www.kggeniuslabs.com:5000/blog/content/category/${categoryId}?t=${Date.now()}`)
  //       .then((res) => setBlogs(res.data))
  //       .catch((err) => console.error("Error fetching category blogs:", err));
  //   }
  // }, [selectedCategory, categoryId]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    switch (category) {
      case "Newsletter": setCategoryId(1); break;
      case "Announcement": setCategoryId(2); break;
      case "Article": setCategoryId(3); break;
      default: setCategoryId(null); break;
    }
  };

  const handleAddBlogClick = () => navigate(`/addblog`);

  const handleUpdate = (a) => navigate(`/careers/${btoa(a)}/${id}`);

  const getPath = (category_id, blogId) => {
    switch (category_id) {
      // case 1: return `/sap-blog/${blogId}`;
      // case 2: return `/it-blog/${blogId}`;
      // case 3: return `/digital-marketing-blog/${blogId}`;
      default: return "/";
    }
  };

  const deleteBlog = (blogId) => {
    axios.delete(`https://www.kggeniuslabs.com:5000/blog/delete/${blogId}`)
      .then((res) => {
        if (res.data.message === "Blog deleted successfully") {
          alert("Blog deleted successfully!");
          setBlogs(blogs.filter((blog) => blog.id !== blogId));
        } else {
          alert(res.data.error || "Error deleting the blog.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error deleting the blog.");
      });
  };

  const togglePublish = (blogId, currentStatus) => {
    axios.put(`https://www.kggeniuslabs.com:5000/blog/togglePublish/${blogId}`)
      .then((res) => {
        if (res.data.success) {
          setBlogs((prevBlogs) => prevBlogs.map((blog) =>
            blog.id === blogId ? { ...blog, publish: !currentStatus } : blog
          ));
        } else {
          alert("Failed to toggle publish status.");
        }
      })
      .catch((err) => {
        console.error("Error toggling publish status:", err);
        alert("Error toggling publish status.");
      });
  };

  return (
    <div className="container">
      <h1 className="text-center newshead mb-5">News</h1>

      <div className="row m-1">
        <div className="col-12 d-flex flex-column flex-md-row justify-content-md-between text-start">
          <div className="d-flex flex-wrap">
            {["All", "Newsletter", "Announcement", "Article"].map((category) => (
              <Link
                key={category}
                className={`lnkfnt ${selectedCategory === category ? "active" : ""} mb-2 mb-md-0 me-md-5`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="d-flex flex-column flex-md-row">
            <button
              className="btn addbtn mb-2 mb-md-0"
              onClick={handleAddBlogClick}
            >
              <FaPlus /> Add Blog
            </button>

            <button
              className="btn logoutbtn mb-2 mb-md-0 mx-3"
              onClick={() => navigate("/")}
            >
              <FaUserCircle style={{fontSize: "20px"}} className="mx-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-12 col-sm-6 col-lg-4 my-1">
            <div className="card shadowcard my-4 position-relative h-100">
              <img
                src={blog.blog_image}
                alt={blog.title}
                className="card-img-top "
              />
              <div className="card-body">
                <h5 className="card-title blogtitle">{blog.title}</h5>
                <div className="d-flex justify-content-evenly gap-2">
                <button className="btn blogbtn w-100"><Link
  style={{ textDecoration: "none" }}
  to={getPath(blog.category_id, blog.unique_identifier)} className="textlnk">
  View
</Link></button>
                
                  <button
                    className="btn blogbtn w-100"
                onClick={()=>navigate("/adminview")}
                    // onClick={() => handleUpdate(blog.id)}
                  >
                    Update
                  </button>
                  <button className={` btn ${blog.publish ? "btn publishbtn" : "btn blogbtn"}`} onClick={() => togglePublish(blog.id, blog.publish)}>
                {blog.publish ? "Published" : "Unpublished"}
              </button>


              <button onClick={() => deleteBlog(blog.id)}  className="text-danger border-0 delbtn d-flex align-items-center">
Delete <MdDelete className="mx-1" />
</button>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adminblog;





