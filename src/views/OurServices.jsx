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

// 1. SERVICES REORGANIZED (1-10 Sequence)
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
    description: "Building visibility and Staying updated.", // REWRITTEN
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
      if (window.innerWidth <= 1024) {
        return;
      }

      const delta = event.deltaY;
      const direction = delta > 0 ? 1 : -1;

      if (direction > 0 && currentSection === NUM_SECTIONS - 1) {
        return;
      }

      event.preventDefault();

      if (isScrolling.current || isWaitingForInput.current || Math.abs(delta) < 10) {
        return;
      }

      let newSection = currentSection + direction;

      if (direction < 0 && currentSection === 0) {
        return;
      }

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
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  return (
    <div id="scroll-container">
      {/* 1. HERO SECTION (Updated Punctuation) */}
      <div
        ref={sectionRefs.current[0]}
        className="section-height relative overflow-hidden"
      >
        <img
          src="/Why_OAK.jpg"
          alt="Oak Consulting Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4 z-10">
          <div className="relative text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Managing Communications
              <br /> <span className="text-[#ff6600]">Crafting Reputation</span>
            </h1>
            <h2 className="mt-4 text-base md:text-xl max-w-3xl mx-auto">
              We don't onboard clients, we invite success partners - Your goal, our commitment, one team
            </h2>
          </div>
        </div>
      </div>

      {/* 2. ABOUT/STORY SECTION (Updated Punctuation) */}
      <div
        ref={sectionRefs.current[1]}
        className="section-height flex flex-col items-center justify-center backgroud-color1 text-white p-6 md:p-10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-justify text-white text-lg md:text-xl leading-relaxed">
              Established in 2004, OAK Consulting is a young and dynamic Public Relations and Communications company headquartered in the UAE.
            </p>
            <p className="text-justify text-white text-lg md:text-xl leading-relaxed">
              With decades of PR experience spanning the Middle East, India, Africa, and beyond, we have built a proven track record of delivering impactful communications strategies for a diverse range of clients. Our growth has been driven entirely by the trust and recommendations of the organizations we work with, reflecting the long-lasting relationships we cultivate.
            </p>
            <p className="text-justify text-white text-lg md:text-xl leading-relaxed">
              While we are widely recognized as a specialist Tech PR agency, our expertise extends across lifestyle, consumer products, travel, tourism, and other sectors, enabling us to craft tailored campaigns that resonate with varied audiences. Our holistic approach, strategic insight, and dedication drives measurable results. We are perceived as trusted partners for brands looking to scale their presence and tell their stories with impact.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SERVICES SECTION (Updated Order and Tagline) */}
      <div
        ref={sectionRefs.current[2]}
        className="section-height flex flex-col items-center justify-center backgroud-color2 p-6 md:p-10"
      >
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
            Our <span className={primaryOrange}>Services</span>
          </h2>
          <div className="flex justify-center mt-3 mb-6">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <p className="text-white text-center text-lg md:text-xl font-medium mb-8 md:mb-10">
            Building visibility and Staying updated.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 text-center">
            {servicesdata.map((service, index) => (
              <div
                key={index}
                className="relative group w-full h-40 md:h-44 overflow-hidden rounded-xl shadow-xl cursor-pointer"
              >
                <img
                  src={`services/${service.src}`}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-500 p-4">
                  <h3 className="text-white text-base md:text-lg font-bold mb-1">
                    {service.name}
                  </h3>
                  <p className="text-white text-[10px] md:text-xs px-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. REACH (FLAGS) SECTION */}
      <div
        ref={sectionRefs.current[3]}
        className="section-height flex flex-col justify-center items-center backgroud-color1 p-6 md:p-10"
      >
        <div className="flex flex-col items-center max-w-5xl w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
            Our <span className={primaryOrange}>Reach</span>
          </h2>
          <div className="flex justify-center mt-3 mb-6">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <p className="text-lg md:text-xl text-center text-white mb-8 md:mb-10 max-w-3xl">
            With a strategic presence across the Middle East, North Africa, and South Asia
          </p>
        </div>

        <div className="w-full overflow-hidden py-10  ">
          <div className="flex animate-scroll space-x-12 px-6">
            {[...flagData, ...flagData].map((flag, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0"
              >
                <img
                  src={`/flags/${flag.src}`}
                  alt={flag.name}
                  className="h-12 md:h-16 w-auto object-contain hover:grayscale transition duration-300"
                />
                <p className="text-xs md:text-sm text-gray-800 mt-2 font-medium">{flag.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. FINAL CTA SECTION */}
      <div
        ref={sectionRefs.current[4]}
        className="section-height flex flex-col justify-center backgroud-color2 items-center p-6 md:p-10 relative"
      >
        <div className="relative z-10 text-center text-white max-w-4xl">
          <h2 className="text-3xl md:text-[37px] font-extrabold mb-3">
            Curious About
            <span className="text-[#FF6600]"> What We Can Do for You ?</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-[120px]"></div>
          </div>
          <p className="text-lg md:text-xl mx-auto leading-relaxed mt-8 md:mt-10 mb-8 md:mb-10">
            Discover how our strategic PR solutions can elevate your brand and
            drive real results. <br className="hidden md:block" /> Explore our services and take the first
            step toward your success story.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-5">
            <Link to={'/getintouch'} className="bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg tracking-wider hover:scale-105">
              Start Exploring
            </Link>
            <button
              onClick={() => window.open("https://wa.me/+971557343840", "_blank")}
              className="text-green-500 cursor-pointer bg-white border border-green-500 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-500 hover:text-white transition duration-300 shadow-lg tracking-wider"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
