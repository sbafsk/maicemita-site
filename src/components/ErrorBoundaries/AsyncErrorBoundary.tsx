'use client';

import React, { ReactNode, useCallback, useState } from 'react';
import { BusinessErrorBoundary } from './BusinessErrorBoundary';

interface IAsyncErrorBoundaryProps {
  children: ReactNode;
  onRetry?: () => void | Promise<void>;
}

export function AsyncErrorBoundary({ children, onRetry }: IAsyncErrorBoundaryProps) {
  const [key, setKey] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);

  const handleError = useCallback((error: Error) => {
    console.error('AsyncErrorBoundary caught error:', error);
  }, []);

  const handleRetry = useCallback(async () => {
    setIsRetrying(true);
    try {
      if (onRetry) {
        await onRetry();
      }
      setKey(prevKey => prevKey + 1);
    } catch (error) {
      console.error('Error during retry:', error);
    } finally {
      setIsRetrying(false);
    }
  }, [onRetry]);

  const fallback = (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-yellow-800 mb-2">
          Error de conexión
        </h2>
        <p className="text-yellow-600 mb-4">
          No se pudo cargar el contenido. Verifica tu conexión a internet.
        </p>
        <button
          onClick={handleRetry}
          disabled={isRetrying}
          className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isRetrying ? 'Reintentando...' : 'Reintentar'}
        </button>
      </div>
    </div>
  );

  return (
    <BusinessErrorBoundary key={key} fallback={fallback} onError={handleError}>
      {children}
    </BusinessErrorBoundary>
  );
}

AsyncErrorBoundary.displayName = 'AsyncErrorBoundary';