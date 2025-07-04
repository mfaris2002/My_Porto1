'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <h1 className="text-xl font-bold text-gray-800">Yoo, I'm here..</h1>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
          <Link href="/portofolio" className="text-gray-700 hover:text-black">Portofolio</Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
