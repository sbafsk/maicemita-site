'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md hover-lift">
              <Image
                src="/assets/LOGO.jpeg"
                alt="Maicemita Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Maicemita</h1>
              <p className="text-xs text-muted-foreground">Alfajores Artesanales</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#hero" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              Inicio
            </a>
            <a 
              href="#gallery" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              Galería
            </a>
            <a 
              href="#products" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              Productos
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Pedir Ahora
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-full h-0.5 bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <a href="#hero" className="text-foreground hover:text-primary transition-colors py-2">
                Inicio
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors py-2">
                Galería
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors py-2">
                Productos
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contacto
              </a>
              <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2.5 rounded-full font-semibold mt-4 w-full">
                Pedir Ahora
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}