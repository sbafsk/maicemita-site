# AI Agent Instructions - Maicemita Site

> **Context**: This file provides specific instructions for AI agents working on the Maicemita Site project.
> Always load `.ai/context.yaml` first for project context.

## Core Principles

### 1. Business-First Approach
- **Primary Goal**: Help grow the Maicemita business through beautiful, functional e-commerce
- **User Focus**: Mobile users and social media traffic are the primary audience
- **Simplicity**: Keep everything simple and conversion-focused
- **Family Business**: This is a personal project for a family business - prioritize quality and care

### 2. Technical Excellence
- **Mobile-First**: Every implementation must be mobile-optimized
- **Performance**: Fast loading times are critical for user experience
- **Quality**: Follow TypeScript standards and React best practices
- **Testing**: Generate comprehensive tests for all code

### 3. Documentation Standards
- **Single Source of Truth**: Never duplicate information across files
- **Update-First**: Always check and update existing docs before creating new ones
- **AI-Friendly**: Use structured formats and clear context injection
- **Progressive Disclosure**: Organize information by detail level

## Code Generation Guidelines

### TypeScript & React Standards
```typescript
// Always use strict TypeScript with proper interfaces
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  flavors: Flavor[];
  boxSizes: BoxSize[];
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Follow component structure from standards/coding.md
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  disabled = false,
  className
}) => {
  // Implementation following established patterns
};
```

### Mobile-First Implementation
- **Responsive Design**: Use TailwindCSS responsive classes
- **Touch-Friendly**: Ensure all interactive elements are touch-optimized
- **Performance**: Optimize images and minimize JavaScript
- **Accessibility**: Include proper ARIA labels and keyboard navigation

### Component Patterns
- **Atomic Design**: Follow atoms → molecules → organisms → templates
- **Custom Hooks**: Extract reusable logic into custom hooks
- **Error Boundaries**: Implement graceful error handling
- **Loading States**: Always include loading and error states

## Documentation Updates

### When Updating Documentation
1. **Check Existing**: Always read existing files first
2. **Update in Place**: Modify existing content rather than creating duplicates
3. **Maintain Structure**: Follow established documentation hierarchy
4. **Context Injection**: Add AI instructions where relevant
5. **Machine-Readable**: Use YAML for structured data

### File Update Priority
1. **docs/status/progress.yaml** - Update current status and priorities
2. **docs/index.md** - Update project overview if major changes
3. **standards/coding.md** - Update if new patterns emerge
4. **docs/architecture/overview.md** - Update for architectural changes

## AI Behavior Guidelines

### Context Loading
1. **Always Load**: `.ai/context.yaml` first for project understanding
2. **Check Status**: `docs/status/progress.yaml` for current priorities
3. **Review Standards**: `standards/coding.md` for code generation
4. **Understand Architecture**: `docs/architecture/overview.md` for technical context

### Response Patterns
- **Business Context**: Always consider the family business nature
- **Mobile Priority**: Emphasize mobile experience in all recommendations
- **Simple Solutions**: Prefer simple, maintainable solutions over complex ones
- **User Experience**: Focus on conversion and ease of use

### Code Generation
- **TypeScript First**: Always use TypeScript with proper types
- **React Best Practices**: Follow React patterns and hooks
- **TailwindCSS**: Use utility-first CSS approach
- **Testing**: Include tests for all generated code
- **Performance**: Optimize for fast loading and mobile performance

## Project-Specific Instructions

### E-commerce Focus
- **Product Showcase**: Beautiful, high-quality product presentation
- **Ordering Process**: Simple, intuitive ordering flow
- **Contact Forms**: Easy-to-use contact and order forms
- **Mobile Commerce**: Optimized for mobile shopping experience

### Business Requirements
- **Box Sizes**: Small (6), Medium (12), Large (24) alfajores
- **Flavors**: Dulce de leche, membrillo, batata
- **Ordering**: Contact form with email/phone
- **Target**: Local customers and dessert lovers

### Technical Requirements
- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS + shadcn/ui
- **Database**: Vercel Postgres for MVP
- **Deployment**: Vercel with automatic deployments
- **Performance**: < 2 second load times

## Quality Assurance

### Code Quality
- **TypeScript**: Strict mode with proper type definitions
- **ESLint**: Follow project linting rules
- **Prettier**: Consistent code formatting
- **Testing**: Comprehensive test coverage

### User Experience
- **Mobile-First**: Test on mobile devices
- **Performance**: Monitor Core Web Vitals
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Optimize for search engines

### Business Impact
- **Conversion**: Focus on order completion
- **User Satisfaction**: Easy navigation and ordering
- **Mobile Experience**: Optimized for mobile users
- **Loading Speed**: Fast, responsive interface

## Communication Style

### With Developer
- **Technical**: Provide detailed technical guidance
- **Code Examples**: Include complete, working code examples
- **Best Practices**: Explain why certain approaches are recommended
- **Testing**: Emphasize the importance of testing

### With Business Owner
- **Simple Language**: Avoid technical jargon
- **Business Benefits**: Explain how features help the business
- **User Experience**: Focus on customer benefits
- **Timeline**: Provide realistic timelines and expectations

## Error Handling

### When Things Go Wrong
1. **Graceful Degradation**: Provide fallback options
2. **User-Friendly Messages**: Clear, helpful error messages
3. **Logging**: Proper error logging for debugging
4. **Recovery**: Easy ways to recover from errors

### Development Errors
- **TypeScript Errors**: Fix with proper type definitions
- **Build Errors**: Resolve dependency and configuration issues
- **Test Failures**: Update tests to match implementation
- **Performance Issues**: Optimize code and assets

## Success Metrics

### Technical Success
- **Performance**: < 2 second load times
- **Quality**: 80% test coverage
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Lighthouse score > 90

### Business Success
- **Conversion**: 5% of visitors place orders
- **User Experience**: Easy product discovery and ordering
- **Mobile Performance**: Fast loading on mobile devices
- **Customer Satisfaction**: Simple, intuitive interface

---

**Remember**: This is a family business project focused on beautiful, functional e-commerce for homemade alfajores. Every decision should prioritize user experience, mobile performance, and business growth while maintaining technical excellence and code quality.