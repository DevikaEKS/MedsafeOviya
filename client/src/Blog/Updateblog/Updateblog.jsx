

import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
function Updateblog() {
  // Initializing state for form values

  const [blogData, setBlogData] = useState({});
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [shortTitle, setShortTitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [content, setContent] = useState('');
  const [blogImage, setBlogImage] = useState(null);
  const navigate = useNavigate()

  const {id} = useParams();

  // GET LOGIC
    useEffect(() => {
      // Fetch all news from the backend
      const fetchCourses = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/news/${id}`);
          if (response.ok) {
            const data = await response.json();
            setCategory(data.category_id);
            setTitle(data.news_title);
            setShortTitle(data.news_short_title);
            setImagePath(data.image);
            setContent(data.news_content);
                  } else {
                    toast.error('Failed to fetch news');
                  }
                } catch (error) {
                  toast.error('An error occurred while fetching news');
                }
              };
              fetchCourses();
            }, []);

    console.log(blogData);
  
  

  const handleEditBlog = async (e) => {
  
    e.preventDefault();
    const formData = new FormData();
    formData.append('category_id', category)
    formData.append('news_title', title);
    formData.append('news_short_title', shortTitle);
    formData.append('image', blogImage);
    formData.append('news_content', content);
    try {
      const response = await fetch(
        `http://localhost:5000/api/news/${id}`,
        {
          method: 'PUT',
          body: formData,
        }
      );

      if (response.ok) {
        navigate('/adminblog')
      
        toast.success('Blog updated successfully.');
        setEditCourse(null);
      } else {
        toast.error('Failed to BLog course.');
      }
    } catch (error) {
      console.error('Error updating Blog:', error);
      setMessage('An error occurred while updating the  blog.');
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline'],
      ['link', 'image']
    ]
  };

  return (
    <div className="container">
      <form onSubmit={handleEditBlog}>
        <div className="form-group row mt-5 mb-2">
          <label className="col-sm-2">Category</label>
          <div className="col-sm-10">
            <select className="form-control form-control1" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select a category</option>
              <option value="1">Newsletter</option>
              <option value="2">Annoucement</option>
              <option value="3">Articles</option>
            </select>
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control1"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Short Title</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control form-control1"
              value={shortTitle}
              onChange={(e) => setShortTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Image</label>
          <div className="col-sm-10">
            {/* {imagePath && (
              <img
              src={`http://192.168.253.110:5000/uploads/${blogImage}`}
                alt="Blog"
                style={{ maxWidth: "100%", marginBottom: "10px" }}
              />
            )} */}
            <input
              type="file"
              accept="image/*"
              className="form-control form-control1"
              onChange={(e) => setBlogImage(e.target.files[0])}
              required
            />
          </div>
        </div>

        <div className="form-group row my-3">
          <label className="col-sm-2">News Content</label>
          <div className="col-sm-10">
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              className="form-control1 rounded-2"
              placeholder="Write your blog content here..."
            />
          </div>
        </div>

        <div className="row">
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn blogsubbtn">
              Submit
            </button>
          </div>
        </div>
      </form>
       {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Updateblog;
