import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import "./Addblog.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Addblog() {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]); // State for categories
  const [title, setTitle] = useState(""); // State for blog title
  const [shortTitle, setShortTitle] = useState("");
  const [image, setImage] = useState(null);
  const [selectedDate,setSelectedDate]=useState("") 
  const navigate = useNavigate();
  const { id } = useParams();

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  // useEffect(() => {
  //   axios
  //     .get("https://www.kggeniuslabs.com:5000/blog_categories")
  //     .then((res) => {
  //       setCategories(res.data); // Store categories in state
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching categories:", error);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = {
      category,
      title,
      shortTitle,
      content,
      selectedDate,
      image: image ? image.name : "No image uploaded", // Log the file name or indicate no image
    };
  
    // Log the data to the console
    console.log("Blog Data Submitted:", blogData);
    const formData = new FormData();
    formData.append("categoryId", category);
    formData.append("title", title);
    formData.append("stitle", shortTitle);
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }



    // axios
    //   .post("https://www.kggeniuslabs.com:5000/add-blog", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
      // .then((res) => {
      //   console.log(res.data);
      //   if (res.data.message === "Blog added successfully!") {
      //     toast.success("Blog added successfully!"); // Show success message
      //     navigate(`/blogeditor/${id}`);
      //     // Clear all fields
      //     setCategory("");
      //     setTitle("");
      //     setShortTitle("");
      //     setImage(null);
      //     setContent("");
      //     setConclusion("");
      //   } else {
      //     toast.error("Try again later."); // Show error message
      //   }
      // })
      // .catch((error) => {
      //   console.error("Error submitting blog:", error);
      //   toast.error("Error submitting blog."); // Show error message
      // });
  };

  return (
    <div className="container bgblogs">
      <div className="row mx-1 mx-md-3">
        <h1 className="newshead pt-5 pb-1">News</h1>
        <div className="d-flex flex-column justify-content-center">
          <form onSubmit={handleSubmit}>
            {/* Category Dropdown */}
            <div className="mt-3 mb-2 row form-group">
              <label className="col-sm-2">Category</label>
              <div className="col-sm-10">
                <select
                  className="form-select form-control1"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.category_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Blog Title */}
            <div className="my-3 row form-group">
              <label htmlFor="title" className="col-sm-2">
               News Title
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="title"
                  className="form-control form-control1 blogviewtitle"
                  placeholder="Enter the News title"
                  value={title}
                  
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Blog Short Title */}
            <div className="my-3 row form-group">
              <label htmlFor="title" className="col-sm-2">
                News Short Title 
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  id="title"
                  className="form-control form-control1 blogviewtitle"
                  placeholder="Enter the News Short title"
                  value={shortTitle}
                  onChange={(e) => setShortTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* date */}
            <div className="my-3 row form-group">
              <label htmlFor="title" className="col-sm-2">
                Date 
              </label>
              <div className="col-sm-10">
              <input
  type="date"
  id="date"
  className="form-control form-control1 blogviewtitle"
  value={selectedDate}
  placeholder="MM/YY"
  onChange={(e) => setSelectedDate(e.target.value)}
  required
/>
              </div>
            </div>
   
            {/* Image Upload */}
            <div className="form-group my-3 row ">
              <label htmlFor="imageUpload" className="col-sm-2">
                Image
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  id="imageUpload"
                  className="form-control form-control1"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>

            <div className="form-group row my-3">
              <label className="col-sm-2">News Content</label>
              <div className="col-sm-10 ">
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  className="form-control1 rounded-2"
                  placeholder="Write your News content here..."
                />
              </div>
            </div>

         
           

            {/* Submit Button */}
            <div className="row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btnsub">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Addblog;
