import { useState } from "react";
import { Mail, MapPin, List, Phone, User } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { motion } from "framer-motion";
import areoplane from "../../../../assets/images/choosen_us_areoplane.png";

export const NewsletterSection = (): JSX.Element => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [days, setDays] = useState("");
  const [persons, setPersons] = useState("");
  const [amenities, setAmenities] = useState("");

  const sendInquiry = async () => {
    const phoneNumber = "918885523545";

    const message = `*Travel Inquiry Request*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📧 *Email:* ${email}\n📍 *Travel Location:* ${location}\n📅 *Duration:* ${days} day(s)\n👥 *No. of Persons:* ${persons}\n🧳 *Preferred Amenities:* ${amenities}\n\nKindly share the available travel packages or a custom quote based on the above details.\n\nThank you.`;

    // Send to WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    // Send to Email
    try {
      const res = await fetch("http://localhost:5000/api/v1/mail/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          location,
          days,
          persons,
          amenities,
        }),
      });
      const result = await res.text();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.section
      className="w-full py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card
        className="w-full max-w-7xl mx-auto relative overflow-visible border-none shadow-lg bg-blue-50 p-10 sm:p-20 md:p-32 rounded-2xl"
        id="contact"
      >
        <motion.img
          src={areoplane}
          className="absolute top-[-20px] right-[-20px] w-16 sm:w-20 md:w-24"
          alt="Airplane"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        />

        <CardContent className="p-0 border-none text-center">
          <motion.h2
            className="font-semibold text-gray-800 text-[30px] sm:text-[33px] leading-snug"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Travel your way, not theirs.
            <br />
            Custom trips designed just for you.
          </motion.h2>

          <motion.div
            className="flex flex-col gap-4 w-full mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Name */}
            <div className="relative">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-[50px] pl-12 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500"
                placeholder="Your name"
              />
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            {/* Phone */}
            <div className="relative">
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-[50px] pl-12 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500"
                placeholder="Phone number"
              />
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            {/* Email */}
            <div className="relative">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-[50px] pl-12 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500"
                placeholder="Your email"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            {/* Location */}
            <div className="relative">
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-[50px] pl-12 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500"
                placeholder="Location"
              />
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            {/* Days & Persons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="number"
                min="1"
                max="30"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="Number of days"
                className="h-[50px] flex-grow text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500 px-4"
              />
              <Input
                type="number"
                min="1"
                max="30"
                value={persons}
                onChange={(e) => setPersons(e.target.value)}
                placeholder="Number of persons"
                className="h-[50px] flex-grow text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500 px-4"
              />
            </div>

            {/* Amenities */}
            <div className="relative">
              <Input
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
                className="h-[50px] pl-12 text-gray-700 border border-gray-300 rounded-lg focus:border-blue-500"
                placeholder="Amenities needed"
              />
              <List className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>

            {/* Button */}
            <Button
              onClick={sendInquiry}
              className="h-[50px] bg-blue-600 hover:bg-blue-700 text-white text-[16px] rounded-lg mt-4"
            >
              Get Quote
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
};
