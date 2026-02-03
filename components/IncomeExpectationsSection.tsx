
import React from 'react';

const IncomeTier: React.FC<{ title: string; range: string; }> = ({ title, range }) => (
  <div className="bg-brand-gray border border-brand-purple/30 p-6 rounded-lg text-center transform hover:scale-105 hover:border-brand-pink transition-all duration-300">
    <p className="text-sm uppercase tracking-widest text-gray-400">{title}</p>
    <p className="text-3xl md:text-4xl font-bold text-brand-pink mt-2">{range}</p>
    <p className="text-sm text-gray-400">per month</p>
  </div>
);

const IncomeExpectationsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-gray px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Creators In Our System Earn
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <IncomeTier title="New / Early Creators" range="₹50,000 – ₹1,00,000" />
          <IncomeTier title="Good, Consistent Creators" range="₹2,00,000 – ₹5,00,000" />
          <IncomeTier title="Top Performing Creators" range="₹10,00,000+" />
        </div>
        <p className="mt-12 text-lg font-semibold text-gray-300">
          This is not theory. This is based on systems we already run.
        </p>
      </div>
    </section>
  );
};

export default IncomeExpectationsSection;
