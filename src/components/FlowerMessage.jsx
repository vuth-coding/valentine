import React from 'react';
import { motion } from 'framer-motion';

const FlowerMessage = () => {
  return (
    <div className="space-y-12">
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
        className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-romantic border-4 border-romantic-rose/30 max-w-3xl mx-auto"
      >
        <h3 className="font-display text-3xl md:text-4xl font-semibold text-romantic-wine mb-6 text-center">
          I wanted to send you flowers today...
        </h3>
        
        <div className="space-y-3 font-body text-lg md:text-xl text-gray-700 leading-relaxed text-center">
          <p className="text-romantic-rose italic">
            But I'd rather give them to you in person
          </p>
          <p className="text-gray-600">
            —when I can see your reaction,
          </p>
          <p className="text-gray-600">
            when I can hear your laugh,
          </p>
          <p className="text-gray-600">
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
    </div>
  );
};

export default FlowerMessage;
