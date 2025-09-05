'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ImageSkeleton } from './ImageSkeleton'

const galleryImages = [
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.24.50 PM.jpeg',
        alt: 'Alfajores de Maicena artesanales',
        title: 'Alfajores Tradicionales'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.24.53 PM.jpeg',
        alt: 'Alfajores con dulce de leche',
        title: 'Con Dulce de Leche'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.24.54 PM.jpeg',
        alt: 'Alfajores con membrillo',
        title: 'Con Membrillo'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.24.55 PM.jpeg',
        alt: 'Alfajores con batata',
        title: 'Con Batata'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.25.01 PM.jpeg',
        alt: 'Variedad de alfajores',
        title: 'Variedad Especial'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.25.07 PM.jpeg',
        alt: 'Alfajores frescos',
        title: 'Recién Horneados'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.25.10 PM.jpeg',
        alt: 'Presentación elegante',
        title: 'Presentación Especial'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.25.12 PM.jpeg',
        alt: 'Alfajores dorados',
        title: 'Dorado Perfecto'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.25.12 PM (1).jpeg',
        alt: 'Textura perfecta',
        title: 'Textura Artesanal'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.25.14 PM.jpeg',
        alt: 'Alfajores premium',
        title: 'Calidad Premium'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.25.15 PM.jpeg',
        alt: 'Alfajores caseros',
        title: 'Hechos en Casa'
    },
    {
        src: '/assets/WhatsApp Image 2025-09-04 at 8.25.16 PM.jpeg',
        alt: 'Alfajores tradicionales',
        title: 'Receta Tradicional'
    }
]

export function PhotoGallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => new Set(prev).add(index))
    }

    return (
        <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                        Nuestra Galería
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Cada alfajor es una obra de arte. Descubre la belleza y delicadeza
                        de nuestros productos artesanales.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer hover-lift animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => setSelectedImage(index)}
                        >
                            <div className="aspect-square relative">
                                {/* Skeleton loader */}
                                {!loadedImages.has(index) && (
                                    <ImageSkeleton className="absolute inset-0" />
                                )}

                                {/* Image */}
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className={`object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    quality={85}
                                    onLoad={() => handleImageLoad(index)}
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                />

                                {/* Overlay - only show when image is loaded */}
                                {loadedImages.has(index) && (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                            <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal/Lightbox */}
                {selectedImage !== null && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-4xl max-h-full">
                            <Image
                                src={galleryImages[selectedImage].src}
                                alt={galleryImages[selectedImage].alt}
                                width={800}
                                height={800}
                                className="object-contain max-h-[90vh] rounded-lg"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
                                aria-label="Close"
                            >
                                ✕
                            </button>

                            {/* Navigation */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-colors"
                                aria-label="Previous image"
                            >
                                ‹
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition-colors"
                                aria-label="Next image"
                            >
                                ›
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                                <h3 className="text-xl font-semibold mb-2">{galleryImages[selectedImage].title}</h3>
                                <p className="text-sm opacity-80">
                                    {selectedImage + 1} de {galleryImages.length}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center mt-16 animate-fade-in">
                    <p className="text-lg text-muted-foreground mb-6">
                        ¿Te gustó lo que viste? ¡Prueba nuestros alfajores!
                    </p>
                    <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Hacer Pedido
                    </button>
                </div>
            </div>
        </section>
    )
}
