import { IProductSelection } from './product';

export interface ICustomerInfo {
  name: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  postalCode?: string;
  notes?: string;
}

export interface IOrderItem extends IProductSelection {
  unitPrice: number;
  totalPrice: number;
}

export interface IOrder {
  id: string;
  customer: ICustomerInfo;
  items: IOrderItem[];
  subtotal: number;
  tax?: number;
  delivery?: number;
  total: number;
  currency: 'ARS';
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  deliveryDate?: Date;
  paymentMethod?: 'cash' | 'transfer' | 'mercadopago';
  notes?: string;
}

export interface IOrderFormData {
  customer: Omit<ICustomerInfo, 'notes'> & { notes?: string };
  items: IProductSelection[];
  deliveryDate?: Date;
  paymentMethod?: IOrder['paymentMethod'];
  specialInstructions?: string;
}

export type OrderStatus = IOrder['status'];
export type PaymentMethod = NonNullable<IOrder['paymentMethod']>;