import { Button } from "./button";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "916281237311"; // Replace with your WhatsApp number
  const message = "Hello, I want a quote for your services";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };


  return (
    <Button
      onClick={handleClick}
      variant="outline"
      className="w-full text-blue-600 border-blue-600"
    >
      Call Expert
    </Button>
  );
};

export default WhatsAppButton;
