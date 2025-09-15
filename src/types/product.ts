export interface IFlavor {
  id: string;
  name: string;
  description?: string;
  available: boolean;
}

export interface IBoxSize {
  id: string;
  name: string;
  quantity: number;
  priceARS: number;
  description?: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: 'cookies' | 'cakes' | 'candies';
  basePrice: number;
  currency: 'ARS';
  flavors: IFlavor[];
  boxSizes: IBoxSize[];
  images: string[];
  inStock: boolean;
  featured?: boolean;
  nutritionalInfo?: {
    calories?: number;
    allergens?: string[];
  };
}

export interface IProductSelection {
  productId: string;
  flavorId: string;
  boxSizeId: string;
  quantity: number;
}

export type ProductCategory = IProduct['category'];
export type ProductCurrency = IProduct['currency'];