export interface IApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface IApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface IPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IPaginatedResponse<T> extends IApiResponse<T> {
  pagination?: IPagination;
}

export interface ILoadingState {
  isLoading: boolean;
  error?: string | null;
}

export interface IFormFieldError {
  field: string;
  message: string;
}

export type Currency = 'ARS' | 'USD';

export type Language = 'es' | 'en';

export interface IBusinessInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    whatsapp?: string;
  };
}