import React from 'react';
import { Award, Users, BookOpen, Globe, Trophy, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Manish Sir" 
          subtitle="With over 15 years of teaching experience, Manish Sir has transformed the English speaking abilities of thousands of students across Madhya Pradesh."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/485744764_1126966812783751_2305621640209059862_n.jpg" 
              alt="Manish Sir Receiving Award" 
              className="rounded-lg shadow-lg w-full object-cover mb-6"
            />
            <img 
              src="/497494681_9672000642891460_4414029772489274694_n.jpg" 
              alt="Manish Sir Achievement" 
              className="rounded-lg shadow-lg w-full object-cover"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-blue-800 text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-medium text-lg mb-2">
                "My goal is to make every student confident in their English communication skills, regardless of their background."
              </p>
              <p className="text-blue-200 italic">- Manish Sir</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Manish Sir's English Academy?</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-amber-100 p-3 rounded-full h-fit">
                  <Trophy className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Award-Winning Institute</h4>
                  <p className="text-gray-700">
                    Recognized as the Best English Coaching Institute in Gwalior, with multiple awards for excellence in English education.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-fit">
                  <Star className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Proven Track Record</h4>
                  <p className="text-gray-700">
                    Over 200+ selections in various competitive exams including SSC-CGL, CHSL, and Stenographer positions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-green-100 p-3 rounded-full h-fit">
                  <BookOpen className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Proven Methodology</h4>
                  <p className="text-gray-700">
                    Our unique teaching methodology focuses on practical application rather than theoretical knowledge, helping students become confident speakers.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-purple-100 p-3 rounded-full h-fit">
                  <Globe className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-1">Comprehensive Programs</h4>
                  <p className="text-gray-700">
                    From basic spoken English to specialized courses for competitive exams, we offer programs for every need.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button variant="primary">
                Learn More About Manish Sir
              </Button>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-blue-800 mb-2">15+</p>
            <p className="text-gray-700">Years Experience</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-blue-800 mb-2">200+</p>
            <p className="text-gray-700">Govt Job Selections</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-blue-800 mb-2">98%</p>
            <p className="text-gray-700">Success Rate</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-4xl font-bold text-blue-800 mb-2">6</p>
            <p className="text-gray-700">Specialized Courses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;