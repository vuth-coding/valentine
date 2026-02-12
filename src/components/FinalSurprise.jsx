import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const FinalSurprise = () => {
  const [answered, setAnswered] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);

  const handleYesClick = () => {
    setAnswered(true);
    
    // Multiple confetti bursts
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Burst from left
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff6b9d', '#c9184a', '#ffd700', '#ff1493', '#ff69b4']
      });
      
      // Burst from right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff6b9d', '#c9184a', '#ffd700', '#ff1493', '#ff69b4']
      });
    }, 250);

    // Big heart-shaped confetti burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff6b9d', '#c9184a', '#ffd700', '#ff1493', '#ff69b4'],
        shapes: ['circle'],
        scalar: 1.2
      });
    }, 500);

    // Show flowers after confetti
    setTimeout(() => {
      setShowFlowers(true);
    }, 3000);
  };

  return (
    <section className="min-h-screen py-20 px-4 relative flex items-center justify-center overflow-hidden">
      {/* Magical gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-romantic-blush via-pink-100 to-romantic-cream"></div>
      
      {/* Animated background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {!answered ? (
          <>
            {/* The big question */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-8"
              >
                💍
              </motion.div>

              <h2 className="font-display text-5xl md:text-7xl font-bold text-romantic-wine mb-8 leading-tight">
                The Most Important Question...
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-romantic border-4 border-romantic-rose/20 mb-12"
            >
              <p className="font-script text-4xl md:text-6xl text-romantic-rose mb-6 leading-relaxed">
                Will you stay with me forever?
              </p>
              
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex gap-4 justify-center text-5xl"
              >
                <span>💕</span>
                <span>💖</span>
                <span>💗</span>
              </motion.div>
            </motion.div>

            {/* The Yes button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={handleYesClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-linear-to-r from-romantic-rose via-romantic-wine to-romantic-rose rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                <div className="relative px-16 py-6 bg-linear-to-r from-romantic-rose to-romantic-wine rounded-full leading-none flex items-center">
                  <span className="font-display text-3xl md:text-4xl text-white font-bold flex items-center gap-3">
                    Yes ❤️
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      💕
                    </motion.span>
                  </span>
                </div>
              </motion.button>

              <p className="font-body text-lg text-romantic-wine/70 mt-6 italic">
                (Spoiler: there's only one answer! 😉)
              </p>
            </motion.div>
          </>
        ) : (
          // After clicking Yes
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="space-y-8"
          >
            {!showFlowers ? (
              // Initial celebration
              <>
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-9xl"
                >
                  🎉
                </motion.div>

                <h2 className="font-display text-6xl md:text-8xl font-bold text-romantic-wine mb-8">
                  I Knew It! 💖
                </h2>

                <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-romantic border-4 border-romantic-rose/20">
                  <p className="font-script text-3xl md:text-5xl text-romantic-rose mb-6 leading-relaxed">
                    You've made me the happiest person in the world!
                  </p>
                </div>
              </>
            ) : (
              // Flower animation and message
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-12"
              >
                {/* Bouquet of flowers */}
                <motion.div 
                  className="relative flex justify-center items-end gap-2"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  {/* Flowers growing animation */}
                  {[
                    { emoji: '🌹', delay: 0, height: 'h-32' },
                    { emoji: '🌺', delay: 0.1, height: 'h-28' },
                    { emoji: '🌸', delay: 0.2, height: 'h-36' },
                    { emoji: '🌷', delay: 0.3, height: 'h-30' },
                    { emoji: '🌻', delay: 0.4, height: 'h-34' },
                    { emoji: '🌹', delay: 0.5, height: 'h-32' },
                    { emoji: '🌺', delay: 0.6, height: 'h-29' },
                  ].map((flower, index) => (
                    <motion.div
                      key={index}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.8,
                        delay: flower.delay,
                        type: "spring",
                        stiffness: 100
                      }}
                      className={`origin-bottom ${flower.height} flex items-end`}
                    >
                      <motion.span
                        animate={{ 
                          rotate: [0, -5, 5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: flower.delay
                        }}
                        className="text-6xl md:text-7xl"
                      >
                        {flower.emoji}
                      </motion.span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Sparkles around flowers */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex justify-center gap-4 text-4xl"
                >
                  {['✨', '💫', '⭐', '✨', '💫'].map((sparkle, index) => (
                    <motion.span
                      key={index}
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.3, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {sparkle}
                    </motion.span>
                  ))}
                </motion.div>

                {/* The beautiful message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-romantic border-4 border-romantic-rose/30"
                >
                  <h3 className="font-display text-3xl md:text-4xl font-semibold text-romantic-wine mb-6 text-center">
                    I wanted to send you flowers today...
                  </h3>
                  
                  <div className="space-y-4 font-body text-xl md:text-2xl text-gray-700 leading-relaxed text-center italic">
                    <p>
                      But I'd rather give them to you in person
                    </p>
                    <p className="text-romantic-rose">
                      —when I can see your reaction,
                    </p>
                    <p className="text-romantic-rose">
                      when I can hear your laugh,
                    </p>
                    <p className="text-romantic-rose">
                      when I can say "I love you" without a screen between us.
                    </p>
                  </div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                    className="mt-8 text-center"
                  >
                    <p className="font-script text-3xl md:text-4xl text-romantic-wine">
                      Until we meet again... 🌹
                    </p>
                  </motion.div>
                </motion.div>

                {/* Bottom hearts */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="flex justify-center gap-4 text-5xl"
                >
                  {['💝', '💖', '💕', '💗', '💘'].map((heart, index) => (
                    <motion.span
                      key={index}
                      animate={{ 
                        y: [0, -15, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        delay: index * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {heart}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                  className="font-script text-3xl text-romantic-wine mt-8"
                >
                  Forever and Always ∞
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FinalSurprise;
