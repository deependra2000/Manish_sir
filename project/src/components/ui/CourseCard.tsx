import React from 'react';
import { BookOpen, Mic, Briefcase, GraduationCap, Globe, FileText, Clock, Check } from 'lucide-react';
import { Course } from '../../types';
import Button from './Button';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { title, description, duration, features, icon } = course;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="text-blue-800" size={24} />;
      case 'Mic':
        return <Mic className="text-blue-800" size={24} />;
      case 'Briefcase':
        return <Briefcase className="text-blue-800" size={24} />;
      case 'GraduationCap':
        return <GraduationCap className="text-blue-800" size={24} />;
      case 'Globe':
        return <Globe className="text-blue-800" size={24} />;
      case 'FileText':
        return <FileText className="text-blue-800" size={24} />;
      default:
        return <BookOpen className="text-blue-800" size={24} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-full">
          {getIcon(icon)}
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="flex items-center gap-2 mb-4 text-gray-600">
        <Clock size={18} />
        <span>{duration}</span>
      </div>
      
      <div className="mb-6 flex-grow">
        <p className="font-medium text-gray-800 mb-2">Key Features:</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <Button variant="outline" className="w-full mt-auto">
        Learn More
      </Button>
    </div>
  );
};

export default CourseCard;