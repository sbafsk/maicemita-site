# API Architecture

> **AI Context**: This document defines the API structure for the Maicemita e-commerce site.
> For current implementation status: see `../status/progress.yaml`
> For overall architecture: see `overview.md`

## API Overview

The Maicemita site uses Next.js API Routes to provide server-side functionality for the alfajores e-commerce platform.

### API Design Principles
- **RESTful Design**: Standard HTTP methods and resource-based URLs
- **Mobile-First**: Optimized responses for mobile clients (80% of traffic)
- **Simple Integration**: Easy integration with frontend React components
- **Business-Focused**: APIs designed around alfajores business workflows

## Current API Endpoints

### Products API

#### `GET /api/products`
Returns the complete alfajores catalog with current pricing.

**Response**:
```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": "catalog1",
        "name": "Catálogo 1",
        "products": [
          {
            "id": "choco-bomba",
            "name": "Choco Bomba",
            "description": "Bomba con cobertura de chocolate blanco/negro",
            "pricing": {
              "1": 75,
              "6": 435,
              "12": 800
            },
            "currency": "ARS"
          }
        ]
      }
    ]
  }
}
```

#### `GET /api/products/search`
Search products by name, flavor, or category.

### Orders API (Future Implementation)

#### `POST /api/orders`
Create a new order request.

**Request Body**:
```json
{
  "customerInfo": {
    "name": "string",
    "email": "string",
    "phone": "string"
  },
  "items": [
    {
      "productId": "string",
      "quantity": number,
      "boxSize": number,
      "flavor": "string"
    }
  ],
  "notes": "string"
}
```

### Contact API

#### `POST /api/contact`
Handle customer inquiries and order requests.

## API Standards

### Response Format
All APIs follow consistent response structure:
```json
{
  "success": boolean,
  "data": object | array,
  "error": {
    "code": "string",
    "message": "string"
  } | null,
  "timestamp": "ISO 8601 date"
}
```

### Error Handling
- `400 Bad Request`: Invalid request parameters
- `404 Not Found`: Resource not found
- `422 Unprocessable Entity`: Business logic validation failed
- `500 Internal Server Error`: Server error

### Internationalization
- Support for Spanish language responses
- ARS currency formatting
- Local business context in error messages

## Security Considerations

### Input Validation
- Strict validation for all input parameters
- Sanitization of customer contact information
- Rate limiting for contact form submissions

### Data Protection
- No sensitive business data in client-side code
- Secure handling of customer information
- GDPR-compliant data processing

## Performance Optimization

### Caching Strategy
- Static product catalog caching
- Edge caching for product images
- Optimized responses for mobile clients

### Response Optimization
- Minimal response payloads for mobile
- Compressed image URLs
- Efficient data structures

## Future API Development

### Payment Integration
- Stripe API integration for online payments
- MercadoPago support for Argentine market
- Order confirmation and tracking

### Admin APIs
- Product catalog management
- Order management interface
- Analytics and reporting endpoints

### Customer Features
- Order history and tracking
- Customer accounts and preferences
- Review and rating system

## Business Logic Integration

### Product Catalog
- Real-time pricing from business catalog
- Inventory availability checking
- Seasonal product variations

### Order Processing
- Integration with business workflow
- Email notifications to business owner
- Order validation and confirmation

### Customer Communication
- Automated responses in Spanish
- Business contact information integration
- Mobile-optimized communication flows