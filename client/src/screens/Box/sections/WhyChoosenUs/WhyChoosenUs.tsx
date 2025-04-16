import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

import hosplital from "../../../../assets/images/twemoji-hospital.svg";
import areoplane from "../../../../assets/images/areoplane.png";
import hotel from "../../../../assets/images/hotel.png";
import luggage from "../../../../assets/images/luggage.png";
// import logo from "../../../../assets/images/why_choosen.png"
import logo from "../../../../assets/images/bear.png";
import areoplane_logo from "../../../../assets/images/why_choosen_us_areoplane.png";
// import logo from

export const WhyChooseUs = (): JSX.Element => {
  const features = [
    {
      id: 1,
      title: "24/7 Doctor Support Over Mobile",
      description: "Instant medical help for minor health issues.",
      icon: hosplital,
      isHighlighted: false,
    },
    {
      id: 2,
      title: "Trip Video",
      description: "Capture memories with a short trip highlight video.",
      isHighlighted: false,
      icon: areoplane,
    },
    {
      id: 3,
      title: "Best Stay Options",
      description: "Handpicked stays for easy exploration.",
      isHighlighted: false,
      icon: hotel,
    },
    {
      id: 4,
      title: "Affordable Prices",
      description: "Premium trips at budget-friendly rates.",
      isHighlighted: false,
      icon: luggage,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="w-full">
          <img
            src={logo}
            alt="Why Choose Us"
            className="w-full transition-transform duration-300 ease-out hover:scale-110 hover:duration-500"
          />
        </div>

        {/* Right Section */}
        <div className="w-full">


          <div className="flex justify-center gap-4">
            {/* Title */}
            <h2 className="text-4xl font-bold text-[#333333] text-center sm:text-5xl md:text-5xl  mb-2">
              Why Choosen Us
            </h2>

            {/* Image (Visible only on large screens) */}
            <img
              src={areoplane_logo}
              alt="Title Image"
              className="hidden xl:block scale-90 hover:scale-95"
            />
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-6">
            {features.map((feature) => (
              <Card
                key={feature.id}
                // className={`flex items-center gap-6 p-4 rounded-xl transition-all
                //   hover: ${feature.isHighlighted = true}  duration-300 ${
                //   feature.isHighlighted
                //     ? "bg-white shadow-lg border border-gray-200"
                //     : "bg-white"
                // }`
                // className={`flex items-center gap-6 p-4 rounded-xl transition-all duration-300
                //   ${
                //     feature.isHighlighted
                //       ? "bg-white shadow-lg border border-gray-200"
                //       : "bg-white"
                //   }
                //   hover:bg-gray-100 hover:shadow-md hover:border-gray-300`}
                className={`flex items-center gap-6 p-4 rounded-xl transition-all duration-300
                  ${
                    feature.isHighlighted
                      ? "bg-white shadow-lg border border-gray-200"
                      : "bg-white"
                  }
                  hover:bg-gray-100 hover:shadow-md hover:border-gray-300 hover:scale-110`}
              >
                <CardContent className="p-0 flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-md">
                    <img
                      className="w-10 h-10"
                      alt={feature.title}
                      src={feature.icon}
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-md">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
