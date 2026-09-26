import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6">
      <a
        href="https://wa.me/+917738812758"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default WhatsAppWidget;
