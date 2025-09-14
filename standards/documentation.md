# Documentation Standards

> **AI Context**: This document defines documentation standards for the Maicemita project.
> For overall project documentation: see `docs/index.md`
> For development standards: see `coding.md`

## Overview

This document establishes comprehensive documentation standards for the Maicemita project, ensuring consistency, clarity, and maintainability across all documentation while supporting AI-assisted development.

## Documentation Principles

### Single Source of Truth
- Each piece of information exists in exactly one location
- Cross-reference related information rather than duplicating
- Update information in its authoritative location only
- Use clear links to connect related concepts

### AI-Friendly Structure
- Machine-readable status and metadata
- Progressive disclosure of information complexity
- Context injection for AI assistants
- Consistent formatting and structure patterns

### Business-Focused Content
- Documentation serves the alfajores business needs first
- Technical details support business objectives
- Include business context in technical documentation
- Spanish terminology and local business practices integrated

### Mobile-First Approach
- Documentation accessible on mobile devices
- Concise, scannable content structure
- Quick reference sections for key information
- Progressive enhancement for detailed technical content

## Document Types and Standards

### Project Overview Documents
**Purpose**: High-level project understanding
**Audience**: Stakeholders, new developers, AI assistants
**Structure**:
```markdown
# [Title] - Project Overview

> **AI Context**: Brief context statement
> For current status: see `status/progress.yaml`
> For implementation: see `architecture/overview.md`

## Project Overview
[Business context and purpose]

## Quick Start
[Essential getting started information]

## Current Status
[High-level status information]

## Key Features
[Business-focused feature list]

## Architecture Highlights
[Technical overview for developers]

## Related Documentation
[Links to detailed documentation]
```

### Technical Documentation
**Purpose**: Implementation details and architecture
**Audience**: Developers, AI assistants
**Structure**:
```markdown
# [Component/System] Architecture

> **AI Context**: Technical context statement
> For overview: see `../index.md`
> For current status: see `../status/progress.yaml`

## Overview
[Technical system overview]

## Architecture
[Detailed technical architecture]

## Implementation
[Code examples and patterns]

## API Reference
[If applicable - API documentation]

## Integration
[How this integrates with other systems]

## Performance Considerations
[Performance and optimization notes]
```

### Business Documentation
**Purpose**: Business rules and processes
**Audience**: Business stakeholders, developers
**Structure**:
```markdown
# [Business Area] Rules

> **AI Context**: Business context statement
> For technical implementation: see `docs/architecture/`
> For current status: see `docs/status/progress.yaml`

## Overview
[Business area overview]

## Business Rules
### [Category] Rules
1. [Rule with clear business rationale]
2. [Rule with implementation implications]

## Processes
[Business process descriptions]

## Compliance
[Legal and regulatory considerations]
```

### How-To Guides
**Purpose**: Step-by-step instructions
**Audience**: Developers, business users
**Structure**:
```markdown
# How to [Task]

## Prerequisites
[What you need before starting]

## Steps
1. **[Step Title]**: Detailed instructions
   ```bash
   # Code examples
   ```

2. **[Next Step]**: Continue with clear steps

## Verification
[How to confirm success]

## Troubleshooting
[Common issues and solutions]

## Next Steps
[What to do after completion]
```

## Content Guidelines

### Writing Style
- **Active Voice**: Use active voice for clarity
- **Present Tense**: Write in present tense for immediacy
- **Concise Language**: Be concise while maintaining clarity
- **Specific Terms**: Use specific technical and business terms
- **Avoid Jargon**: Explain technical terms when first used

### Code Examples
- **Complete Examples**: Provide runnable, complete code examples
- **Realistic Data**: Use Maicemita business context in examples
- **Syntax Highlighting**: Always specify language for code blocks
- **Comments**: Include helpful comments, Spanish when appropriate
- **Error Handling**: Show proper error handling patterns

### Business Context Integration
- **Real Products**: Use actual Maicemita products in examples
- **Pricing**: Show real ARS pricing when relevant
- **Spanish Terms**: Include Spanish business terminology
- **Local Context**: Reference Argentine business practices
- **Cultural Considerations**: Account for local cultural context

### Visual Elements
- **Diagrams**: Use ASCII diagrams or link to visual diagrams
- **Tables**: Use tables for structured comparisons
- **Lists**: Use lists for sequential or related items
- **Callouts**: Use blockquotes for important notes
- **Links**: Provide clear, descriptive link text

## File Organization Standards

### Directory Structure
```
docs/
├── index.md                    # Main project overview
├── README.md                   # Minimal entry point
├── status/                     # Current state only
│   ├── progress.yaml          # Machine-readable status
│   └── priorities.md          # Current priorities
├── architecture/              # Technical implementation
│   ├── overview.md           # System architecture
│   ├── api.md                # API specifications
│   └── database.md           # Data model
├── guides/                    # How-to documentation
│   ├── setup.md              # Environment setup
│   └── deployment.md         # Deployment processes
├── design-system/             # UI/UX documentation
│   └── components.md         # Design system guide
├── templates/                 # Documentation templates
│   ├── api-documentation.md  # API doc template
│   ├── tutorial-guide.md     # Tutorial template
│   ├── terminology-template.md # Terminology template
│   └── diagram-workflow.md   # Workflow template
├── session-management/        # Development workflow
│   ├── session-notes.md      # Current session tracking
│   └── resumption-checklist.md # Session resumption
└── _working/                  # Temporary work files
    ├── project-notes.md      # Ongoing notes
    ├── research-findings.md  # Research insights
    └── review-checklist.md   # Review processes
```

### File Naming Conventions
- **Lowercase**: All filenames in lowercase
- **Hyphens**: Use hyphens to separate words
- **Descriptive**: Clear, descriptive names
- **Consistent**: Follow established patterns
- **Extension**: Always use `.md` for markdown files

### Cross-Reference Standards
- **Relative Links**: Use relative paths for internal links
- **Descriptive Text**: Use descriptive link text, not URLs
- **Context**: Provide context for external links
- **Maintenance**: Regular link checking and updates

## Metadata Standards

### Front Matter
Use YAML front matter for structured metadata:
```yaml
---
title: "Document Title"
description: "Brief document description"
audience: ["developers", "business-users", "ai-assistants"]
last_updated: "2024-09-14"
status: "active" | "draft" | "archived"
business_impact: "high" | "medium" | "low"
technical_complexity: "high" | "medium" | "low"
---
```

### AI Context Comments
Include AI context comments at the top of documents:
```markdown
> **AI Context**: This document [purpose and context]
> For current status: see `status/progress.yaml`
> For related information: see `[relevant-file].md`
```

### Status Tracking
Use structured status information:
```yaml
# In progress.yaml
documentation_status:
  coverage: 85%
  last_audit: "2024-09-14"
  outdated_files: []
  missing_sections: []
  priority_updates: []
```

## Review and Maintenance Standards

### Regular Reviews
- **Weekly**: Review session notes and working files
- **Monthly**: Full documentation audit
- **Quarterly**: Comprehensive review and restructuring
- **Release**: Documentation review before each release

### Update Triggers
- **Feature Changes**: Update docs when features change
- **Business Changes**: Update when business rules change
- **Architecture Changes**: Update technical documentation
- **User Feedback**: Address documentation feedback promptly

### Quality Assurance
- **Accuracy**: Verify all information is current and correct
- **Completeness**: Ensure all necessary topics are covered
- **Consistency**: Check for consistent style and formatting
- **Usability**: Test documentation from user perspective
- **Business Alignment**: Verify business context accuracy

### Version Control
- **Git History**: Use meaningful commit messages
- **Change Documentation**: Document significant changes
- **Review Process**: Require review for major documentation changes
- **Backup Strategy**: Ensure documentation is properly backed up

## AI Integration Standards

### Machine-Readable Formats
- **YAML**: Use YAML for structured data (status, metadata)
- **JSON**: Use JSON for configuration and API schemas
- **Markdown**: Use consistent markdown formatting
- **Structured Data**: Include structured data where beneficial

### Context Injection
- **Purpose Statements**: Include purpose at document start
- **Cross-References**: Link related documentation clearly
- **Business Context**: Include relevant business context
- **Technical Context**: Provide necessary technical background

### Progressive Disclosure
- **Overview First**: Start with high-level overview
- **Details on Demand**: Link to detailed information
- **Layered Information**: Organize by complexity level
- **Quick Reference**: Provide quick reference sections

These documentation standards ensure that the Maicemita project maintains high-quality, consistent, and useful documentation that serves both human users and AI assistants effectively while supporting the business objectives.