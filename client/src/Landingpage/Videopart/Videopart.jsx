import React from 'react'
function Videopart() {
  return (
    <div className='container-fluid'>
     <h1 className='subhead2 py-3'>Video Library</h1>
        <div className='d-flex justify-content-around py-4'>
        <iframe
          width="317"
          height="216"
          src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
          title="Genius ERP - Live Tracking of Sales Orders"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
></iframe>
       <iframe
          width="317"
          height="216"
          src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
          title="Genius ERP - Live Tracking of Sales Orders"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
       <iframe
          width="317"
          height="216"
          src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
          title="Genius ERP - Live Tracking of Sales Orders"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        </div>
    </div>
  )
}
export default Videopart



// import React from 'react';
// function Videopart() {
//   return (
//     <div className="container-fluid py-4 mx-2">
//       <div className="row">
//         <div className="col-12 col-md-auto mb-3 mb-md-0">
//           <iframe
//             className='youtubevideo'
//             src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
//             title="Genius ERP - Live Tracking of Sales Orders"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen></iframe>
//         </div>
//         <div className="col-12 col-md-auto mb-3 mb-md-0">
//           <iframe
//           className='youtubevideo'
//             src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
//             title="Genius ERP - Live Tracking of Sales Orders"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen></iframe>
//         </div>
//         <div className="col-12 col-md-auto">
//           <iframe
//             className='youtubevideo'
//             src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
//             title="Genius ERP - Live Tracking of Sales Orders"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//             referrerPolicy="strict-origin-when-cross-origin"
//             allowFullScreen></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Videopart;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';  // Corrected import for Swiper CSS
// import 'swiper/css/navigation';  // Import navigation CSS

// function Videopart() {
//   return (
//     <div className="container-fluid">
//       <h1 className="subhead2 py-3">Video Library</h1>

//       <Swiper
//         spaceBetween={50} // space between slides
//         slidesPerView={3} // show 3 slides at a time
//         navigation={true} // Enable Swiper's navigation
//         breakpoints={{
//           768: {
//             slidesPerView: 1, // 1 slide per view on small devices
//           },
//         }}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="video-card">
//             <iframe
//               className="d-block"
//               width="400"
//               height="200"
//               src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
//               title="Video 1"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="video-card">
//             <iframe
//               className="d-block"
//               width="400"
//               height="200"
//               src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
//               title="Video 2"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="video-card">
//             <iframe
//               className="d-block"
//               width="400"
//               height="200"
//               src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
//               title="Video 3"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </SwiperSlide>

//         {/* Add more SwiperSlide components here for more videos */}

//       </Swiper>
//     </div>
//   );
// }

// export default Videopart;




