'use client'
import { motion } from 'framer-motion'
export default function Quote() {
  return (
    <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="mt-20 px-4 text-center">
      <h2 className="text-xl font-bold text-gray-800 mb-2">My Philosophy</h2>
      <blockquote className="italic text-xl text-gray-700 max-w-2xl mx-auto">
        "Visuals are not just about what you see, but what you feel."
      </blockquote>
    </motion.section>
  );
}
