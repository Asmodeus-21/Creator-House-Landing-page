
import React from 'react';
import Button from './Button';

const CTASection: React.FC = () => {
  const formUrl = "https://forms.gle/xNKCsntTEYJuckm59";

  return (
    <section className="relative py-20 md:py-32 bg-brand-gray px-4 sm:px-6 lg:px-8 text-center mb-20 md:mb-0">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-brand-gray opacity-60"></div>
      <div className="relative z-10 container mx-auto max-w-3xl flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-black leading-tight">
          If You’re Already Creating — This Is Your Next Level
        </h2>
        <p className="mt-6 text-lg text-gray-300">
          If you’re bold, confident, and ready to earn what your content is actually worth, apply below. We only accept a limited number of creators.
        </p>
        <div className="mt-10">
          <a href={formUrl} target="_blank" rel="noopener noreferrer">
            <Button>
              👉 Apply Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
