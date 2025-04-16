import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// const testimonials = [/* your testimonials array */];

const testimonials = [
  {
    id: 1,
    name: "Nagaraju",
    location: "Telangana",
    message:
      "My trip to Shimla and Agra with WoyTrip was truly unforgettable! From seamless hotel bookings to hassle-free travel arrangements, everything was perfectly organized. Exploring the snow-covered hills of Shimla and witnessing the breathtaking beauty of the Taj Mahal in Agra was a dream come true. Thanks to WoyTrip for making our journey smooth, enjoyable, and budget-friendly. Highly recommended for anyone looking for a stress-free vacation!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Shiva",
    location: "Hyderabad",
    message:
      "My trip to Kashmir with WoyTrip was absolutely magical! From the snowy slopes of Gulmarg to the serene beauty of Sonmarg and the breathtaking landscapes of Pahalgam, every moment was unforgettable. WoyTrip took care of all the bookings and travel arrangements, making the journey completely hassle-free. Their attention to detail and excellent service made our trip smooth and enjoyable. If you're planning a Kashmir trip, WoyTrip is the way to go!",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    id: 3,
    name: "Praveen Reddy",
    location: "Andhra Pradesh",
    message:
      "My trip to Munnar and Alleppey with WoyTrip was an amazing experience! The lush green tea gardens of Munnar and the serene backwaters of Alleppey left me in awe. WoyTrip handled everything perfectly, from hotel stays to travel arrangements, ensuring a smooth and comfortable journey. Their exceptional service made our vacation truly stress-free and enjoyable. I highly recommend WoyTrip for a hassle-free travel experience!",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    id: 4,
    name: "Akhil",
    location: "Tamil Nadu",
    message:
      "My trip to Thiruvananthapuram, Kochi, Kanyakumari, Madurai, and Poovar Island with WoyTrip was an unforgettable experience! Every destination was beautifully planned, from the spiritual vibes of Kanyakumari to the scenic backwaters of Poovar Island. The team ensured seamless travel, great accommodations, and a stress-free journey. WoyTrip made my South India trip truly enjoyable and memorable. Highly recommended for a perfect travel experience!",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    id: 4,
    name: "Akhil",
    location: "Tamil Nadu",
    message:
      "My trip to Thiruvananthapuram, Kochi, Kanyakumari, Madurai, and Poovar Island with WoyTrip was an unforgettable experience! Every destination was beautifully planned, from the spiritual vibes of Kanyakumari to the scenic backwaters of Poovar Island. The team ensured seamless travel, great accommodations, and a stress-free journey. WoyTrip made my South India trip truly enjoyable and memorable. Highly recommended for a perfect travel experience!",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
];

// Create duplicated items for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialCard = () => {
  const [index, setIndex] = useState(0);
  const itemsPerView = 1;
  const containerRef = useRef(null);
  const itemWidth = 50; // 50% width per item

  const nextTestimonial = () => {
    setIndex((prev) => (prev + itemsPerView) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex(
      (prev) =>
        (prev - itemsPerView + testimonials.length) % testimonials.length
    );
  };

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const newIndex = prev + itemsPerView;
        if (newIndex >= testimonials.length) {
          // Instant reset without animation
          setTimeout(() => setIndex(0), 10);
          return testimonials.length;
        }
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden max-w-full mx-auto px-6 py-12 ">
      <div className="text-center mb-6">
        <h2 className="text-5xl mb-28 text-center font-bold text-gray-900">
          What People Say About Us
        </h2>
      </div>

      <div className="relative " ref={containerRef}>
        <motion.div
          className="flex gap-6"
          animate={{
            x: `-${index * itemWidth}%`,
            transition: {
              type: "tween",
              ease: "linear",
              duration: 0.6,
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, i) => (
            <div
              key={`${testimonial.id}-${i}`}
              className="lg:min-w-[35%] sm:min-w-[60%] min-w-full bg-blue-50 p-6 rounded-2xl shadow-lg relative"
            >
              {/* Profile Image */}
              <div className="absolute -top-8 left-6 w-16 h-16 rounded-full border-4 border-white overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Testimonial Content */}
              {/* <p className="text-gray-700 text-lg mt-6">{testimonial.message}</p> */}
              <p className="text-gray-700 text-lg mt-6 hidden md:block">
                {testimonial.message}
              </p>
              <p className="text-gray-700 text-lg mt-6 md:hidden">
                {testimonial.message.split(".")[0]}
              </p>

              {/* User Details */}
              <p className="font-bold text-gray-800 mt-3">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={prevTestimonial}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={nextTestimonial}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div> */}
    </section>
  );
};

export default TestimonialCard;
