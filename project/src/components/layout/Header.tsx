import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/917828050029', '_blank');
  };

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const logoTextClasses = `font-bold text-xl md:text-2xl ${
    isScrolled ? 'text-blue-800' : 'text-white'
  }`;

  const navLinkClasses = `hover:text-amber-500 transition-colors ${
    isScrolled ? 'text-gray-700' : 'text-white'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <div className={`p-2 rounded-full ${isScrolled ? 'bg-blue-100' : 'bg-white/20'}`}>
              <BookOpen className="text-blue-800" size={24} />
            </div>
            <span className={logoTextClasses}>Manish Sir's English Academy</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#about" className={navLinkClasses}>About</a>
            <a href="#courses" className={navLinkClasses}>Courses</a>
            <a href="#success-stories" className={navLinkClasses}>Success Stories</a>
            <a href="#testimonials" className={navLinkClasses}>Testimonials</a>
            <a href="#contact" className={navLinkClasses}>Contact</a>
            <Button 
              variant="secondary"
              size="sm"
              onClick={openWhatsApp}
              className="flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-white z-50 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a 
              href="#about" 
              className="py-2 text-gray-700 hover:text-blue-800 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#courses" 
              className="py-2 text-gray-700 hover:text-blue-800 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </a>
            <a 
              href="#success-stories" 
              className="py-2 text-gray-700 hover:text-blue-800 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </a>
            <a 
              href="#testimonials" 
              className="py-2 text-gray-700 hover:text-blue-800 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="py-2 text-gray-700 hover:text-blue-800 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              variant="secondary"
              onClick={openWhatsApp}
              className="mt-4 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;