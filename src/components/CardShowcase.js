import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    name: "Travel Elite",
    description: "Perfect for frequent travelers seeking premium benefits",
    rewards: "5% on travel purchases",
    annualFee: "$95",
    color: "from-blue-600 to-purple-600",
    features: [
      "No foreign transaction fees",
      "Airport lounge access",
      "Trip cancellation insurance",
      "Global entry credit"
    ]
  },
  {
    id: 2,
    name: "Cashback Pro",
    description: "Maximize your returns on everyday spending",
    rewards: "3% cashback on all purchases",
    annualFee: "$0",
    color: "from-green-500 to-emerald-700",
    features: [
      "No annual fee",
      "Automatic cashback redemption",
      "Purchase protection",
      "Extended warranty"
    ]
  },
  {
    id: 3,
    name: "Business Rewards",
    description: "Designed for small business owners and entrepreneurs",
    rewards: "2x points on all business expenses",
    annualFee: "$150",
    color: "from-amber-500 to-orange-700",
    features: [
      "Employee cards at no additional cost",
      "Detailed spending reports",
      "Travel and emergency assistance",
      "Cell phone protection"
    ]
  }
];

const CardShowcase = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Credit Cards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our top recommended cards for different lifestyles and needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative h-96"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setActiveCard(card.id)}
              onHoverEnd={() => setActiveCard(null)}
            >
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} p-6 flex flex-col justify-between shadow-xl card-shadow card-glow shine-effect`}
                whileHover={{ 
                  rotateY: 10,
                  rotateX: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  rotateY: activeCard === card.id ? 10 : 0,
                  rotateX: activeCard === card.id ? -10 : 0,
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div>
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-8 rounded bg-white/20"></div>
                    <div className="text-white text-right">
                      <p className="font-bold">CARDO</p>
                      <p className="text-xs">PREMIUM</p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mt-6">{card.name}</h3>
                  <p className="text-white/80 mt-2">{card.description}</p>
                </div>
                
                <div className="text-white">
                  <div className="mb-4 p-3 bg-white/10 rounded-lg">
                    <p className="font-semibold">Rewards: {card.rewards}</p>
                    <p>Annual Fee: {card.annualFee}</p>
                  </div>
                  
                  <ul className="text-sm space-y-1">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardShowcase;