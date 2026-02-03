
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

const WhatWeHandleSection: React.FC = () => {
  const services = [
    "Instagram growth & positioning",
    "Paid subscriber funnels",
    "Monetization strategy",
    "Brand deals & collaborations",
    "Content planning & posting guidance",
    "Professional photographers & shoots",
    "Creator apartments & content spaces",
    "Dedicated social media managers",
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              You Create. <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple">We Handle Everything Else.</span>
            </h2>
            <p className="mt-12 text-center text-xl font-bold bg-brand-gray px-6 py-4 rounded-xl border border-brand-purple/50">
              No upfront cost. We grow together.
            </p>
          </div>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center bg-brand-gray p-4 rounded-lg">
                <SparklesIcon className="w-6 h-6 text-brand-pink mr-4 flex-shrink-0" />
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeHandleSection;
