# Architectural Patterns

> **AI Context**: This document defines architectural patterns and best practices for the Maicemita project.
> For implementation details: see `docs/architecture/overview.md`
> For current status: see `docs/status/progress.yaml`

## Overview

This document establishes consistent architectural patterns for the Maicemita alfajores e-commerce site, ensuring maintainable and scalable code that serves the business needs effectively.

## Component Architecture Patterns

### Container/Presentation Pattern
Separate business logic from UI presentation for better maintainability.

```typescript
// Container Component (Business Logic)
const ProductGalleryContainer: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <ProductGalleryPresentation
      products={products}
      loading={loading}
      onProductSelect={handleProductSelect}
    />
  );
};

// Presentation Component (UI Only)
const ProductGalleryPresentation: React.FC<Props> = ({
  products,
  loading,
  onProductSelect
}) => {
  // Only UI logic here
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

### Custom Hook Pattern
Extract business logic into reusable custom hooks.

```typescript
// Custom hook for product management
const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.products.getAll();
      setProducts(response.data);
    } catch (err) {
      setError('Error loading products');
    } finally {
      setLoading(false);
    }
  };

  return { products, loading, error, fetchProducts };
};
```

### Context Pattern for Business State
Use React Context for shared business state across components.

```typescript
// Business Context
interface BusinessContextType {
  catalog: ProductCatalog;
  selectedProducts: ProductSelection[];
  addToOrder: (product: ProductSelection) => void;
  removeFromOrder: (productId: string) => void;
}

const BusinessContext = createContext<BusinessContextType | null>(null);

// Custom hook to use business context
const useBusiness = () => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within BusinessProvider');
  }
  return context;
};
```

## API Design Patterns

### Repository Pattern
Abstract data access behind consistent interfaces.

```typescript
interface ProductRepository {
  getAll(): Promise<Product[]>;
  getById(id: string): Promise<Product>;
  search(query: string): Promise<Product[]>;
  getByCategory(categoryId: string): Promise<Product[]>;
}

class ApiProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    const response = await fetch('/api/products');
    return response.json();
  }

  async search(query: string): Promise<Product[]> {
    const response = await fetch(`/api/products/search?q=${query}`);
    return response.json();
  }
}
```

### Service Layer Pattern
Encapsulate business logic in service classes.

```typescript
class OrderService {
  constructor(
    private productRepo: ProductRepository,
    private emailService: EmailService
  ) {}

  async createOrder(orderData: OrderRequest): Promise<Order> {
    // Validate products exist and are available
    await this.validateProducts(orderData.items);

    // Calculate totals
    const total = this.calculateTotal(orderData.items);

    // Create order
    const order = await this.orderRepo.create({
      ...orderData,
      total,
      status: 'pending'
    });

    // Send confirmation emails
    await this.emailService.sendOrderConfirmation(order);

    return order;
  }
}
```

## Error Handling Patterns

### Error Boundary Pattern
Catch and handle React component errors gracefully.

```typescript
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class BusinessErrorBoundary extends Component<
  PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Oops! Algo salió mal</h2>
          <p>Por favor, recarga la página o contacta con nosotros.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### API Error Handling Pattern
Consistent error handling across all API calls.

```typescript
class ApiError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

const handleApiError = (error: unknown): ApiError => {
  if (error instanceof ApiError) {
    return error;
  }

  if (error instanceof Error) {
    return new ApiError(500, 'UNKNOWN_ERROR', error.message);
  }

  return new ApiError(500, 'UNKNOWN_ERROR', 'An unknown error occurred');
};
```

## State Management Patterns

### Local State First
Use local component state by default, lift state up when needed.

```typescript
// Good: Local state for simple UI state
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      {isExpanded && <p>{product.description}</p>}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Ver menos' : 'Ver más'}
      </button>
    </div>
  );
};
```

### URL State Pattern
Store important application state in URL for better UX.

```typescript
// Use Next.js router for URL state management
const ProductGallery: React.FC = () => {
  const router = useRouter();
  const { category, search } = router.query;

  const updateFilters = (newFilters: Filters) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, ...newFilters }
    }, undefined, { shallow: true });
  };

  return (
    <div>
      <FilterControls onFilterChange={updateFilters} />
      <ProductList category={category} search={search} />
    </div>
  );
};
```

## Performance Patterns

### Code Splitting Pattern
Split code by routes and features for better performance.

```typescript
// Route-based splitting
const ProductGallery = dynamic(() => import('./ProductGallery'), {
  loading: () => <ProductGallerySkeleton />
});

// Component-based splitting
const OrderSummary = dynamic(() => import('./OrderSummary'), {
  ssr: false // Client-side only for personalized content
});
```

### Memoization Pattern
Prevent unnecessary re-renders of expensive components.

```typescript
const ProductCard = React.memo<ProductCardProps>(({ product, onSelect }) => {
  const handleClick = useCallback(() => {
    onSelect(product);
  }, [product, onSelect]);

  return (
    <div onClick={handleClick}>
      <h3>{product.name}</h3>
      <p>Precio: ${product.pricing[1]} ARS</p>
    </div>
  );
});
```

## Mobile-First Patterns

### Progressive Enhancement
Build for mobile first, enhance for larger screens.

```typescript
const ProductGallery: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Mobile gets grid view only, desktop can switch
  const availableViews = isMobile ? ['grid'] : ['grid', 'list'];

  return (
    <div>
      {!isMobile && (
        <ViewToggle
          options={availableViews}
          selected={view}
          onChange={setView}
        />
      )}
      <ProductList view={view} />
    </div>
  );
};
```

### Touch-Friendly Interactions
Design interactions for touch devices first.

```typescript
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      // Swipe detected - show product details
      showProductDetails(product);
    }
  };

  return (
    <div
      className="product-card touch-friendly"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Product content */}
    </div>
  );
};
```

## Business Logic Patterns

### Domain Model Pattern
Model business entities with their behavior.

```typescript
class Product {
  constructor(
    public id: string,
    public name: string,
    public pricing: Record<number, number>,
    public flavors: string[]
  ) {}

  getPriceForBoxSize(boxSize: number): number {
    return this.pricing[boxSize] || 0;
  }

  isAvailableInFlavor(flavor: string): boolean {
    return this.flavors.includes(flavor);
  }

  getFormattedPrice(boxSize: number): string {
    const price = this.getPriceForBoxSize(boxSize);
    return `$${price} ARS`;
  }
}

class Order {
  constructor(
    public items: OrderItem[],
    public customerInfo: CustomerInfo
  ) {}

  getTotal(): number {
    return this.items.reduce((total, item) => {
      return total + item.getTotalPrice();
    }, 0);
  }

  getFormattedTotal(): string {
    return `$${this.getTotal()} ARS`;
  }
}
```

### Validation Pattern
Consistent validation across the application.

```typescript
const orderValidationSchema = z.object({
  customerInfo: z.object({
    name: z.string().min(2, 'Nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    phone: z.string().optional()
  }),
  items: z.array(z.object({
    productId: z.string(),
    quantity: z.number().min(1),
    boxSize: z.number(),
    flavor: z.string()
  })).min(1, 'Debe seleccionar al menos un producto')
});

const validateOrder = (orderData: unknown): Order => {
  const result = orderValidationSchema.safeParse(orderData);

  if (!result.success) {
    throw new ValidationError('Datos de orden inválidos', result.error);
  }

  return new Order(result.data.items, result.data.customerInfo);
};
```

These patterns ensure consistent, maintainable, and business-focused code throughout the Maicemita project, supporting both current needs and future growth.