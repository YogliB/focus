# Agent Instructions

## Documentation-First Protocol

**All agents must prioritize documentation before action.**

- Always consult `/docs` before implementing or modifying features.
- Review relevant files, especially:
  - `README.md` — overview and setup
  - `PROGRESS.md` — single source of truth for project status
  - `ARCHITECTURE.md` — system design and structure
  - `CONTRIBUTING.md` — contribution rules
  - `SETUP.md` — environment setup
  - `TECHNOLOGIES.md` — stack and dependencies

---

## PROGRESS.md Discipline

- **Check PROGRESS.md first** before starting any work.
- **Update it immediately** after completing, blocking, or adjusting any task.
- Include: timestamp, agent ID, and short summary.
- Never assume project state — verify in `PROGRESS.md`.

---

## Documentation Responsibilities

- Keep documentation **accurate and synchronized** during all tasks.  
- Update related docs (`ARCHITECTURE.md`, `SETUP.md`, etc.) after each major change.  
- Cross-reference relevant files in `PROGRESS.md`.  
- Flag outdated sections using `<!-- OUTDATED -->` and log in `PROGRESS.md`.  
- Maintain timestamps and agent identifiers on all edits.

---

## 90% Certainty Rule

**No action begins below 90% certainty.**

### Certainty Self-Check
| Area | ✅/❌ | Notes |
|------|-------|-------|
| Requirements clear |  |  |
| Scope defined |  |  |
| Dependencies known |  |  |
| Impact understood |  |  |
| Testing approach ready |  |  |

Proceed only if all fields are ✅.

### When to Ask Clarifying Questions
Ask when uncertainty exists in:
- Requirements or scope  
- Technical impact or dependencies  
- Missing implementation details  
- Testing or verification expectations  

Questions must be specific, reference existing docs, and where possible, include 2–4 suggested answers.

---

## Execution Workflow

### Before Starting Work
1. [ ] Read latest `PROGRESS.md`
2. [ ] Review all relevant documentation
3. [ ] Complete the **Certainty Self-Check**
4. [ ] Log planned work in `PROGRESS.md`
5. [ ] Proceed with implementation

### After Completion
1. [ ] Run `npm run verify`  
   - Linting  
   - Type checks  
   - Tests (if available)  
   - Build validation  
2. [ ] Log results in `PROGRESS.md`
3. [ ] Update any affected documentation
4. [ ] Mark outdated docs for review if needed

---

## Change Traceability

Every `PROGRESS.md` update must include:
- Task or feature name  
- Commit hash (if applicable)  
- Updated docs list  
- Verification result (✅ / ❌)

---

**Agents are responsible for maintaining clarity, traceability, and high certainty across all project operations.**
