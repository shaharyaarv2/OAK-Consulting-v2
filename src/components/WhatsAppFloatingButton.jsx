import React from 'react';
// Assuming you have a proper icon, like from 'react-icons' or an SVG.
// If you don't use 'react-icons', you can use a simple emoji '💬' or an SVG.
// You might need to install 'react-icons' if you want to use it: npm install react-icons

// import { FaWhatsapp } from 'react-icons/fa'; // Uncomment if using react-icons

const WhatsAppFloatingButton = () => {
    // ⚠️ Replace 'YOUR_WHATSAPP_NUMBER' with your actual number (e.g., 919876543210)
    const phoneNumber = '971501560546'; 
    const message = 'Hello, I came from your website and would like to know more!';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a 
            href={whatsappLink} 
            className="
                fixed 
                bottom-10 
                right-10 
                bg-green-500 
                hover:bg-green-600 
                text-white 
                p-4 
                rounded-full 
                shadow-lg 
                transition-transform 
                duration-300 
                ease-in-out 
                hover:scale-110 
                z-50 
                flex 
                items-center 
                justify-center 
                w-16 
                h-16
                text-3xl
            " 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            {/* If using react-icons: <FaWhatsapp /> */}
            <img src="wahtsapp.png" alt="" className='h-full w-full'/>
        </a>
    );
};

export default WhatsAppFloatingButton;