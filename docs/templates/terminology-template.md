# Terminology and Naming Template

Maintain consistent naming across code and docs for the Maicemita project.

## Business Terminology
- Alfajores: Traditional Argentine sweet pastries
- Maicena: Cornstarch (key ingredient)
- Dulce de leche: Sweet milk caramel filling
- Membrillo: Quince paste filling
- Batata: Sweet potato filling
- Bomba: Extra-filled alfajores
- Copetín: Small bite-sized alfajores

## Technical Terminology
- Component: React functional component
- Page: Next.js page component
- API Route: Server-side endpoint
- Product: Business catalog item
- Box Size: Package quantity (6, 12, 24 units)
- Flavor: Filling type
- Category: Product classification

## Naming Conventions

### Files and Directories
- Components: PascalCase (`ProductCard.tsx`)
- Pages: kebab-case (`product-catalog.tsx`)
- API routes: kebab-case (`api/products.ts`)
- Documentation: kebab-case (`setup-guide.md`)

### Components/Modules
- React components: PascalCase (`ProductGallery`)
- Functions: camelCase (`calculateTotal`)
- Constants: UPPER_SNAKE_CASE (`DEFAULT_BOX_SIZE`)
- CSS classes: kebab-case (`product-card`)

### API Endpoints
- RESTful naming: `/api/products`, `/api/orders`
- Actions: `/api/products/search`, `/api/orders/create`

### Environment Variables
- Next.js public: `NEXT_PUBLIC_SITE_NAME`
- Database: `DATABASE_URL`, `POSTGRES_URL`
- Email: `SMTP_HOST`, `SMTP_PORT`

## Examples

### Good vs Bad Names
✅ Good:
- `ProductCard` (component)
- `alfajores-gallery` (page)
- `getProductsByCategory` (function)
- `SUPPORTED_FLAVORS` (constant)

❌ Bad:
- `Card` (too generic)
- `alfajoresGallery` (inconsistent casing)
- `getStuff` (unclear purpose)
- `flavors` (should be constant case)

### Abbreviations Policy
- Use full words when possible
- Standard abbreviations: `id`, `url`, `api`, `ui`, `db`
- Business-specific: OK to use `alfajor` instead of full description