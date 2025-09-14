# Business Rules

> **AI Context**: This document defines the core business rules for the Maicemita alfajores e-commerce platform.
> For technical implementation: see `docs/architecture/overview.md`
> For current business status: see `docs/status/progress.yaml`

## Overview

This document establishes the business rules that govern the Maicemita alfajores e-commerce platform, ensuring technical implementation aligns with business requirements and constraints.

## Product Business Rules

### Product Catalog Rules
1. **Product Availability**: All products must have current pricing in ARS
2. **Box Size Options**: Products must offer 1, 6, and 12 unit box sizes minimum
3. **Flavor Varieties**: Each product must specify available flavors clearly
4. **Product Images**: All products require high-quality images for mobile display
5. **Category Classification**: Products must belong to defined categories (Catálogo 1, Catálogo 2, etc.)

### Pricing Rules
1. **Currency**: All pricing displayed in Argentine Pesos (ARS)
2. **Volume Discounts**: Larger box sizes must offer better per-unit pricing
3. **Price Updates**: Prices can be updated by business owner, reflected immediately
4. **Minimum Order**: No minimum order value required
5. **Price Display**: Always show price per box, not per individual alfajor

### Inventory Rules (Future Implementation)
1. **Stock Tracking**: Track available quantity for each product/flavor combination
2. **Out of Stock**: Clearly indicate when products are unavailable
3. **Pre-Orders**: Allow orders when stock is low with extended delivery time
4. **Seasonal Items**: Support temporary product availability

## Order Processing Rules

### Order Creation Rules
1. **Customer Information**: Name and contact method (email or phone) required
2. **Product Selection**: Must specify box size and flavor for each product
3. **Order Validation**: Verify product availability before confirming order
4. **Duplicate Prevention**: Prevent duplicate orders from same customer within short timeframe
5. **Order Confirmation**: Generate unique order number for tracking

### Order Fulfillment Rules
1. **Business Owner Review**: All orders reviewed by business owner before production
2. **Production Time**: Fresh alfajores prepared after order confirmation
3. **Quality Control**: Each order inspected before packaging
4. **Delivery Coordination**: Customer contacted for pickup/delivery arrangement
5. **Payment**: Payment arrangements made directly with customer

### Order Status Rules
1. **Pending**: Order submitted, awaiting business review
2. **Confirmed**: Business confirmed order, production scheduled
3. **In Production**: Alfajores being prepared
4. **Ready**: Order complete, awaiting customer pickup/delivery
5. **Completed**: Order delivered and payment received
6. **Cancelled**: Order cancelled by customer or business

## Customer Communication Rules

### Language Support
1. **Primary Language**: Spanish for customer-facing content
2. **Bilingual Support**: English secondary for broader reach (future)
3. **Local Terms**: Use Argentine Spanish terminology and expressions
4. **Cultural Context**: Content reflects local culture and preferences

### Communication Channels
1. **Contact Form**: Primary method for order inquiries
2. **Email**: Order confirmations and updates
3. **Phone**: Direct contact for urgent matters
4. **WhatsApp**: Popular local communication method (future integration)
5. **Social Media**: Instagram/Facebook for marketing and updates

### Response Time Rules
1. **Order Inquiries**: Response within 24 hours maximum
2. **General Questions**: Response within 48 hours
3. **Urgent Matters**: Phone contact for same-day response
4. **Order Updates**: Proactive communication on status changes

## Payment Business Rules

### Current Payment Methods (MVP)
1. **Direct Contact**: Payment arrangements made personally
2. **Cash**: Accepted for local pickup/delivery
3. **Bank Transfer**: Accepted for confirmed orders
4. **Flexible Terms**: Accommodating for regular customers

### Future Payment Integration
1. **MercadoPago**: Primary online payment method for Argentina
2. **Credit Cards**: Via MercadoPago integration
3. **Stripe**: International payment support
4. **Cash on Delivery**: For local delivery orders

### Payment Terms
1. **Payment Timing**: Payment required before or upon delivery
2. **Refund Policy**: Full refund for order cancellation before production
3. **Partial Refunds**: Prorated for partial order fulfillment issues
4. **Payment Security**: Secure handling of all payment information

## Delivery and Logistics Rules

### Delivery Options
1. **Local Pickup**: Preferred method, arranged by appointment
2. **Local Delivery**: Available within delivery area for additional fee
3. **Extended Delivery**: Possible for special arrangements
4. **Shipping**: Not currently available, may be added for expansion

### Delivery Timing
1. **Fresh Products**: Delivery within 24-48 hours of production completion
2. **Appointment Scheduling**: Delivery times arranged with customer
3. **Delivery Windows**: Specific time slots for customer convenience
4. **Holiday Scheduling**: Extended lead times during busy periods

### Quality Assurance
1. **Packaging**: Proper packaging to maintain freshness during delivery
2. **Temperature Control**: Appropriate handling for product preservation
3. **Quality Guarantee**: Replace products if quality issues upon delivery
4. **Customer Satisfaction**: Follow-up to ensure customer satisfaction

## Business Operations Rules

### Operating Hours
1. **Order Taking**: 24/7 via website contact form
2. **Response Hours**: Business hours for phone/direct contact
3. **Production Schedule**: Flexible based on order volume
4. **Delivery Windows**: Arranged within business availability

### Capacity Management
1. **Production Limits**: Maximum daily production capacity considered
2. **Order Scheduling**: Orders scheduled based on production capacity
3. **Quality Maintenance**: Never compromise quality for volume
4. **Growth Planning**: Scale capacity as demand increases

### Customer Service Standards
1. **Personal Touch**: Maintain family business, personal service approach
2. **Quality Focus**: Prioritize product quality over quantity
3. **Customer Relationships**: Build long-term customer relationships
4. **Feedback Integration**: Incorporate customer feedback into improvements

## Compliance and Legal Rules

### Food Safety
1. **Hygiene Standards**: Maintain highest food preparation standards
2. **Allergen Information**: Clear labeling of ingredients and allergens
3. **Shelf Life**: Communicate product freshness and consumption guidelines
4. **Storage Instructions**: Provide proper storage recommendations

### Business Registration
1. **Legal Compliance**: Operate within local business regulations
2. **Tax Requirements**: Comply with Argentine tax requirements
3. **Permits**: Maintain required food business permits and licenses
4. **Insurance**: Appropriate business insurance coverage

### Data Protection
1. **Customer Privacy**: Protect all customer information securely
2. **Data Retention**: Appropriate data retention policies
3. **Marketing Consent**: Obtain consent for marketing communications
4. **GDPR Compliance**: Respect international privacy standards

## Quality Standards

### Product Quality
1. **Fresh Ingredients**: Use only fresh, quality ingredients
2. **Traditional Recipes**: Maintain authentic alfajor recipes
3. **Consistent Quality**: Every product meets established quality standards
4. **Continuous Improvement**: Regular recipe and process refinements

### Service Quality
1. **Response Quality**: Professional, helpful customer service
2. **Order Accuracy**: Careful attention to order details and specifications
3. **Delivery Quality**: Reliable, timely delivery service
4. **Problem Resolution**: Quick, fair resolution of any issues

### Brand Standards
1. **Brand Consistency**: Consistent presentation across all touchpoints
2. **Family Business Values**: Maintain authentic, personal business approach
3. **Local Identity**: Celebrate Argentine culinary tradition
4. **Growth Balance**: Scale business while preserving quality and character

These business rules ensure that the Maicemita platform serves the business needs effectively while maintaining the personal, quality-focused approach that defines the brand.