import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { FloatingAmbient } from './components/FloatingAmbient';
import { HeroSection } from './components/HeroSection';
import { LittleNoteSection } from './components/LittleNoteSection';
import { HerWorldSection } from './components/HerWorldSection';
import { GallerySection } from './components/GallerySection';
import { ReasonsSpecialSection } from './components/ReasonsSpecialSection';
import { PrincessTreatmentSection } from './components/PrincessTreatmentSection';
import { LittleSurprisesSection } from './components/LittleSurprisesSection';
import { FinalSurpriseSection } from './components/FinalSurpriseSection';
import { Footer } from './components/Footer';
import { CelebrationBurst } from './components/CelebrationBurst';

export default function App() {
  const [burstKey, setBurstKey] = useState(0);

  const triggerCelebration = () => {
    setBurstKey((prev) => prev + 1);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#FCF8F4] text-[#2F2226]">
        <FloatingAmbient />
        <CelebrationBurst burstKey={burstKey} />
        <Navbar />

        <main className="relative z-10">
          <HeroSection onOpenSurprise={triggerCelebration} />
          <LittleNoteSection />
          <HerWorldSection />
          <GallerySection />
          <ReasonsSpecialSection />
          <PrincessTreatmentSection onCrownCelebration={triggerCelebration} />
          <LittleSurprisesSection />
          <FinalSurpriseSection onCelebrate={triggerCelebration} />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
