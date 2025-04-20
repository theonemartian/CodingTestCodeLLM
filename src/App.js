import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Stories from './components/Stories';
import CardShowcase from './components/CardShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App bg-white">
      <Hero openModal={openModal} />
      <Features />
      <Stories />
      <CardShowcase />
      <CTA openModal={openModal} />
      <Footer />
      <SignUpModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;