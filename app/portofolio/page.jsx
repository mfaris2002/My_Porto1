'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '@/components/PageWrapper'

const projects = [
  {
    title: 'Photoshoot',
    img: '/foto.jpg',
    desc: 'Pemotretan indoor dengan pencahayaan studio, cocok untuk produk atau personal branding.'
  },
  {
    title: 'Cinematic Video',
    img: '/video.jpg',
    desc: 'Pembuatan video dengan konsep cinematic modern, cocok untuk iklan, dokumentasi, atau profil bisnis.'
  },
  {
    title: 'Editing',
    img: '/edit.jpg',
    desc: 'Proses editing foto dan video dengan sentuhan profesional untuk hasil maksimal.'
  },
  {
    title: 'Website Management Tournament',
    img: '/web2.jpg',
    desc: 'Website interaktif untuk pengelolaan turnamen eSports, lengkap dengan sistem user dan live stream.'
  },
  {
    title: 'Website Brand Fotografi',
    img: '/web1.jpg',
    desc: 'Website portofolio untuk brand fotografi dengan tampilan modern dan minimalis.'
  },
  {
    title: 'Website brand UMKM',
    img: '/web3.jpg',
    desc: 'Website untuk mendukung brand UMKM agar lebih dikenal melalui tampilan profesional dan informatif.'
  }
];

export default function Portfolio() {
    const [showContent, setShowContent] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const timeout = setTimeout(() => setShowContent(true), 100)
    return () => clearTimeout(timeout)
  }, [pathname]) // 👈 Tambahkan ini biar useEffect jalan tiap ganti page

  return (
    <PageWrapper>
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">My portofolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {projects.map((project, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{
            scale: 1.03,
            y: -5,
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'
          }}
          className="bg-white shadow-md p-4 rounded-lg cursor-pointer"
        >
          <div className="overflow-hidden rounded">
            <motion.img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-700">{project.title}</h2>
          <p className="text-gray-600">{project.desc}</p>
        </motion.div>

        ))}
      </div>
    </div>
    </PageWrapper>
  )
}