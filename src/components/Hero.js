import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ openModal }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Simple animation for card rotation
    const card = cardRef.current;
    if (!card) return;

    const rotateCard = () => {
      const interval = setInterval(() => {
        card.style.transform = `rotateY(${Math.sin(Date.now() / 1000) * 15}deg) rotateX(${Math.cos(Date.now() / 1500) * 10}deg)`;
      }, 50);
      return () => clearInterval(interval);
    };

    const cleanup = rotateCard();
    return cleanup;
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-bg">
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between">
        <motion.div 
          className="lg:w-1/2 text-white mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Find Your Perfect Credit Card with Cardo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            AI-powered recommendations tailored to you.
          </p>
          <motion.button
            onClick={openModal}
            className="px-8 py-4 bg-cardo-gold text-cardo-blue font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative w-72 h-44 perspective-1000">
            <div 
              ref={cardRef}
              className="absolute w-full h-full rounded-2xl shadow-2xl shine-effect transition-all duration-300 ease-out"
              style={{
                background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Card content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-8 rounded bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-80"></div>
                  <div className="text-white text-right">
                    <p className="font-bold">CARDO</p>
                    <p className="text-xs">PREMIUM</p>
                  </div>
                </div>
                
                <div className="text-white">
                  <div className="mb-2">
                    <p className="text-xs opacity-70">Card Number</p>
                    <p className="font-mono tracking-wider">•••• •••• •••• 4242</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs opacity-70">Card Holder</p>
                      <p>JOHN DOE</p>
                    </div>
                    <div>
                      <p className="text-xs opacity-70">Expires</p>
                      <p>12/28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;