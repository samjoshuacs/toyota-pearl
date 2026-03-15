'use client';

// Libraries
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Dummy Data
const navLinks = [
  {label: "Home", href:"#home"},
  {label: "Vehicles", href:"#vehicles"},
  {label: "Why Us", href:"#why-us"},
  {label: "Reviews", href:"#reviews"},
  {label: "Contact", href:"#contact"},
]

// Component Body
const Navbar = () => {

  // Component States
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/photo_2.jpg" className="w-10 h-10 rounded-full bg-[#000000] flex items-center justify-center border object-cover" alt="Pearl Tingcang Toyota Agent Icon Photo" width={10} height={10}/>
            <div>
              <p className="text-[#1a1a1a] font-bold text-base leading-tight">Toyota Agent</p>
              <p className="text-[#EB0A1E] font-semibold text-xs leading-tight">Pearl Tingcang</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1a1a1a] hover:text-[#EB0A1E] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+639001234567"
              className="flex items-center gap-2 text-[#1a1a1a] text-sm font-medium hover:text-[#EB0A1E] transition-colors"
            >
              <Phone size={15} />
              <span>+63 900 123 4567</span>
            </a>
            <a
              href="#contact"
              className="bg-[#EB0A1E] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#c5081a] transition-colors duration-200"
            >
              Book Test Drive
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-[#1a1a1a]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#1a1a1a] hover:text-[#EB0A1E] text-sm font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#EB0A1E] text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-[#c5081a] transition-colors"
          >
            Book Test Drive
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar