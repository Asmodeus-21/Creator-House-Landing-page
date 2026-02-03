
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatIsSection from './components/WhatIsSection';
import WhoIsThisForSection from './components/WhoIsThisForSection';
import IncomeExpectationsSection from './components/IncomeExpectationsSection';
import WhatWeHandleSection from './components/WhatWeHandleSection';
import SocialProofSection from './components/SocialProofSection';
import AboutUsSection from './components/AboutUsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Button from './components/Button';

const App: React.FC = () => {
  const formUrl = "https://forms.gle/xNKCsntTEYJuckm59";

  return (
    <div className="bg-brand-dark text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhoIsThisForSection />
        <IncomeExpectationsSection />
        <WhatWeHandleSection />
        <SocialProofSection />
        <AboutUsSection />
        <CTASection />
      </main>
      <Footer />
      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-brand-dark/80 backdrop-blur-sm p-4 border-t border-brand-gray md:hidden z-50">
        <a href={formUrl} target="_blank" rel="noopener noreferrer" className="block">
          <Button fullWidth>
            👉 Apply to Work With Us
          </Button>
        </a>
      </div>
    </div>
  );
};

export default App;
