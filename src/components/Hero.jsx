'use client'
import Waves from '@/components/waves/Waves';
import { Typewriter } from 'react-simple-typewriter';
import Link from "next/link";
import { motion } from 'framer-motion';
import BlurText from './blurtext/BlurText';

export default function Hero() {
  return (
    <div className="relative w-full min-h-[830px] overflow-hidden">
        <Waves
            lineColor="#fff"
            backgroundColor="rgba(202, 202, 202, 0.52)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={13}
            yGap={36}

        />
      <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-4 md:px-12 max-w-6xl mx-auto py-20">
      <div className="md:w-1/2 text-center md:text-left mt-30">
        <BlurText
          text="Hello, My Name is Muhammad Fikri Aditya 👋"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl mb-6 text-gray-800"
        />
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
          I'm{' '}
          <span className="text-gray-700">
            <Typewriter
              words={['an IT student', 'a videographer', 'a photographer', 'an editor']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="text-lg text-gray-600 mb-6 max-w-md">
           "I combine creative visuals with technical expertise across multiple disciplines ranging from full-stack web development to photography, videography, and editing 
          to craft digital and visual experiences that are both engaging and impactful. With a background that blends art and technology,
          I deliver solutions that not only look great but also function seamlessly and meet real user needs.
        </p>
        <div className="space-x-4">
          <Link
            href="/portofolio"
            className="px-5 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-900 transition"
          >
            View Portfolio
          </Link>
          <Link
            href="/about"
            className="px-5 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-900 transition"
          >
            About Me
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center mt-10 md:mt-30">
        <img
          src="/profile.jpg"
          alt="My Photo"
          className="w-85 h-85 rounded-full object-cover shadow"
        />
      </div>
    </motion.section>

    </div>
  )
}
