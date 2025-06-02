import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Manish Sir's English Academy</h3>
            <p className="text-gray-300 mb-4">
              Transforming lives through quality English education since 2005. The best English coaching institute in Gwalior, Madhya Pradesh.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/MSC-Manish-sir-classes-100064113278976/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/manishsirclasses1/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@manishsirsclasses1" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#success-stories" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Spoken English
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Business English
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  IELTS Preparation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Grammar Masterclass
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  English for Kids
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Punjwani Building, Near Roxy Talkies, Chitnis Ki Goth, Roxy Road, Lashkar-474001, Gwalior, MP
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-amber-500" />
                <p className="text-gray-300">+91 7828050029</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-amber-500" />
                <p className="text-gray-300">Manishsir1590@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Manish Sir's English Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;