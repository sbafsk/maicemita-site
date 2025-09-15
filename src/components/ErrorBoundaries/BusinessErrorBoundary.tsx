'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { IApiError } from '@/types';

interface IErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

interface IBusinessErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export class BusinessErrorBoundary extends Component<
  IBusinessErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IBusinessErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    if (process.env.NODE_ENV === 'development') {
      console.error('BusinessErrorBoundary caught an error:', error, errorInfo);
    }
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[200px] p-6 bg-red-50 border border-red-200 rounded-lg">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-red-800 mb-2">
              ¡Ups! Algo salió mal
            </h2>
            <p className="text-red-600 mb-4">
              Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
            </p>
            <button
              onClick={this.handleRetry}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Intentar de nuevo
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-red-500">
                  Detalles del error (desarrollo)
                </summary>
                <pre className="mt-2 text-xs text-red-700 bg-red-100 p-2 rounded overflow-auto">
                  {this.state.error?.message}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

BusinessErrorBoundary.displayName = 'BusinessErrorBoundary';