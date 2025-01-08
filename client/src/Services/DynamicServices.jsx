// import { servicesData } from "../utils/services/servicesData";
// import TOP from "../assets/services/topsvg.png";
// import BOTTOM from "../assets/services/bottomsvg.png";
// import './services.css'


// const DynamicServices = ({ index }) => {
//   return (
//     <div
//       id={servicesData[index]?.id}
//       className="position-relative d-flex flex-column flex-sm-row align-items-center justify-content-between overall-pad other-pad"
//     >
//       {/* Content */}
//       <div className="w-100 w-sm-50">
//         <h1 className="font-weight-bold main-title text-uppercase mb-3" style={{ fontSize: "32px", color: "var(--heading)" }}>
//           {servicesData[index]?.title}
//         </h1>
//         <p className="main-text"  style={{ fontSize: "18px", lineHeight: "1.8", textAlign: "justify" }}>
//           {servicesData[index]?.description}
//         </p>
//       </div>

//       {/* Image */}
//       <div className="w-100 w-sm-50 position-relative d-flex justify-content-center mt-4 mt-sm-1">
//         {/* Main Image */}
//         <div className="position-relative" style={{ zIndex: 10 }}>
//           <img
//             src={servicesData[index]?.image_id}
//             alt="service"
//             className="img-size"
           
//           />
//         </div>
//       </div>

//       <img
//         src={TOP}
//         alt=""
//         className="position-absolute"
//         style={{zIndex:"-1000", top: "-240px", left: "-100px", margin: "auto" }}
//       />

//       <img
//         src={BOTTOM}
//         alt=""
//         className="position-absolute"
//         style={{zIndex:"-1000", bottom: "0px", right: "0px", margin: "auto"}}
//       />
//     </div>
//   );
// };

// export default DynamicServices;



// // import { servicesData } from "../utils/services/servicesData"
// // import SQUARE from "../assets/services/overlapSquare.png"

// // const DynamicServices = () => {
// //   const index = 0;
// //   return (
// //     <div id={servicesData[index]?.id} className=" sm:p-36 flex max-sm:flex-col sm:justify-between items-center">
// //         {/* Content */}
// //         <div className="w-6/12 ">
// //             <h1 className="font-oswald text-[32px] font-bold text-heading uppercase">{servicesData[index]?.title}</h1>
// //             <p className="text-[18px] items-start font-heebo pt-5 text-justify leading-8">{servicesData[index]?.description}</p>
// //         </div>
// //         {/* Image */}
// //         <div className="w-5/12 relative inset-0 flex justify-center">
// //           {/* Main Image */}
// //           <div className="relative z-10">
// //             <img 
// //               src={servicesData[index]?.image_id}
// //               alt="service"
// //               className="sm:w-[416px] sm:h-[416px]"
// //             />
// //           </div>

// //           {/* Square */}
// //           <div className="absolute top-4 left-[68px] z-0">
// //             <img 
// //               src={SQUARE}
// //               alt="square"
// //               className="w-[416px] h-[416px]"
// //             />
// //           </div>
// //         </div>

// //     </div>
// //   )
// // }

// // export default DynamicServices




import { servicesData } from "../utils/services/servicesData";
import TOP from "../assets/services/topsvg.png";
import BOTTOM from "../assets/services/bottomsvg.png";
import './services.css'


const DynamicServices = ({ index }) => {
  return (
    <div
      id={servicesData[index]?.id}
      className="position-relative d-flex flex-column flex-sm-row align-items-center justify-content-between overall-pad other-pad"
    >
      {/* Content */}
      <div className="w-100 w-sm-50">
        <h1 className="font-weight-bold main-title mb-3" style={{ fontSize: "32px", color: "var(--heading)" }}>
          {servicesData[index]?.title}
        </h1>
        <p className="main-text"  style={{ fontSize: "18px", lineHeight: "1.8", textAlign: "justify" }}>
          {servicesData[index]?.description}
        </p>
      </div>

      {/* Image */}
      <div className="w-100 w-sm-50 position-relative d-flex justify-content-center mt-4 mt-sm-1">
        {/* Main Image */}
        <div className="position-relative" style={{ zIndex: 10 }}>
          <img
            src={servicesData[index]?.image_id}
            alt="service"
            className="img-size"
           
          />
        </div>
      </div>

      <img
        src={TOP}
        alt=""
        className="position-absolute"
        style={{zIndex:"-1000", top: "-240px", left: "-100px", margin: "auto" }}
      />

      <img
        src={BOTTOM}
        alt=""
        className="position-absolute"
        style={{zIndex:"-1000", bottom: "0px", right: "0px", margin: "auto"}}
      />
    </div>
  );
};

export default DynamicServices;


