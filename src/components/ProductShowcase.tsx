'use client'

import { useState } from 'react'
import { ProductCard } from './ProductCard'
import { OrderForm } from './OrderForm'

// Product data based on the documentation
const products = [
  {
    id: '1',
    name: 'Alfajores de Maicena',
    description: 'Delicious homemade alfajores made with traditional cornstarch cookies and sweet fillings',
    basePrice: 15.99,
    currency: 'USD',
    images: ['/placeholder-alfajores.jpg'],
    flavors: [
      { id: '1', name: 'Dulce de Leche', description: 'Classic sweet milk caramel', available: true },
      { id: '2', name: 'Membrillo', description: 'Traditional quince paste', available: true },
      { id: '3', name: 'Batata', description: 'Sweet potato filling', available: true }
    ],
    boxSizes: [
      { id: '1', name: 'Small Box', quantity: 6, price: 15.99, available: true },
      { id: '2', name: 'Medium Box', quantity: 12, price: 28.99, available: true },
      { id: '3', name: 'Large Box', quantity: 24, price: 52.99, available: true }
    ],
    inStock: true
  }
]

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [selectedFlavor, setSelectedFlavor] = useState<string>('')
  const [selectedBoxSize, setSelectedBoxSize] = useState<string>('')
  const [showOrderForm, setShowOrderForm] = useState(false)

  const handleProductSelect = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setSelectedFlavor('')
    setSelectedBoxSize('')
    setShowOrderForm(false)
  }

  const handleOrder = () => {
    if (selectedFlavor && selectedBoxSize) {
      setShowOrderForm(true)
    }
  }

  const selectedBoxSizeData = selectedProduct.boxSizes.find(size => size.id === selectedBoxSize)
  const selectedFlavorData = selectedProduct.flavors.find(flavor => flavor.id === selectedFlavor)

  return (
    <div id="products" className="space-y-12">
      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleProductSelect}
            isSelected={selectedProduct.id === product.id}
          />
        ))}
      </div>

      {/* Product Details and Ordering */}
      {selectedProduct && (
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-6xl">🧁</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">{selectedProduct.name}</h2>
              <p className="text-muted-foreground">{selectedProduct.description}</p>
            </div>

            {/* Product Options */}
            <div className="space-y-6">
              {/* Flavor Selection */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Choose Flavor</h3>
                <div className="grid grid-cols-1 gap-3">
                  {selectedProduct.flavors.map((flavor) => (
                    <button
                      key={flavor.id}
                      onClick={() => setSelectedFlavor(flavor.id)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        selectedFlavor === flavor.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="font-medium">{flavor.name}</div>
                      <div className="text-sm text-muted-foreground">{flavor.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Box Size Selection */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Choose Box Size</h3>
                <div className="grid grid-cols-1 gap-3">
                  {selectedProduct.boxSizes.map((boxSize) => (
                    <button
                      key={boxSize.id}
                      onClick={() => setSelectedBoxSize(boxSize.id)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        selectedBoxSize === boxSize.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{boxSize.name}</div>
                          <div className="text-sm text-muted-foreground">{boxSize.quantity} alfajores</div>
                        </div>
                        <div className="font-bold text-lg">${boxSize.price}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              {selectedFlavor && selectedBoxSize && selectedBoxSizeData && selectedFlavorData && (
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-foreground">Order Summary</h4>
                  <div className="text-sm text-muted-foreground">
                    <div>{selectedProduct.name}</div>
                    <div>Flavor: {selectedFlavorData.name}</div>
                    <div>Size: {selectedBoxSizeData.name} ({selectedBoxSizeData.quantity} pieces)</div>
                    <div className="font-bold text-foreground text-lg mt-2">
                      Total: ${selectedBoxSizeData.price}
                    </div>
                  </div>
                </div>
              )}

              {/* Order Button */}
              <button
                onClick={handleOrder}
                disabled={!selectedFlavor || !selectedBoxSize}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {selectedFlavor && selectedBoxSize ? 'Place Order' : 'Select Flavor & Size'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Form Modal */}
      {showOrderForm && selectedProduct && selectedFlavor && selectedBoxSize && (
        <OrderForm
          product={selectedProduct}
          flavor={selectedFlavorData!}
          boxSize={selectedBoxSizeData!}
          onClose={() => setShowOrderForm(false)}
        />
      )}
    </div>
  )
}