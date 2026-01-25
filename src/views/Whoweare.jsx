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

// === 1. Data Definitions (Preserved) ===
const team = [
  {
    image: "Image-1.jpeg",
  },
  {
    image: "Image-2.jpeg",
  },
  {
    image: "Image-3.jpeg",
  },
  {
    image: "Image-4.jpeg",
  },
];
const primaryOrange = "text-[#FF6600]";

// === 2. Scroll Logic Implementation ===
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
    scrollToSection(currentSection);
  }, [currentSection, scrollToSection]);

  const handleWheel = useCallback(
    (event) => {
      const delta = event.deltaY;
      const direction = delta > 0 ? 1 : -1;

      if (direction > 0 && currentSection === NUM_SECTIONS - 1) {
        return; 
      }

      event.preventDefault();

      if (isScrolling.current || isWaitingForInput.current) {
        return;
      }

      if (Math.abs(delta) < 10) {
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
    <div id="scroll-container" className="bg-white">
      {/* 1. HERO SECTION (Index 0) */}
      <div
        ref={sectionRefs.current[0]}
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('Who_we_are.JPG')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Driving Impact
            <br /> <span className="text-[#FF6600]"> Building Brands </span>
          </h1>
          <h2 className=" text-lg md:text-xl text-white mt-2">
            Why Choose Oak Consulting PR?
          </h2>
        </div>
      </div>
      
      {/* 2. EXPERTISE SECTION (Index 1) */}
      <div 
        ref={sectionRefs.current[1]} 
        className="h-screen flex flex-col backgroud-color1 items-center justify-center py-10"
      >
        <div className="flex flex-col items-center p-10">
          <h2 className={`md:text-5xl text-3xl font-bold text-center text-white `}>
            Our <span className={primaryOrange}>Expertise</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>

          <div className="grid grid-cols-1 text-white md:grid-cols-2 gap-8 mt-20 px-10 ">
            <div className=" p-6 rounded-xl border border-gray-200 flex items-start shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-3xl flex-shrink-0 mr-4 pt-1"><IconEye stroke={2} size={30} /></div>
              <div><h3 className="text-xl font-bold  mb-2">Enhanced Brand Visibility</h3><p className=" text-justify">We amplify your brand across digital and traditional channels, ensuring it reaches the right audience at the right time.</p></div>
            </div>
            <div className=" p-6 rounded-xl border border-gray-200 flex items-start shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-3xl flex-shrink-0 mr-4 pt-1"><IconTrendingUp stroke={2} size={30} /></div>
              <div><h3 className="text-xl font-bold  mb-2">Business Growth & Sales</h3><p className=" text-justify">Our integrated PR and marketing strategy drive engagement, generate leads and convert visibility into tangible business results.</p></div>
            </div>
            {/* UPDATED TEXT BELOW */}
            <div className=" p-6 rounded-xl border border-gray-200 flex items-start shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-3xl flex-shrink-0 mr-4 pt-1"><IconSpeakerphone stroke={2} size={30} /></div>
              <div><h3 className="text-xl font-bold  mb-2">Greater Brand Awareness</h3><p className=" text-justify">Our consistent efforts enhance the visibility and awareness of the brand, reaching the right audience and generating a better recall for your brand.</p></div>
            </div>
            <div className=" p-6 rounded-xl border border-gray-200 flex items-start shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-3xl flex-shrink-0 mr-4 pt-1"><IconShieldHalfFilled stroke={2} size={30} /></div>
              <div><h3 className="text-xl font-bold  mb-2">Sustained Positive Reputation</h3><p className=" text-justify">Through proactive reputation management and strategic communications, we help maintain a trustworthy and respected brand image.</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COMMITMENT SECTION (Index 2) */}
      <div 
        ref={sectionRefs.current[2]} 
        className="h-screen backgroud-color2 flex flex-col justify-center items-center py-10"
      >
        <div className="px-10 max-w-7xl mx-auto">
          <h2 className={`md:text-5xl text-white text-3xl font-bold text-center`}>
            Our Commitment,<span className={primaryOrange}>Your Brand</span>
          </h2>

          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>

          <p className=" text-xl text-white mx-auto p-5 text-center font-medium">
            At Oak Consulting, we don’t just manage PR, we craft strategies that
            <span className="text-[#ff6600]">
              {" "}
              elevate your brand, build trust, and drive measurable growth.
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className=" p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-4xl mr-4 mt-1"><IconWorld stroke={2} size={30} /></div>
              <div><h3 className="text-xl font-semibold text-white mb-2">In-Depth Market Knowledge</h3><p className="text-white text-justify">Expertise across the Middle East, Africa, and India</p></div>
            </div>
            <div className=" p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-4xl mr-4 mt-1"><IconIkosaedr stroke={2} size={30} /></div>
              <div><h3 className="text-xl font-semibold text-white mb-2">Structured Work Processes</h3><p className="text-white text-justify">Methodical approaches that ensure efficiency and effectiveness</p></div>
            </div>
            <div className=" p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-4xl mr-4 mt-1"><IconBulb stroke={2} size={30} /></div>
              <div><h3 className="text-xl font-semibold text-white mb-2">Proactive Attitude</h3><p className="text-white text-justify">Always anticipating challenges and opportunities</p></div>
            </div>
            <div className=" p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-4xl mr-4 mt-1"><IconBrandWechat stroke={2} size={30} /></div>
              <div><h3 className="text-xl font-semibold text-white mb-2">Communication Strategy</h3><p className="text-white text-justify">Tailored to your brand's objectives and marketing goals</p></div>
            </div>
            <div className=" p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-600 text-4xl mr-4 mt-1"><IconArrowRampRight stroke={2} size={30} /></div>
              <div><h3 className="text-xl font-semibold text-white mb-2">Flexibility</h3><p className="text-white text-justify">Adapting seamlessly to evolving client needs</p></div>
            </div>
            {/* UPDATED TEXT BELOW */}
            <div className=" p-6 rounded-xl border border-gray-200 flex items-start text-left shadow-md hover:shadow-xl transition duration-300">
              <div className="text-orange-500 text-4xl mr-4 mt-1"><IconHeartHandshake stroke={2} size={30} /></div>
              <div><h3 className="text-xl font-semibold text-white mb-2">Strong Media Relationships</h3><p className="text-white text-justify">Leveraging our trusted connections</p></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 4. TEAM SECTION (Index 3) - Currently Commented Out */}
      
      {/* 5. CTA SECTION (Index 4) */}
      <div 
        ref={sectionRefs.current[4]} 
        className="h-screen backgroud-color1 flex flex-col justify-center items-center bg-cover bg-center py-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="relative z-10 text-center text-white p-10 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-3">
            Ready to Work
            <span className="text-[#FF6600]"> Together ?</span>
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 bg-[#ff6600] w-30"></div>
          </div>
          <p className=" text-md text-xl mx-auto my-10">
            Let's craft a story that resonates with your audience and delivers
            measurable results.
            <br />
            Your success in our mission.
          </p>

          <div className="flex justify-center gap-5 mt-25">
            <Link to={'/getintouch'} className="bg-[#FF6600] text-white font-bold py-3 px-8 rounded-full text-lg  transition duration-300 shadow-lg tracking-wider hover:cursor-pointer hover:text-orange-600 hover:bg-white hover:border hover:border-orange-600">
              Get Started
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