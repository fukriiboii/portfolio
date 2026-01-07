// src/components/Hero.jsx
import React from 'react';
import profilePic from '../assets/pp.jpg'; 
import resume from '../assets/Resume.pdf';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center md:text-left">
      {/* Innehåll */}
      <div className="relative z-10 px-6 sm:px-12 md:px-24 flex flex-col md:flex-row items-center md:items-start">
        
        {/* Bild på dig */}
        <img
          src={profilePic}
          alt="Your Name"
          className="rounded-full w-52 h-52 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto md:mx-0 mb-6 md:mb-0 border-4 border-white mt-12"  // Använd negativ margin-top här
        />

        {/* Text */}
        <div className="md:ml-8">
          {/* Yrkes titel */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400">Hello, I'm</p>
          {/* Ditt namn */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">Fahri Kuzey</h1>

          {/* Yrkes titel */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400">Software Developer</p>

          {/* Knappar */}
          <div className='mt-6 flex space-x-4'>
            <a 
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold inline-block px-6 py-3 bg-white-600 text-black border-2 rounded-full hover:bg-zinc-800 hover:text-white transition duration-200'
            >View CV</a>

            <a href='#contact'
            className="font-bold inline-block px-6 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-950 transition duration-200" 
            >
                Contact 
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
