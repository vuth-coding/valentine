import React from 'react';
import { motion } from 'framer-motion';

const HowItStarted = () => {
  const moments = [
    {
      title: "First Time You Talked",
      emoji: "💬",
      image: "/path-to-your-image-1.jpg", // Replace with your image path
      message: "Replace this with your special message about the first time you talked. Make it personal and memorable!",
      gradient: "from-pink-200 to-rose-200"
    },
    {
      title: "First Time You Laughed Together",
      emoji: "😄",
      image: "/path-to-your-image-2.jpg", // Replace with your image path
      message: "Replace this with your special message about the first time you laughed together. Remember that funny moment!",
      gradient: "from-rose-200 to-red-200"
    },
    {
      title: "First Time You Missed Each Other",
      emoji: "💭",
      image: "/path-to-your-image-3.jpg", // Replace with your image path
      message: "Replace this with your special message about the first time you missed each other. Those butterflies...",
      gradient: "from-red-200 to-pink-200"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-romantic-cream via-romantic-blush to-romantic-cream opacity-50"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-6xl md:text-7xl font-bold text-romantic-wine mb-4">
            How It Started
          </h2>
          <div className="flex justify-center gap-3 text-4xl">
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💫
            </motion.span>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
            >
              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full md:w-1/2"
              >
                <div className={`bg-gradient-to-br ${moment.gradient} p-1 rounded-2xl shadow-romantic`}>
                  <div className="bg-white p-4 rounded-xl">
                    <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                      {/* Replace with actual image */}
                      <img 
                        src={moment.image} 
                        alt={moment.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="%23ffeef8" width="400" height="300"/><text x="50%" y="50%" text-anchor="middle" fill="%23ff6b9d" font-size="60">${moment.emoji}</text></svg>`;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="text-6xl mb-4"
                >
                  {moment.emoji}
                </motion.div>
                
                <h3 className="font-display text-4xl md:text-5xl font-semibold text-romantic-wine">
                  {moment.title}
                </h3>
                
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-soft border-2 border-romantic-rose/20">
                  <p className="font-body text-xl text-gray-700 leading-relaxed italic">
                    "{moment.message}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItStarted;
