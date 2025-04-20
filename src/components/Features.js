import React from 'react';
import { motion } from 'framer-motion';

// Feature icons (simplified for this example)
const PersonalizedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cardo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const RewardsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cardo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TransparencyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cardo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SecurityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cardo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const features = [
  {
    id: 1,
    title: "Personalized Recommendations",
    description: "Our AI analyzes your spending habits and financial goals to match you with the perfect credit cards.",
    icon: <PersonalizedIcon />
  },
  {
    id: 2,
    title: "Rewards Maximizer",
    description: "Compare cashback percentages, points systems, and travel rewards to find the card that gives you the most value.",
    icon: <RewardsIcon />
  },
  {
    id: 3,
    title: "Fee Transparency",
    description: "We clearly display annual fees, APRs, foreign transaction fees, and other potential hidden costs.",
    icon: <TransparencyIcon />
  },
  {
    id: 4,
    title: "Secure & Private",
    description: "Your data is encrypted and never shared. We prioritize your privacy and financial security.",
    icon: <SecurityIcon />
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Cardo helps you make smarter credit card decisions with our innovative tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-cardo-blue">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;