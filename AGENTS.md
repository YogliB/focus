# Agent Instructions

## Documentation-First Approach

**All agents working on this project must prioritize documentation:**

1. **Always consult existing documentation** before making any changes or implementing new features
2. **Review all relevant docs** in the `/docs` directory, especially:
    - `README.md` - Project overview and setup
    - `PROGRESS.md` - Current status and recent updates
    - `ARCHITECTURE.md` - System design and structure
    - `CONTRIBUTING.md` - Guidelines for contributions
    - `SETUP.md` - Development environment setup
    - `TECHNOLOGIES.md` - Technology stack and dependencies

## PROGRESS.md Requirement

**The PROGRESS.md file is the single source of truth for project status:**

- **Always check PROGRESS.md first** when starting any work
- **Update PROGRESS.md immediately** after completing tasks or milestones
- **Document any blockers or issues** in PROGRESS.md as they arise
- **Include timestamps and your agent identifier** in all PROGRESS.md updates
- **Never assume project status** - always verify in PROGRESS.md

## Documentation Maintenance

**Agents are responsible for keeping documentation current:**

- Update relevant docs when implementing new features
- Document any architectural changes immediately
- Keep setup instructions current with environment changes
- Add to PROGRESS.md for any significant work completed
- Flag outdated information for review

## Before Starting Work

**Keep asking clarifying questions until it is at least 90% sure of the requirements or context before proceeding with any actions.**

**Mandatory checklist for all agents:**

1. [ ] Read current PROGRESS.md
2. [ ] Review relevant documentation for your task
3. [ ] Check for any blockers or dependencies
4. [ ] Update PROGRESS.md with your planned work
5. [ ] Proceed with implementation
6. [ ] Update PROGRESS.md with completion status

## After Completing Major Development

**All agents must run verification after completing major development work:**

**Mandatory verification step for all major development:**
- **Run `npm run verify`** immediately after completing any major development task
- **This verification is required** before considering development work complete
- **Do not skip this step** - verification ensures code quality and catches potential issues
- **Update PROGRESS.md** with verification results and any issues found

**Verification includes:**
- Code linting and formatting checks
- Type checking (if applicable)
- Test execution (if tests exist)
- Build verification
- Any other project-specific validation steps

## Documentation Updates

**When updating documentation:**

- Use clear, concise language
- Include code examples where relevant
- Update timestamps for all changes
- Cross-reference related documents
- Maintain consistent formatting across all docs

**Failure to maintain current documentation may result in project inconsistencies and should be avoided at all costs.**
