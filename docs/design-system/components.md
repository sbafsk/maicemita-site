# Design System Components

> **AI Context**: This document defines the design system for the Maicemita e-commerce site.
> For implementation status: see `../status/progress.yaml`
> For overall architecture: see `../architecture/overview.md`

## Design System Overview

The Maicemita design system prioritizes mobile-first experience, beautiful product presentation, and Spanish language support for the alfajores business.

### Design Principles
- **Mobile-First**: 80% of users access via mobile devices
- **Product-Focused**: Beautiful presentation of alfajores
- **Accessible**: Easy navigation for all users
- **Brand Consistent**: Warm, homemade, family business feel
- **Performance**: Fast loading on mobile networks

## Color Palette

### Primary Colors
- **Warm Brown**: #8B4513 (alfajores/caramel theme)
- **Cream**: #F5F5DC (dulce de leche inspired)
- **Chocolate**: #3C1810 (dark chocolate accents)

### Secondary Colors
- **Soft Gold**: #DAA520 (premium product highlight)
- **Light Peach**: #FFDAB9 (background warmth)
- **Deep Red**: #8B0000 (membrillo flavor)

### Neutral Colors
- **White**: #FFFFFF
- **Light Gray**: #F8F9FA
- **Medium Gray**: #6C757D
- **Dark Gray**: #343A40

## Typography

### Font Families
- **Primary**: Inter (web-safe, readable on mobile)
- **Headings**: Playfair Display (elegant, food-focused)
- **Monospace**: Fira Code (technical documentation)

### Font Scales
```css
/* Mobile-first sizing */
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
```

## Component Library

### ProductCard Component
```typescript
interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    pricing: Record<string, number>;
    flavors: string[];
    imageUrl: string;
  };
  onSelect: (product: Product) => void;
}
```

**Usage Guidelines**:
- Always include high-quality product image
- Display pricing in ARS format
- Show available flavors clearly
- Optimize for touch interaction on mobile

### BoxSizeSelector Component
```typescript
interface BoxSizeSelectorProps {
  sizes: Array<{
    quantity: number;
    price: number;
    label: string;
  }>;
  selected: number;
  onSelect: (size: number) => void;
}
```

**Usage Guidelines**:
- Clear visual indication of selected size
- Pricing prominently displayed
- Easy touch targets for mobile users

### FlavorSelector Component
```typescript
interface FlavorSelectorProps {
  flavors: string[];
  selected: string[];
  multiple?: boolean;
  onSelect: (flavors: string[]) => void;
}
```

**Available Flavors**:
- Dulce de leche
- Membrillo
- Batata
- Chocolate blanco
- Chocolate negro

### ContactForm Component
```typescript
interface ContactFormProps {
  onSubmit: (formData: ContactFormData) => Promise<void>;
  selectedProducts: ProductSelection[];
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  orderDetails: ProductSelection[];
}
```

**Validation Rules**:
- Name: Required, min 2 characters
- Email: Required, valid email format
- Phone: Optional, Argentine phone format preferred
- Message: Optional, max 500 characters

## Layout Components

### Header Component
- Mobile-optimized navigation
- Business logo and branding
- Contact information prominence
- Spanish language toggle (future)

### Footer Component
- Business contact information
- Social media links
- Copyright and business details
- Mobile-friendly layout

### ProductGallery Component
- Grid layout optimized for mobile
- Infinite scroll or pagination
- Filter by category and flavor
- Search functionality

## Responsive Design

### Breakpoints
```css
/* Mobile-first approach */
--mobile: 0px;           /* Default, mobile-first */
--tablet: 768px;         /* Tablet and up */
--desktop: 1024px;       /* Desktop and up */
--wide: 1200px;          /* Wide screens */
```

### Grid System
- 12-column grid system
- Flexible gaps and spacing
- Mobile-first responsive design
- CSS Grid and Flexbox combination

## Spacing System

### Spacing Scale
```css
--spacing-1: 0.25rem;    /* 4px */
--spacing-2: 0.5rem;     /* 8px */
--spacing-3: 0.75rem;    /* 12px */
--spacing-4: 1rem;       /* 16px */
--spacing-5: 1.25rem;    /* 20px */
--spacing-6: 1.5rem;     /* 24px */
--spacing-8: 2rem;       /* 32px */
--spacing-10: 2.5rem;    /* 40px */
--spacing-12: 3rem;      /* 48px */
```

### Component Spacing
- Cards: `--spacing-4` padding
- Sections: `--spacing-8` margin
- Form elements: `--spacing-3` margin
- Buttons: `--spacing-3` padding

## Interactive Elements

### Button Variants
- **Primary**: Call-to-action (order, contact)
- **Secondary**: Navigation and filters
- **Outline**: Less prominent actions
- **Text**: Subtle interactions

### Button States
- Default, Hover, Active, Disabled, Loading
- Touch-friendly sizing (min 44px touch target)
- Clear visual feedback on interaction

### Form Elements
- Consistent styling across all inputs
- Clear focus states for accessibility
- Validation states (error, success, warning)
- Mobile-optimized input types

## Accessibility

### Color Contrast
- WCAG AA compliance for all text
- High contrast mode support
- Color-blind friendly palette

### Interactive Elements
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Touch-friendly sizing

### Text and Content
- Spanish language support
- Clear, simple language
- Descriptive alt text for images
- Semantic HTML structure

## Brand Guidelines

### Logo Usage
- Maintain clear space around logo
- Minimum size requirements
- Color variations (full color, monochrome)
- Usage on different backgrounds

### Photography Style
- High-quality product photography
- Warm, natural lighting
- Consistent styling and backgrounds
- Mobile-optimized image sizes

### Voice and Tone
- Warm and welcoming
- Family business authenticity
- Professional but personal
- Spanish language considerations

## Implementation Notes

### TailwindCSS Integration
```css
/* Custom theme extension */
module.exports = {
  theme: {
    extend: {
      colors: {
        'maicemita-brown': '#8B4513',
        'maicemita-cream': '#F5F5DC',
        'maicemita-gold': '#DAA520'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif']
      }
    }
  }
}
```

### shadcn/ui Components
- Button, Input, Card, Dialog components
- Customized with Maicemita brand colors
- Mobile-first responsive behavior
- Accessibility features built-in