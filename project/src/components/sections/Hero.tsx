import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 text-white flex items-center">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Transform Your English with <span className="text-amber-400">Manish Sir</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Gwalior's premier English coaching institute with over 1000+ success stories
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={scrollToContact}
              >
                Explore Courses
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10"
                onClick={scrollToContact}
              >
                Contact Us
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">15+</p>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">5000+</p>
                <p className="text-sm">Students Taught</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">98%</p>
                <p className="text-sm">Success Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-amber-400">6</p>
                <p className="text-sm">Specialized Courses</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-800 to-transparent opacity-10 rounded-3xl"></div>
              
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Register for a Free Demo Class</h3>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="" className="text-gray-800">Select Course</option>
                      <option value="spoken" className="text-gray-800">Spoken English</option>
                      <option value="business" className="text-gray-800">Business English</option>
                      <option value="ielts" className="text-gray-800">IELTS Preparation</option>
                      <option value="grammar" className="text-gray-800">Grammar Masterclass</option>
                    </select>
                  </div>
                  <Button variant="secondary" className="w-full" onClick={scrollToContact}>
                    Book Your Free Class
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#fff" 
            fillOpacity=".8"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="#fff" 
            fillOpacity=".5"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            fill="#fff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;