import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

const FaqCard = () => {
  const faqs = [
    {
        question: "How does WoyTrip ensure the quality of accommodations?",
        answer:
          "We meticulously select accommodations based on customer reviews, location, amenities, and overall experience to ensure your stay is comfortable and memorable.",
      },
      {
        question: "What medical support does WoyTrip offer during trips?",
        answer:
          "We provide 24/7 access to online doctor consultations for basic health concerns, ensuring you have professional medical advice whenever needed.",
      },
      {
        question: "Are WoyTrip's travel packages customizable?",
        answer:
          "Yes, we offer customizable travel packages tailored to your preferences, interests, and budget, creating a personalized and enjoyable travel experience.",
      },
      {
        question: "How does WoyTrip handle travel disruptions or emergencies?",
        answer:
          "Our 24/7 customer support team is equipped to assist with any travel disruptions or emergencies, providing prompt solutions to ensure minimal impact on your trip.",
      },
      {
        question: "What is the short video feature included in the trip?",
        answer:
          "We create a complimentary short video capturing the highlights of your trip, allowing you to relive and share your travel memories with friends and family.",
      },
      {
        question: "How does WoyTrip ensure affordable pricing without compromising quality?",
        answer:
          "We leverage strong partnerships with service providers and efficient planning to offer competitive pricing while maintaining high-quality experiences.",
      },
      {
        question: "Is WoyTrip suitable for solo travelers, families, and groups?",
        answer:
          "Absolutely! We cater to solo travelers, families, and groups, customizing itineraries to suit the specific needs and preferences of each traveler.",
      },
      {
        question: "How can I book a trip with WoyTrip?",
        answer:
          "Booking with us is simple. Visit our website, choose your desired package or customize one, and follow the guided booking process. Our support team is also available 24/7 to assist you.",
      },
      {
        question: "Does WoyTrip offer assistance with travel documentation and visas?",
        answer:
          "Yes, we provide guidance on necessary travel documentation and visa requirements, helping you navigate the process smoothly.",
      },
      {
        question: "What safety measures does WoyTrip implement during trips?",
        answer:
          "Your safety is our priority. We collaborate with trusted local partners and stay updated on travel advisories to ensure a secure and worry-free experience.",
      },
  ];

  return (
    <motion.section
      className="w-full py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="w-full max-w-7xl mx-auto border-none shadow-lg bg-blue-50 p-10 rounded-2xl">
        <CardContent className="p-0 border-none text-center">
          <motion.h2
            className="font-semibold text-gray-800 text-[30px] sm:text-[36px] leading-snug"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="w-full mt-8 space-y-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-10 py-2 text-left text-lg font-medium text-gray-900 hover:bg-gray-100 transition"
      >
        {question}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="px-6 pb-6 text-gray-700"
      >
        {answer}
      </motion.div>
    </div>
  );
};

export default FaqCard;
