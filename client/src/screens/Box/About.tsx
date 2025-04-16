import { Footer } from "./sections/Footer/Fotter";
import { Navbar } from "./sections/Navbar";
import { AboutUs } from "./sections/AboutUs/AboutUs";
import { FoundersSection } from "./sections/FounderSection/FounderSection";



// export const About = (): JSX.Element => {
//   return (
//     <div className="w-full">
//       <div className="relative w-full">
//         <Navbar />

//         <AboutUs />

//         <FoundersSection />

//         <Footer />
//       </div>
//     </div>
//   );
// };



export const About = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* Gradient background covering Navbar and upper half of AboutUs */}
        <div className="absolute top-[88px] left-0 w-full h-[800px] z-[-1] bg-gradient-to-b from-[#c4ebff] to-transparent" />

        {/* Navbar */}
        <Navbar />

        {/* About Us Section */}
        <AboutUs />

        {/* Founder Section */}
        <FoundersSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};