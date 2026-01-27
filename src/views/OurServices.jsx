import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from 'react-router-dom';

const flagData = [
  { name: "Bahrain", src: "Bahrain.jpg" },
  { name: "Egypt", src: "Egypt.jpg" },
  { name: "India", src: "India.jpg" },
  { name: "Kuwait", src: "Kuwait.jpg" },
  { name: "Morocco", src: "Morocco.jpg" },
  { name: "Oman", src: "Oman.jpg" },
  { name: "Qatar", src: "qatar.jpg" },
  { name: "Saudi Arabia", src: "Saudi Arabia.jpg" },
  { name: "Turkey", src: "Turkey.jpg" },
  { name: "UAE", src: "UAE.jpg" },
];

const servicesdata = [
  { name: "Media Management", src: "Media Management.JPG", description: "Building meaningful media relationships that amplify your voice." },
  { name: "Strategic Consultation", src: "Strategic Consultation.JPG", description: "Turning insights into action and results." },
  { name: "Media Training", src: "Media Training.JPG", description: "Preparing your team to communicate confidently in both Arabic and English." },
  { name: "Thought Leadership", src: "Thought_Leadership.jpg", description: "Building visibility and Staying updated." },
  { name: "Media Monitoring", src: "Media_Monitoring.jpg", description: "Stay updated with the latest mentions of your brand and sectorial happenings." },
  { name: "Product Launches", src: "Product Launches.JPG", description: "Creating buzz, awareness, and lasting impact from day one." },
  { name: "Crisis & Issues Management", src: "Crisis & Issues Management.JPG", description: "From rapid-response statements to full-scale crisis strategies." },
  { name: "Content Strategy & Creation", src: "Content Strategy & Creation.JPG", description: "Crafting compelling stories that resonate across channels." },
  { name: "Influencer Marketing", src: "Influencer Marketing.JPG", description: "Leveraging authentic voices to amplify your message and reach." },
  { name: "Community Management", src: "Community Management.JPG", description: "Connecting with audiences and fostering engagement." },
];

const primaryOrange = "text-[#FF6600]";

// Tailwind plugin note: Ensure you have "scrollbar-hide" or use standard CSS for overflow
export default function OurServices() {
  const NUM_SECTIONS = 5;
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false);
  const isWaitingForInput = useRef(false);

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
      setTimeout(() => {
        isScrolling.current = false;
      }, 1200);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      scrollToSection(currentSection);
    }
  }, [currentSection, scrollToSection]);

  const handleWheel = useCallback(
    (event) => {
      if (window.innerWidth <= 1024) return;
      const delta = event.deltaY;
      const direction = delta > 0 ? 1 : -1;
      if (direction > 0 && currentSection === NUM_SECTIONS - 1) return;
      
      if (isScrolling.current || isWaitingForInput.current || Math.abs(delta) < 10) return;
      
      let newSection = currentSection + direction;
      if (newSection >= 0 && newSection < NUM_SECTIONS) {
        event.preventDefault();
        isWaitingForInput.current = true;
        setCurrentSection(newSection);
        setTimeout(() => {
          isWaitingForInput.current = false;
        }, 800);
      }
    },
    [currentSection]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <div id="scroll-container" className="overflow-x-hidden bg-[#111]">
      
      {/* 1. HERO SECTION - UPDATED FOR MOBILE */}
      <div
        ref={sectionRefs.current[0]}
        className="relative min-h-[85vh] lg:h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <img
          src="/Why_OAK.jpg"
          alt="Oak Consulting Hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 lg:bg-black/50" />
        <div className="relative flex flex-col items-center justify-center text-center px-6 z-10 w-full">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 max-w-5xl tracking-tight">
            Managing Communications
            <br /> <span className="text-[#ff6600] inline-block mt-2">Crafting Reputation</span>
          </h1>
          <h2 className="text-lg md:text-2xl text-zinc-100 font-medium max-w-2xl leading-relaxed">
            We don't onboard clients, we invite success partners. <br className="hidden md:block" /> 
            <span className="opacity-90">Your goal, our commitment, one team.</span>
          </h2>
          {/* Mobile Scroll Indicator */}
          <div className="absolute bottom-10 animate-bounce lg:hidden">
            <div className="w-1 h-8 bg-gradient-to-b from-[#ff6600] to-transparent"></div>
          </div>
        </div>
      </div>

      {/* 2. ABOUT/STORY SECTION */}
      <div
        ref={sectionRefs.current[1]}
        className="min-h-screen lg:h-screen flex justify-center items-center bg-[#1a1a1a] text-white p-6 md:p-10"
      >
        <div className="max-w-5xl mx-auto py-12">
          <div className="space-y-8 text-lg md:text-2xl leading-relaxed text-center md:text-justify">
            <p className="font-semibold text-[#ff6600] uppercase tracking-widest text-sm mb-4">Our Legacy</p>
            <p>
              Established in 2004, OAK Consulting is a young and dynamic Public Relations and Communications company headquartered in the UAE.
            </p>
            <p>
              With decades of PR experience spanning the Middle East, India, Africa, and beyond, we have built a proven track record of delivering impactful strategies for a diverse range of clients.
            </p>
            <p>
              While we are widely recognized as a specialist Tech PR agency, our expertise extends across lifestyle, consumer products, travel, tourism, and other sectors.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SERVICES SECTION */}
      <div
        ref={sectionRefs.current[2]}
        className="min-h-screen lg:h-screen flex flex-col justify-center bg-[#222] p-4 md:p-6"
      >
        <div className="pt-8 pb-6 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Our <span className={primaryOrange}>Services</span>
            </h2>
            <div className="flex justify-center mt-4">
              <div className="h-1.5 bg-[#ff6600] w-24"></div>
            </div>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto lg:overflow-visible py-4 scrollbar-hide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto px-4 pb-10">
            {servicesdata.map((service, index) => (
              <div
                key={index}
                className="relative group w-full h-48 md:h-64 overflow-hidden rounded-xl shadow-2xl cursor-pointer"
              >
                <img
                  src={`services/${service.src}`}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent lg:bg-black/80 flex flex-col items-center justify-end lg:justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 p-4">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2 text-center">
                    {service.name}
                  </h3>
                  <p className="text-zinc-200 text-sm text-center line-clamp-2 lg:line-clamp-none">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. REACH SECTION */}
      <div
        ref={sectionRefs.current[3]}
        className="min-h-screen lg:h-screen flex flex-col justify-center items-center bg-[#1a1a1a] p-6 md:p-10"
      >
        <div className="max-w-5xl w-full text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Our <span className={primaryOrange}>Reach</span>
          </h2>
          <div className="flex justify-center mt-4 mb-8">
            <div className="h-1.5 bg-[#ff6600] w-24"></div>
          </div>
          <p className="text-lg md:text-2xl text-zinc-300 px-4 leading-relaxed">
            With a strategic presence across the Middle East, North Africa, and South Asia, we bridge brands to global audiences.
          </p>
        </div>

        <div className="w-full overflow-hidden py-10">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...flagData, ...flagData].map((flag, index) => (
              <div
                key={index}
                className="flex flex-col items-center mx-8 md:mx-12 flex-shrink-0"
              >
                <img
                  src={`/flags/${flag.src}`}
                  alt={flag.name}
                  className="h-16 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition duration-500"
                />
                <p className="text-sm md:text-base text-zinc-400 mt-4 font-semibold tracking-wide">{flag.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. FINAL CTA SECTION */}
      <div
        ref={sectionRefs.current[4]}
        className="min-h-screen lg:h-screen flex flex-col justify-center bg-[#111] items-center p-6 md:p-10"
      >
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h2 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight">
            Curious About
            <br />
            <span className="text-[#FF6600]">What We Can Do?</span>
          </h2>
          <p className="text-lg md:text-2xl text-zinc-400 mx-auto leading-relaxed mb-12">
            Discover how our strategic PR solutions can elevate your brand and
            drive real results. Let's build your story together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to={'/getintouch'} className="bg-[#FF6600] text-white font-bold py-4 px-12 rounded-full text-xl shadow-orange-500/20 shadow-2xl hover:bg-[#e65c00] transition-all transform hover:scale-105">
              Start Exploring
            </Link>
            <button
              onClick={() => window.open("https://wa.me/971501560546", "_blank")}
              className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-4 px-12 rounded-full text-xl hover:bg-green-500 hover:text-white transition-all transform hover:scale-105"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}