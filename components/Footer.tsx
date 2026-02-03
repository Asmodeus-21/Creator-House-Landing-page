
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-brand-gray">
      <div className="container mx-auto text-center text-gray-400">
        <p className="text-sm">
          This is a partnership-based creator program. We review every application personally.
        </p>
        <p className="mt-4 text-lg font-bold">
          GOODTIMEZ.LAB
        </p>
        <p className="mt-1 text-xs">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
