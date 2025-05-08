import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="border-b border-neutral-900 pb-20 px-4 sm:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="mb-8 text-center text-3xl sm:text-4xl font-thin tracking-tight">
        Get in Touch!
      </h1>

      <div className="space-y-4 text-center font-light text-base sm:text-lg md:text-xl text-neutral-300">
        <p>Anaheim California 92804</p>
        <p>📞 Phone Number: +17143500753</p>
        <p>✉️ Email: nguyenbrian726@gmail.com</p>
      </div>
    </motion.section>
  );
}