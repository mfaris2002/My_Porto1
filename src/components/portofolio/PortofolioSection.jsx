'use client'
import { motion } from 'framer-motion'

const portfolios = [
  {
    title: 'Website Company Profile',
    image: '/porto/company.jpg',
    description: 'Web profil bisnis menggunakan Next.js dan Tailwind.',
    link: 'https://contoh.com'
  },
  {
    title: 'Video Dokumentasi Event',
    image: '/porto/video.jpg',
    description: 'Produksi dan editing video untuk acara komunitas.',
    link: '#'
  },
  {
    title: 'Foto Produk UMKM',
    image: '/porto/produk.jpg',
    description: 'Pemotretan katalog produk untuk promosi online.',
    link: '#'
  },
  {
    title: 'Foto Produk UMKM',
    image: '/porto/produk.jpg',
    description: 'Pemotretan katalog produk untuk promosi online.',
    link: '#'
  },
  {
    title: 'Foto Produk UMKM',
    image: '/porto/produk.jpg',
    description: 'Pemotretan katalog produk untuk promosi online.',
    link: '#'
  },
  {
    title: 'Foto Produk UMKM',
    image: '/porto/produk.jpg',
    description: 'Pemotretan katalog produk untuk promosi online.',
    link: '#'
  }
  
]

export default function PortofolioSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Portofolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolios.map((item, index) => (
          <motion.a
            href={item.link}
            target="_blank"
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="block bg-white shadow-lg rounded-xl overflow-hidden transition-all"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
