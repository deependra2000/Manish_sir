import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_sfx4xt2',
        'template_contact_form', // Default template ID, you might want to update this
        e.currentTarget,
        'T2679_t44rHmcY6BD'
      );
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="course" className="block text-gray-700 font-medium mb-1">
          Interested Course
        </label>
        <select
          id="course"
          name="course"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a course</option>
          <option value="spoken">Spoken English</option>
          <option value="business">Business English</option>
          <option value="ielts">IELTS Preparation</option>
          <option value="grammar">Grammar Masterclass</option>
          <option value="kids">English for Kids</option>
          <option value="competitive">English for Competitive Exams</option>
        </select>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Any specific requirements or questions?"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          Thank you for your inquiry! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          Failed to send inquiry. Please try again or contact us directly.
        </div>
      )}
      
      <Button 
        type="submit" 
        variant="primary" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
      </Button>
    </form>
  );
};

export default ContactForm;