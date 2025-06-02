import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, image, rating, text, course } = testimonial;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
        />
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{course}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;