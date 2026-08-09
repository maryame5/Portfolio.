const nodes = [
  { id: "src", label: "RAW DATA", x: 20, y: 40, w: 92 },
  { id: "qual", label: "QUALITY · HITL", x: 20, y: 110, w: 92 },
  { id: "orch", label: "ORCHESTRATOR", x: 158, y: 75, w: 108, accent: true },
  { id: "insight", label: "INSIGHT AGENT", x: 306, y: 18, w: 104 },
  { id: "retail", label: "RETAIL AGENT", x: 306, y: 78, w: 104 },
  { id: "manu", label: "MANUFACTURING", x: 306, y: 138, w: 104 },
];

const edges = [
  "M112,54 C136,54 136,88 158,88",
  "M112,124 C136,124 136,100 158,100",
  "M266,88 C288,88 288,32 306,32",
  "M266,94 C288,94 288,92 306,92",
  "M266,100 C288,100 288,152 306,152",
];

export function HeroVisual() {
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
          {edges.map((d, i) => (
            <path
              key={d}
              d={d}
              pathLength={1}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1"
              strokeOpacity="0.5"
              className="draw-in"
              style={{ ["--reveal-delay" as string]: `${300 + i * 120}ms` }}
            />
          ))}

          {nodes.map((n, i) => (
            <g
              key={n.id}
              className="reveal"
              style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
            >
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={28}
                rx={8}
                fill={n.accent ? "var(--color-accent-soft)" : "var(--color-surface-2)"}
                stroke={n.accent ? "var(--color-accent)" : "var(--color-border-strong)"}
                strokeWidth="1"
              />
              <text
                x={n.x + n.w / 2}
                y={n.y + 18}
                textAnchor="middle"
                fill={n.accent ? "var(--color-accent)" : "var(--color-muted-foreground)"}
                fontSize="8"
                fontFamily="var(--font-mono)"
                letterSpacing="0.1em"
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>

        <div className="relative mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
          {[
            { k: "Deterministic KPI", v: "DuckDB" },
            { k: "Approval gate", v: "Human-in-loop" },
            { k: "Routing", v: "LangGraph" },
          ].map((m) => (
            <div key={m.k}>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-subtle">{m.k}</p>
              <p className="mt-1 text-xs text-foreground">{m.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
