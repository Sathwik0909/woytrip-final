// import React from "react";
// import { Card, CardContent } from "../../../../components/ui/card";

// export const FoundersSection = (): JSX.Element => {
//   // Founder description text with highlighted parts
//   const founderDescription = [
//     {
//       text: "Vinod Kumar, the visionary CEO of VRV Security, has been at the forefront of ",
//       bold: false,
//     },
//     { text: "revolutionizing", bold: true },
//     { text: " cybersecurity for over ", bold: false },
//     { text: "two decades", bold: true },
//     {
//       text: ". Under his leadership, VRV Security has achieved a remarkable ",
//       bold: false,
//     },
//     { text: "$400M valuation by 2024,", bold: true },
//     { text: " with operations expanded to ", bold: false },
//     { text: "12", bold: true },
//     { text: " countries and a client retention rate of ", bold: false },
//     { text: "95%.", bold: true },
//     {
//       text: "A passionate mentor and leader, Vinod has guided diverse global teams and ",
//       bold: false,
//     },
//     { text: "inspired", bold: true },
//     { text: " hundreds of professionals in the ", bold: false },
//     { text: "cybersecurity domain.", bold: true },
//     { text: " His ", bold: false },
//     { text: "expertise", bold: true },
//     {
//       text: " and strategic acumen continue to set industry standards, driving ",
//       bold: false,
//     },
//     { text: "innovation", bold: true },
//     { text: " and excellence in protecting ", bold: false },
//     { text: "digital landscapes worldwide.", bold: true },
//   ];

//   return (
//     <section className="flex flex-wrap w-full max-w-[1273px] items-center justify-center gap-[23px_33px] mx-auto">
//       {/* Header */}
//       <Card className="w-full h-[92px] rounded-[50px_0px_50px_0px] overflow-hidden border-4 border-solid border-[#21b9fa]">
//         <CardContent className="flex items-center justify-center h-full p-0">
//           <h2 className="font-bold text-[#100c08] text-[57.8px] text-center tracking-[0] leading-[normal] whitespace-nowrap font-sans">
//             About Our Founder&apos;s
//           </h2>
//         </CardContent>
//       </Card>

//       {/* Image Container */}
//       <div className="flex flex-col w-[507px] h-[485px] items-start gap-2.5">
//         <div className="relative w-full h-[499.7px] mt-[-7.35px] mb-[-7.35px] ml-[-7.35px] mr-[-7.35px] overflow-hidden border-[7.35px] border-solid border-[#21b9fa]">
//           <div className="w-[506px] h-[821px] bg-[#f4f4f4]" />
//         </div>
//       </div>

//       {/* Content Container */}
//       <div className="flex flex-col w-[719px] items-start gap-[27px]">
//         {/* Description Card */}
//         <Card className="h-[303px] w-full bg-secondary-bg border-[7px] border-solid border-[#21b9fa] rounded-none">
//           <CardContent className="flex items-center justify-center p-[50px] py-[95px] h-full">
//             <div className="w-[608px] text-justify">
//               <p className="font-normal text-primary-bg text-base leading-[27.2px] font-sans">
//                 {founderDescription.map((segment, index) => (
//                   <span
//                     key={index}
//                     className={
//                       segment.bold
//                         ? "font-bold text-[#100c08]"
//                         : "text-[#100c08]"
//                     }
//                   >
//                     {segment.text}
//                   </span>
//                 ))}
//               </p>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Testimonial Card */}
//         <Card className="w-[719px] h-[155.96px] bg-white border-[12px] border-solid border-[#21b9fa] rounded-none relative">
//           <CardContent className="p-0">
//             <div className="relative w-full h-[155.96px] bg-neutral-100 border-[5px] border-solid border-[#21b9fa]">
//               {/* Name */}
//               <div className="absolute w-[283px] top-[27px] left-[218px] font-bold text-primary-bg text-[35.1px] tracking-[0] leading-[49.1px] whitespace-nowrap font-sans">
//                 Racharla Preethi
//               </div>

//               {/* Title */}
//               <div className="absolute w-[137px] top-[76px] left-[292px] font-medium text-[#100c08] text-[19.5px] tracking-[0] leading-[27.3px] whitespace-nowrap font-sans">
//                 CEO , WoyTrip
//               </div>

//               {/* Decorative elements */}
//               <div className="absolute w-[253px] h-[18px] top-[18px] left-3.5 rotate-180">
//                 <img
//                   className="absolute w-[235px] h-px top-2 left-0 -rotate-180"
//                   alt="Line"
//                   src="/line-35-1.svg"
//                 />
//                 <div className="absolute w-[18px] h-[18px] top-0 left-[235px] rounded-[9.03px]">
//                   <div className="absolute w-[11px] h-[11px] top-1 left-1 bg-[#100c08] rounded-[5.42px]" />
//                   <div className="absolute w-[18px] h-[18px] top-0 left-0 rounded-[9.03px] border-[0.97px] border-solid border-[#1d1b20]" />
//                 </div>
//               </div>

//               <div className="absolute w-[253px] h-[18px] top-[120px] left-[133px]">
//                 <img
//                   className="absolute w-[235px] h-px top-2 left-0"
//                   alt="Line"
//                   src="/line-35.svg"
//                 />
//                 <div className="absolute w-[18px] h-[18px] top-0 left-[235px] rounded-[9.03px]">
//                   <div className="absolute w-[11px] h-[11px] top-1 left-1 bg-[#100c08] rounded-[5.42px]" />
//                   <div className="absolute w-[18px] h-[18px] top-0 left-0 rounded-[9.03px] border-[0.97px] border-solid border-[#1d1b20]" />
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// };

import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import image from "../../../../assets/images/benTower.png"

export const FoundersSection = (): JSX.Element => {

  const founderText = `Vinod Kumar, the visionary CEO of VRV Security, has been at the forefront of revolutionizing cybersecurity for over two decades. 
  Under his leadership, VRV Security has achieved a remarkable $400M valuation by 2024, with operations expanded to 12 countries and a client retention rate of 95%. 
  A passionate mentor and leader, Vinod has guided diverse global teams and inspired hundreds of professionals in the cybersecurity domain. 
  His expertise and strategic acumen continue to set industry standards, driving innovation and excellence in protecting digital landscapes worldwide.`;

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-16 flex flex-col gap-10 items-center">
      {/* Header */}
      <Card className="w-full rounded-[50px_0_50px_0] border-4 border-[#21b9fa]">
        <CardContent className="p-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#100c08]">
            About Our Founder's
          </h2>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-10 items-stretch justify-between">
        {/* Image Upload Box */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 border-[7px] border-[#21b9fa] p-4 justify-center items-center bg-[#f4f4f4]">
          
            <img
              src={image}
              alt="Founder"
              className="w-full h-[450px] object-cover"
            />
        </div>

        {/* Description & Testimonial */}
        <div className="flex flex-col w-full lg:w-1/2 gap-6">
          {/* Description Card */}
          <Card className="flex-grow border-[7px] border-[#21b9fa] bg-secondary-bg">
            <CardContent className="p-6 md:p-10 h-full">
              <p className="text-base text-[#100c08] text-justify leading-7 font-sans whitespace-pre-line">
                {founderText}
              </p>
            </CardContent>
          </Card>

          {/* Testimonial Card */}
          {/* <Card className="border-[12px] border-[#21b9fa]">
            <CardContent className="p-4 bg-neutral-100 border-[5px] border-[#21b9fa] relative flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-[#1d1b20] rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-[#100c08] rounded-full" />
                  </div>
                  <div className="w-32 h-px bg-[#100c08]" />
                </div>
              <div className="w-full flex justify-between items-center mt-4">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-bg">
                  Racharla Preethi
                </h3>
                <p className="text-md text-[#100c08] mt-1">CEO, WoyTrip</p>
              </div>


                <div className="flex items-center gap-2">
                  <div className="w-32 h-px bg-[#100c08]" />
                  <div className="w-4 h-4 border border-[#1d1b20] rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-[#100c08] rounded-full" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card> */}



<Card className="border-[12px] border-[#21b9fa] rounded-none">
  <CardContent className="bg-neutral-100 border-[5px] border-[#21b9fa] p-6 relative flex flex-col gap-6">
    
    {/* Top Decorative Line - aligned left */}
    <div className="flex justify-start">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border border-[#1d1b20] rounded-full flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-[#100c08] rounded-full" />
        </div>
        <div className="w-32 h-px bg-[#100c08]" />
      </div>
    </div>

    {/* Name and Title - centered */}
    <div className="text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-primary-bg">
        Racharla Preethi
      </h3>
      <p className="text-md text-[#100c08] mt-1">CEO, WoyTrip</p>
    </div>

    {/* Bottom Decorative Line - aligned right */}
    <div className="flex justify-end">
      <div className="flex items-center gap-2">
        <div className="w-32 h-px bg-[#100c08]" />
        <div className="w-4 h-4 border border-[#1d1b20] rounded-full flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-[#100c08] rounded-full" />
        </div>
      </div>
    </div>

  </CardContent>
</Card>


        </div>
      </div>
    </section>
  );
};
