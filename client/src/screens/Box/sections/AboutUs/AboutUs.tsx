// import React from "react";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { Separator } from "../../../../components/ui/separator";

// import comp from "../../../../assets/images/about_comp.png";


// export const AboutUs = (): JSX.Element => {
//   // Company description paragraphs with bold highlights
//   const paragraphs = [
//     <>
//       Founded in <span className="font-bold">2020</span> in Chennai, Tamil Nadu,
//       VRV Security has rapidly become a global leader in cybersecurity. The
//       company focuses on <span className="font-bold">securing</span> digital
//       ecosystems and <span className="font-bold">addressing</span> modern cyber
//       threats with <span className="font-bold">innovative</span> solutions,{" "}
//       <span className="font-bold">empowering</span> organizations to operate{" "}
//       <span className="font-bold">safely</span> in a digital-first world.
//     </>,
//     <>
//       <span className="font-bold">Specializing</span> in AI-powered and{" "}
//       <span className="font-bold">cloud-based</span> Vulnerability Assessment
//       and Penetration Testing <span className="font-bold">(VAPT),</span> VRV
//       Security delivers <span className="font-bold">precise</span> and{" "}
//       <span className="font-bold">proactive</span> cybersecurity services. By
//       leveraging advanced AI-driven tools, the company ensures{" "}
//       <span className="font-bold">accurate</span> threat detection and{" "}
//       <span className="font-bold">robust</span> defense strategies, making it a
//       reliable partner for{" "}
//       <span className="font-bold">businesses worldwide.</span>
//     </>,
//     <>
//       Trusted by <span className="font-bold">Fortune 500 companies</span> and{" "}
//       <span className="font-bold">government</span> organizations, VRV Security
//       has become a reliable partner for securing digital ecosystems. The company
//       serves a wide range of industries, including{" "}
//       <span className="font-bold">IT, healthcare, finance, manufacturing</span>,
//       and <span className="font-bold">critical infrastructure,</span> providing{" "}
//       <span className="font-bold">customized</span> solutions to address{" "}
//       <span className="font-bold">diverse</span> and{" "}
//       <span className="font-bold">evolving</span> security challenges.
//     </>,
//   ];

//   // Stats for the bottom section
//   const stats = [
//     {
//       value: "10+",
//       label: "Tours",
//       bgColor: "bg-[#21b9fa]",
//       textColor: "text-primary-bg",
//     },
//     {
//       value: "5+",
//       label: "Places",
//       bgColor: "bg-black",
//       textColor: "text-neutral-100",
//     },
//     {
//       value: "5",
//       label: "Continents",
//       bgColor: "bg-[#21b9fa]",
//       textColor: "text-primary-bg",
//     },
//   ];

//   return (
//     <section className="w-full py-16 px-24">
//       <Card className="w-full bg-[#eef7ff] rounded-[20px_130px_20px_130px] border-8 border-solid border-neutral-100 overflow-hidden">
//         <CardContent className="p-0">
//           <div className="flex flex-col items-center">
//             {/* Section Title */}
//             <h2 className="text-5xl font-bold text-[#000000] my-14 tracking-normal leading-[54.2px]">
//               About WoyTrip
//             </h2>

//             {/* Main Content */}
//             <div className="flex flex-col md:flex-row items-center gap-16 px-32 pb-16">
//               {/* Text Content */}
//               <div className="flex flex-col w-full md:w-1/2 items-start gap-10">
//                 {paragraphs.map((paragraph, index) => (
//                   <p
//                     key={index}
//                     className="text-xl text-[#100c08] text-justify leading-6 font-normal [font-family:'Inter',Helvetica]"
//                   >
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>


//               <div className="flex items-center pl-32 justify-center scale-110">
//                 <img src={comp} />
//               </div>

              
//             </div>

//             {/* Stats Section */}
//             <div className="w-full flex flex-row">
//               {stats.map((stat, index) => (
//                 <React.Fragment key={index}>
//                   <div className={`flex-1 ${stat.bgColor} py-10`}>
//                     <div className="flex flex-col items-center justify-center">
//                       <div
//                         className={`${stat.textColor} text-5xl font-normal [font-family:'Digital_Numbers-Regular',Helvetica] leading-[54.2px]`}
//                       >
//                         {stat.value}
//                       </div>
//                       <div
//                         className={`${stat.textColor} text-[32px] font-semibold leading-[36.2px] mt-2`}
//                       >
//                         {stat.label}
//                       </div>
//                     </div>
//                   </div>
//                   {index < stats.length - 1 && (
//                     <Separator
//                       orientation="vertical"
//                       className="h-auto bg-neutral-100"
//                     />
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </section>
//   );
// };






import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

import comp from "../../../../assets/images/about_comp.png";

export const AboutUs = (): JSX.Element => {
  const paragraphs = [
    <>
      Founded in <span className="font-bold">2020</span> in Chennai, Tamil Nadu,
      VRV Security has rapidly become a global leader in cybersecurity. The
      company focuses on <span className="font-bold">securing</span> digital
      ecosystems and <span className="font-bold">addressing</span> modern cyber
      threats with <span className="font-bold">innovative</span> solutions,{" "}
      <span className="font-bold">empowering</span> organizations to operate{" "}
      <span className="font-bold">safely</span> in a digital-first world.
    </>,
    <>
      <span className="font-bold">Specializing</span> in AI-powered and{" "}
      <span className="font-bold">cloud-based</span> Vulnerability Assessment
      and Penetration Testing <span className="font-bold">(VAPT),</span> VRV
      Security delivers <span className="font-bold">precise</span> and{" "}
      <span className="font-bold">proactive</span> cybersecurity services.
    </>,
    <>
      Trusted by <span className="font-bold">Fortune 500 companies</span> and{" "}
      <span className="font-bold">government</span> organizations, VRV Security
      serves a wide range of industries, including{" "}
      <span className="font-bold">IT, healthcare, finance</span>, and{" "}
      <span className="font-bold">critical infrastructure</span>.
    </>,
  ];

  const stats = [
    {
      value: "10+",
      label: "Tours",
      bgColor: "bg-[#21b9fa]",
      textColor: "text-primary-bg",
    },
    {
      value: "5+",
      label: "Places",
      bgColor: "bg-black",
      textColor: "text-neutral-100",
    },
    {
      value: "5",
      label: "Continents",
      bgColor: "bg-[#21b9fa]",
      textColor: "text-primary-bg",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24">
      <Card className="w-full bg-[#eef7ff] rounded-[20px_130px_20px_130px] border-8 border-neutral-100 overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col items-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mt-10 mb-8 md:my-14 leading-tight text-center">
              About WoyTrip
            </h2>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 px-4 md:px-12 lg:px-24 pb-12">
              <div className="flex flex-col w-full md:w-1/2 items-start gap-6">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-[#100c08] text-justify leading-6 font-normal font-inter"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Image */}
              <div className="flex justify-center w-full md:w-1/2">
                <img
                  src={comp}
                  alt="Company Visual"
                  className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="w-full flex flex-col md:flex-row">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`flex-1 ${stat.bgColor} py-8 md:py-10 flex flex-col items-center justify-center`}
                  >
                    <div
                      className={`${stat.textColor} text-3xl md:text-5xl font-normal font-digital leading-none`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`${stat.textColor} text-xl md:text-2xl font-semibold mt-2`}
                    >
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <Separator
                      orientation="horizontal md:vertical"
                      className="bg-neutral-100 h-px md:h-auto md:w-px"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};




















// import React from "react";
// import { Card, CardContent } from "../../../../components/ui/card";
// import { Separator } from "../../../../components/ui/separator";
// import comp from "../../../../assets/images/about_comp.png";

// export const AboutUs = (): JSX.Element => {
//   // Company description paragraphs with bold highlights
//   const paragraphs = [
//     <>
//       Founded in <span className="font-bold">2020</span> in Chennai, Tamil Nadu,
//       WoyTrip has rapidly become a global leader in travel planning. The
//       company focuses on <span className="font-bold">curating</span> seamless travel
//       experiences and <span className="font-bold">enhancing</span> tourism with{" "}
//       <span className="font-bold">personalized</span> and{" "}
//       <span className="font-bold">affordable</span> packages.
//     </>,
//     <>
//       <span className="font-bold">Specializing</span> in custom itineraries and{" "}
//       <span className="font-bold">AI-powered</span> trip planning, WoyTrip
//       ensures a <span className="font-bold">hassle-free</span> booking experience.
//       Whether it's <span className="font-bold">adventure, luxury, or budget travel,</span> 
//       we cater to all needs.
//     </>,
//     <>
//       Trusted by <span className="font-bold">thousands</span> of travelers and{" "}
//       <span className="font-bold">tourism agencies</span>, WoyTrip connects
//       people to the best destinations. From{" "}
//       <span className="font-bold">local getaways</span> to{" "}
//       <span className="font-bold">international tours</span>, we make
//       travel planning effortless and enjoyable.
//     </>,
//   ];

//   // Stats for the bottom section
//   const stats = [
//     { value: "10+", label: "Tours", bgColor: "bg-[#21b9fa]", textColor: "text-primary-bg" },
//     { value: "5+", label: "Places", bgColor: "bg-black", textColor: "text-neutral-100" },
//     { value: "5", label: "Continents", bgColor: "bg-[#21b9fa]", textColor: "text-primary-bg" },
//   ];

//   return (
//     <section className="w-full py-16 px-6 md:px-16 lg:px-24">
//       <Card className="relative w-full bg-[#eef7ff] rounded-[20px_100px_0px_100px] border-8 border-solid border-neutral-100 overflow-hidden">
//         <CardContent className="p-6 md:p-12 pb-32 ">
//           <div className="flex flex-col items-center text-center">
//             {/* Section Title */}
//             <h2 className="text-4xl md:text-5xl font-bold text-[#000000] my-2 md:my-4 leading-tight">
//               About WoyTrip
//             </h2>

//             {/* Main Content */}
//             <div className="flex flex-col md:flex-row items-center gap-8   pb-16 px-32 md:gap-16">
//               {/* Text Content */}
//               <div className="flex flex-col w-full md:w-1/2 items-start gap-6">
//                 {paragraphs.map((paragraph, index) => (
//                   <p key={index} className="text-lg md:text-xl text-[#100c08] text-justify leading-7 font-normal">
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>

//               {/* Image */}
//               <div className="flex items-center justify-center w-full md:w-1/2">
//                 <img src={comp} alt="Company Illustration" className="w-full max-w-sm md:max-w-md lg:max-w-lg" />
//               </div>
//             </div>
//           </div>

//           {/* Stats Section (Positioned at Bottom) */}
//           <div className="absolute bottom-0 left-0 w-full flex flex-col md:flex-row rounded-[0px_0px_20px_100px] overflow-hidden">
//             {stats.map((stat, index) => (
//               <React.Fragment key={index}>
//                 <div className={`flex-1 ${stat.bgColor} py-6 md:py-8`}>
//                   <div className="flex flex-col items-center justify-center">
//                     <div className={`${stat.textColor} text-3xl md:text-5xl font-normal leading-tight`}>
//                       {stat.value}
//                     </div>
//                     <div className={`${stat.textColor} text-xl md:text-[32px] font-semibold mt-2`}>
//                       {stat.label}
//                     </div>
//                   </div>
//                 </div>
//                 {index < stats.length - 1 && (
//                   <Separator orientation="horizontal md:vertical" className="bg-neutral-100 w-full md:w-auto md:h-auto" />
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </section>
//   );
// };

