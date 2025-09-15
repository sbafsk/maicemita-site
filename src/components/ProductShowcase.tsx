'use client';

import React, { useState, useMemo, useCallback, memo } from 'react';
import { ProductCard } from './ProductCard';
import { OrderForm } from './OrderForm';
import { IProduct } from '@/types';
import { BusinessErrorBoundary } from './ErrorBoundaries';

// Product data based on products.md - Real catalog
const products: IProduct[] = [
  {
    id: '1',
    name: 'Choco Bomba',
    description: 'Bomba con cobertura de chocolate blanco/negro. Alfajores especiales con extra dulce de leche y cobertura de chocolate.',
    basePrice: 75,
    currency: 'ARS',
    images: ['/assets/gallery_image_0.jpeg'],
    flavors: [
      { id: '1', name: 'Chocolate Blanco', description: 'Cobertura de chocolate blanco cremoso', available: true },
      { id: '2', name: 'Chocolate Negro', description: 'Cobertura de chocolate negro intenso', available: true }
    ],
    boxSizes: [
      { id: '1', name: 'Individual', quantity: 1, priceARS: 75 },
      { id: '2', name: 'Caja de 6', quantity: 6, priceARS: 435 },
      { id: '3', name: 'Caja de 12', quantity: 12, priceARS: 800 }
    ],
    inStock: true,
    category: 'cookies' as const
  },
  {
    id: '2',
    name: 'Classic Membrillo',
    description: 'Alfajores clásicos con dulce relleno de membrillo tradicional. Receta artesanal de la abuela.',
    basePrice: 40,
    currency: 'ARS',
    images: ['/assets/gallery_image_1.jpeg'],
    flavors: [
      { id: '1', name: 'Membrillo', description: 'Tradicional pasta de membrillo casera', available: true }
    ],
    boxSizes: [
      { id: '1', name: 'Individual', quantity: 1, priceARS: 40 },
      { id: '2', name: 'Caja de 6', quantity: 6, priceARS: 230 },
      { id: '3', name: 'Caja de 12', quantity: 12, priceARS: 430 }
    ],
    inStock: true,
    category: 'cookies' as const
  },
  {
    id: '3',
    name: 'Classic Batata',
    description: 'Alfajores clásicos con dulce relleno de batata. Sabor tradicional argentino.',
    basePrice: 42,
    currency: 'ARS',
    images: ['/assets/gallery_image_2.jpeg'],
    flavors: [
      { id: '1', name: 'Batata', description: 'Dulce relleno de batata natural', available: true }
    ],
    boxSizes: [
      { id: '1', name: 'Individual', quantity: 1, priceARS: 42 },
      { id: '2', name: 'Caja de 6', quantity: 6, priceARS: 250 },
      { id: '3', name: 'Caja de 12', quantity: 12, priceARS: 460 }
    ],
    inStock: true,
    category: 'cookies' as const
  },
  {
    id: '4',
    name: 'Alfajores de Copetín',
    description: 'Alfajores especiales para eventos y celebraciones. Perfectos para compartir en reuniones.',
    basePrice: 21,
    currency: 'ARS',
    images: ['/assets/gallery_image_3.jpeg'],
    flavors: [
      { id: '1', name: 'Dulce de Leche', description: 'Clásico dulce de leche cremoso', available: true }
    ],
    boxSizes: [
      { id: '1', name: 'Caja de 50', quantity: 50, priceARS: 1050 }
    ],
    inStock: true,
    category: 'cookies' as const
  },
  {
    id: '5',
    name: 'Classic Premium',
    description: 'Alfajores premium de la línea Maicemita Premium. Calidad superior con ingredientes selectos.',
    basePrice: 45,
    currency: 'ARS',
    images: ['/assets/gallery_image_4.jpeg'],
    flavors: [
      { id: '1', name: 'Dulce de Leche Premium', description: 'Dulce de leche artesanal premium', available: true }
    ],
    boxSizes: [
      { id: '1', name: 'Individual', quantity: 1, priceARS: 45 },
      { id: '2', name: 'Caja de 6', quantity: 6, priceARS: 270 },
      { id: '3', name: 'Caja de 12', quantity: 12, priceARS: 500 }
    ],
    inStock: true,
    category: 'cakes' as const
  },
  {
    id: '6',
    name: 'Bomba Premium',
    description: 'Versión premium de nuestros alfajores bomba con extra dulce de leche. Línea Maicemita Premium.',
    basePrice: 60,
    currency: 'ARS',
    images: ['/assets/gallery_image_5.jpeg'],
    flavors: [
      { id: '1', name: 'Extra Dulce de Leche', description: 'Generosa cantidad de dulce de leche premium', available: true }
    ],
    boxSizes: [
      { id: '1', name: 'Individual', quantity: 1, priceARS: 60 },
      { id: '2', name: 'Caja de 6', quantity: 6, priceARS: 350 },
      { id: '3', name: 'Caja de 12', quantity: 12, priceARS: 640 }
    ],
    inStock: true,
    category: 'cakes' as const
  }
]

export const ProductShowcase = memo(() => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedFlavor, setSelectedFlavor] = useState<string>('');
  const [selectedBoxSize, setSelectedBoxSize] = useState<string>('');
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleProductSelect = useCallback((product: IProduct) => {
    setSelectedProduct(product);
    setSelectedFlavor('');
    setSelectedBoxSize('');
    setShowOrderForm(false);
  }, []);

  const handleOrder = useCallback(() => {
    if (selectedFlavor && selectedBoxSize) {
      setShowOrderForm(true);
    }
  }, [selectedFlavor, selectedBoxSize]);

  const selectedBoxSizeData = useMemo(
    () => selectedProduct.boxSizes.find(size => size.id === selectedBoxSize),
    [selectedProduct.boxSizes, selectedBoxSize]
  );

  const selectedFlavorData = useMemo(
    () => selectedProduct.flavors.find(flavor => flavor.id === selectedFlavor),
    [selectedProduct.flavors, selectedFlavor]
  );

  // Group products by category
  const cookiesProducts = useMemo(
    () => products.filter(p => p.category === 'cookies'),
    []
  );

  const cakesProducts = useMemo(
    () => products.filter(p => p.category === 'cakes'),
    []
  );

  return (
    <BusinessErrorBoundary>
      <div id="products" className="space-y-16">
      {/* Catálogo 1 */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold gradient-text mb-4">📦 Catálogo 1</h3>
          <p className="text-muted-foreground">Nuestros alfajores tradicionales artesanales</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cookiesProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleProductSelect}
              isSelected={selectedProduct.id === product.id}
            />
          ))}
        </div>
      </div>

      {/* Catálogo 2 - Premium */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold gradient-text mb-4">📦 Catálogo 2 - Maicemita Premium</h3>
          <p className="text-muted-foreground">Línea premium con ingredientes selectos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cakesProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleProductSelect}
              isSelected={selectedProduct.id === product.id}
            />
          ))}
        </div>
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
                <h3 className="text-lg font-semibold text-foreground mb-3">Elige tu Sabor</h3>
                <div className="grid grid-cols-1 gap-3">
                  {selectedProduct.flavors.map((flavor) => (
                    <button
                      key={flavor.id}
                      onClick={useCallback(() => setSelectedFlavor(flavor.id), [flavor.id])}
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
                <h3 className="text-lg font-semibold text-foreground mb-3">Elige el Tamaño</h3>
                <div className="grid grid-cols-1 gap-3">
                  {selectedProduct.boxSizes.map((boxSize) => (
                    <button
                      key={boxSize.id}
                      onClick={useCallback(() => setSelectedBoxSize(boxSize.id), [boxSize.id])}
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
                        <div className="font-bold text-lg">${boxSize.priceARS} ARS</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              {selectedFlavor && selectedBoxSize && selectedBoxSizeData && selectedFlavorData && (
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <h4 className="font-semibold text-foreground">Resumen del Pedido</h4>
                  <div className="text-sm text-muted-foreground">
                    <div>{selectedProduct.name}</div>
                    <div>Sabor: {selectedFlavorData.name}</div>
                    <div>Tamaño: {selectedBoxSizeData.name} ({selectedBoxSizeData.quantity} alfajores)</div>
                    <div className="font-bold text-foreground text-lg mt-2">
                      Total: ${selectedBoxSizeData.priceARS} ARS
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
                {selectedFlavor && selectedBoxSize ? 'Pedir Ahora' : 'Selecciona Sabor y Tamaño'}
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
          onClose={useCallback(() => setShowOrderForm(false), [])}
        />
      )}
      </div>
    </BusinessErrorBoundary>
  );
});

ProductShowcase.displayName = 'ProductShowcase';