import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MemoriesSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace these with your actual images and captions
  const memories = [
    { 
      id: 1, 
      image: "/memory-1.jpg", 
      caption: "Our first adventure together ❤️",
      emoji: "🎉"
    },
    { 
      id: 2, 
      image: "/memory-2.jpg", 
      caption: "That beautiful sunset 🌅",
      emoji: "🌅"
    },
    { 
      id: 3, 
      image: "/memory-3.jpg", 
      caption: "Coffee dates are the best ☕",
      emoji: "☕"
    },
    { 
      id: 4, 
      image: "/memory-4.jpg", 
      caption: "Making memories every day 💕",
      emoji: "💕"
    },
    { 
      id: 5, 
      image: "/memory-5.jpg", 
      caption: "You always make me smile 😊",
      emoji: "😊"
    },
    { 
      id: 6, 
      image: "/memory-6.jpg", 
      caption: "Adventures with you are my favorite 🗺️",
      emoji: "🗺️"
    },
    { 
      id: 7, 
      image: "/memory-7.jpg", 
      caption: "Every moment is special with you ✨",
      emoji: "✨"
    },
    { 
      id: 8, 
      image: "/memory-8.jpg", 
      caption: "You're my everything 💖",
      emoji: "💖"
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-blush via-white to-romantic-cream"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-6xl md:text-7xl font-bold text-romantic-wine mb-6">
            Our Precious Memories
          </h2>
          <p className="font-body text-2xl text-romantic-rose italic">
            Every moment with you is a treasure 💎
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotate: Math.random() > 0.5 ? 2 : -2,
                zIndex: 10
              }}
              onClick={() => setSelectedImage(memory)}
              className="cursor-pointer group"
            >
              <div className="bg-gradient-to-br from-romantic-rose to-romantic-wine p-1 rounded-2xl shadow-lg hover:shadow-romantic transition-shadow duration-300">
                <div className="bg-white p-3 rounded-xl">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
                    <img 
                      src={memory.image} 
                      alt={memory.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect fill="%23ffeef8" width="400" height="400"/><text x="50%" y="50%" text-anchor="middle" fill="%23ff6b9d" font-size="80">${memory.emoji}</text></svg>`;
                      }}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-romantic-wine/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-body text-sm">
                        {memory.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full bg-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.caption}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-body text-xl text-center text-romantic-wine italic">
                  {selectedImage.caption}
                </p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="mt-4 w-full bg-gradient-to-r from-romantic-rose to-romantic-wine text-white font-body text-lg py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mt-16">
          {['💗', '💖', '💕', '💝', '💘', '💓'].map((heart, index) => (
            <motion.span
              key={index}
              className="text-3xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {heart}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
