import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-blush via-romantic-cream to-pink-100 opacity-80"></div>
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        💕
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 text-7xl opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        ❤️
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/4 text-5xl opacity-15"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        💝
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 text-5xl opacity-15"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        💖
      </motion.div>

      {/* Floating Photobooth Pictures */}
      <motion.div
        className="absolute top-32 left-20 hidden lg:block"
        initial={{ opacity: 0, rotate: -15, scale: 0 }}
        animate={{ opacity: 1, rotate: -12, scale: 1 }}
        transition={{ delay: 1.5, duration: 1, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: -8, zIndex: 50 }}
      >
        <div className="bg-white p-3 rounded-lg shadow-romantic" style={{ width: '200px' }}>
          <img 
            src="/images/photobooth-1.png" 
            alt="Our memories together"
            className="w-full h-auto rounded"
          />
          <p className="text-center font-script text-sm text-romantic-wine mt-2">
            First kiss hehe
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 hidden lg:block"
        initial={{ opacity: 0, rotate: 15, scale: 0 }}
        animate={{ opacity: 1, rotate: 12, scale: 1 }}
        transition={{ delay: 2, duration: 1, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: 8, zIndex: 50 }}
      >
        <div className="bg-white p-3 rounded-lg shadow-romantic" style={{ width: '200px' }}>
          <img 
            src="/images/photobooth-2.png" 
            alt="Us being adorable"
            className="w-full h-auto rounded"
          />
          <p className="text-center font-script text-sm text-romantic-wine mt-2">
            First Photobooth ❤️
          </p>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 1, 
            type: "spring", 
            stiffness: 100,
            delay: 0.2 
          }}
        >
          <motion.h1 
            className="font-display text-7xl md:text-9xl font-bold text-romantic-wine mb-6 glow-text"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Happy Valentine's Day
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="font-script text-6xl md:text-7xl text-romantic-rose mb-8 animate-heartbeat">
            Dawin ❤️
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center gap-4 mt-12"
        >
          {['💕', '💖', '💗', '💝', '💘'].map((heart, index) => (
            <motion.span
              key={index}
              className="text-4xl"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-romantic-rose text-2xl"
          >
            ↓
          </motion.div>
          <p className="font-body text-xl text-romantic-wine mt-2">
            Scroll to explore our love story
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
