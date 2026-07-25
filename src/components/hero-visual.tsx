/**
 * Hero visual — a minimal engineering blueprint composition.
 * Pure SVG + tokens. No illustration, no stock imagery.
 */
export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      {/* Ambient wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-accent-soft to-transparent"
      />
      {/* Blueprint grid */}
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        role="img"
        aria-label="Abstract system architecture diagram"
      >
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground/8"
            />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />

        {/* Connector lines */}
        <g
          stroke="currentColor"
          strokeWidth="1"
          className="text-foreground/25"
          fill="none"
        >
          <path d="M 100 120 L 200 120" />
          <path d="M 200 120 L 300 120" />
          <path d="M 100 200 L 200 200" />
          <path d="M 200 200 L 300 200" />
          <path d="M 100 280 L 200 280" />
          <path d="M 200 280 L 300 280" />
          <path d="M 200 120 L 200 280" />
        </g>

        {/* Nodes */}
        <g>
          {[
            { x: 100, y: 120, label: "ingest" },
            { x: 100, y: 200, label: "model" },
            { x: 100, y: 280, label: "api" },
            { x: 200, y: 120, label: "planner" },
            { x: 200, y: 200, label: "core" },
            { x: 200, y: 280, label: "eval" },
            { x: 300, y: 120, label: "ui" },
            { x: 300, y: 200, label: "audit" },
            { x: 300, y: 280, label: "obs" },
          ].map((n) => (
            <g key={`${n.x}-${n.y}`}>
              <rect
                x={n.x - 30}
                y={n.y - 14}
                width="60"
                height="28"
                rx="4"
                className="fill-canvas"
                stroke="currentColor"
                strokeWidth="1"
                style={{ color: "var(--foreground)" }}
                opacity="0.9"
              />
              <text
                x={n.x}
                y={n.y + 4}
                textAnchor="middle"
                fontSize="10"
                fontFamily="ui-monospace, 'Geist Mono', monospace"
                className="fill-muted-foreground"
              >
                {n.label}
              </text>
            </g>
          ))}
        </g>

        {/* Accent focal node */}
        <g>
          <circle
            cx="200"
            cy="200"
            r="46"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent/40"
          />
          <circle
            cx="200"
            cy="200"
            r="6"
            className="fill-accent"
          />
        </g>
      </svg>

      {/* Corner ticks */}
      <div className="pointer-events-none absolute inset-0">
        {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map(
          (pos) => (
            <span
              key={pos}
              className={`absolute ${pos} h-3 w-3 border-foreground/30`}
              style={{
                borderTopWidth: pos.includes("top") ? 1 : 0,
                borderBottomWidth: pos.includes("bottom") ? 1 : 0,
                borderLeftWidth: pos.includes("left") ? 1 : 0,
                borderRightWidth: pos.includes("right") ? 1 : 0,
              }}
            />
          ),
        )}
      </div>

      {/* Meta labels */}
      <div className="absolute -bottom-2 left-0 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
        system.overview
      </div>
      <div className="absolute -top-2 right-0 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
        v1.0
      </div>
    </div>
  );
}
