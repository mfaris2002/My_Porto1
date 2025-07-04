'use client'
import Stack from "@/components/stack/Stack"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const timelineVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 }
  })
}

export default function AboutPage() {
  const [showTimeline, setShowTimeline] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTimeline(true)
    }, 100)
    return () => clearTimeout(timeout)
  }, [])

  const careerSteps = [
  {
    title: 'Freelance Fotografer',
    period: '2018 - Sekarang',
    description: 'Taking product photos, model portraits, documenting events such as weddings and seminars, and doing basic editing for maximum results.'
  },
  {
    title: 'Freelance Videografer',
    period: '2018 - Sekarang',
    description: 'Shooting and directing videos for promotional purposes, event documentation, and digital content. Familiar with using professional cameras and drones.'
  },
  {
    title: 'Freelance Editor',
    period: '2018 - Sekarang',
    description: 'Editing videos and photos for various digital platforms, including social media, YouTube, and advertising. Proficient in Adobe Premiere Pro and Lightroom.'
  },
  {
    title: 'Web Developer',
    period: '2023 - Sekarang',
    description: 'Build websites for businesses and organizations, including company profiles, online stores, and event management systems, with the Next.js, React, and Laravel stack.'
  }
]
const certificateSteps = [
  {
    title: 'Dasar Pemrograman Web – Dicoding',
    period: '2023',
    description: 'Learn the basics of HTML, CSS, and JavaScript for responsive web development.'
  },
  {
    title: 'React Advanced – Coursera',
    period: '2025',
    description: 'Deep dive into React hooks, performance optimization, and modern SPA development.'
  },
  {
    title: "CS5'0s Web Programming with Python and JavaScript",
    period: '2025',
    description: 'Learn how to build modern websites using HTML, CSS, JavaScript, Python (Flask), SQL, and backend and API concepts in depth.'
  },
]


  return (
    <main className="min-h-screen px-6 py-16 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* FOTO PROFIL */}
        <div className="flex justify-center sm:px-6 md:px-0">
          <div className="max-w-md w-full transform scale-80 sm:scale-100">
          <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 400, height: 400 }}
          cardsData={"/profile.jpg"}
          />
          </div>
        </div>

        {/* TEKS PERKENALAN */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Fikri</h1>
          <p className="text-lg leading-relaxed mb-4">
            I am an IT student who is also active as a freelance photographer, videographer, and editor.
            I am interested in fullstack web development, UI/UX, and creative technology. I am currently studying Next.js, Laravel, and React.
          </p>
          <p className="text-lg leading-relaxed">
            My goal is to combine visual arts with technology to create digital experiences that are both aesthetic and functional.
          </p>
        </div>
      </div>

      {/* KARIR */}
      <div className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">My Carrier</h2>

        {showTimeline && (
          <div className="relative border-l-4 border-gray-300 pl-10 space-y-12">
            {careerSteps.map((item, index) => (
              <motion.div
                key={`career-${index}`}
                className="relative"
                variants={timelineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                custom={index}
              >
                <div className="absolute -left-5 top-1 w-4 h-4 bg-white border-4 border-gray-500 rounded-full shadow-md"></div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.period}</span>
                  <p className="text-base mt-2 text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
        {/* Certificate */}
      <div className="max-w-5xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6">My Certificate</h2>

        {showTimeline && (
          <div className="relative border-l-4 border-gray-300 pl-10 space-y-12">
            {certificateSteps.map((item, index) => (
              <motion.div
                key={`career-${index}`}
                className="relative"
                variants={timelineVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                custom={index}
              >
                <div className="absolute -left-5 top-1 w-4 h-4 bg-white border-4 border-gray-500 rounded-full shadow-md"></div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.period}</span>
                  <p className="text-base mt-2 text-gray-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
