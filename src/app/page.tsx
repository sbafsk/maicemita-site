import { ProductShowcase } from '@/components/ProductShowcase'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/components/HeroSection'
import { PhotoGallery } from '@/components/PhotoGallery'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PhotoGallery />
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Nuestros Productos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alfajores artesanales hechos con amor y los mejores ingredientes.
              Elige tu sabor favorito y el tamaño perfecto para cada ocasión.
            </p>
          </div>
          <ProductShowcase />
        </div>
      </section>
      <Footer />
    </main>
  )
}