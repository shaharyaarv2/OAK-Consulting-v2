import React from 'react'

export default function OurClients() {
  return (
    <div>
        <div className="relative h-screen overflow-hidden my-40">
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
                    src="dummy.png" // Replace with your desired hero image
                    alt="Oak Consulting Hero" 
                    className='absolute inset-0 h-full w-full object-cover'
                />

        {/* Overlay for Darkening/Grayscale and Contrast */}

        {/* Content Container: Headlines and CTAs */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10">
          {/* Main Headline */}
          {/* <h1
            className="
                        text-black 
                        text-3xl md:text-5xl lg:text-6xl 
                        font-extrabold 
                        leading-tight 
                        mb-4"
          >
            Shaping Stories, Building Brands
          </h1> */}


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
    </div>
  )
}
