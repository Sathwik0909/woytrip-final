import React from "react";
import { FaBus, FaHotel } from "react-icons/fa";
import {
  GiVideoCamera,
  GiMeal,
  GiSightDisabled,
  GiMedicalPackAlt,
} from "react-icons/gi";
import { FiStar } from "react-icons/fi";
import { CardType } from "../../types/card";
import { FaWhatsapp } from "react-icons/fa";

import areoplane from "../../../../assets/images/popular_areoplane.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

interface Props {
  cards: CardType[];
}

const sendInquiry = async (card: CardType) => {
  const phoneNumber = "918885523545";

  const message = `I need to go to ${card.title} and I need further details.`;

  // WhatsApp
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");

  // Email
  try {
    const res = await fetch("http://localhost:5000/api/v1/places/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destination: card.title,
        message, // same message
      }),
    });

    if (res.ok) {
      console.log("✅ Email sent successfully!");
      console.log(res);
    } else {
      console.error("❌ Email failed:", await res.text());
    }
  } catch (err) {
    console.error("❌ Error sending email:", err);
  }
};

export const PopularDestination: React.FC<Props> = ({ cards }) => {
  const phoneNumber = 918885523545;
  cards = cards.filter((card) => card.popular);
  return (
    <main className="max-w-[85%] mx-auto px-6 py-8">
      <div className="flex justify-start gap-4">
        {/* Title */}
        <h2 className="text-4xl font-bold  text-[#333333] lg:text-6xl mb-2">
          Popular Destinations
        </h2>

        {/* Image (Visible only on large screens) */}
        <img src={areoplane} alt="Title Image" className="hidden lg:block" />
      </div>

      {/* Subtitle */}
      <h3 className="text-xl text-gray-700 lg:text-start lg:text-2xl mb-10">
        Vacations to make your experience enjoyable in Indonesia!
      </h3>

      <div
  className="grid gap-6"
  style={{
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  }}
>
  {cards.map((card) => (
    <div
      key={card._id}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105 hover:duration-500 relative"
    >
      {/* Popular Tag */}
      {card.popular && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 z-10">
          <FiStar className="text-white text-sm sm:text-base" />
          Popular
        </div>
      )}

      {/* Swiper Image */}
      <div className="relative aspect-video overflow-hidden rounded-t-2xl group">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
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

      {/* Card Body */}
      <div className="p-4 sm:p-5">
        {/* Title and Location */}
        <div className="mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
            {card.title}
          </h3>
          <div className="flex items-center gap-2 text-blue-600 text-sm sm:text-base">
            <FaBus className="text-sm sm:text-base" />
            <span className="font-medium">{card.location}</span>
          </div>
        </div>

        {/* Features */}
        <div className="border-t pt-3 sm:pt-4">
          <h4 className="text-sm sm:text-base font-semibold text-gray-600 mb-2">
            Features:
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm sm:text-base text-gray-600">
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

        {/* WhatsApp Button */}
        <div className="mt-5 flex justify-center items-center rounded">
          <button
            onClick={() => sendInquiry(card)}
            className="flex items-center justify-center w-full gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
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
