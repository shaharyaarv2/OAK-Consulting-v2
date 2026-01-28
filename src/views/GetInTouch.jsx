import React, { useState, useRef, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";

const primaryOrange = "text-[#FF6600]";

// ==========================================================
// FULL-PAGE SCROLL LOGIC
// ==========================================================

function GetInTouch() {
  const NUM_SECTIONS = 3; 
  const [currentSection, setCurrentSection] = useState(0);
  // State for form submission status message
  const [formStatus, setFormStatus] = useState(null); // { message: string, type: 'success' | 'error' }
  
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false);
  const isWaitingForInput = useRef(false);
  
  // Ref specifically for EmailJS to grab the form data
  const formRef = useRef();

  // Initialize refs array for scrolling
  if (sectionRefs.current.length !== NUM_SECTIONS) {
    sectionRefs.current = Array(NUM_SECTIONS)
      .fill(0)
      .map((_, i) => sectionRefs.current[i] || React.createRef());
  }

  const scrollToSection = useCallback((index) => {
    if (sectionRefs.current[index] && sectionRefs.current[index].current) {
      isScrolling.current = true;

      window.scrollTo({
        top: sectionRefs.current[index].current.offsetTop,
        behavior: "smooth",
      });

      // Reset the smooth scroll lock after animation duration (1200ms)
      setTimeout(() => {
        isScrolling.current = false;
      }, 1200);
    }
  }, []);

  useEffect(() => {
    scrollToSection(currentSection);
  }, [currentSection, scrollToSection]);

  const handleWheel = useCallback((event) => {
    const delta = event.deltaY;
    const direction = delta > 0 ? 1 : -1;

    if (direction > 0 && currentSection === NUM_SECTIONS - 1) return;
    event.preventDefault();

    if (isScrolling.current || isWaitingForInput.current) return;
    if (Math.abs(delta) < 10) return;

    let newSection = currentSection + direction;

    if (direction < 0 && currentSection === 0) return;

    if (newSection >= 0 && newSection < NUM_SECTIONS) {
      isWaitingForInput.current = true;
      setCurrentSection(newSection);
      setTimeout(() => {
        isWaitingForInput.current = false;
      }, 800);
    }
  }, [currentSection]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);


  // ==========================================================
  // FORM LOGIC (EMAILJS INTEGRATION)
  // ==========================================================

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these strings with your actual EmailJS credentials
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setFormStatus({
          message: "Thank you! Your message has been sent successfully.",
          type: 'success'
        });
        
        // Reset form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      }, (error) => {
        console.error("EmailJS Error:", error);
        setFormStatus({
          message: "Oops! Something went wrong. Please try again later.",
          type: 'error'
        });
      });

    // Auto-dismiss message after 5 seconds
    setTimeout(() => setFormStatus(null), 5000);
  };

  // ==========================================================
  // RENDER HELPERS
  // ==========================================================

  const FormStatusMessage = () => {
    if (!formStatus) return null;

    const bgColor = formStatus.type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700';
    const accentColor = formStatus.type === 'success' ? 'hover:bg-green-200' : 'hover:bg-red-200';

    return (
        <div className={`fixed bottom-5 right-5 z-50 p-4 border rounded-lg shadow-xl max-w-sm ${bgColor}`} role="alert">
            <div className="flex justify-between items-start">
                <span>{formStatus.message}</span>
                <button 
                    onClick={() => setFormStatus(null)} 
                    className={`ml-3 -mt-1 p-1 rounded-full ${accentColor} transition`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
  };


  return (
    <div id="scroll-container">
        <FormStatusMessage />

        {/* 1. HERO SECTION (index 0) */}
        <div 
            ref={sectionRefs.current[0]}
            className="relative h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('Contact_us.JPG')" }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-center text-white px-4">
                <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight">
                    Let's <span className={primaryOrange}>Connect</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl mx-auto max-w-lg">
                    We are here to answer your questions and start a conversation about
                    your brand's future.
                </p>
            </div>
        </div>

        {/* 2. CONTACT INFO & FORM SECTION (index 1) */}
        <div 
            ref={sectionRefs.current[1]}
            className="h-screen flex items-center justify-center bg-[#0a0a0a] p-4"
        >
            <div className="max-w-7xl mx-auto w-full max-h-full overflow-y-auto py-10 md:py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left Column: Contact Information */}
                    <div className="space-y-8 p-4 lg:p-0">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Contact Information
                            </h2>
                            <p className="text-white">
                                Reach out to us through any of the following channels. We look
                                forward to hearing from you.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="text-orange-600 mt-1 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Our Office</h4>
                                    <p className="text-gray-50">
                                        Office 33, Floor 9, Business Towers,<br />
                                        Burjuman Mall, Dubai, UAE
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="text-orange-600 mt-1 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Email Us</h4>
                                    <a href="mailto:contact@oakconsulting.com" className="text-blue-400 hover:underline">
                                        contact@oakconsulting.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-[#1a1a1a] p-8 rounded-xl shadow-2xl border border-gray-800">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                        
                        {/* Attach formRef here */}
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name *"
                                    required
                                    onChange={handleChange}
                                    value={formData.firstName}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name *"
                                    required
                                    onChange={handleChange}
                                    value={formData.lastName}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
                                />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email *"
                                required
                                onChange={handleChange}
                                value={formData.email}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
                            />
                            <textarea
                                name="message"
                                placeholder="Tell us how we can help you..."
                                rows="5"
                                onChange={handleChange}
                                value={formData.message}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-gray-800 border border-gray-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition duration-300 shadow-xl shadow-orange-600/30"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* 3. MAP SECTION (index 2) */}
        <div 
            ref={sectionRefs.current[2]}
            className="h-screen flex flex-col justify-center items-center bg-[#0f0f0f] p-4 sm:p-6"
        >
            <div className="max-w-7xl w-full text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Find Our <span className="text-orange-500">Location</span> 📍
                </h2>
                <div className="flex justify-center mt-3">
                    <div className="h-1 bg-[#ff6600] w-20"></div>
                </div>
            </div>
            <div className="max-w-5xl w-full h-[65vh] mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe
                    title="Office Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8252274431713!2d55.3013!3d25.2424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE0JzMyLjYiTiA1NcKwMTgnMDUuMCJF!5e0!3m2!1sen!2sae!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </div>
  );
}

export default GetInTouch;
