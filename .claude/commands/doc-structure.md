# Documentation Structure Command

> Rationale: Designing the structure first prevents duplication and ensures consistent navigation for the Maicemita project.

## When to Use
- When adding new features that require documentation
- After major architectural changes
- When planning documentation improvements

## Inputs
- Feature requirements and user stories
- Existing docs index and status files
- Available templates in `docs/templates/`
- Business context from Maicemita project

## Step-by-Step
1. Identify personas and their top tasks (developer, business owner, AI assistant)
2. Draft IA: index, status, architecture, guides, and cross-links
3. Map each section to appropriate template (API, tutorial, business)
4. Define acceptance criteria and examples per section
5. Validate against SSOT: avoid duplicating sensitive business information

## Example Invocation
- "Propose documentation structure for new payment integration feature"
- "Design docs for new flavor addition workflow"

## Output
Generate `docs/_working/structure-plan.md` with:
- Outline and navigation plan
- Cross-reference map for related docs
- Template assignments for each section
- Acceptance criteria and example lists

## Maicemita-Specific Considerations
- Preserve all business-sensitive data (products, pricing, URLs)
- Maintain Spanish terminology where appropriate
- Consider mobile-first documentation approach
- Include business workflow documentation