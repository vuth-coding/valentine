import React, { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create random hearts
    const heartElements = [];
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 20; i++) {
      heartElements.push({
        id: i,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        left: Math.random() * 100,
        animationDuration: 10 + Math.random() * 10,
        animationDelay: Math.random() * 5,
        size: 15 + Math.random() * 15
      });
    }
    
    setHearts(heartElements);
  }, []);

  return (
    <div className="hearts-background">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
