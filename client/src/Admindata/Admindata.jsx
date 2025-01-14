// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import "./Admindata.css";
// import { Link } from "react-scroll";
// import { useNavigate } from "react-router-dom";

// function Admindata() {
//   const [selectedCategory, setSelectedCategory] = useState("General");
//   const [generalLeads, setGeneralLeads] = useState([]);
//   const [downloadLeads, setDownloadLeads] = useState([]);
//   const [subscribedata, setSubscribedata] = useState([]);
//   const Navigate = useNavigate();

//   useEffect(() => {
//     // Fetch General Leads Data
//     fetch("https://www.kggeniuslabs.com:5000/glform-data")
//       .then((response) => response.json())
//       .then((data) => setGeneralLeads(data))
//       .catch((error) => console.error("Error fetching General Leads:", error));

//     // Fetch Webinar Leads Data
//     fetch("https://www.kggeniuslabs.com:5000/webinar-data")
//       .then((response) => response.json())
//       .then((data) => setDownloadLeads(data))
//       .catch((error) => console.error("Error fetching Webinar Leads:", error));

//     // Fetch Subscribe Leads Data
//     fetch("http://localhost:5000/api/subscribe")
//       .then((response) => response.json())
//       .then((data) => setSubscribedata(data))
//       .catch((error) => console.error("Error fetching Subscribe Leads:", error));
//   }, []);

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   const exportToExcel = (data, filename) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//     const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
//     saveAs(blob, `${filename}.xlsx`);
//   };

//   const TableComponent = ({ data, headers, filename }) => (
//     <div className="table-responsive table-sales ">
//       <table className="w-100">
//         <thead>
//           <tr>
//             {headers.map((header, index) => (
//               <th key={index}>{header}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((lead, index) => (
//             <tr key={index}>
//               {Object.keys(lead).map((key, idx) => (
//                 <td key={idx}>{lead[key]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

//   return (
//     <div className="container-fluid">
//       <h1 className="text-center headblog my-3 subhead2">Leads Page</h1>
//       <div className="row m-4">
//         <div className="col d-flex flex-column flex-md-row justify-content-md-evenly border-bottom text-start ">
//           {["Contact", "Downloads", "Subscribe"].map((category) => (
//             <Link
//               key={category}
//               className={` ${selectedCategory === category ? "active" : " "} mb-2 mb-md-0 text-decoration-none text-dark fw-bold`}
//               onClick={() => handleCategoryClick(category)}
//             >
//               {category}
//             </Link>
//           ))}
//           <Link className="logouttxt" onClick={() => Navigate("/")}>
//             Logout
//           </Link>
//         </div>
//       </div>

//       <div className="row">
//         {selectedCategory === "Contact" && (
//           <>
//             <div className="d-flex justify-content-between mb-3">
//               <h1>{selectedCategory} Leads</h1>
//               <button
//                 className="leadsdownloadbtn p-2"
//                 onClick={() => exportToExcel(generalLeads, "General_Leads")}
//               >
//                 Download Leads <FontAwesomeIcon icon={faDownload} />
//               </button>
//             </div>
//             <TableComponent
//               data={generalLeads}
//               headers={["Name", "Designation", "Organization", "Phone Number", "Email"]}
//               filename="General_Leads"
//             />
//           </>
//         )}

//         {selectedCategory === "Downloads" && (
//           <>
//             <div className="d-flex justify-content-between mb-3">
//               <h1>{selectedCategory} Leads</h1>
//               <button
//                 className="leadsdownloadbtn p-2"
//                 onClick={() => exportToExcel(downloadLeads, "Download_Leads")}
//               >
//                 Download Leads <FontAwesomeIcon icon={faDownload} />
//               </button>
//             </div>
//             <TableComponent
//               data={downloadLeads}
//               headers={["Name", "Designation", "Organization", "Phone Number", "Email", "Message"]}
//               filename="Download_Leads"
//             />
//           </>
//         )}

//         {selectedCategory === "Subscribe" && (
//           <>
//             <div className="d-flex justify-content-between mb-3">
//               <h1>{selectedCategory} Leads</h1>
//               <button
//                 className="leadsdownloadbtn p-2"
//                 onClick={() => exportToExcel(subscribedata, "Subscribe_Leads")}
//               >
//                 Download Leads <FontAwesomeIcon icon={faDownload} />
//               </button>
//             </div>
//             <TableComponent
//               data={subscribedata}
//               headers={["NO", "Email", "Date"]}
//               filename="Subscribe_Leads"
//             />
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Admindata;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./Admindata.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Admindata() {
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [generalLeads, setGeneralLeads] = useState([]);
  const [downloadLeads, setDownloadLeads] = useState([]);
  const [subscribedata, setSubscribedata] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    // Fetch General Leads Data
    axios
      .get("https://www.kggeniuslabs.com:5000/glform-data")
      .then((response) => setGeneralLeads(response.data))
      .catch((error) => console.error("Error fetching General Leads:", error));

    // Fetch Webinar Leads Data
    axios
      .get("https://www.kggeniuslabs.com:5000/webinar-data")
      .then((response) => setDownloadLeads(response.data))
      .catch((error) => console.error("Error fetching Webinar Leads:", error));

    // Fetch Subscribe Leads Data
    axios
      .get("http://localhost:5000/api/subscribe")
      .then((response) => {
        console.log("Fetched Subscribe Data:", response.data); // Debugging log
        setSubscribedata(response.data);
      })
      .catch((error) => console.error("Error fetching Subscribe Leads:", error));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const exportToExcel = (data, filename) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, `${filename}.xlsx`);
  };

  const TableComponent = ({ data, headers, filename }) => (
    <div className="table-responsive table-sales ">
      <table className="w-100">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((lead, index) => (
            <tr key={index}>
              {Object.keys(lead).map((key, idx) => (
                <td key={idx}>{lead[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container-fluid">
      <h1 className="text-center headblog my-3 subhead2">Leads Page</h1>
      <div className="row m-4">
        <div className="col d-flex flex-column flex-md-row justify-content-md-evenly border-bottom text-start ">
          {["Contact", "Downloads", "Subscribe"].map((category) => (
            <Link
              key={category}
              className={` ${selectedCategory === category ? "active" : " "} mb-2 mb-md-0 text-decoration-none text-dark fw-bold`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Link>
          ))}
          <Link className="logouttxt" onClick={() => Navigate("/")}>
            Logout
          </Link>
        </div>
      </div>

      <div className="row">
        {selectedCategory === "Contact" && (
          <>
            <div className="d-flex justify-content-between mb-3">
              <h1>{selectedCategory} Leads</h1>
              <button
                className="leadsdownloadbtn p-2"
                onClick={() => exportToExcel(generalLeads, "General_Leads")}
              >
                Download Leads <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
            <TableComponent
              data={generalLeads}
              headers={["Name", "Designation", "Organization", "Phone Number", "Email"]}
              filename="General_Leads"
            />
          </>
        )}

        {selectedCategory === "Downloads" && (
          <>
            <div className="d-flex justify-content-between mb-3">
              <h1>{selectedCategory} Leads</h1>
              <button
                className="leadsdownloadbtn p-2"
                onClick={() => exportToExcel(downloadLeads, "Download_Leads")}
              >
                Download Leads <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
            <TableComponent
              data={downloadLeads}
              headers={["Name", "Designation", "Organization", "Phone Number", "Email", "Message"]}
              filename="Download_Leads"
            />
          </>
        )}

        {selectedCategory === "Subscribe" && (
          <>
            <div className="d-flex justify-content-between mb-3">
              <h1>{selectedCategory} Leads</h1>
              <button
                className="leadsdownloadbtn p-2"
                onClick={() => exportToExcel(subscribedata, "Subscribe_Leads")}
              >
                Download Leads <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
            <TableComponent
              data={subscribedata}
              headers={["Email"]}
              filename="Subscribe_Leads"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Admindata;
