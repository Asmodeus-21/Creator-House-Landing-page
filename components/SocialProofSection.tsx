
import React from 'react';

interface CreatorCardProps {
  imageUrl: string;
  name: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ imageUrl, name }) => (
  <div className="group relative aspect-[9/16] bg-brand-gray rounded-2xl overflow-hidden shadow-xl shadow-black/40 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-pink/30">
    {/* Image */}
    <img
      src={imageUrl}
      alt={name}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

    {/* Gradient Overlay - appears on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Name Label - slides up on hover */}
    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <p className="text-white font-bold text-lg capitalize">{name}</p>
    </div>

    {/* Accent Border - glows on hover */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-pink/50 rounded-2xl transition-all duration-500" />
  </div>
);

const SocialProofSection: React.FC = () => {
  const creators = [
    { name: 'Aastha', imageUrl: '/images/creators/aastha.jpeg' },
    { name: 'Abhipsa', imageUrl: '/images/creators/abhipsa.jpeg' },
    { name: 'Chimiko', imageUrl: '/images/creators/chimiko.jpeg' },
    { name: 'Katie', imageUrl: '/images/creators/katie.jpeg' },
    { name: 'Kratika', imageUrl: '/images/creators/kratika.jpeg' },
    { name: 'Maya', imageUrl: '/images/creators/maya.jpeg' },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-gray px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-transparent to-brand-dark/50 pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-brand-pink to-brand-purple bg-clip-text text-transparent mb-4">
            Creators We Already Manage
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Join our roster of successful creators who are crushing it with brand deals
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {creators.map((creator, index) => (
            <CreatorCard
              key={index}
              imageUrl={creator.imageUrl}
              name={creator.name}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl font-bold text-white">
            These are real creators. Real pages. Real growth.
          </p>
          <p className="mt-3 text-brand-pink font-semibold text-lg">
            ✨ You could be next
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
