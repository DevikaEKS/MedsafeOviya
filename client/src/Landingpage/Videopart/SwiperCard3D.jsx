// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './SwiperCard.css';
// import { Autoplay, Navigation } from 'swiper/modules';

// function SwiperCard3D() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <Swiper
//           modules={[Autoplay, Navigation]} // Add Navigation module for arrows
//           slidesPerView={1} // Default to 1 slide on small devices
//           loop={true}
//           spaceBetween={30} // Space between slides
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false, // Keep autoplay active after interaction
//           }}
//           navigation={{
//             nextEl: '.swiper-button-next', // Define the next button element
//             prevEl: '.swiper-button-prev', // Define the previous button element
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 1, // 1 slide on small devices
//             },
//             1024: {
//               slidesPerView: 3, // 3 slides in a row on larger devices
//             },
//           }}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <iframe
//               width="300"
//               height="216"
//               src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
//               title="Genius ERP - Live Tracking of Sales Orders"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </SwiperSlide>

//           <SwiperSlide>
//             <iframe
//               width="300"
//               height="216"
//               src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
//               title="Genius ERP - Live Tracking of Sales Orders"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </SwiperSlide>

//           <SwiperSlide>
//             <iframe
//               width="300"
//               height="216"
//               src="https://www.youtube-nocookie.com/embed/tODGcCROgSc?rel=0&modestbranding=1&controls=1"
//               title="Genius ERP - Live Tracking of Sales Orders"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </SwiperSlide>


//           <SwiperSlide>
//             <iframe
//               width="350"
//               height="216"
//               src="https://https://youtu.be/ur9ePXO1GNI?rel=0&modestbranding=1&controls=1"
//               title="Genius ERP - Live Tracking of Sales Orders"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//             ></iframe>
//           </SwiperSlide>
//         </Swiper>

//         {/* Navigation buttons */}
//         <div className="swiper-button-prev"></div>
//         <div className="swiper-button-next"></div>
//       </div>
//     </div>
//   );
// }

// export default SwiperCard3D;





import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperCard.css'; // Ensure that the correct CSS file is being imported

import { Autoplay, Navigation } from 'swiper/modules';

function SwiperCard3D() {
  return (
    <div className="container-fluid p-0 m-0">
      
      <div className="row ">
        
        <Swiper
          modules={[Autoplay, Navigation]} // Add Navigation module for arrows
          slidesPerView={1} // Default to 1 slide on small devices
          loop={true}
          spaceBetween={30} // Space between slides
          autoplay={{
            delay: 5000,
            disableOnInteraction: false, // Keep autoplay active after interaction
          }}
          navigation={{
            nextEl: '.swiper-button-next', // Define the next button element
            prevEl: '.swiper-button-prev', // Define the previous button element
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide on small devices
              height: 'auto',
              width:"100%", // Full screen height on small devices
            },
            768: {
              slidesPerView: 2, // 2 slides on tablet devices
              height: 'auto', // Reset height for tablet view
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger devices
              height: 'auto', // Reset height for larger devices
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>

        {/* Navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}

export default SwiperCard3D;
