// import React, { useRef, useState } from "react";
// import { FaBus, FaHotel } from "react-icons/fa";
// import {
//   GiVideoCamera,
//   GiMeal,
//   GiSightDisabled,
//   GiMedicalPackAlt,
// } from "react-icons/gi";
// import { FiStar } from "react-icons/fi";
// import { CardType } from "../../types/card";
// import { FaWhatsapp } from "react-icons/fa";
// import left_areoplane from "../../../../assets/images/our_destination_left_Areoplane.png";
// import right_areoplane from "../../../../assets/images/our_destination_right_Areoplane.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";

// interface Props {
//   cards: CardType[];
// }

// const sendInquiry = async (card: CardType) => {
//   const phoneNumber = "918885523545";

//   const message = `I need to go to ${card.title} and I need further details.`;

//   // WhatsApp
//   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;
//   window.open(whatsappURL, "_blank");

//   // Email
//   try {
//     const res = await fetch("http://localhost:5000/api/v1/places/send", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         destination: card.title,
//         message, // same message
//       }),
//     });

//     if (res.ok) {
//       console.log("✅ Email sent successfully!");
//       console.log(res);
//     } else {
//       console.error("❌ Email failed:", await res.text());
//     }
//   } catch (err) {
//     console.error("❌ Error sending email:", err);
//   }
// };

// export const DestinationCardsSection: React.FC<Props> = ({ cards }) => {
//   const [title, setTitile] = useState("");
//   const swiperRef = useRef(null);
//   const phoneNumber = 918885523545;
//   return (
//     <main className="max-w-[85%] mx-auto px-6 py-8" id="destinations">
//       {/* // <main className="max-w-full mx-auto px-6 py-8"> */}

//       <div className="flex flex-row items-center justify-center gap-4">
//         {/* Left Image - Visible only on XL screens */}
//         <img
//           src={left_areoplane}
//           alt="Left Title Image"
//           className="hidden xl:block scale-90 hover:scale-95 transition-all duration-300"
//         />

//         {/* Title & Subtitle */}
//         <div className="text-center xl:text-start">
//           <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-2">
//             Our Destinations
//           </h2>
//           <h3 className="text-xl sm:text-2xl text-center text-gray-700 mb-10">
//             We Organize Your Trips!
//           </h3>
//         </div>

//         {/* Right Image - Visible only on XL screens */}
//         <img
//           src={right_areoplane}
//           alt="Right Title Image"
//           className="hidden xl:block scale-90 hover:scale-95 transition-all duration-300"
//         />
//       </div>
//       <div
//         className="grid gap-6"
//         style={{
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//         }}
//       >
//         {cards.map((card) => (
//           <div
//             key={card._id}
//             className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:duration-500 transition-all duration-300 relative"
//           >
//             {card.popular && (
//               <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
//                 <FiStar className="text-white" />
//                 Popular
//               </div>
//             )}

//             {/* <div className="relative aspect-video overflow-hidden rounded-t-2xl group">
//               <Swiper
//                 modules={[Autoplay, Pagination]}
//                 loop={true}
//                 autoplay={{
//                   delay: 2500,
//                   disableOnInteraction: false,
//                 }}
//                 pagination={{ clickable: true }}
//                 className="w-full h-full"
//               >
//                 {card.images.map((img, index) => (
//                   <SwiperSlide key={img.publicId}>
//                     <img
//                       src={img.url}
//                       alt={`${card.title}-${index}`}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div> */}

//             <div
//               className="relative aspect-video overflow-hidden rounded-t-2xl group"
//               onMouseEnter={() => swiperRef.current?.autoplay?.start()}
//               onMouseLeave={() => swiperRef.current?.autoplay?.stop()}
//             >
//               <Swiper
//                 modules={[Autoplay, Pagination]}
//                 loop={true}
//                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//                 autoplay={{
//                   delay: 2500,
//                   disableOnInteraction: false,
//                   pauseOnMouseEnter: false, // we'll handle it manually
//                 }}
//                 pagination={{ clickable: true }}
//                 className="w-full h-full"
//               >
//                 {card.images.map((img, index) => (
//                   <SwiperSlide key={img.publicId}>
//                     <img
//                       src={img.url}
//                       alt={`${card.title}-${index}`}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>

//             <div className="p-5">
//               <div className="mb-4">
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">
//                   {card.title}
//                 </h3>
//                 <div className="flex items-center gap-2 text-blue-600">
//                   <FaBus className="text-sm" />
//                   <span className="text-sm font-medium">{card.location}</span>
//                 </div>
//               </div>

//               <div className="border-t pt-4">
//                 <h4 className="text-sm font-semibold text-gray-600 mb-2">
//                   Features:
//                 </h4>
//                 <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
//                   {card.features?.video && (
//                     <div className="flex items-center gap-2">
//                       <GiVideoCamera className="text-blue-500" />
//                       Video
//                     </div>
//                   )}
//                   {card.features?.meals && (
//                     <div className="flex items-center gap-2">
//                       <GiMeal className="text-green-500" />
//                       Meals
//                     </div>
//                   )}
//                   {card.features?.stay && (
//                     <div className="flex items-center gap-2">
//                       <FaHotel className="text-purple-500" />
//                       Stay
//                     </div>
//                   )}
//                   {card.features?.sightseeing && (
//                     <div className="flex items-center gap-2">
//                       <GiSightDisabled className="text-orange-500" />
//                       Tours
//                     </div>
//                   )}
//                   {card.features?.medical && (
//                     <div className="flex items-center gap-2">
//                       <GiMedicalPackAlt className="text-red-500" />
//                       Medical
//                     </div>
//                   )}
//                   {card.features?.transport && (
//                     <div className="flex items-center gap-2">
//                       <FaBus className="text-teal-500" />
//                       Transport
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* WhatsApp Button */}
//               <div className="mt-6 flex justify-center items-center rounded">
//                 <button
//                   onClick={() => sendInquiry(card)}
//                   className="flex items-center justify-center w-full gap-2 bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition duration-300"
//                 >
//                   <FaWhatsapp size={18} />
//                   Chat & Email Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };




// import React, { useRef, useState } from "react";
// import { FaBus, FaHotel, FaWhatsapp } from "react-icons/fa";
// import {
//   GiVideoCamera,
//   GiMeal,
//   GiSightDisabled,
//   GiMedicalPackAlt,
// } from "react-icons/gi";
// import { FiStar } from "react-icons/fi";
// import { CardType } from "../../types/card";
// import left_areoplane from "../../../../assets/images/our_destination_left_Areoplane.png";
// import right_areoplane from "../../../../assets/images/our_destination_right_Areoplane.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// // ---- Swiper Image Component per Card ----
// const CardImageSlider: React.FC<{ card: CardType }> = ({ card }) => {
//   const swiperRef = useRef<any>(null);

//   return (
//       <div
//         className="relative aspect-video overflow-hidden rounded-t-2xl group"
//         onMouseEnter={() => swiperRef.current?.autoplay?.start()}
//         onMouseLeave={() => swiperRef.current?.autoplay?.stop()}
//       >
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop={true}
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false, // we manage hover manually
//         }}
//         pagination={{ clickable: true }}
//         className="w-full h-full"
//       >
//         {card.images.map((img, index) => (
//           <SwiperSlide key={img.publicId}>
//             <img
//               src={img.url}
//               alt={`${card.title}-${index}`}
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// // ---- Send Inquiry Function ----
// const sendInquiry = async (card: CardType) => {
//   const phoneNumber = "918885523545";
//   const message = `I need to go to ${card.title} and I need further details.`;

//   // WhatsApp
//   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;
//   window.open(whatsappURL, "_blank");

//   // Email
//   try {
//     const res = await fetch("http://localhost:5000/api/v1/places/send", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         destination: card.title,
//         message,
//       }),
//     });

//     if (res.ok) {
//       console.log("✅ Email sent successfully!");
//     } else {
//       console.error("❌ Email failed:", await res.text());
//     }
//   } catch (err) {
//     console.error("❌ Error sending email:", err);
//   }
// };

// // ---- Main Section ----
// export const DestinationCardsSection: React.FC<{ cards: CardType[] }> = ({ cards }) => {
//   return (
//     <main className="max-w-[85%] mx-auto px-6 py-8" id="destinations">
//       <div className="flex flex-row items-center justify-center gap-4">
//         <img
//           src={left_areoplane}
//           alt="Left Title Image"
//           className="hidden xl:block scale-90 hover:scale-95 transition-all duration-300"
//         />
//         <div className="text-center xl:text-start">
//           <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-2">
//             Our Destinations
//           </h2>
//           <h3 className="text-xl sm:text-2xl text-center text-gray-700 mb-10">
//             We Organize Your Trips!
//           </h3>
//         </div>
//         <img
//           src={right_areoplane}
//           alt="Right Title Image"
//           className="hidden xl:block scale-90 hover:scale-95 transition-all duration-300"
//         />
//       </div>

//       <div
//         className="grid gap-6"
//         style={{
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//         }}
//       >
//         {cards.map((card) => (
//           <div
//             key={card._id}
//             className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:duration-500 relative"
//           >
//             {card.popular && (
//               <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
//                 <FiStar className="text-white" />
//                 Popular
//               </div>
//             )}

//             {/* Image Swiper */}
//             <CardImageSlider card={card} />

//             <div className="p-5">
//               <div className="mb-4">
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">
//                   {card.title}
//                 </h3>
//                 <div className="flex items-center gap-2 text-blue-600">
//                   <FaBus className="text-sm" />
//                   <span className="text-sm font-medium">{card.location}</span>
//                 </div>
//               </div>

//               <div className="border-t pt-4">
//                 <h4 className="text-sm font-semibold text-gray-600 mb-2">
//                   Features:
//                 </h4>
//                 <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
//                   {card.features?.video && (
//                     <div className="flex items-center gap-2">
//                       <GiVideoCamera className="text-blue-500" />
//                       Video
//                     </div>
//                   )}
//                   {card.features?.meals && (
//                     <div className="flex items-center gap-2">
//                       <GiMeal className="text-green-500" />
//                       Meals
//                     </div>
//                   )}
//                   {card.features?.stay && (
//                     <div className="flex items-center gap-2">
//                       <FaHotel className="text-purple-500" />
//                       Stay
//                     </div>
//                   )}
//                   {card.features?.sightseeing && (
//                     <div className="flex items-center gap-2">
//                       <GiSightDisabled className="text-orange-500" />
//                       Tours
//                     </div>
//                   )}
//                   {card.features?.medical && (
//                     <div className="flex items-center gap-2">
//                       <GiMedicalPackAlt className="text-red-500" />
//                       Medical
//                     </div>
//                   )}
//                   {card.features?.transport && (
//                     <div className="flex items-center gap-2">
//                       <FaBus className="text-teal-500" />
//                       Transport
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-center items-center rounded">
//                 <button
//                   onClick={() => sendInquiry(card)}
//                   className="flex items-center justify-center w-full gap-2 bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition duration-300"
//                 >
//                   <FaWhatsapp size={18} />
//                   Chat & Email Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };





import React, { useRef } from "react";
import { FaBus, FaHotel, FaWhatsapp } from "react-icons/fa";
import {
  GiVideoCamera,
  GiMeal,
  GiSightDisabled,
  GiMedicalPackAlt,
} from "react-icons/gi";
import { FiStar } from "react-icons/fi";
import { CardType } from "../../types/card";
import left_areoplane from "../../../../assets/images/our_destination_left_Areoplane.png";
import right_areoplane from "../../../../assets/images/our_destination_right_Areoplane.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

interface Props {
  cards: CardType[];
}

const sendInquiry = async (card: CardType) => {
  const phoneNumber = "918885523545";
  const message = `I need to go to ${card.title} and I need further details.`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");

  try {
    const res = await fetch("http://localhost:5000/api/v1/places/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destination: card.title,
        message,
      }),
    });

    if (res.ok) {
      console.log("✅ Email sent successfully!");
    } else {
      console.error("❌ Email failed:", await res.text());
    }
  } catch (err) {
    console.error("❌ Error sending email:", err);
  }
};

export const DestinationCardsSection: React.FC<Props> = ({ cards }) => {
  const swiperRef = useRef<any>(null);

  return (
    <main className="max-w-[85%] mx-auto px-6 py-8" id="destinations">
      <div className="flex flex-row items-center justify-center gap-4">
        <img
          src={left_areoplane}
          alt="Left Title Image"
          className="hidden xl:block scale-90 hover:scale-95 transition-all duration-300"
        />
        <div className="text-center xl:text-start">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-2">
            Our Destinations
          </h2>
          <h3 className="text-xl sm:text-2xl text-center text-gray-700 mb-10">
            We Organize Your Trips!
          </h3>
        </div>
        <img
          src={right_areoplane}
          alt="Right Title Image"
          className="hidden xl:block scale-90 hover:scale-95 transition-all duration-300"
        />
      </div>

      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {cards.map((card) => (
          <div
            key={card._id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:duration-500 transition-all duration-300 relative"
            onMouseEnter={() => swiperRef.current?.autoplay?.start()}
            onMouseLeave={() => swiperRef.current?.autoplay?.stop()}
          >
            {card.popular && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
                <FiStar className="text-white" />
                Popular
              </div>
            )}

            <div className="relative aspect-video overflow-hidden rounded-t-2xl group">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                pagination={{ clickable: true }}
                className="w-full h-full"
              >
                {card.images.map((img, index) => (
                  <SwiperSlide key={img.publicId}>
                    <img
                      src={img.url}
                      alt={`${card.title}-${index}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="p-5">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {card.title}
                </h3>
                <div className="flex items-center gap-2 text-blue-600">
                  <FaBus className="text-sm" />
                  <span className="text-sm font-medium">{card.location}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">
                  Features:
                </h4>
                <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
                  {card.features?.video && (
                    <div className="flex items-center gap-2">
                      <GiVideoCamera className="text-blue-500" />
                      Video
                    </div>
                  )}
                  {card.features?.meals && (
                    <div className="flex items-center gap-2">
                      <GiMeal className="text-green-500" />
                      Meals
                    </div>
                  )}
                  {card.features?.stay && (
                    <div className="flex items-center gap-2">
                      <FaHotel className="text-purple-500" />
                      Stay
                    </div>
                  )}
                  {card.features?.sightseeing && (
                    <div className="flex items-center gap-2">
                      <GiSightDisabled className="text-orange-500" />
                      Tours
                    </div>
                  )}
                  {card.features?.medical && (
                    <div className="flex items-center gap-2">
                      <GiMedicalPackAlt className="text-red-500" />
                      Medical
                    </div>
                  )}
                  {card.features?.transport && (
                    <div className="flex items-center gap-2">
                      <FaBus className="text-teal-500" />
                      Transport
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 flex justify-center items-center rounded">
                <button
                  onClick={() => sendInquiry(card)}
                  className="flex items-center justify-center w-full gap-2 bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  <FaWhatsapp size={18} />
                  Chat & Email Us
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
