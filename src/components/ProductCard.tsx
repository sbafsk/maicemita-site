interface Product {
  id: string
  name: string
  description: string
  basePrice: number
  currency: string
  images: string[]
  flavors: Array<{
    id: string
    name: string
    description: string
    available: boolean
  }>
  boxSizes: Array<{
    id: string
    name: string
    quantity: number
    price: number
    available: boolean
  }>
  inStock: boolean
}

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
  isSelected?: boolean
}

export function ProductCard({ product, onSelect, isSelected = false }: ProductCardProps) {
  return (
    <div
      className={`bg-card border rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg ${
        isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
      }`}
      onClick={() => onSelect(product)}
    >
      {/* Product Image */}
      <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
        <span className="text-4xl">🧁</span>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
        
        {/* Price Range */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            ${Math.min(...product.boxSizes.map(size => size.price))} - ${Math.max(...product.boxSizes.map(size => size.price))}
          </span>
          <span className="text-sm text-muted-foreground">
            {product.boxSizes.length} sizes
          </span>
        </div>

        {/* Flavors */}
        <div className="space-y-1">
          <div className="text-sm font-medium text-foreground">Available Flavors:</div>
          <div className="flex flex-wrap gap-1">
            {product.flavors.slice(0, 3).map((flavor) => (
              <span
                key={flavor.id}
                className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
              >
                {flavor.name}
              </span>
            ))}
            {product.flavors.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{product.flavors.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-destructive'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          <span className="text-sm text-muted-foreground">
            {product.boxSizes.reduce((acc, size) => acc + size.quantity, 0)} total pieces
          </span>
        </div>
      </div>
    </div>
  )
}