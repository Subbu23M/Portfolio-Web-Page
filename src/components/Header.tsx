import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-center">
          {/* Profile Image */}
          <div className="w-16 h-16 rounded-full overflow-hidden hidden border-2 border-blue-500/50 shadow-lg hover:border-blue-400 transition-all duration-300 hover:scale-105">
            <img
              src="/public/DS-Photo-27.jpeg"
              alt="Subramanyam D"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
