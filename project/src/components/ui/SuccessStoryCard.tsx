import React from 'react';
import { Trophy } from 'lucide-react';
import { SuccessStory } from '../../types';

interface SuccessStoryCardProps {
  story: SuccessStory;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({ story }) => {
  const { name, image, achievement, description } = story;

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="md:w-1/3">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      
      <div className="md:w-2/3">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        
        <div className="flex items-center gap-2 mb-3">
          <Trophy size={20} className="text-amber-500" />
          <p className="font-medium text-blue-800">{achievement}</p>
        </div>
        
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default SuccessStoryCard;