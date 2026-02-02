import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  IconEye,
  IconTrendingUp,
  IconSpeakerphone,
  IconShieldHalfFilled,
  IconWorld,
  IconIkosaedr,
  IconBulb,
  IconBrandWechat,
  IconArrowRampRight,
  IconHeartHandshake,
} from "@tabler/icons-react";

export default function Whoweare() {
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

  const primaryOrange = "text-[#FF6600]";

  return (
    <div id="scroll-container" className="bg-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <div
        ref={sectionRefs.current[0]}
        className="section-height relative bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('Who_we_are.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Driving Impact
            <br /> <span className="text-[#FF6600]"> Building Brands </span>
          </h1>
          <h2 className=" text-base md:text-xl text-white mt-4 font-medium opacity-90">
            Why Choose Oak Consulting PR?
          </h2>
        </div>
      </div>
      
      {/* 2. EXPERTISE SECTION */}
      <div 
        ref={sectionRefs.current[1]} 
        className="section-height flex flex-col backgroud-color1 items-center justify-center p-6 md:py-10"
      >
        <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white ">
            Our <span className={primaryOrange}>Expertise</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-20 md:w-30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-10 md:mt-16 w-full">
            <div className="p-5 md:p-6 rounded-xl border border-white/20 flex items-start bg-white/5 backdrop-blur-sm text-white transition hover:bg-white/10">
              <div className="text-orange-500 flex-shrink-0 mr-4 pt-1"><IconEye stroke={2} size={28} /></div>
              <div><h3 className="text-lg md:text-xl font-bold mb-2">Enhanced Brand Visibility</h3><p className="text-sm md:text-base text-zinc-100 text-justify">We amplify your brand across digital and traditional channels, ensuring it reaches the right audience at the right time.</p></div>
            </div>
            <div className="p-5 md:p-6 rounded-xl border border-white/20 flex items-start bg-white/5 backdrop-blur-sm text-white transition hover:bg-white/10">
              <div className="text-orange-500 flex-shrink-0 mr-4 pt-1"><IconTrendingUp stroke={2} size={28} /></div>
              <div><h3 className="text-lg md:text-xl font-bold mb-2">Business Growth & Sales</h3><p className="text-sm md:text-base text-zinc-100 text-justify">Our integrated PR and marketing strategy drive engagement, generate leads and convert visibility into tangible business results.</p></div>
            </div>
            <div className="p-5 md:p-6 rounded-xl border border-white/20 flex items-start bg-white/5 backdrop-blur-sm text-white transition hover:bg-white/10">
              <div className="text-orange-500 flex-shrink-0 mr-4 pt-1"><IconSpeakerphone stroke={2} size={28} /></div>
              <div><h3 className="text-lg md:text-xl font-bold mb-2">Greater Brand Awareness</h3><p className="text-sm md:text-base text-zinc-100 text-justify">Our consistent efforts enhance the visibility and awareness of the brand, reaching the right audience and generating a better recall for your brand.</p></div>
            </div>
            <div className="p-5 md:p-6 rounded-xl border border-white/20 flex items-start bg-white/5 backdrop-blur-sm text-white transition hover:bg-white/10">
              <div className="text-orange-500 flex-shrink-0 mr-4 pt-1"><IconShieldHalfFilled stroke={2} size={28} /></div>
              <div><h3 className="text-lg md:text-xl font-bold mb-2">Sustained Positive Reputation</h3><p className="text-sm md:text-base text-zinc-100 text-justify">Through proactive reputation management and strategic communications, we help maintain a trustworthy and respected brand image.</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COMMITMENT SECTION */}
      <div 
        ref={sectionRefs.current[2]} 
        className="section-height backgroud-color2 flex flex-col justify-center items-center p-6 md:py-10"
      >
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-5xl text-white font-bold text-center">
            Our Commitment,<span className={primaryOrange}>Your Brand</span>
          </h2>

          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-20 md:w-30"></div>
          </div>

          <p className="text-base md:text-xl text-white mx-auto py-6 text-center font-medium max-w-3xl">
            At Oak Consulting, we don’t just manage PR, we craft strategies that
            <span className="text-[#ff6600]">
              {" "}
              elevate your brand, build trust, and drive measurable growth.
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="p-4 md:p-6 rounded-xl border border-white/20 flex items-start text-white bg-white/5">
              <div className="text-orange-500 mr-4 mt-1 flex-shrink-0"><IconWorld stroke={2} size={28} /></div>
              <div><h3 className="text-base md:text-lg font-semibold mb-1">In-Depth Market Knowledge</h3><p className="text-xs md:text-sm text-zinc-200">Expertise across the Middle East, Africa, and India</p></div>
            </div>
            <div className="p-4 md:p-6 rounded-xl border border-white/20 flex items-start text-white bg-white/5">
              <div className="text-orange-500 mr-4 mt-1 flex-shrink-0"><IconIkosaedr stroke={2} size={28} /></div>
              <div><h3 className="text-base md:text-lg font-semibold mb-1">Structured Work Processes</h3><p className="text-xs md:text-sm text-zinc-200">Methodical approaches that ensure efficiency and effectiveness</p></div>
            </div>
            <div className="p-4 md:p-6 rounded-xl border border-white/20 flex items-start text-white bg-white/5">
              <div className="text-orange-500 mr-4 mt-1 flex-shrink-0"><IconBulb stroke={2} size={28} /></div>
              <div><h3 className="text-base md:text-lg font-semibold mb-1">Proactive Attitude</h3><p className="text-xs md:text-sm text-zinc-200">Always anticipating challenges and opportunities</p></div>
            </div>
            <div className="p-4 md:p-6 rounded-xl border border-white/20 flex items-start text-white bg-white/5">
              <div className="text-orange-500 mr-4 mt-1 flex-shrink-0"><IconBrandWechat stroke={2} size={28} /></div>
              <div><h3 className="text-base md:text-lg font-semibold mb-1">Communication Strategy</h3><p className="text-xs md:text-sm text-zinc-200">Tailored to your brand's objectives and marketing goals</p></div>
            </div>
            <div className="p-4 md:p-6 rounded-xl border border-white/20 flex items-start text-white bg-white/5">
              <div className="text-orange-600 mr-4 mt-1 flex-shrink-0"><IconArrowRampRight stroke={2} size={28} /></div>
              <div><h3 className="text-base md:text-lg font-semibold mb-1">Flexibility</h3><p className="text-xs md:text-sm text-zinc-200">Adapting seamlessly to evolving client needs</p></div>
            </div>
            <div className="p-4 md:p-6 rounded-xl border border-white/20 flex items-start text-white bg-white/5">
              <div className="text-orange-500 mr-4 mt-1 flex-shrink-0"><IconHeartHandshake stroke={2} size={28} /></div>
              <div><h3 className="text-base md:text-lg font-semibold mb-1">Strong Media Relationships</h3><p className="text-xs md:text-sm text-zinc-200">Leveraging our trusted connections</p></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 5. CTA SECTION */}
      <div 
        ref={sectionRefs.current[4]} 
        className="section-height backgroud-color1 flex flex-col justify-center items-center p-6 md:p-10"
      >
        <div className="text-center text-white max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Ready to Work
            <span className="text-[#FF6600]"> Together ?</span>
          </h2>
          <div className="flex justify-center mt-2">
            <div className="h-1 bg-[#ff6600] w-20 md:w-30"></div>
          </div>
          <p className="text-lg md:text-xl mx-auto my-8 md:my-10 leading-relaxed">
            Let's craft a story that resonates with your audience and delivers
            measurable results.
            <br className="hidden md:block" />
            Your success is our mission.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-10">
            <Link to={'/getintouch'} className="bg-[#FF6600] text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg hover:scale-105 transition duration-300">
              Get Started
            </Link>
            <button
              onClick={() => window.open("https://wa.me/+971557343840", "_blank")}
              className="text-green-500 bg-white border border-green-500 font-bold py-3 px-10 rounded-full text-lg hover:bg-green-500 hover:text-white transition duration-300 shadow-lg"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
