import Image from 'next/image'

export function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-t from-secondary to-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md">
                <Image
                  src="/assets/LOGO.jpeg"
                  alt="Maicemita Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold gradient-text">Maicemita</h2>
                <p className="text-sm text-muted-foreground">Alfajores Artesanales</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Alfajores de maicena artesanales hechos con amor, ingredientes naturales 
              y la receta tradicional que ha pasado de generación en generación.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-primary">📧</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-primary">📱</span>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer">
                <span className="text-primary">📍</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contacto</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <span className="text-primary">📧</span>
                <span>contacto@maicemita.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">📞</span>
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">📍</span>
                <span>Entrega Local Disponible</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary">🕒</span>
                <span>Lun-Sáb: 9:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Enlaces</h3>
            <div className="space-y-3">
              <a href="#hero" className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-2 duration-300">
                Inicio
              </a>
              <a href="#gallery" className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-2 duration-300">
                Galería
              </a>
              <a href="#products" className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-2 duration-300">
                Productos
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-2 duration-300">
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                &copy; 2025 Maicemita. Todos los derechos reservados.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Hecho con ❤️ para los amantes de los dulces tradicionales.
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}