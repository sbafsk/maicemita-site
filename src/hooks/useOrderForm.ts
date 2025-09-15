import { useState, useCallback, useMemo } from 'react';
import { IOrderFormData, ICustomerInfo, IProductSelection, IFormFieldError } from '@/types';

interface IUseOrderFormReturn {
  formData: IOrderFormData;
  errors: IFormFieldError[];
  isValid: boolean;
  isSubmitting: boolean;
  updateCustomer: (customer: Partial<ICustomerInfo>) => void;
  addProduct: (selection: IProductSelection) => void;
  removeProduct: (index: number) => void;
  updateProduct: (index: number, selection: IProductSelection) => void;
  setDeliveryDate: (date: Date | undefined) => void;
  setPaymentMethod: (method: IOrderFormData['paymentMethod']) => void;
  setSpecialInstructions: (instructions: string) => void;
  validateForm: () => boolean;
  submitOrder: () => Promise<{ success: boolean; orderId?: string; error?: string }>;
  resetForm: () => void;
}

const initialFormData: IOrderFormData = {
  customer: {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  },
  items: [],
};

export function useOrderForm(): IUseOrderFormReturn {
  const [formData, setFormData] = useState<IOrderFormData>(initialFormData);
  const [errors, setErrors] = useState<IFormFieldError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((field: string, value: unknown): string | null => {
    switch (field) {
      case 'name':
        if (!value || (typeof value === 'string' && value.trim().length < 2)) {
          return 'El nombre debe tener al menos 2 caracteres';
        }
        break;
      case 'email':
        if (!value || typeof value !== 'string') {
          return 'El email es requerido';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'El email no tiene un formato válido';
        }
        break;
      case 'phone':
        if (!value || typeof value !== 'string') {
          return 'El teléfono es requerido';
        }
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
          return 'El teléfono no tiene un formato válido';
        }
        break;
      case 'items':
        if (!Array.isArray(value) || value.length === 0) {
          return 'Debe agregar al menos un producto al pedido';
        }
        break;
    }
    return null;
  }, []);

  const validateForm = useCallback((): boolean => {
    const newErrors: IFormFieldError[] = [];

    const requiredFields: Array<keyof ICustomerInfo> = ['name', 'email', 'phone'];
    requiredFields.forEach(field => {
      const error = validateField(field, formData.customer[field]);
      if (error) {
        newErrors.push({ field, message: error });
      }
    });

    const itemsError = validateField('items', formData.items);
    if (itemsError) {
      newErrors.push({ field: 'items', message: itemsError });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  }, [formData, validateField]);

  const isValid = useMemo(() => {
    return errors.length === 0 &&
           formData.customer.name.trim().length >= 2 &&
           formData.customer.email.includes('@') &&
           formData.customer.phone.length >= 10 &&
           formData.items.length > 0;
  }, [errors, formData]);

  const updateCustomer = useCallback((customer: Partial<ICustomerInfo>) => {
    setFormData(prev => ({
      ...prev,
      customer: { ...prev.customer, ...customer },
    }));

    Object.entries(customer).forEach(([field, value]) => {
      const error = validateField(field, value);
      setErrors(prev => {
        const filtered = prev.filter(e => e.field !== field);
        return error ? [...filtered, { field, message: error }] : filtered;
      });
    });
  }, [validateField]);

  const addProduct = useCallback((selection: IProductSelection) => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, selection],
    }));
  }, []);

  const removeProduct = useCallback((index: number) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  }, []);

  const updateProduct = useCallback((index: number, selection: IProductSelection) => {
    setFormData(prev => ({
      ...prev,
      items: prev.items.map((item, i) => i === index ? selection : item),
    }));
  }, []);

  const setDeliveryDate = useCallback((date: Date | undefined) => {
    setFormData(prev => ({ ...prev, deliveryDate: date }));
  }, []);

  const setPaymentMethod = useCallback((method: IOrderFormData['paymentMethod']) => {
    setFormData(prev => ({ ...prev, paymentMethod: method }));
  }, []);

  const setSpecialInstructions = useCallback((instructions: string) => {
    setFormData(prev => ({ ...prev, specialInstructions: instructions }));
  }, []);

  const submitOrder = useCallback(async (): Promise<{ success: boolean; orderId?: string; error?: string }> => {
    if (!validateForm()) {
      return { success: false, error: 'Por favor, corrige los errores en el formulario' };
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const orderId = `ORDER-${Date.now()}`;

      console.log('Orden enviada:', { ...formData, orderId });

      return { success: true, orderId };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Error al enviar el pedido'
      };
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors([]);
    setIsSubmitting(false);
  }, []);

  return {
    formData,
    errors,
    isValid,
    isSubmitting,
    updateCustomer,
    addProduct,
    removeProduct,
    updateProduct,
    setDeliveryDate,
    setPaymentMethod,
    setSpecialInstructions,
    validateForm,
    submitOrder,
    resetForm,
  };
}