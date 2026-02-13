import React from 'react';
import { motion } from 'framer-motion';

const HowItStarted = () => {
  const moments = [
    {
      title: "First Time We Met",
      emoji: "💬",
      image: "/memories/howwemet.png", // Replace with your image path
      message: "Our story began in Minecraft. You were the builder, and I was the quiet developer on Chester MC. At first, I didn’t even talk to you because I was too shy. Then one day, you messaged me on Discord. From that moment, we started chatting, and little by little, our conversations grew. It was simple, it was funny, but it was also the beginning of us..",
      gradient: "from-pink-200 to-rose-200"
    },
    {
      title: "The Confession",
      emoji: "😄",
      image: "/memories/confess.png", // Replace with your image path
      message: "I still remember the very first time I tried to confess my feelings to you. You asked me what my type was, and without thinking I said, ‘It’s you.’ But you didn’t hear me the first time and asked again… and I was so shy that I quickly ended the call. But then, you called me back. And in that moment, I couldn’t hide it anymore. I confessed to you that day, and it felt like the beginning of our own love story.",
      gradient: "from-rose-200 to-red-200"
    },
    {
      title: "IRL Meeting",
      emoji: "💖",
      image: "/memories/irl.png", // Replace with your image path
      message: "After just a week of falling in love, fate gave me the perfect chance. My sister mentioned she wanted to go to Siem Reap, and I quickly asked if I could join her. That’s how I found myself on the way to Siem Reap… and that’s how I finally met you. The first time I saw my girlfriend in real life, I was so nervous I forgot how to be a human. I couldn’t even speak! I just stood there, smiling like a tourist who lost his map. My heart was racing, my hands didn’t know where to go, and my brain was completely blank. It was awkward, it was funny… but it was also perfect. Because even in that silly, shy moment, I knew I was meeting the person who would change my life.",
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
      <div className="absolute inset-0 bg-linear-to-b from-romantic-cream via-romantic-blush to-romantic-cream opacity-50"></div>
      
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
