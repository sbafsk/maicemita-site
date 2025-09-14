# API Documentation Template

Use this template for documenting API endpoints in the Maicemita project.

## Endpoint Template

### `[METHOD] /api/[resource]`

**Description**: [What this endpoint does]

**Authentication**: [Required/Not required]

**Parameters**:
- `param1` (string, required): Description
- `param2` (number, optional): Description

**Request Body** (if applicable):
```json
{
  "field1": "string",
  "field2": 123
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "field1": "value",
    "field2": 123
  }
}
```

**Error Responses**:
- `400 Bad Request`: Invalid parameters
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

**Example Usage**:
```javascript
const response = await fetch('/api/endpoint', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

## Maicemita-Specific Examples

### Products API
- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get specific product
- `POST /api/products/search` - Search products by criteria

### Orders API
- `POST /api/orders` - Create new order
- `GET /api/orders/[id]` - Get order details
- `PUT /api/orders/[id]/status` - Update order status