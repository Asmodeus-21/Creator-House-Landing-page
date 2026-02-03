
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-8 md:px-12 bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-40 border-b border-brand-gray">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl font-black tracking-widest uppercase">
          GOODTIMEZ<span className="text-brand-pink">.</span>LAB
        </h1>
      </div>
    </header>
  );
};

export default Header;
