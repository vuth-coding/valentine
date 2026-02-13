import HeroSection from './components/HeroSection';
import HowItStarted from './components/HowItStarted';
import MemoriesSection from './components/MemoriesSection';
import LoveLetterSection from './components/LoveLetterSection';
import FinalSurprise from './components/FinalSurprise';
import FloatingHearts from './components/FloatingHearts';
import './index.css';

function App() {
  return (
    <div className="relative">
      {/* Floating hearts background animation */}
      <FloatingHearts />
      
      {/* Main content */}
      <div className="relative z-10">
        {/* Section 1: Hero - Happy Valentine's Day */}
        <HeroSection />
        
        {/* Section 2: How It Started */}
        <HowItStarted />
        
        {/* Section 3: Memories */}
        <MemoriesSection />
        
        {/* Section 4: Love Letter */}
        <LoveLetterSection />
        
        {/* Section 5: Final Surprise */}
        <FinalSurprise />
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 bg-romantic-wine/10 backdrop-blur-sm py-8 text-center">
        <p className="font-body text-romantic-wine/70 mt-2">
          Happy Valentine's Day, Dawin! 💕
        </p>
      </footer>
    </div>
  );
}

export default App;
