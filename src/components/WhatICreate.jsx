'use client'
import { motion } from 'framer-motion'
import TiltedCard from './card/TiltedCard';
import { useEffect, useState } from 'react'

export default function WhatICreate() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    show && (
    <motion.section
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="mt-20 text-center max-w-4xl mx-auto px-4 ">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">What I Create</h2>
      <p className="text-gray-600 mb-8">
        Some of the creative works and services that I produce professionally:
      </p>
        <div className="flex flex-wrap justify-center gap-30">
  <TiltedCard
    imageSrc="./foto.jpg"
    altText="Pemotretan produk, model, hingga dokumentasi event."
    captionText="Pemotretan produk, model, hingga dokumentasi event."
    containerHeight="200px"
    containerWidth="200px"
    imageHeight="150px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={<p className="tilted-card-demo-text">Photography</p>}
  />

  <TiltedCard
    imageSrc="./video.jpg"
    altText="Video klip, konten sosial media, dokumentasi pernikahan, dll."
    captionText="Video klip, konten sosial media, dokumentasi pernikahan, dll."
    containerHeight="200px"
    containerWidth="200px"
    imageHeight="150px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={<p className="tilted-card-demo-text">Videography</p>}
  />

  <TiltedCard
    imageSrc="./program.jpg"
    altText="Membangun website portfolio, landing page, dan sistem berbasis web."
    captionText="Membangun website portfolio, landing page, dan sistem berbasis web."
    containerHeight="200px"
    containerWidth="200px"
    imageHeight="150px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={<p className="tilted-card-demo-text">Web Development</p>}
  />
</div>

        <h2 className="text-xl font-bold text-gray-800 mt-20 px-4 text-center">My Philosophy</h2>
        <blockquote className="italic text-xl text-gray-700 max-w-2xl mx-auto">
          "Visuals are not just about what you see, but what you feel."
        </blockquote>
    </motion.section>
    )
  );
}
