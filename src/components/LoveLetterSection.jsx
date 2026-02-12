import React from 'react';
import { motion } from 'framer-motion';

const LoveLetterSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 relative flex items-center">
      {/* Romantic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-cream via-romantic-blush to-pink-100"></div>
      
      {/* Floating decorative hearts */}
      <motion.div
        className="absolute top-1/4 left-10 text-4xl opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💌
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-20 text-5xl opacity-20"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        💝
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 text-4xl opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        ✉️
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-6xl md:text-7xl font-bold text-romantic-wine mb-4">
            A Letter to You
          </h2>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl"
          >
            💌
          </motion.div>
        </motion.div>

        {/* Letter container with paper effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Paper texture and shadow */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-lg shadow-romantic border-4 border-romantic-wine/10 relative overflow-hidden">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-romantic-rose/30 rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-romantic-rose/30 rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-romantic-rose/30 rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-romantic-rose/30 rounded-br-lg"></div>
            
            {/* Letter content */}
            <div className="relative z-10">
              {/* Date */}
              <p className="font-script text-2xl text-romantic-wine/70 mb-8 text-right">
                February 14, 2026
              </p>

              {/* Greeting */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="font-script text-4xl text-romantic-wine mb-8"
              >
                My Dearest Dawin,
              </motion.h3>

              {/* Letter body - Replace with your actual love letter */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
                className="space-y-6 font-body text-lg md:text-xl text-gray-800 leading-relaxed"
              >
                <p className="first-letter:text-6xl first-letter:font-display first-letter:text-romantic-wine first-letter:mr-2 first-letter:float-left">
                  Every day with you feels like a beautiful dream I never want to wake up from. 
                  You've brought so much joy, laughter, and love into my life, and I am endlessly 
                  grateful for every moment we share together.
                </p>

                <p>
                  From the first time we talked, I knew there was something special about you. 
                  Your smile lights up my darkest days, your laugh is my favorite melody, and 
                  your presence makes everything better. You are my best friend, my partner, 
                  and my greatest adventure.
                </p>

                <p>
                  I love the way you [add your personal touch here - something specific they do], 
                  the way you [another personal detail], and how you always [something you appreciate]. 
                  These little things mean the world to me.
                </p>

                <p>
                  Thank you for being you, for loving me, for standing by me, and for making 
                  every ordinary day extraordinary. You are my heart, my home, and my forever.
                </p>

                <p className="italic text-romantic-wine">
                  I love you more than words could ever express, and I can't wait to create 
                  countless more beautiful memories with you. ❤️
                </p>
              </motion.div>

              {/* Closing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-12 text-right"
              >
                <p className="font-body text-xl text-gray-700 mb-2">
                  With all my love,
                </p>
                <p className="font-script text-4xl text-romantic-wine">
                  Forever Yours ❤️
                </p>
              </motion.div>
            </div>

            {/* Decorative hearts scatter */}
            <div className="absolute bottom-4 left-4 flex gap-2 opacity-30">
              <span className="text-2xl">💕</span>
              <span className="text-xl">💖</span>
              <span className="text-2xl">💗</span>
            </div>
          </div>

          {/* Paper edge shadow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none rounded-lg transform translate-y-1"></div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-12"
        >
          {['💝', '💌', '💖', '💗', '💕'].map((emoji, index) => (
            <motion.span
              key={index}
              className="text-3xl"
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                delay: index * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
