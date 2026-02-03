
import React from 'react';

const ProfilePlaceholder: React.FC<{ imageUrl: string }> = ({ imageUrl }) => (
  <div className="aspect-[9/16] bg-brand-gray rounded-xl overflow-hidden shadow-lg shadow-black/30 transform transition-transform duration-300 hover:-translate-y-2">
    <img src={imageUrl} alt="Creator Profile Placeholder" className="w-full h-full object-cover" />
  </div>
);


const SocialProofSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-gray px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Creators We Already Manage
        </h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <ProfilePlaceholder imageUrl="https://picsum.photos/seed/creator1/360/640" />
          <ProfilePlaceholder imageUrl="https://picsum.photos/seed/creator2/360/640" />
          <ProfilePlaceholder imageUrl="https://picsum.photos/seed/creator3/360/640" />
          <ProfilePlaceholder imageUrl="https://picsum.photos/seed/creator4/360/640" />
        </div>
        <p className="mt-8 text-xl font-semibold">
          These are real creators. Real pages. Real growth.
        </p>
      </div>
    </section>
  );
};

export default SocialProofSection;
