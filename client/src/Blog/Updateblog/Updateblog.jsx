// import React from 'react'

// function Updateblog() {
//   return (
//     <div className="container">
//       <form>
//         <div className="form-group row mt-5 mb-2">
//           <label className="col-sm-2">Category</label>
//           <div className="col-sm-10">
//             <select className="form-control form-control1" value={category} >
//               <option value="">Select a category</option>
//               <option value="1">SAP</option>
//               <option value="2">IT Services</option>
//               <option value="3">Digital Marketing</option>
//             </select>
//           </div>
//         </div>

//         <div className="form-group row my-3">
//           <label className="col-sm-2">Blog Title</label>
//           <div className="col-sm-10">
//             <input
//               type="text"
//               className="form-control form-control1"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="form-group row my-3">
//           <label className="col-sm-2">Blog Short Title</label>
//           <div className="col-sm-10">
//             <input
//               type="text"
//               className="form-control form-control1"
//               value={shortTitle}
//               onChange={(e) => setShortTitle(e.target.value)}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-group row my-3">
//           <label className="col-sm-2">Blog Image</label>
//           <div className="col-sm-10">
//             {imagePath && (
//               <img
//                 src={imagePath}
//                 alt="Blog"
//                 style={{ maxWidth: "100%", marginBottom: "10px" }}/>
//             )}
//             <input
//               type="file"
//               accept="image/*"
//               className="form-control form-control1"
//               onChange={(e) => setBlogImage(e.target.files[0])}
//             />
//           </div>
//         </div>

//         <div className="form-group row my-3">
//           <label className="col-sm-2">Blog Content</label>
//           <div className="col-sm-10">
//             <ReactQuill
//               theme="snow"
//               value={content}
//               onChange={setContent}
//               modules={modules}
//               className="form-control1 rounded-2"
//               placeholder="Write your blog content here..."/>
//           </div>
//         </div>

//         <div className="form-group row my-3">
//           <label className="col-sm-2">Conclusion</label>
//           <div className="col-sm-10">
//             <textarea
//               className="form-control form-control1"
//               rows="3"
//               value={conclusion}
//               onChange={(e) => setConclusion(e.target.value)}></textarea>
//           </div>
//         </div>

//         <div className="row">
//           <div className="d-flex justify-content-end">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Updateblog





import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';

function Updateblog() {
  // Initializing state for form values
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [shortTitle, setShortTitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [content, setContent] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [blogImage, setBlogImage] = useState(null);

  // Sample JSON data to simulate fetching data from an API or file
  const blogData = {
    "category": "2",
    "title": "Oviya MedSafe – Convincing Leaders to Constitute Pharmacovigilance",
    "shortTitle": "Future of IT Services",
    "imagePath": "../../assets/india.png",
    "content": "<p>Dear Well-wishers I am pleased to meet you through this March 2023 edition of Oviya MedSafe‘s newsletter (the 124th in the series since April 2012) in which I intend to outline some practical challenges faced by fast-growing multinational pharma/biotech/healthcare companies when they begin to constitute an integrated global Pharmacovigilance system aimed at attaining total regulatory compliance involving all their markets and covering all their products. Obviously, I also am zealous of telling you how Oviya MedSafe as their global Pharmacovigilance Service Provider helped them overcome such challenges effectively.</p> <p>If we trace the natural history of a typical generic company, we commonly note that Pharmacovigilance used to be considered an upfront investment only when the company planned to place its marketed products for sale in developed countries. Later, some developing countries brought about minimal Pharmacovigilance requirements but the implementation was not that stringent. Underdeveloped countries were yet to make their presence felt on the global Pharmacovigilance map. However, with time, the continuous upward mobility of drug regulations across the globe has now made Pharmacovigilance relevant in almost all markets today albeit with varying intensities. As a result, multiple Pharmacovigilance systems existing within the same organization has become unavoidable.</p>",
    
  };

  // Use useEffect hook to populate the form fields with the blog data when the component mounts
  useEffect(() => {
    setCategory(blogData.category);
    setTitle(blogData.title);
    setShortTitle(blogData.shortTitle);
    setImagePath(blogData.imagePath);
    setContent(blogData.content);
    setConclusion(blogData.conclusion);
  }, []);

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
      <form>
        <div className="form-group row mt-5 mb-2">
          <label className="col-sm-2">Category</label>
          <div className="col-sm-10">
            <select className="form-control form-control1" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select a category</option>
              <option value="1">SAP</option>
              <option value="2">IT Services</option>
              <option value="3">Digital Marketing</option>
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
            {imagePath && (
              <img
                src={imagePath}
                alt="Blog"
                style={{ maxWidth: "100%", marginBottom: "10px" }}
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="form-control form-control1"
              onChange={(e) => setBlogImage(e.target.files[0])}
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
    </div>
  );
}

export default Updateblog;
