# Documentation Output Style Configuration

Configuration for consistent documentation output in the Maicemita project.

## Structure Standards

### Document Hierarchy
```
# Primary Title (H1) - Document Purpose
## Major Section (H2) - Key Topics
### Subsection (H3) - Specific Concepts
#### Detail Section (H4) - Implementation Details
```

### Required Elements
- Introduction with business context
- Prerequisites and setup requirements
- Main content with practical examples
- Code examples with Spanish comments where appropriate
- Troubleshooting section
- Next steps and related documentation links

## Content Guidelines

### Code Examples
- Runnable, complete code examples with syntax highlighting
- Include realistic data using Maicemita business context
- Comment complex business logic in Spanish when appropriate
- Provide both TypeScript and JavaScript examples where relevant

### Writing Style
- Active voice, present tense
- Define business terms on first use (alfajores, maicena, etc.)
- Use tables for structured comparisons (box sizes, flavors, pricing)
- Include mobile-first considerations in all technical guidance

### Business Context Integration
- Always consider the alfajores business context
- Include relevant Spanish terminology
- Reference real product catalog when providing examples
- Consider small business constraints and workflows

## MCP Tool Integration
- Always check existing docs before suggesting changes
- Maintain consistent naming conventions for files
- Preserve business-sensitive information (pricing, URLs, contact info)
- Update progress tracking when making documentation changes

## Context Efficiency
- Summarize long technical details; link to references in `docs/`
- Use reusable snippets for common Maicemita business concepts
- Reference existing templates in `docs/templates/` when appropriate
- Maintain single source of truth for business information

## Maicemita-Specific Guidelines
- Product information should match real catalog in `docs/products.md`
- Pricing should be shown in ARS (Argentine Pesos)
- Include mobile optimization notes (80% of traffic is mobile)
- Reference live site URL when demonstrating features
- Consider Spanish-speaking customer base in examples