import { useState, useEffect } from "react";
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lyssna på scroll-händelsen
  useEffect(() => {
    const handleScroll = () => {
      // Om scrolla mer än 50px från toppen, sätt isScrolled till true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Lägg till event listener för scroll
    window.addEventListener('scroll', handleScroll);

    // Ta bort event listener när komponenten unmountas
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-stone-200 text-gray-800 p-4 fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'transform -translate-y-full' : ''
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <img src={logo} alt="logo" className="h-16 w-16" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-4 focus:outline-none"
        >
          ☰
        </button>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#experience" className="hover:text-gray-400">Experience</a>
          <a href="#projects" className="hover:text-gray-400">My projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>
      </div>

      {/* Fullbreddad mobilmeny med smooth öppning */}
      <div
        className={`absolute top-full left-0 w-full bg-[#e2e0e0] text-gray p-6 flex flex-col items-center space-y-4 md:hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <a href="#about" className="px-4 py-2 border border-transparent rounded-3xl hover:border-gray-900 transition-all duration-200" onClick={() => setIsOpen(false)}>About</a>
        <a href="#experience" className="px-4 py-2 border border-transparent rounded-3xl hover:border-gray-900 transition-all duration-200" onClick={() => setIsOpen(false)}>Experience</a>
        <a href="#projects" className="px-4 py-2 border border-transparent rounded-3xl hover:border-gray-900 transition-all duration-200" onClick={() => setIsOpen(false)}>My projects</a>
        <a href="#contact" className="px-4 py-2 border border-transparent rounded-3xl hover:border-gray-900 transition-all duration-200" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </header>
  );
};

export default Header;
