import React from 'react';
import Logo from './Navbar.components/Logo';
import LinkTags from './Navbar.components/LinkTags';
import Button from './Navbar.components/Button';

const Navbar = () => {
  return (
    <nav className="relative w-full z-50">
      <div className="absolute inset-0 bg-[#111111]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-60 animate-pulse animation-delay-500"></div>
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src="https://i.pinimg.com/1200x/63/a6/aa/63a6aa6fcf7164d34099b8bb876474ef.jpg" 
            alt="circuit overlay"
            className="w-full h-full object-cover object-center opacity-10"
          />
        </div>
      </div>

      <div className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto backdrop-blur-sm bg-black/30 rounded-b-3xl shadow-xl border border-gray-700">
        <Logo />
        <LinkTags />
        <Button />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
