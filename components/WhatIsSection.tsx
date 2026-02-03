
import React from 'react';
import { CheckCircleIcon } from './icons/CheckCircleIcon';

const WhatIsSection: React.FC = () => {
  const features = [
    "Monetization strategy",
    "Platform growth",
    "Paid subscriber funnels",
    "Brand deals & collaborations",
    "Content planning & positioning",
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-gray px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          This Is Not an Agency. <span className="text-brand-pink">This Is a Creator Lab.</span>
        </h2>
        <p className="mt-6 text-lg text-gray-300 text-center max-w-3xl mx-auto">
          GOODTIMEZ.LAB is a creator house + growth system built specifically for female creators who are ready to turn attention into income. We work with a small, selected group of creators and manage everything behind the scenes:
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-brand-pink flex-shrink-0" />
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
          This is a partnership, not a service you pay for.
        </p>
      </div>
    </section>
  );
};

export default WhatIsSection;
