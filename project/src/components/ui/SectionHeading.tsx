import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-gray-700 max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-amber-500 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;