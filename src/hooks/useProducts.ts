import { useState, useEffect, useMemo, useCallback } from 'react';
import { IProduct, ILoadingState, ProductCategory } from '@/types';

interface IUseProductsOptions {
  category?: ProductCategory;
  featured?: boolean;
  inStock?: boolean;
}

interface IUseProductsReturn extends ILoadingState {
  products: IProduct[];
  featuredProducts: IProduct[];
  categories: ProductCategory[];
  getProductById: (id: string) => IProduct | undefined;
  getProductsByCategory: (category: ProductCategory) => IProduct[];
  refreshProducts: () => Promise<void>;
}

const MOCK_PRODUCTS: IProduct[] = [
  {
    id: 'cookies-chocolate',
    name: 'Cookies de Chocolate',
    description: 'Deliciosas cookies artesanales con chips de chocolate belga premium',
    category: 'cookies',
    basePrice: 2500,
    currency: 'ARS',
    flavors: [
      { id: 'chocolate-clasico', name: 'Chocolate Clásico', available: true },
      { id: 'chocolate-blanco', name: 'Chocolate Blanco', available: true },
      { id: 'doble-chocolate', name: 'Doble Chocolate', available: false },
    ],
    boxSizes: [
      { id: 'small', name: 'Caja Pequeña', quantity: 12, priceARS: 2500 },
      { id: 'medium', name: 'Caja Mediana', quantity: 24, priceARS: 4500 },
      { id: 'large', name: 'Caja Grande', quantity: 36, priceARS: 6000 },
    ],
    images: ['/images/cookies-chocolate-1.jpg', '/images/cookies-chocolate-2.jpg'],
    inStock: true,
    featured: true,
    nutritionalInfo: {
      calories: 85,
      allergens: ['gluten', 'huevos', 'lácteos'],
    },
  },
  {
    id: 'torta-tres-leches',
    name: 'Torta Tres Leches',
    description: 'Tradicional torta tres leches argentina con dulce de leche artesanal',
    category: 'cakes',
    basePrice: 8500,
    currency: 'ARS',
    flavors: [
      { id: 'clasica', name: 'Clásica', available: true },
      { id: 'chocolate', name: 'Con Chocolate', available: true },
      { id: 'frutas', name: 'Con Frutas', available: true },
    ],
    boxSizes: [
      { id: 'individual', name: 'Individual', quantity: 1, priceARS: 1200 },
      { id: 'familiar', name: 'Familiar', quantity: 1, priceARS: 8500 },
    ],
    images: ['/images/torta-tres-leches-1.jpg'],
    inStock: true,
    featured: true,
  },
];

export function useProducts(options: IUseProductsOptions = {}): IUseProductsReturn {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      await new Promise(resolve => setTimeout(resolve, 500));

      let filteredProducts = MOCK_PRODUCTS;

      if (options.category) {
        filteredProducts = filteredProducts.filter(p => p.category === options.category);
      }

      if (options.featured !== undefined) {
        filteredProducts = filteredProducts.filter(p => Boolean(p.featured) === options.featured);
      }

      if (options.inStock !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.inStock === options.inStock);
      }

      setProducts(filteredProducts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
    } finally {
      setIsLoading(false);
    }
  }, [options.category, options.featured, options.inStock]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const featuredProducts = useMemo(
    () => products.filter(product => product.featured),
    [products]
  );

  const categories = useMemo(
    () => Array.from(new Set(MOCK_PRODUCTS.map(p => p.category))),
    []
  );

  const getProductById = useCallback(
    (id: string) => products.find(product => product.id === id),
    [products]
  );

  const getProductsByCategory = useCallback(
    (category: ProductCategory) => products.filter(product => product.category === category),
    [products]
  );

  const refreshProducts = useCallback(async () => {
    await loadProducts();
  }, [loadProducts]);

  return {
    products,
    featuredProducts,
    categories,
    isLoading,
    error,
    getProductById,
    getProductsByCategory,
    refreshProducts,
  };
}