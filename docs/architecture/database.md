# Database Architecture

> **AI Context**: This document outlines the database design for the Maicemita e-commerce platform.
> For current implementation status: see `../status/progress.yaml`
> For overall architecture: see `overview.md`

## Database Overview

The Maicemita site uses PostgreSQL via Vercel Postgres for data persistence, designed to support the alfajores e-commerce business.

### Design Principles
- **Business-Focused**: Schema designed around alfajores business model
- **Scalable**: Architecture supports business growth
- **Simple**: Easy to maintain for small business needs
- **Performance**: Optimized for mobile-first user experience

## Current Schema (MVP)

### Products Table
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category_id INTEGER REFERENCES categories(id),
  pricing JSONB NOT NULL, -- {box_size: price_in_ars}
  flavors TEXT[], -- Available flavors array
  image_url VARCHAR(255),
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Categories Table
```sql
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT TRUE
);
```

### Contact Submissions Table
```sql
CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50),
  message TEXT,
  order_details JSONB, -- Product selections and quantities
  status VARCHAR(50) DEFAULT 'pending', -- pending, reviewed, contacted, completed
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Sample Data

### Categories
```sql
INSERT INTO categories (name, description, display_order) VALUES
('Catálogo 1', 'Alfajores tradicionales y especiales', 1),
('Catálogo 2', 'Maicemita Premium', 2);
```

### Products
```sql
INSERT INTO products (name, description, category_id, pricing, flavors, image_url) VALUES
(
  'Choco Bomba',
  'Bomba con cobertura de chocolate blanco/negro',
  1,
  '{"1": 75, "6": 435, "12": 800}',
  '["chocolate blanco", "chocolate negro"]',
  '/images/choco-bomba.jpg'
),
(
  'Classic Membrillo',
  'Alfajor tradicional con membrillo',
  1,
  '{"1": 40, "6": 230, "12": 430}',
  '["membrillo"]',
  '/images/classic-membrillo.jpg'
);
```

## Future Schema Expansion

### Orders Table (Phase 2)
```sql
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  order_number VARCHAR(50) UNIQUE NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  total_amount DECIMAL(10,2),
  currency VARCHAR(3) DEFAULT 'ARS',
  payment_status VARCHAR(50) DEFAULT 'pending',
  delivery_method VARCHAR(50),
  delivery_address TEXT,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Order Items Table
```sql
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  box_size INTEGER NOT NULL,
  flavor VARCHAR(255),
  unit_price DECIMAL(10,2),
  total_price DECIMAL(10,2)
);
```

### Customers Table
```sql
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(50),
  address TEXT,
  preferences JSONB, -- Favorite flavors, box sizes, etc.
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Data Management

### Business Data Integration
- Product catalog synchronized with business inventory
- Pricing updated in real-time with business decisions
- Spanish language support for all text fields
- ARS currency handling throughout system

### Performance Considerations
- Indexes on frequently queried fields (product name, category)
- JSONB for flexible pricing and configuration data
- Optimized queries for mobile client performance
- Efficient image URL handling

### Data Integrity
- Foreign key constraints for referential integrity
- Check constraints for business rules validation
- Audit fields (created_at, updated_at) on all tables
- Soft deletes with active flags

## Backup and Security

### Data Backup
- Automated daily backups via Vercel Postgres
- Point-in-time recovery capability
- Regular backup testing procedures

### Security Measures
- Environment-based connection strings
- No sensitive data in client-side code
- Encrypted connections to database
- Input validation and sanitization

### Privacy Compliance
- Customer data protection measures
- GDPR-compliant data handling
- Secure storage of contact information
- Data retention policies

## Migration Strategy

### Current to Phase 2
1. Add orders and customers tables
2. Migrate contact submissions to proper order structure
3. Implement referential integrity constraints
4. Add performance indexes

### Scaling Considerations
- Connection pooling for high traffic
- Read replicas for performance
- Caching layer for frequently accessed data
- Database partitioning for large datasets

## Business Intelligence

### Analytics Tables (Future)
```sql
CREATE TABLE analytics_events (
  id SERIAL PRIMARY KEY,
  event_type VARCHAR(100) NOT NULL,
  user_session VARCHAR(255),
  product_id INTEGER,
  event_data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Reporting Views
- Product popularity analysis
- Customer ordering patterns
- Revenue tracking and trends
- Conversion funnel analysis