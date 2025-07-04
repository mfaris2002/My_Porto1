'use client'
import { motion } from 'framer-motion'
import { FaReact, FaCss3Alt} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiAdobelightroom,
  SiLaravel,
  SiAdobephotoshop,
  SiPhp
} from 'react-icons/si';

const tools = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-700" /> },
  { name: 'Lightroom', icon: <SiAdobelightroom className="text-blue-400" /> },
  { name: 'Laravel', icon: <SiLaravel className="text-red-600" /> },
  { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-500" /> },
  { name: 'PHP', icon: <SiPhp className="text-indigo-700" /> },
  { name: 'DaVinci Resolve', icon: <span className="text-2xl">🎬</span> }, // sementara pakai emoji
]
export default function Tools() {
  return (

    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-20 text-center max-w-5xl mx-auto px-4"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">Tools I Use</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-2">{tool.icon}</div>
            <span className="text-sm font-medium text-gray-700">{tool.name}</span>
          </div>
        ))}
      </div>
    </motion.section>

  )
}