
import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  const formUrl = "https://forms.gle/xNKCsntTEYJuckm59";

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-purple/20 to-brand-dark opacity-50"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      
      <div className="relative z-10 container mx-auto max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
          Turn Your Content Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink to-brand-purple">Real Money.</span> Consistently.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl">
          GOODTIMEZ.LAB is a creator house & management lab for women who create bold, beautiful content — and want to earn <span className="font-bold">₹50,000 to ₹10,00,000+</span> per month without guessing, stressing, or doing it alone.
        </p>
        <p className="mt-8 text-md md:text-lg font-semibold bg-brand-gray px-4 py-2 rounded-lg inline-block">
          You focus on creating. We handle growth, monetization, deals, and systems.
        </p>
        <div className="mt-10 hidden md:block">
          <a href={formUrl} target="_blank" rel="noopener noreferrer">
            <Button>
              👉 Apply to Work With Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
