
import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const AboutUsSection: React.FC = () => {
  const credentials = [
    "Years of experience in content & creator management",
    "Multiple successful YouTube & social brands",
    "Worked with large creators and viral pages",
    "Deep understanding of monetization, psychology, and audience building",
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple">GOODTIMEZ.LAB</span> Works
          </h2>
        </div>
        <div className="mt-12 max-w-2xl mx-auto space-y-4">
          {credentials.map((cred, index) => (
            <div key={index} className="flex items-center text-lg">
              <CheckCircleIcon className="w-7 h-7 text-brand-pink mr-4 flex-shrink-0" />
              <span>{cred}</span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-2xl font-black uppercase tracking-wider text-gray-200 bg-brand-gray p-6 rounded-lg">
          We don’t experiment on creators. We scale them.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
