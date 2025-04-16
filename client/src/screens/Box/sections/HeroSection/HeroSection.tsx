// import React from "react";
// import { Button } from "../../../../components/ui/button";

// import hero from "../../../../assets/vedios/hero_section.mp4";

// export const HeroSection = (): JSX.Element => {
//   return (
//     // <section className="pt-10 relative w-full min-h-screen bg-gradient-to-b from-[#7DD2FF]/45 to-transparent overflow-hidden">
//     //   {/* Hero Content Wrapper */}
//     //   <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20">

//     //     {/* Left Content */}
//     //     <div className="text-center lg:text-left pt-16 lg:pt-36 max-w-2xl">
//     //       {/* Subheading */}
//     //       <p className="font-bold text-[#00c7ff] text-lg lg:text-xl font-['Poppins',Helvetica] uppercase">
//     //         Best Destinations Around the World
//     //       </p>

//     //       {/* Main Heading */}
//     //       <h1 className="mt-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-[86px] tracking-tight font-['Volkhov',Helvetica]">
//     //         Travel, enjoy
//     //         <br /> and live a new
//     //         <br /> and full life
//     //       </h1>

//     //       {/* Description */}
//     //       <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
//     //         Built Wicket longer admire do barton vanity itself do in it.
//     //         Preferred to sportsmen it engrossed listening. Park gate sell they
//     //         west hard for the.
//     //       </p>

//     //       {/* CTA Button */}
//     //       <Button className="mt-6 md:mt-10 px-8 py-3 md:w-[436px] md:h-[58px] bg-[#38d4ff] rounded-lg shadow-md hover:bg-[#38d4ff]/90">
//     //         <span className="font-medium text-lg text-white font-['Poppins',Helvetica]">
//     //           Find out more
//     //         </span>
//     //       </Button>
//     //     </div>

//     //     {/* Right Image */}
//     //     <div className="w-full lg:w-1/2 flex justify-center">
//     //       <img
//     //         className="w-[300px] md:w-[400px] lg:w-[500px] overflow-hidden object-cover scale-150"
//     //         src={hero}
//     //         alt="Main travel illustration"
//     //       />
//     //     </div>
//     //   </div>
//     // </section>

//     // <section className="relative w-full min-h-screen ">
//     //   {/* Background Video */}
//     //   <div className="container mx-auto background px-4">
//     //     {/* your content */}

//     //     <video
//     //       autoPlay
//     //       loop
//     //       muted
//     //       playsInline
//     //       className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
//     //     >
//     //       <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
//     //       {/* <source src={hero} type="video/mp4" /> */}
//     //       Your browser does not support the video tag.
//     //     </video>

//     //     {/* Overlay (optional dark layer) */}
//     //     <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

//     //     {/* Content Wrapper */}
//     //     <div className="relative z-10 flex items-center justify-center text-center min-h-screen px-4">
//     //       <div className="max-w-2xl">
//     //         {/* Subheading */}
//     //         <p className="font-bold text-[#00c7ff] text-lg lg:text-xl font-['Poppins',Helvetica] uppercase">
//     //           Best Destinations Around the World
//     //         </p>

//     //         {/* Main Heading */}
//     //         <h1 className="mt-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-[86px] tracking-tight font-['Volkhov',Helvetica] text-white">
//     //           Travel, enjoy
//     //           <br /> and live a new
//     //           <br /> and full life
//     //         </h1>

//     //         {/* Description */}
//     //         <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
//     //           Built Wicket longer admire do barton vanity itself do in it.
//     //           Preferred to sportsmen it engrossed listening. Park gate sell they
//     //           west hard for the.
//     //         </p>

//     //         {/* CTA Button */}
//     //         <Button className="mt-6 md:mt-10 px-8 py-3 bg-[#38d4ff] rounded-lg shadow-md hover:bg-[#38d4ff]/90">
//     //           <span className="font-medium text-lg text-white font-['Poppins',Helvetica]">
//     //             Find out more
//     //           </span>
//     //         </Button>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>

//     <section className="relative w-full min-h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute bottom-7 left-0 w-full h-full object-cover z-[-1]"
//       >
//         <source
//           src={hero}
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 z-0" />

//       {/* Content */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center">
//         <div className="max-w-2xl">
//           <p className="font-bold text-[#00c7ff] text-lg lg:text-xl uppercase font-['Poppins',Helvetica]">
//             Best Destinations Around the World
//           </p>

//           <h1 className="mt-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-[86px] tracking-tight font-['Volkhov',Helvetica] text-white">
//             Travel, enjoy
//             <br /> and live a new
//             <br /> and full life
//           </h1>

//           <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
//             Built Wicket longer admire do barton vanity itself do in it.
//             Preferred to sportsmen it engrossed listening. Park gate sell they
//             west hard for the.
//           </p>

//           <Button className="mt-6 md:mt-10 px-8 py-3 bg-[#38d4ff] rounded-lg shadow-md hover:bg-[#38d4ff]/90">
//             <span className="font-medium text-lg text-white font-['Poppins',Helvetica]">
//               Find out more
//             </span>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };



import React from 'react';
import { Navbar } from '../Navbar/Navbar';  // Import the Navbar component

import hero from "../../../../assets/vedios/hero_section.mp4";  // Your video file

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] blur-[2px]"
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      

      {/* Navbar */}
      <Navbar />

      {/* Content Wrapper */}
      <div className="relative z-10 flex items-center justify-center text-center min-h-screen px-4">
        <div className="max-w-6xl">
          {/* Subheading */}
          <p className="font-bold text-[#00c7ff] text-5xl lg:text-5xl uppercase font-['Poppins',Helvetica]">
            Best Destinations Around the World
          </p>

          {/* Main Heading */}
          <h1 className="mt-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-[86px] tracking-tight font-['Volkhov',Helvetica] text-white">
            Travel, enjoy and live a new
            <br /> and full life
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-200 font-bold text-2xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Built Wicket longer admire do barton vanity itself do in it. Preferred
            to sportsmen it engrossed listening. Park gate sell they west hard for
            the.
          </p>

          {/* CTA Button */}
          <button className="mt-6 md:mt-10 w-[30%] h-[10%] px-8 py-3 bg-[#38d4ff] rounded-lg shadow-md hover:bg-[#38d4ff]/90">
            <span className="font-medium text-lg text-white font-['Poppins',Helvetica]">
              Find out more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
