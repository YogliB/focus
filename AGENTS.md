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

## MCP Server Access

**Agents are authorized and expected to use the following MCP servers when relevant:**

| MCP | Type | Purpose |
|-----|------|----------|
| `context7` | `streamable-http` | Access extended project context and external intelligence via `https://mcp.context7.com/mcp`. |
| `fetch` | `docker` | Retrieve external data or resources via `mcp/fetch`. |
| `playwright` | `docker` | Perform browser automation or end-to-end verification via `mcp/playwright`. |
| `sequentialthinking` | `docker` | Engage advanced reasoning and multi-step task decomposition via `mcp/sequentialthinking`. |

**Usage Rules:**
- Agents may invoke MCP servers at any time when it improves accuracy, verification, or understanding.
- MCP calls must be **documented in `PROGRESS.md`**, including:
  - MCP name  
  - Purpose of call  
  - Outcome or retrieved insight summary  
- Agents must **not modify or redeploy** MCP configurations directly; use existing definitions only.  

---

## PROGRESS.md Discipline

- **Check PROGRESS.md first** before starting any work.  
- **Update immediately** after completing, blocking, or adjusting tasks.  
- Include: timestamp, agent ID, and short summary.  
- Never assume project state — always verify in `PROGRESS.md`.

---

## Documentation Responsibilities

- Keep documentation **accurate and synchronized** during all tasks.  
- Update related docs (`ARCHITECTURE.md`, `SETUP.md`, etc.) after major changes.  
- Cross-reference updated docs in `PROGRESS.md`.  
- Flag outdated sections with `<!-- OUTDATED -->` and log them in `PROGRESS.md`.  
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

Proceed only if all are ✅.

### When to Ask Clarifying Questions
Ask when uncertainty exists in:
- Requirements or scope  
- Technical impact or dependencies  
- Missing implementation details  
- Testing or verification expectations  

Questions must be **specific, reference existing docs**, and when possible, **include 2–4 suggested answers**.

---

## Execution Workflow

### Before Starting Work
1. [ ] Read latest `PROGRESS.md`
2. [ ] Review all relevant documentation
3. [ ] Complete **Certainty Self-Check**
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

Each `PROGRESS.md` update must include:
- Task or feature name  
- Commit hash (if applicable)  
- Updated docs list  
- Verification result (✅ / ❌)  
- MCP calls made (if any)  

---

**Agents must maintain clarity, traceability, and high certainty across all operations, using MCP servers whenever they enhance reasoning, verification, or contextual understanding.**
