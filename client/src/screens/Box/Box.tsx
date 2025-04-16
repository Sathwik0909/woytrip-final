import React, { useEffect, useState } from "react";

import { DestinationCardsSection } from "./sections/DestinationCardsSection/DestinationCardsSection";

import { HeroSection } from "./sections/HeroSection/HeroSection";

import { NewsletterSection } from "./sections/NewsletterSection";

import { Footer } from "./sections/Footer/Fotter";

import { WhyChooseUs } from "./sections/WhyChoosenUs";

import { PopularDestination } from "./sections/PopularDestination/PopularDestination";

import { Navbar } from "./sections/Navbar";

import TestimonialCard from "./sections/Testimonials/Testimonials";

import api from "../../api";

import FaqCard from "./sections/Faq/FaqCard";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Card {
  _id: string;
  title: string;
  location: string;
  imageUrl: string;
  features: {
    [key: string]: boolean;
  };
  popular: boolean;
}

export const Box = (): JSX.Element => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await api.get("/cards");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []);
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* <Navbar /> */}

        <HeroSection />

        <PopularDestination cards={cards} />

        <WhyChooseUs />

        <DestinationCardsSection cards={cards} />

        <TestimonialCard />

        <NewsletterSection />

        <FaqCard />

        <Footer />
      </div>
    </div>
  );
};
