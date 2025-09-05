'use client'

import { useState } from 'react'

interface Product {
  id: string
  name: string
  description: string
  basePrice: number
  currency: string
  images: string[]
  flavors: Array<{
    id: string
    name: string
    description: string
    available: boolean
  }>
  boxSizes: Array<{
    id: string
    name: string
    quantity: number
    price: number
    available: boolean
  }>
  inStock: boolean
  category: string
}

interface Flavor {
  id: string
  name: string
  description: string
  available: boolean
}

interface BoxSize {
  id: string
  name: string
  quantity: number
  price: number
  available: boolean
}

interface OrderFormProps {
  product: Product
  flavor: Flavor
  boxSize: BoxSize
  onClose: () => void
}

export function OrderForm({ product, flavor, boxSize, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-card border border-border rounded-lg p-8 max-w-md w-full">
          <div className="text-center space-y-4">
            <div className="text-6xl">✅</div>
            <h2 className="text-2xl font-bold text-foreground">¡Pedido Enviado!</h2>
            <p className="text-muted-foreground">
              ¡Gracias por tu pedido! Te contactaremos pronto para confirmar los detalles y coordinar la entrega.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-card border border-border rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Realizar Pedido</h2>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-muted rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-2">Resumen del Pedido</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div><strong>Producto:</strong> {product.name}</div>
              <div><strong>Sabor:</strong> {flavor.name}</div>
              <div><strong>Tamaño:</strong> {boxSize.name} ({boxSize.quantity} alfajores)</div>
              <div className="pt-2 border-t border-border">
                <strong className="text-foreground text-lg">Total: ${boxSize.price} {product.currency}</strong>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-foreground mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                placeholder="Ingresa tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="customerEmail" className="block text-sm font-medium text-foreground mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="customerEmail"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                placeholder="Ingresa tu correo electrónico"
              />
            </div>

            <div>
              <label htmlFor="customerPhone" className="block text-sm font-medium text-foreground mb-2">
                Número de Teléfono *
              </label>
              <input
                type="tel"
                id="customerPhone"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                placeholder="Ingresa tu número de teléfono"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Instrucciones Especiales (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                placeholder="Instrucciones especiales de entrega o preferencias..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Pedido'}
              </button>
            </div>
          </form>

          {/* Note */}
          <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
            <p><strong>Nota:</strong> Este es un formulario de contacto. Te contactaremos para confirmar los detalles de tu pedido y coordinar la entrega. No se requiere pago en este momento.</p>
          </div>
        </div>
      </div>
    </div>
  )
}