'use client'

import Image from 'next/image'

export function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0 mesh-gradient-1 opacity-60" />
            <div className="absolute inset-0 mesh-gradient-2 opacity-40" />
            <div className="absolute inset-0 mesh-overlay opacity-30" />

            {/* Content Container with Better Centering */}
            <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16">
                <div className="text-center space-y-8">

                    {/* Hero Image - Smaller and Above Text */}
                    <div className="flex justify-center animate-scale-in">
                        <div className="relative w-80 h-80 md:w-96 md:h-96 glass-card rounded-3xl p-4 shadow-strong hover-lift">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-glow">
                                <Image
                                    src="/assets/HERO.jpeg"
                                    alt="Delicious Alfajores de Maicena"
                                    fill
                                    className="object-cover"
                                    priority
                                    quality={85}
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Content Below Image */}
                    <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="glass-card rounded-2xl p-8 shadow-medium">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-float">
                                <span className="gradient-text">Maicemita</span>
                            </h1>
                            <p className="text-xl md:text-2xl font-light mb-4 text-dark-gray">
                                Alfajores de Maicena Artesanales
                            </p>
                            <p className="text-base md:text-lg text-muted-brown leading-relaxed max-w-lg mx-auto">
                                Dulces tradicionales hechos con amor, ingredientes naturales y la receta
                                familiar que ha pasado de generación en generación.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
                            <a 
                                href="#products"
                                className="glass-button text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-glow"
                            >
                                Ver Productos
                            </a>
                            <button className="glass-effect text-dark-gray px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-soft border border-white/30">
                                Nuestra Historia
                            </button>
                        </div>
                    </div>
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute -top-20 -left-20 w-32 h-32 rounded-full blur-3xl animate-float shadow-glow"
                    style={{ backgroundColor: 'rgba(243, 165, 99, 0.3)' }} />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl animate-float shadow-glow"
                    style={{ backgroundColor: 'rgba(243, 200, 163, 0.3)', animationDelay: '2s' }} />
                <div className="absolute top-1/2 -right-32 w-24 h-24 rounded-full blur-2xl animate-float"
                    style={{ backgroundColor: 'rgba(161, 153, 147, 0.4)', animationDelay: '4s' }} />
                <div className="absolute bottom-1/3 -left-32 w-28 h-28 rounded-full blur-2xl animate-float"
                    style={{ backgroundColor: 'rgba(247, 247, 247, 0.5)', animationDelay: '6s' }} />
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="glass-effect w-8 h-12 rounded-full flex justify-center items-start pt-2 shadow-soft">
                    <div className="w-1.5 h-4 bg-warm-orange rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    )
}
