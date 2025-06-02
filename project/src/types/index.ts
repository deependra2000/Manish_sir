export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
  course: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  image: string;
  achievement: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  features: string[];
  icon: string;
}