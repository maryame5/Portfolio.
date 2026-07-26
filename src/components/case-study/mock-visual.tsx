import type { MockKind } from "@/content/case-studies";

/**
 * Abstract, token-driven product mockups.
 * Stand-ins for real screenshots — geometric, quiet, never decorative noise.
 */
export function MockVisual({
  kind,
  label,
  className = "",
}: {
  kind: MockKind;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-xl border border-border bg-surface ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="h-2 w-2 rounded-full bg-border-strong" />
        <span className="ml-2 font-mono text-[10px] text-subtle">{label}</span>
      </div>
      <div className="p-4">
        <Body kind={kind} />
      </div>
    </div>
  );
}

const bar = "rounded-sm bg-foreground/8";
const barAccent = "rounded-sm bg-accent/25";

function Body({ kind }: { kind: MockKind }) {
  switch (kind) {
    case "dashboard":
      return (
        <div className="grid gap-3">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-border bg-canvas p-3">
                <div className={`h-1.5 w-10 ${bar}`} />
                <div className={`mt-2 h-3 w-14 ${i === 0 ? barAccent : bar}`} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 rounded-lg border border-border bg-canvas p-3">
              <Spark />
            </div>
            <div className="space-y-2 rounded-lg border border-border bg-canvas p-3">
              {[16, 12, 14, 9, 13].map((w, i) => (
                <div key={i} className={`h-1.5 ${bar}`} style={{ width: `${w * 5}%` }} />
              ))}
            </div>
          </div>
        </div>
      );
    case "chart":
      return (
        <div className="rounded-lg border border-border bg-canvas p-4">
          <Spark tall />
        </div>
      );
    case "table":
      return (
        <div className="overflow-hidden rounded-lg border border-border bg-canvas">
          {Array.from({ length: 6 }).map((_, r) => (
            <div
              key={r}
              className="grid grid-cols-5 items-center gap-3 border-b border-border px-3 py-2.5 last:border-b-0"
            >
              {Array.from({ length: 5 }).map((__, c) => (
                <div
                  key={c}
                  className={`h-1.5 ${r === 0 || (c === 4 && r % 3 === 1) ? barAccent : bar}`}
                  style={{ width: `${45 + ((r * 7 + c * 13) % 50)}%` }}
                />
              ))}
            </div>
          ))}
        </div>
      );
    case "form":
      return (
        <div className="grid gap-3 rounded-lg border border-border bg-canvas p-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1.5">
              <div className={`h-1.5 w-16 ${bar}`} />
              <div className="h-7 rounded-md border border-border bg-surface" />
            </div>
          ))}
          <div className="flex justify-end gap-2 pt-1">
            <div className="h-7 w-16 rounded-md border border-border" />
            <div className="h-7 w-20 rounded-md bg-accent/70" />
          </div>
        </div>
      );
    case "mobile":
      return (
        <div className="flex justify-center py-2">
          <div className="w-[42%] rounded-2xl border border-border bg-canvas p-3">
            <div className={`mx-auto h-1 w-8 ${bar}`} />
            <div className="mt-3 space-y-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="rounded-md border border-border p-2">
                  <div className={`h-1.5 w-2/3 ${i === 1 ? barAccent : bar}`} />
                  <div className={`mt-1.5 h-1.5 w-1/3 ${bar}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case "console":
      return (
        <div className="space-y-2 rounded-lg border border-border bg-canvas p-4 font-mono">
          {[
            "plan → decompose(question)",
            "checkpoint → awaiting confirmation",
            "retrieve → semantic_query(3)",
            "quality → coverage 98.2%",
            "narrate → 4 claims · 12 citations",
          ].map((line, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[10px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={`text-[10px] ${i === 1 ? "text-accent" : "text-muted-foreground"}`}
              >
                {line}
              </span>
            </div>
          ))}
        </div>
      );
    case "architecture":
    default:
      return (
        <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden>
          <defs>
            <pattern id="mockgrid" width="16" height="16" patternUnits="userSpaceOnUse">
              <path
                d="M 16 0 L 0 0 0 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.4"
                className="text-foreground/10"
              />
            </pattern>
          </defs>
          <rect width="320" height="180" fill="url(#mockgrid)" />
          <g
            stroke="currentColor"
            className="text-foreground/25"
            strokeWidth="1"
            fill="none"
          >
            <path d="M70 46 H160 V90" />
            <path d="M160 90 H250" />
            <path d="M160 90 V134 H70" />
            <path d="M160 134 H250" />
          </g>
          {[
            [30, 32, "UI"],
            [130, 76, "CORE"],
            [220, 76, "DATA"],
            [30, 120, "AUTH"],
            [220, 120, "QUEUE"],
          ].map(([x, y, t]) => (
            <g key={t as string}>
              <rect
                x={x as number}
                y={y as number}
                width="72"
                height="28"
                rx="5"
                className="fill-canvas stroke-current text-foreground/25"
                strokeWidth="1"
              />
              <text
                x={(x as number) + 36}
                y={(y as number) + 18}
                textAnchor="middle"
                className="fill-current text-[9px] text-subtle"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t}
              </text>
            </g>
          ))}
          <circle cx="166" cy="90" r="3.5" className="fill-accent" />
        </svg>
      );
  }
}

function Spark({ tall = false }: { tall?: boolean }) {
  const values = [22, 38, 30, 52, 44, 66, 58, 78, 70, 92];
  return (
    <div className={`flex items-end gap-1.5 ${tall ? "h-28" : "h-16"}`}>
      {values.map((v, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t-sm ${i === values.length - 1 ? "bg-accent/60" : "bg-foreground/10"}`}
          style={{ height: `${v}%` }}
        />
      ))}
    </div>
  );
}
