export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🧁</span>
              <span className="text-xl font-bold text-foreground">Maicemita</span>
            </div>
            <p className="text-muted-foreground">
              Homemade alfajores de maicena made with love and traditional recipes.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 contact@maicemita.com</p>
              <p>📞 +1234567890</p>
              <p>📍 Local Delivery Available</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#products" className="block text-muted-foreground hover:text-primary transition-colors">
                Our Products
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Maicemita. All rights reserved. Made with ❤️ for dessert lovers.</p>
        </div>
      </div>
    </footer>
  )
}