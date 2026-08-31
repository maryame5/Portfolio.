import { useState } from "react";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  accent?: boolean;
  role: string;
  contract: string;
  decision: string;
};

const nodes: Node[] = [
  {
    id: "src",
    label: "RAW DATA",
    x: 20,
    y: 40,
    w: 92,
    role: "Bronze ingestion — the uploaded dataset is stored untouched.",
    contract: "Nothing is mutated at ingestion; the original file stays reproducible.",
    decision: "Keeping Bronze immutable makes every later correction auditable.",
  },
  {
    id: "qual",
    label: "QUALITY · HITL",
    x: 20,
    y: 110,
    w: 92,
    role: "Data Preparation Agent — profiling, 5-dimension quality score, correction plan.",
    contract: "No cleaning runs before a human approves the plan; Silver output is versioned.",
    decision: "Human-in-the-loop because a machine should not decide on data mutations.",
  },
  {
    id: "orch",
    label: "ORCHESTRATOR",
    x: 158,
    y: 75,
    w: 108,
    accent: true,
    role: "Routes a request to the agent that owns the question.",
    contract: "One entry point, typed hand-off, no agent calls another agent directly.",
    decision: "Central routing keeps agents replaceable instead of entangled.",
  },
  {
    id: "insight",
    label: "INSIGHT AGENT",
    x: 306,
    y: 18,
    w: 104,
    role: "Turns a natural-language question into SQL and an explained answer.",
    contract: "Every generated query passes the sqlglot AST validator before DuckDB runs it.",
    decision: "A prompt is not a guarantee — parsing the query is.",
  },
  {
    id: "retail",
    label: "RETAIL AGENT",
    x: 306,
    y: 78,
    w: 104,
    role: "Sector agent: retail KPIs computed deterministically.",
    contract: "29 unit tests pin the output contract; the LLM never returns a number itself.",
    decision: "KPIs are code, not model output, so results are reproducible.",
  },
  {
    id: "manu",
    label: "MANUFACTURING",
    x: 306,
    y: 138,
    w: 104,
    role: "Sector agent: manufacturing metrics on the same contract.",
    contract: "Same interface as Retail — a new sector is an implementation, not a rewrite.",
    decision: "One shared agent contract keeps the platform modular.",
  },
];

const edges: { d: string; from: string; to: string }[] = [
  { d: "M112,54 C136,54 136,88 158,88", from: "src", to: "orch" },
  { d: "M112,124 C136,124 136,100 158,100", from: "qual", to: "orch" },
  { d: "M266,88 C288,88 288,32 306,32", from: "orch", to: "insight" },
  { d: "M266,94 C288,94 288,92 306,92", from: "orch", to: "retail" },
  { d: "M266,100 C288,100 288,152 306,152", from: "orch", to: "manu" },
];

export function HeroVisual() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = nodes.find((n) => n.id === activeId) ?? null;

  return (
    <div className="relative w-full">
      <div className="glow-orb -right-10 top-0 h-64 w-64 bg-accent/25" />
      <div className="glow-orb -bottom-10 left-4 h-56 w-56 bg-accent-2/20" />

      <div className="card-surface relative overflow-hidden p-5">
        <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          <span>intelligent-analytics / topology</span>
          <span className="flex items-center gap-1.5 text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            live
          </span>
        </div>

        <svg
          viewBox="0 0 430 190"
          className="relative mt-4 w-full"
          role="img"
          aria-label="Multi-agent analytics topology diagram"
        >
          {edges.map((e, i) => {
            const lit = activeId !== null && (e.from === activeId || e.to === activeId);
            return (
              <g key={e.d}>
                <path
                  d={e.d}
                  pathLength={1}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth={lit ? 1.8 : 1}
                  strokeOpacity={lit ? 0.95 : 0.4}
                  className={lit ? "edge-flow" : "draw-in"}
                  style={{ ["--reveal-delay" as string]: `${300 + i * 120}ms` }}
                />
                {/* Live Data Packet Flow Particle */}
                <circle r={lit ? "3" : "2"} fill="var(--color-accent)">
                  <animateMotion
                    path={e.d}
                    dur={`${2.4 + i * 0.4}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.5}s`}
                  />
                </circle>
              </g>
            );
          })}

          {nodes.map((n, i) => {
            const isActive = n.id === activeId;
            return (
              <g
                key={n.id}
                className="reveal cursor-pointer"
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                aria-label={`${n.label} — show component details`}
                onClick={() => setActiveId(isActive ? null : n.id)}
                onKeyDown={(ev) => {
                  if (ev.key === "Enter" || ev.key === " ") {
                    ev.preventDefault();
                    setActiveId(isActive ? null : n.id);
                  }
                }}
              >
                <rect
                  x={n.x}
                  y={n.y}
                  width={n.w}
                  height={28}
                  rx={8}
                  fill={
                    isActive || n.accent
                      ? "var(--color-accent-soft)"
                      : "var(--color-surface-2)"
                  }
                  stroke={
                    isActive || n.accent
                      ? "var(--color-accent)"
                      : "var(--color-border-strong)"
                  }
                  strokeWidth={isActive ? 1.6 : 1}
                  style={{ transition: "all 200ms ease" }}
                />
                <text
                  x={n.x + n.w / 2}
                  y={n.y + 18}
                  textAnchor="middle"
                  fill={
                    isActive || n.accent
                      ? "var(--color-accent)"
                      : "var(--color-muted-foreground)"
                  }
                  fontSize="8"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.1em"
                  pointerEvents="none"
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="relative mt-4 border-t border-border pt-4">
          {active ? (
            <div className="route-enter">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                  {active.label}
                </p>
                <button
                  onClick={() => setActiveId(null)}
                  className="press font-mono text-[10px] uppercase tracking-[0.12em] text-subtle hover:text-foreground"
                >
                  close
                </button>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{active.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                <span className="text-subtle">Contract — </span>
                {active.contract}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                <span className="text-subtle">Decision — </span>
                {active.decision}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {[
                { k: "Deterministic KPI", v: "DuckDB" },
                { k: "Approval gate", v: "Human-in-loop" },
                { k: "Routing", v: "LangGraph" },
              ].map((m) => (
                <div key={m.k}>
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-subtle">
                    {m.k}
                  </p>
                  <p className="mt-1 text-xs text-foreground">{m.v}</p>
                </div>
              ))}
            </div>
          )}
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-subtle">
            Select a component for its role, contract and decision
          </p>
        </div>
      </div>

      {/* Accessible text fallback — same content, no diagram needed */}
      <details className="mt-3 rounded-xl border border-border bg-surface/40 p-4">
        <summary className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">
          Components as text
        </summary>
        <ul className="mt-3 space-y-3">
          {nodes.map((n) => (
            <li key={n.id} className="text-xs leading-relaxed text-muted-foreground">
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                {n.label}
              </span>
              <br />
              {n.role} {n.contract} {n.decision}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
