import React from 'react';
import { FilmGrain } from './components/FilmGrain';
import { AmbientLight } from './components/AmbientLight';
import { RevealText } from './components/RevealText';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-luxury-black to-luxury-charcoal text-white overflow-hidden flex flex-col items-center justify-center selection:bg-white/20 selection:text-white">
      
      {/* Atmospheric Layers */}
      <FilmGrain />
      <AmbientLight />

      {/* Main Content Container */}
      <main className="relative z-10 px-6 md:px-12 max-w-3xl w-full text-center flex flex-col items-center gap-12 md:gap-16">
        
        {/* A. Brand Name */}
        <RevealText delay={200} className="w-full">
          <h1 className="font-medium tracking-[0.25em] text-sm md:text-xs uppercase text-white/90">
            Flexvid
          </h1>
        </RevealText>

        {/* Center Block */}
        <div className="flex flex-col items-center gap-8 md:gap-10">
          
          {/* B. Primary Message */}
          <RevealText delay={800}>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
              We’re refining something special.
            </h2>
          </RevealText>

          {/* C. Supporting Line */}
          <RevealText delay={1400}>
            <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              Flexvid is currently under maintenance.
              <br className="hidden md:block" />
              We’ll be back shortly with a more polished experience.
            </p>
          </RevealText>
        </div>

        {/* Footer Block */}
        <div className="flex flex-col items-center gap-12 mt-4 md:mt-8">
          
          {/* D. Gentle Apology */}
          <RevealText delay={2200}>
            <p className="text-gray-500 text-sm font-light tracking-wide">
              Thank you for your patience — we promise it’ll be worth the wait.
            </p>
          </RevealText>

          {/* F. Contact / Reassurance */}
          <RevealText delay={2800}>
            <a 
              href="mailto:contact@flexvid.com" 
              className="text-white/20 text-[10px] md:text-xs tracking-widest uppercase hover:text-white/40 transition-colors duration-500 ease-out"
            >
              For urgent inquiries: mj.gamers.15.ai@gmail.com
            </a>
          </RevealText>
        </div>

      </main>
    </div>
  );
};

export default App;
