import { ProductShowcase } from '@/components/ProductShowcase'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            🧁 Maicemita
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Homemade Alfajores de Maicena
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sweet pastries made with love. Choose from our delicious flavors and box sizes.
          </p>
        </div>
        
        <ProductShowcase />
      </div>
      <Footer />
    </main>
  )
}