
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';
import { XIcon } from './icons/XIcon';

const WhoIsThisForSection: React.FC = () => {
  const forYou = [
    "You’re already creating bold / sexy / lifestyle content",
    "You’re comfortable being on camera",
    "You want real money, not likes",
    "You’re consistent and serious about growth",
  ];

  const notForYou = [
    "Anyone looking for escorting or explicit nudity",
    "Anyone unwilling to create bold content",
    "Anyone looking for “quick money without effort”",
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
          {/* WHO THIS IS FOR */}
          <div className="bg-brand-gray p-8 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-bold text-green-400">This is for you if...</h3>
            <ul className="mt-6 space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WHO THIS IS NOT FOR */}
          <div className="bg-brand-gray p-8 rounded-xl border border-red-500/30">
            <h3 className="text-2xl font-bold text-red-400">This is NOT for...</h3>
            <ul className="mt-6 space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start">
                  <XIcon className="w-6 h-6 text-red-400 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
