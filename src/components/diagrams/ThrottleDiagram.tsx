import { DiagramCallout } from "./DiagramCallout";

export function ThrottleDiagram() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="h-auto w-full max-w-2xl"
      role="img"
      aria-label="Logitech Throttle Quadrant diagram with labeled levers"
    >
      <defs>
        <linearGradient id="throttlePanel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="leverMain" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="zoneCruise" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      <rect width="520" height="420" fill="#0a0f1e" rx="16" />

      <text
        x="260"
        y="32"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="700"
        fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
      >
        Logitech Throttle Quadrant
      </text>
      <text
        x="260"
        y="52"
        textAnchor="middle"
        fill="#38bdf8"
        fontSize="11"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        Front view — stylized illustration
      </text>

      {/* Main panel */}
      <rect
        x="80"
        y="70"
        width="360"
        height="300"
        rx="14"
        fill="url(#throttlePanel)"
        stroke="#1e3a5f"
        strokeWidth="2"
      />

      {/* Lever slots background */}
      <rect x="120" y="95" width="50" height="250" rx="6" fill="#0a0f1e" stroke="#2d4a6f" strokeWidth="1.5" />
      <rect x="235" y="95" width="50" height="250" rx="6" fill="#0a0f1e" stroke="#2d4a6f" strokeWidth="1.5" />
      <rect x="350" y="95" width="50" height="250" rx="6" fill="#0a0f1e" stroke="#2d4a6f" strokeWidth="1.5" />

      {/* Zone labels on main lever track */}
      <rect x="238" y="95" width="44" height="70" fill="url(#zoneCruise)" rx="4" opacity="0.5" />
      <rect x="238" y="245" width="44" height="55" fill="#fbbf24" opacity="0.08" rx="4" />

      <text x="210" y="118" fill="#64748b" fontSize="9" fontWeight="600" textAnchor="end">
        FULL POWER
      </text>
      <text x="210" y="195" fill="#38bdf8" fontSize="9" fontWeight="600" textAnchor="end">
        CRUISE
      </text>
      <text x="210" y="285" fill="#fbbf24" fontSize="9" fontWeight="700" textAnchor="end">
        LOW IDLE
      </text>

      {/* Zone tick marks */}
      <line x1="235" y1="110" x2="228" y2="110" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
      <line x1="235" y1="195" x2="228" y2="195" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
      <line x1="235" y1="280" x2="228" y2="280" stroke="#fbbf24" strokeWidth="1" opacity="0.5" />

      {/* Main throttle lever (center, mid-high position) */}
      <rect x="242" y="130" width="36" height="22" rx="4" fill="url(#leverMain)" stroke="#fbbf24" strokeWidth="2.5" />
      <rect x="254" y="108" width="12" height="165" rx="3" fill="#475569" stroke="#64748b" strokeWidth="1" />

      {/* Up arrow on main lever */}
      <path
        d="M 260 125 L 255 135 L 265 135 Z"
        fill="#fbbf24"
      />
      <path
        d="M 260 285 L 255 275 L 265 275 Z"
        fill="#38bdf8"
        opacity="0.7"
      />

      {/* Left auxiliary lever (lower) */}
      <rect x="127" y="220" width="36" height="18" rx="4" fill="url(#leverMain)" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x="139" y="200" width="12" height="100" rx="3" fill="#475569" stroke="#64748b" strokeWidth="1" />

      {/* Right auxiliary lever (mid) */}
      <rect x="362" y="175" width="36" height="18" rx="4" fill="url(#leverMain)" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x="374" y="155" width="12" height="120" rx="3" fill="#475569" stroke="#64748b" strokeWidth="1" />

      {/* Lever labels under slots */}
      <text x="145" y="365" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">
        MIXTURE
      </text>
      <text x="260" y="365" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700">
        THROTTLE
      </text>
      <text x="375" y="365" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600">
        FLAPS
      </text>

      <DiagramCallout
        x1={260}
        y1={141}
        x2={400}
        y2={120}
        labelX={310}
        labelY={115}
        label="Push forward = more power, pull back = less"
        highlight
        width={195}
      />
      <DiagramCallout
        x1={228}
        y1={195}
        x2={60}
        y2={195}
        labelX={10}
        labelY={190}
        label="CRUISE in middle"
        width={150}
      />
      <DiagramCallout
        x1={228}
        y1={110}
        x2={60}
        y2={110}
        labelX={10}
        labelY={105}
        label="FULL POWER at top"
        width={150}
      />
      <DiagramCallout
        x1={228}
        y1={280}
        x2={60}
        y2={280}
        labelX={10}
        labelY={275}
        label="LOW IDLE at bottom"
        highlight
        width={150}
      />
      <DiagramCallout
        x1={145}
        y1={229}
        x2={30}
        y2={240}
        labelX={10}
        labelY={250}
        label="Can be set to flaps or mixture"
        width={185}
      />
      <DiagramCallout
        x1={380}
        y1={184}
        x2={430}
        y2={220}
        labelX={340}
        labelY={235}
        label="Extra levers — remap in MSFS"
        width={170}
      />
    </svg>
  );
}
