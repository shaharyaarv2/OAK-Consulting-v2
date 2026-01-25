import React from "react";

const flagData = [
  {
    name : "Bahrain" ,
    src : 'Bahrain.jpg'
  },
  {
    name : "Egypt" ,
    src : 'Egypt.jpg'
  },
  {
    name : "India" ,
    src : 'India.jpg'
  },
  {
    name : "Kuwait" ,
    src : 'Kuwait.jpg'
  },
  {
    name : "Morocco" ,
    src : 'Morocco.jpg'
  },
  {
    name : "Oman" ,
    src : 'Oman.jpg'
  },
  {
    name : "Qatar" ,
    src : 'qatar.jpg'
  },
  {
    name : "Saudi Arabia" ,
    src : 'Saudi Arabia.jpg'
  },
  {
    name : "Turkey" ,
    src : 'Turkey.jpg'
  },
  {
    name : "UAE" ,
    src : 'UAE.jpg'
  }
]

export default function WhyOAK() {
  return (
    <div>
      <div className="relative h-screen overflow-hidden">
        {/* Background Video/Image Container */}
        {/* For video, uncomment the <video> tag and replace src */}
        {/* For image, ensure the <img> tag has the correct src */}

        {/* Option 1: Background Video */}
        {/*
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className='absolute inset-0 h-full w-full object-cover'
                >
                    <source src="/path-to-your-events-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                */}

        {/* Option 2: Background Image (if no video, or as a fallback) */}
        <img
          src="public/dummy.png" // Replace with your desired hero image
          alt="Oak Consulting Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay for Darkening/Grayscale and Contrast */}

        {/* Content Container: Headlines and CTAs */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          {/* Main Headline */}
          <h1
            className="
                        text-black 
                        text-3xl md:text-5xl lg:text-6xl 
                        font-extrabold 
                        leading-tight 
                        mb-4"
          >
            Driving Impact, Building Brands Why Choose Oak Consulting PR?"{" "}
          </h1>

          {/* CTA Buttons Container */}
          {/* <div className='flex flex-col sm:flex-row gap-4'>
                        <a 
                            href="#who-we-are" // Link to "Who We Are" section
                            className='
                                bg-white 
                                text-zinc-900 
                                px-8 py-3 
                                rounded-full 
                                text-lg 
                                font-semibold 
                                hover:bg-gray-200 
                                transition duration-300'
                        >
                            Discover Our Story
                        </a>
                        <a 
                            href="#contact-us" // Link to "Contact Us" section
                            className='
                                border-2 border-white 
                                text-white 
                                px-8 py-3 
                                rounded-full 
                                text-lg 
                                font-semibold 
                                hover:bg-white 
                                hover:text-zinc-900 
                                transition duration-300'
                        >
                            Work With Us
                        </a>
                    </div> */}
        </div>
      </div>
      <div className="container mx-auto px-10 py-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {flagData.map((flag, index) => (
      <div
        key={index}
        className="relative bg-zinc-800 h-40 rounded-lg transition-transform hover:scale-105"
      >
        <img src={flag.src} alt={flag.name} className="w-full h-full object-cover rounded-lg" />
        
        {/* Flag name displayed on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 bg-opacity-50 text-white opacity-0 transition-opacity hover:cursor-pointer hover:opacity-90">
          <span className="text-xl font-semibold">{flag.name}</span>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
