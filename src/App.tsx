import React from 'react';
import { FilmGrain } from './components/FilmGrain';
import { AmbientLight } from './components/AmbientLight';
import { RevealText } from './components/RevealText';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-luxury-black to-luxury-charcoal text-white overflow-hidden flex flex-col items-center justify-center selection:bg-white/20 selection:text-white font-sans">
      
      {/* Atmospheric Layers */}
      <FilmGrain />
      <AmbientLight />

      {/* Main Content Container */}
      <main className="relative z-10 px-6 md:px-12 max-w-4xl w-full text-center flex flex-col items-center gap-12 md:gap-20">
        
        {/* A. Brand Name */}
        <RevealText delay={200} className="w-full">
          <h1 className="font-sans font-medium tracking-[0.3em] text-xs md:text-sm uppercase text-white/70">
            Flexvid — The Creative Studio
          </h1>
        </RevealText>

        {/* Center Block */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          
          {/* B. Primary Message */}
          <RevealText delay={800}>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal italic tracking-wide text-white leading-tight">
              We’re refining something special.
            </h2>
          </RevealText>

          {/* C. Supporting Line */}
          <RevealText delay={1400}>
            <p className="font-sans text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-lg mx-auto tracking-wide">
              Flexvid is currently under maintenance.
              <br className="hidden md:block" />
              We’ll be back shortly with a more polished experience.
            </p>
          </RevealText>
        </div>

        {/* Footer Block */}
        <div className="flex flex-col items-center gap-10 mt-6 md:mt-12">
          
          {/* D. Gentle Apology */}
          <RevealText delay={2200}>
            <p className="font-serif italic text-gray-500 text-sm md:text-base tracking-wider opacity-80">
              Thank you for your patience — we promise it’ll be worth the wait.
            </p>
          </RevealText>

          {/* F. Contact / Reassurance */}
          <RevealText delay={2800}>
            <a 
              href="mailto:mj.gamers.15.ai@gmail.com" 
              className="font-sans text-white/30 text-[10px] md:text-xs tracking-[0.2em] uppercase hover:text-white/60 transition-colors duration-500 ease-out"
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