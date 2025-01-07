

// import React, { useEffect, useState } from "react";
// import "./Adminview.css";
// import { Link, useNavigate, useParams } from "react-router-dom";

// // import axios from "axios";

// function Adminview() {
//   const navigate = useNavigate();

//   const { id } = useParams();
//   // const decodedId = atob(id);
//   const [blog, setBlog] = useState(null);
//   const [relatedBlogs, setRelatedBlogs] = useState([]);
//   const [categoryId, setCategoryId] = useState();

// //   useEffect(() => {
// //     axios
// //       .get(`https://www.kggeniuslabs.com:5000/blog/${id}`)
// //       .then((res) => {
// //         setBlog(res.data);
// //         setCategoryId(res.data.category_id);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching blog data:", error);
// //       });
// //   }, [id]);

// //   useEffect(() => {
// //     // Fetch related blogs based on category_id and exclude the current blog
// //     if (categoryId) {
// //       axios
// //         .get(`https://www.kggeniuslabs.com:5000/relatedBlogs/${categoryId}/${id}`)
// //         .then((res) => {
// //           console.log(res.data);
// //           setRelatedBlogs(res.data);
// //         })
// //         .catch((error) => {
// //           console.error("Error fetching related blogs:", error);
// //         });
// //     }
// //   }, [categoryId, id]);


//   const handleClick = () => {
//     navigate("/sap-blog1");
//   };
//   return (
//     <div className="container-fluid blogpartcontent p-0 m-0">
//       <div className="row my-3 mx-3">
//         <div className="col-sm-12 col-lg-7">
//           {blog ? (
//             <>
//               <h4 className="py-3">
//                 <b>{blog.title}</b>
//               </h4>
//               <div className="d-flex justify-content-center">
//                 <img
//                   src={blog.blog_image.replace("\\", "/")}
//                   alt={blog.title}
//                   className="imsp py-3 blogpartcontent"
//                 />
//               </div>
//               <div
//                 dangerouslySetInnerHTML={{ __html: blog.content }}
//                 style={{ color: "#291750" }}
//               />
//               <h5 className="fw-bold">Conclusion</h5>
//               <p>{blog.conclusion}</p>
//             </>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//         <div className="col-sm-0 col-lg-1"></div>
//         <div className="col-sm-12 col-lg-4">
//           <div className="latestupdate">
//             <h2 className="my-4">
//               <b>Latest Updates</b>
//             </h2>
//             {relatedBlogs.map((relatedBlog) => (
//               <Link
//                 to={`/sap-blog/${relatedBlog.unique_identifier}`}
//                 key={relatedBlog.id}
//                 style={{ textDecoration: "none" }}
//               >
//                 <div className="card shadowcard my-2">
//                   <img
//                     src={relatedBlog.blog_image.replace("\\", "/")}
//                     alt={relatedBlog.title}
//                     className="card-img-top"
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">
//                       <b>{relatedBlog.title}</b>
//                     </h5>
//                     <p className="card-text">
//                       {relatedBlog.content
//                         .replace(/<[^>]+>/g, "")
//                         .substring(0, 100)}
//                       ...
//                     </p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Adminview;







import React, { useEffect, useState } from "react";
import "./Adminview.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function Adminview() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    // Simulate fetching blog data
    const fetchBlogData = () => {
      // Mocked response
      const mockBlogData = {
        id: 1,
        title: "Understanding React Context API",
        blog_image: "/images/react-context.jpg",
        content: "<p>React Context API is a way to share state across the entire app...</p>",
        date:"12 Sep"
      };
      setBlog(mockBlogData);
      setCategoryId(mockBlogData.id); // You can replace this with actual category ID if needed
    };

    fetchBlogData();
  }, [id]);

  useEffect(() => {
    // Fetch related blogs based on category_id and exclude the current blog
    if (categoryId) {
      // Simulating related blogs data
      const mockRelatedBlogsData = [
        {
          id: 2,
          unique_identifier: "blog-2",
          title: "Oviya MedSafe – Convincing Leaders to Constitute Pharmacovigilance",
          blog_image: "/images/redux-react.jpg",
          content: "<p>Redux is a predictable state container for JavaScript apps...</p>",
          date:"Sep 2024"
        },
        {
          id: 3,
          unique_identifier: "blog-3",
          title: "Oviya MedSafe – Convincing Leaders to Constitute Pharmacovigilance",
          blog_image: "/images/react-hooks.jpg",
          content: "<p>React Hooks allow you to use state and other React features...</p>",
          date:"Jan 2025"
        },
       
      ];
      setRelatedBlogs(mockRelatedBlogsData);
    }
  }, [categoryId]);

  const handleClick = () => {
    navigate("/sap-blog1");
  };

  return (
    <div className="container blogpartcontent p-0 m-0">
        <h1 className="newshead">News</h1>
      <div className="row my-3 mx-3">
        <div className="col-sm-12 col-lg-7 shcard">
          {blog ? (
            <>
              <h4 className="py-3 text-dark blogmainhead" >
               {blog.title}
              </h4>
              <div className="d-flex justify-content-center">
                <img
                  src={blog.blog_image.replace("\\", "/")}
                  alt={blog.title}
                  className="imsp py-3 blogpartcontent"
                />
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                style={{ color: "#291750" }}
              />
             
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="col-sm-0 col-lg-1"></div>
        <div className="col-sm-12 col-lg-4">
        <div className="d-flex flex-column">
  <h2 className="py-3 latestnewshead">Subscribe Here to Get More Updates!</h2>
  <input
    type="email"
    className="email-input py-3 border-0 emailbrd"
    placeholder="Email Address"/>
  <button className="border-0 subscribebtn1 py-3 mt-2">SUBSCRIBE</button>
</div>
          <div className="latestupdate">
            <h2 className="my-4 latestnewshead">
              <b>Latest News</b>
            </h2>
            {relatedBlogs.map((relatedBlog) => (
              <Link
                to={`/sap-blog/${relatedBlog.unique_identifier}`}
                key={relatedBlog.id}
                style={{ textDecoration: "none" }}
              >
               

<div className="card shadowcard my-2 p-3" style={{ position: 'relative' }}>
    
  <div className="card-body">
    <h5 className="card-title blogsubtitle mt-4">
      {relatedBlog.title}
    </h5>
    {/* Add more content for the card here */}
  </div>

  {/* Rectangular Box in the Top Right Corner */}
  <div className="rectangular-box text-center">
  {relatedBlog.date}
  </div>
</div>







              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminview;
