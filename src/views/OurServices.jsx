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
  {
    name: "Media Management",
    src: "Media Management.JPG",
    description: "Building meaningful media relationships that amplify your voice.",
  },
  {
    name: "Strategic Consultation",
    src: "Strategic Consultation.JPG",
    description: "Turning insights into action and results.",
  },
  {
    name: "Media Training",
    src: "Media Training.JPG",
    description: "Preparing your team to communicate confidently in both Arabic and English.",
  },
  {
    name: "Thought Leadership",
    src: "Thought_Leadership.jpg",
    description: "Building visibility and Staying updated.",
  },
  {
    name: "Media Monitoring",
    src: "Media_Monitoring.jpg",
    description: "Stay updated with the latest mentions of your brand and sectorial happenings.",
  },
  {
    name: "Product Launches",
    src: "Product Launches.JPG",
    description: "Creating buzz, awareness, and lasting impact from day one.",
  },
  {
    name: "Crisis & Issues Management",
    src: "Crisis & Issues Management.JPG",
    description: "From rapid-response statements to full-scale crisis strategies.",
  },
  {
    name: "Content Strategy & Creation",
    src: "Content Strategy & Creation.JPG",
    description: "Crafting compelling stories that resonate across channels.",
  },
  {
    name: "Influencer Marketing",
    src: "Influencer Marketing.JPG",
    description: "Leveraging authentic voices to amplify your message and reach.",
  },
  {
    name: "Community Management",
    src: "Community Management.JPG",
    description: "Connecting with audiences and fostering engagement.",
  },
];

const primaryOrange = "text-[#FF6600]";

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
      event.preventDefault();
      if (isScrolling.current || isWaitingForInput.current || Math.abs(delta) < 10) return;
      let newSection = currentSection + direction;
      if (direction < 0 && currentSection === 0) return;
      if (newSection >= 0 && newSection < NUM_SECTIONS) {
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
    <div id="scroll-container" className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <div
        ref={sectionRefs.current[0]}
        className="section-height relative overflow-hidden"
      >
        <img
          src="/Why_OAK.jpg"
          alt="Oak Consulting Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative flex flex-col items-center justify-center h-full text-center px-6 z-10">
          <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            Managing Communications
            <br /> <span className="text-[#ff6600]">Crafting Reputation</span>
          </h1>
          <h2 className="text-base md:text-xl text-zinc-100 font-medium max-w-2xl">
            We don't onboard clients, we invite success partners - Your goal, our commitment, one team
          </h2>
        </div>
      </div>

      {/* 2. ABOUT/STORY SECTION */}
      <div
        ref={sectionRefs.current[1]}
        className="section-height flex justify-center items-center backgroud-color1 text-white p-6 md:p-10"
      >
        <div className="max-w-5xl mx-auto py-8">
          <div className="space-y-6 md:space-y-8 text-lg leading-relaxed md:px-10">
            <p className="text-xl md:text-2xl text-justify">
              Established in 2004 OAK Consulting is a young and dynamic Public Relations and Communications company headquartered in the UAE.
            </p>
            <p className="text-xl md:text-2xl text-justify">
              With decades of PR experience spanning the Middle East, India, Africa, and beyond, we have built a proven track record of delivering impactful communications strategies for a diverse range of clients.
            </p>
            <p className="text-xl md:text-2xl text-justify">
              While we are widely recognized as a specialist Tech PR agency, our expertise extends across lifestyle, consumer products, travel, tourism, and other sectors.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SERVICES SECTION */}
      <div
        ref={sectionRefs.current[2]}
        className="section-height flex flex-col justify-center backgroud-color2 p-4 md:p-6 overflow-hidden"
      >
        <div className="pt-4 pb-3 px-4 flex-shrink-0">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
              Our <span className={primaryOrange}>Services</span>
            </h2>
            <div className="flex justify-center mt-3">
              <div className="h-1 bg-[#ff6600] w-20 md:w-30"></div>
            </div>
            <p className="text-white text-center mt-4 text-base md:text-xl font-medium">
                Building visibility and Staying updated.
            </p>
          </div>
        </div>

        <div className="flex justify-center flex-grow py-5 overflow-y-auto scrollbar-hide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 text-center max-w-7xl px-2 md:px-4">
            {servicesdata.map((service, index) => (
              <div
                key={index}
                className="relative group w-full h-40 md:h-55 overflow-hidden rounded-lg shadow-xl cursor-pointer bg-black/20"
              >
                <img
                  src={`services/${service.src}`}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 md:p-4">
                  <h3 className="text-white text-xs md:text-lg font-bold mb-1 md:mb-2 leading-tight">
                    {service.name}
                  </h3>
                  <p className="text-white text-[10px] md:text-sm line-clamp-3 md:line-clamp-none">
                    {service.description}
                  </p>
                </div>
                {/* Mobile text visibility helper */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 md:hidden p-1">
                   <h3 className="text-white text-[10px] font-bold truncate">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. REACH SECTION */}
      <div
        ref={sectionRefs.current[3]}
        className="section-height flex flex-col justify-center items-center backgroud-color1 p-6 md:p-10 overflow-hidden"
      >
        <div className="flex flex-col items-center max-w-5xl w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
            Our <span className={primaryOrange}>Reach</span>
          </h2>
          <div className="flex justify-center mt-3 mb-6">
            <div className="h-1 bg-[#ff6600] w-20 md:w-30"></div>
          </div>
          <p className="text-lg md:text-xl text-center px-4 md:px-10 mb-8 md:mb-10 text-white leading-relaxed">
            With a strategic presence across the Middle East, North Africa, and South Asia...
          </p>
        </div>

        <div className="w-full overflow-hidden py-5 flex justify-center">
          <div className="flex animate-scroll space-x-6 md:space-x-10">
            {[...flagData, ...flagData].map((flag, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0"
              >
                <img
                  src={`/flags/${flag.src}`}
                  alt={flag.name}
                  className="h-12 md:h-16 w-auto object-contain transition duration-300"
                />
                <p className="text-[10px] md:text-sm text-gray-700 mt-2 font-medium">{flag.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. FINAL CTA SECTION */}
      <div
        ref={sectionRefs.current[4]}
        className="section-height flex flex-col justify-center backgroud-color1 items-center p-6 md:p-10"
      >
        <div className="relative p-6 md:p-10 z-10 text-center text-white max-w-4xl">
          <h2 className="text-2xl md:text-5xl font-extrabold mb-4">
            Curious About
            <span className="text-[#FF6600]"> What We Can Do for You ?</span>
          </h2>
          <div className="flex justify-center mt-2">
            <div className="h-1 bg-[#ff6600] w-20 md:w-30"></div>
          </div>
          <p className="text-lg md:text-xl mx-auto leading-relaxed mt-10 md:mt-12">
            Discover how our strategic PR solutions can elevate your brand and
            drive real results. <br className="hidden md:block" /> Explore our services and take the first
            step toward your success story.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5 mt-10 md:mt-16">
            <Link to={'/getintouch'} className="bg-[#FF6600] text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg hover:scale-105 transition">
              Start Exploring
            </Link>
            <button
              onClick={() => window.open("https://wa.me/971501560546", "_blank")}
              className="text-green-500 bg-white border border-green-500 font-bold py-3 px-10 rounded-full text-lg hover:bg-green-500 hover:text-white transition"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
