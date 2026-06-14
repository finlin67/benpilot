interface DiagramCalloutProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  labelX: number;
  labelY: number;
  label: string;
  highlight?: boolean;
  width?: number;
}

export function DiagramCallout({
  x1,
  y1,
  x2,
  y2,
  labelX,
  labelY,
  label,
  highlight = false,
  width = 200,
}: DiagramCalloutProps) {
  const lines = wrapLabel(label, 28);
  const lineHeight = 14;
  const boxHeight = lines.length * lineHeight + 12;
  const boxWidth = width;

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={highlight ? "#fbbf24" : "#38bdf8"}
        strokeWidth={highlight ? 2 : 1.5}
        strokeDasharray={highlight ? undefined : "4 3"}
        opacity={0.9}
      />
      <circle
        cx={x1}
        cy={y1}
        r={highlight ? 5 : 4}
        fill={highlight ? "#fbbf24" : "#38bdf8"}
      />
      <rect
        x={labelX}
        y={labelY - boxHeight / 2}
        width={boxWidth}
        height={boxHeight}
        rx={8}
        fill="#111827"
        stroke={highlight ? "#fbbf24" : "#1e3a5f"}
        strokeWidth={1.5}
        opacity={0.95}
      />
      {lines.map((line, index) => (
        <text
          key={line}
          x={labelX + 10}
          y={labelY - boxHeight / 2 + 18 + index * lineHeight}
          fill={highlight ? "#fbbf24" : "#38bdf8"}
          fontSize={11}
          fontWeight={highlight ? 700 : 600}
          fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function wrapLabel(text: string, maxChars: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines.length > 0 ? lines : [text];
}
