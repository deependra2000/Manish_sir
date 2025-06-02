import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import CourseCard from '../ui/CourseCard';
import { courses } from '../../data/courses';

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Manish Sir" 
          subtitle="Comprehensive English programs designed to address specific language learning needs and goals."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-2">
            Not sure which course is right for you?
          </p>
          <p className="text-blue-800 font-medium">
            Contact us for a free consultation and we'll help you choose the perfect program!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;