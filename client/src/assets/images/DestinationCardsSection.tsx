import { MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const DestinationCardsSection = (): JSX.Element => {
  // Data for destination cards
  const destinationCards = Array(8).fill({
    title: "Kerala Tour",
    location: "Munnar | Houseboat",
    backgroundImage: "public/images/benTower.png",
    features: [
      { name: "Video", icon: "public/images/vedio_icon.png" },
      { name: "Meals", icon: "public/game-icons-meal.svg" },
      { name: "Stay", icon: "public/group-22.png" },
      { name: "Sightseeing", icon: "public/group-23.png" },
    ],
  });

  return (
    <section className="flex flex-wrap justify-center gap-8 py-12 w-full">
      {destinationCards.map((card, index) => (
        <div key={index} className="w-full sm:w-[394px]">
          <div className="relative overflow-hidden rounded-lg">
            {/* Background image container */}
            <div
              className="relative w-full h-[580px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
            >
              {/* Card overlay at bottom */}
              <Card className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[395px] rounded-2xl overflow-hidden bg-white  rounded-t-3xl rounded-b-none">
                <CardContent className="p-0">
                  {/* Card header */}
                  <div className="p-3 flex items-start">
                    <div className="ml-[77px]">
                      <h3 className="font-medium text-[22.8px] leading-[28.4px] text-black font-['Poppins',Helvetica]">
                        {card.title}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="w-[25px] h-[27px] relative">
                          <MapPinIcon className="w-[21px] h-[22px] absolute top-0.5 left-0.5 text-text-clr" />
                        </div>
                        <span className="ml-2 font-medium text-[20.3px] leading-[25.2px] text-text-clr font-['Poppins',Helvetica]">
                          {card.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Separator className="w-full" />

                  {/* Features */}
                  <div className="p-4 flex flex-col items-center">
                    <div className="flex justify-center gap-[30px] mb-8">
                      {card.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex flex-col items-center w-[39px]"
                        >
                          <div className="relative w-[39.09px] h-[39.09px]">
                            <img
                              src={feature.icon}
                              alt={feature.name}
                              className={
                                featureIndex === 1
                                  ? "w-full h-full"
                                  : "absolute w-[80%] h-[80%] top-[10%] left-[10%]"
                              }
                            />
                          </div>
                          <span className="text-[9.3px] leading-[11.6px] font-medium text-black text-center font-['Poppins',Helvetica] mt-1">
                            {feature.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex justify-center gap-7">
                      <Button
                        variant="outline"
                        className="h-8 w-[114px] rounded-[9.4px] border-[2.01px] border-[#008cff] text-[#008cff] font-medium text-[13.3px] font-['Poppins',Helvetica]"
                      >
                        Call Expert
                      </Button>
                      <Button className="h-8 w-[114px] rounded-[9.4px] border-[2.01px] bg-[#008cff] text-white font-medium text-[13.3px] font-['Poppins',Helvetica]">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
