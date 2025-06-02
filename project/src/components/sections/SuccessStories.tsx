import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import SuccessStoryCard from '../ui/SuccessStoryCard';
import { successStories } from '../../data/successStories';
import Button from '../ui/Button';

const SuccessStories: React.FC = () => {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Success Stories" 
          subtitle="Meet our students who transformed their lives by mastering English communication skills."
          centered={true}
        />
        
        <div className="space-y-8">
          {successStories.map((story) => (
            <SuccessStoryCard key={story.id} story={story} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline">
            View More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;