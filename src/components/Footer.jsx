'use client'
import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
// ini dev
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-500 text-gray-100 py-8"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Fikri Aditya © 2025</p>
          <p className="text-sm text-gray-400">Built with Next.js & Tailwind CSS</p>
        </div>

        <div className="flex gap-4 text-xl">
          <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
