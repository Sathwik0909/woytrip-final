// import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { InstagramIcon, MailIcon, PhoneCallIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import logo from "../../../../assets/images/mainLogo.png";
import msme from "../../../../assets/images/msme logo.svg";

export const Footer = (): JSX.Element => {
  const companyLinks = [
    { title: "About", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Mobile", href: "#" },
  ];

  const contactLinks = [
    { title: "Help/FAQ", href: "#" },
    { title: "Press", href: "#" },
    { title: "Affilates", href: "#" },
  ];

  // const moreLinks = [
  //   // { title: "Airlinefees", href: "#" },
  //   // { title: "Airline", href: "#" },
  //   { title: "Low fare tips", href: "#" },
  // ];

  const socialMedia = [
    {
      icon: <InstagramIcon size={28} />,
      href: "https://www.instagram.com/woytrip/profilecard/?igsh=ZjhkbnlvOHZvYWlu", // replace with actual link
    },
    {
      icon: <MailIcon size={28} />,
      href: "mailto:youremail@example.com", // replace with actual email
    },
    {
      icon: <PhoneCallIcon size={28} />,
      href: "https://wa.me/918885523545", // replace with actual WhatsApp number with country code
    },
  ];

  return (
    <footer className="w-full px-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row justify-between items-start">
        {/* Logo */}
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start gap-12">
          <motion.img
            src={logo}
            alt="WayTrav Logo"
            className="w-[200px] object-contain transition-transform duration-300  hover:scale-125"
          />
        </div>
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
          <motion.img
            src={msme}
            alt="WayTrav Logo"
            className="w-[200px] object-contain transition-transform duration-300  hover:scale-125"
          />
        </div>

        {/* Links */}
        <div className="w-full lg:w-2/4 flex flex-col sm:flex-row justify-between gap-12 text-center sm:text-left">
          {/* Column: Company */}
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-4 text-black">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Contact */}
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-4 text-black">Contact</h3>
            <ul className="space-y-3">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: More */}
          {/* <div className="flex-1">
            <h3 className="font-bold text-xl mb-4 text-black">More</h3>
            <ul className="space-y-3">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Social Media */}
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-end">
          <div className="flex gap-12 ">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-125 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom spacing or divider */}
      <div className="mt-12 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} WayTrav. All rights reserved.
      </div>
    </footer>
  );
};
      