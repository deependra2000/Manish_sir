import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/917828050029', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Have questions? Get in touch with us for more information about our courses and schedules."
          centered={true}
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-fit">
                  <MapPin className="text-blue-800" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-700">
                    Punjwani Building, Near Roxy Talkies, Chitnis Ki Goth, Roxy Road, Lashkar-474001, Gwalior, Madhya Pradesh
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full h-fit">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-700">+91 7828050029</p>
                  <Button 
                    variant="secondary" 
                    className="mt-2"
                    onClick={openWhatsApp}
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-fit">
                  <Mail className="text-blue-800" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Email Address</h4>
                  <p className="text-gray-700">Manishsir1590@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-fit">
                  <Clock className="text-blue-800" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-700">Monday to Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.3998407243994!2d78.17830601503738!3d26.21098148342574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c42942ba61cf%3A0xac67a9e9dfadb95a!2sRoxy%20Talkies%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1654321234567!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                className="border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manish Sir's English Academy Location"
                aria-label="Map showing location of Manish Sir's English Academy near Roxy Talkies, Gwalior"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;