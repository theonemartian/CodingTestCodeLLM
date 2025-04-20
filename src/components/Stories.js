import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Travel Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "As someone who travels frequently, I was paying hundreds in fees. Cardo recommended a travel card that saved me over $500 in my first year and gave me airport lounge access!",
  },
  {
    id: 2,
    name: "John Martinez",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Running a business means tracking every expense. Cardo helped me find a no-fee card with 2% cashback on all business purchases. The savings add up quickly!",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Recent Graduate",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    quote: "With student loans to pay off, I needed a card with low interest. Cardo found me a card with 0% APR for 18 months, which helped me consolidate debt and save on interest.",
  },
];

const Stories = () => {
  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Real Success Stories</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            See how Cardo has helped people find their perfect credit cards and improve their financial lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <motion.img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 border-2 border-white/50"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-white/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/90 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-white/80 text-lg">
            Join thousands of satisfied users who have found their perfect credit card match with Cardo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Stories;