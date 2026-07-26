"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Coca-Cola</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#products" className="text-gray-700 hover:text-red-600 transition font-medium">
              Products
            </a>
            <a href="#features" className="text-gray-700 hover:text-red-600 transition font-medium">
              Features
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-red-600 transition font-medium">
              Gallery
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition font-medium">
            Shop Now
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#products" className="text-gray-700 hover:text-red-600 transition">
              Products
            </a>
            <a href="#features" className="text-gray-700 hover:text-red-600 transition">
              Features
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-red-600 transition">
              Gallery
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition">
              Contact
            </a>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition w-full">
              Shop Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
