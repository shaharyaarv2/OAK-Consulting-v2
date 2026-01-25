import React, { useState, useRef, useEffect, useCallback } from "react";
import {Link } from 'react-router-dom'
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
    name: "Community Management",
    src: "Community Management.JPG",
    description: "Connecting with audiences and fostering engagement.",
  },
  {
    name: "Content Strategy & Creation",
    src: "Content Strategy & Creation.JPG",
    description: "Crafting compelling stories that resonate across channels.",
  },
  {
    name: "Crisis & Issues Management",
    src: "Crisis & Issues Management.JPG",
    description:
      "From rapid-response statements to full-scale crisis strategies.",
  },
  {
    name: "Influencer Marketing",
    src: "Influencer Marketing.JPG",
    description:
      "Leveraging authentic voices to amplify your message and reach.",
  },
  {
    name: "Media Management",
    src: "Media Management.JPG",
    description:
      "Building meaningful media relationships that amplify your voice.",
  },
  {
    name: "Media Training",
    src: "Media Training.JPG",
    description:
      "Preparing your team to communicate confidently in both Arabic and English.",
  },
  {
    name: "Product Launches",
    src: "Product Launches.JPG",
    description: "Creating buzz, awareness, and lasting impact from day one.",
  },
  {
    name: "Strategic Consultation",
    src: "Strategic Consultation.JPG",
    description: "Turning insights into action and results.",
  },
];

const primaryOrange = "text-[#FF6600]";

// ==========================================================
// SCROLL LOGIC INTEGRATION (5 Sections)
// ==========================================================

export default function WhatWeDo() {
  const NUM_SECTIONS = 5;
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false);
  const isWaitingForInput = useRef(false);

  // Initialize refs array
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

  const handleWheel = useCallback(
    (event) => {
      const delta = event.deltaY;
      const direction = delta > 0 ? 1 : -1;

      // 🔥 CRITICAL FIX FOR FOOTER: Allow native scroll past the last section
      if (direction > 0 && currentSection === NUM_SECTIONS - 1) {
        return;
      }

      // Block native scroll for all controlled movements
      event.preventDefault();

      // Lock 1: Prevent section change while the smooth scroll animation is running
      if (isScrolling.current) {
        return;
      }

      // Lock 2: Prevent rapid successive inputs
      if (isWaitingForInput.current) {
        return;
      }

      // Check if the scroll input is large enough to register a section change
      if (Math.abs(delta) < 10) {
        return;
      }

      let newSection = currentSection + direction;

      // Boundary Checks:
      if (direction < 0 && currentSection === 0) {
        // Allow native scroll above the first section
        return;
      }

      // Only update section if it's within bounds
      if (newSection >= 0 && newSection < NUM_SECTIONS) {
        isWaitingForInput.current = true;
        setCurrentSection(newSection);

        // Reset the input lock after 800ms for a softer feel
        setTimeout(() => {
          isWaitingForInput.current = false;
        }, 800);
      }
    },
    [currentSection]
  );

  useEffect(() => {
    // Attach the listener to the window/document to control the entire page scroll
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  // ==========================================================
  // COMPONENT STRUCTURE (5 Sections with h-screen and ref)
  // ==========================================================

  return (
    <div id="scroll-container">
      {/* 1. HERO SECTION (index 0) */}
      <div
        ref={sectionRefs.current[0]}
        className="relative h-screen overflow-hidden"
      >
        {/* ... Hero Content ... */}
        <img
          src="/Why_OAK.jpg"
          alt="Oak Consulting Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4 z-10">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            Managing Communications
            <br /> <span className="text-[#ff6600]">Crafting Experiences</span>
          </h1>
          <h2 className="text-lg md:text-xl text-white">
            We don’t just onboard clients, we make them famous.
          </h2>
        </div>
      </div>

      {/* 2. ABOUT/STORY SECTION (index 1) */}
      <div
        ref={sectionRefs.current[1]}
        className="h-screen flex justify-center items-center backgroud-color1 text-white py-10 px-4 sm:px-6 lg:px-8"
      >
        {/* Removed overflow-y-auto, letting flex centering handle layout */}
        <div className="max-w-6xl mx-auto py-8">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-2xl md:text-2xl text-justify md:px-25 px-10 mt-5">
              Established in 2004 OAK Consulting is a young and dynamic Public
              Relations and Communications company headquartered in the UAE{" "}
            </p>
            <p className="text-2xl md:text-2xl text-justify md:px-25 px-10 mt-5">
              With decades of PR experience spanning the Middle East, India,
              Africa, and beyond, we have built a proven track record of
              delivering impactful communications strategies for a diverse range
              of clients. Our growth has been driven entirely by the trust and
              recommendations of the organizations we work with, reflecting the
              long-lasting relationships we cultivate.
            </p>
            <p className="text-2xl md:text-2xl text-justify md:px-25 px-10 mt-5">
              While we are widely recognized as a specialist Tech PR agency, our
              expertise extends across lifestyle, consumer products, travel,
              tourism, and other sectors, enabling us to craft tailored
              campaigns that resonate with varied audiences. Our holistic
              approach, strategic insight, and dedication to measurable results
              have made us a trusted partner for brands looking to elevate their
              presence and tell their stories effectively.
            </p>
          </div>
        </div>
      </div>

      {/* 3. SERVICES SECTION (index 2) - SCROLLBAR FIX APPLIED HERE */}
      <div
        ref={sectionRefs.current[2]}
        className="h-screen flex flex-col justify-center backgroud-color2 p-4"
      >
        <div className="pt-4 pb-3 px-4 sm:px-6 lg:px-8 flex-shrink-0">
          <div className="max-w-7xl mx-auto">
            <h2
              className={`md:text-5xl text-3xl font-bold text-center text-white`}
            >
              Our <span className={primaryOrange}>Services</span>
            </h2>
            <div className="flex justify-center mt-3">
              <div className="h-1 bg-[#ff6600] w-30"></div>
            </div>
          </div>
        </div>

        {/* Removed 'overflow-y-auto' from this wrapper to eliminate the nested scrollbar */}
        <div className="flex justify-center flex-grow py-5 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center max-w-7xl px-4 ">
            {/* The individual grid items' heights need to be flexible enough to avoid forcing overflow here. */}
            {servicesdata.map((service, index) => (
              <div
                key={index}
                className="relative group w-full h-55 overflow-hidden rounded-lg shadow-xl cursor-pointer"
              >
                <img
                  src={`services/${service.src}`}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-500 p-4">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {service.name}
                  </h3>
                  <p className="text-white text-sm px-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. REACH (FLAGS) SECTION (index 3) */}
      <div
        ref={sectionRefs.current[3]}
        className="h-screen flex flex-col justify-center items-center backgroud-color1 p-10"
      >
        <div className="flex flex-col items-center max-w-5xl w-full">
          <h2 className={`md:text-5xl text-3xl font-bold text-center text-white`}>
            Our <span className={primaryOrange}>Reach</span>
          </h2>
          <div className="flex justify-center mt-3 mb-6">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>
          <p className="text-xl text-center px-10 mb-10 text-white">
            With a strategic presence across the Middle East, North Africa, and
            South Asia, OAK Consulting delivers comprehensive PR and
            communications solutions across diverse markets. Our regional
            expertise spans the GCC countries, MENA region, and beyond.
          </p>
        </div>

        {/* Flags Carousel */}
        <div className="w-full overflow-hidden py-5 flex justify-center">
          <div className="flex animate-scroll space-x-8">
            {[...flagData, ...flagData].map((flag, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0"
              >
                <img
                  src={`/flags/${flag.src}`}
                  alt={flag.name}
                  className="h-16 w-auto object-contain hover:grayscale-100 transition duration-300"
                />
                <p className="text-sm text-gray-600 mt-2">{flag.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. FINAL CTA SECTION (index 4) */}
      <div
        ref={sectionRefs.current[4]}
        className="h-screen flex flex-col justify-center backgroud-color1 items-center p-10 bg-cover bg-center "
      >
        <div className="relative p-10 z-10 text-center text-white  max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
            Curious About
            <span className="text-[#FF6600]"> What We Can Do for You ?</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>
          <p className=" text-xl mx-auto leading-7 mt-12">
            Discover how our strategic PR solutions can elevate your brand and
            drive real results. <br /> Explore our services and take the first
            step toward your success story.
          </p>

          <div className="flex justify-center gap-5 mt-16">
            <Link to={'/getintouch'} className="bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full text-lg  transition duration-300 shadow-lg tracking-wider hover:cursor-pointer hover:text-orange-600 hover:bg-white hover:border hover:border-orange-600">
              Start Exploring
            </Link>
            <button
              onClick={() => window.open("https://wa.me/971501560546", "_blank")}
              className="text-green-500 bg-white border border-green-500 font-bold py-3 px-8 rounded-full text-lg hover:bg-green-500 hover:text-white transition duration-300 shadow-lg tracking-wider hover:cursor-pointer"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
