import { DiagramCallout } from "./DiagramCallout";

export function JoystickDiagram() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="h-auto w-full max-w-2xl"
      role="img"
      aria-label="Thrustmaster TCA Sidestick Airbus X Edition diagram with labeled controls"
    >
      <defs>
        <linearGradient id="stickBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="stickGrip" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d4a6f" />
          <stop offset="100%" stopColor="#1a2332" />
        </linearGradient>
        <linearGradient id="stickBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
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
        Thrustmaster TCA Sidestick Airbus X Edition
      </text>
      <text
        x="260"
        y="52"
        textAnchor="middle"
        fill="#38bdf8"
        fontSize="11"
        fontFamily="var(--font-inter), system-ui, sans-serif"
      >
        Side view — stylized illustration
      </text>

      {/* Desk surface */}
      <rect x="40" y="340" width="440" height="8" rx="2" fill="#1e3a5f" opacity="0.6" />
      <text x="260" y="375" textAnchor="middle" fill="#64748b" fontSize="10">
        DESK
      </text>

      {/* Base */}
      <ellipse cx="260" cy="328" rx="110" ry="18" fill="url(#stickBase)" stroke="#2d4a6f" strokeWidth="2" />
      <rect x="150" y="300" width="220" height="28" rx="6" fill="url(#stickBase)" stroke="#2d4a6f" strokeWidth="2" />

      {/* Twist axis indicator */}
      <path
        d="M 200 318 A 60 12 0 1 1 320 318"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      <polygon points="318,314 328,318 318,322" fill="#fbbf24" />

      {/* Stick shaft */}
      <rect
        x="248"
        y="140"
        width="24"
        height="175"
        rx="8"
        fill="url(#stickBody)"
        stroke="#38bdf8"
        strokeWidth="1.5"
        transform="rotate(-8 260 200)"
      />

      {/* Grip body */}
      <path
        d="M 228 95 Q 220 130 225 175 Q 230 195 248 200 L 272 200 Q 290 195 295 175 Q 300 130 292 95 Q 285 70 260 68 Q 235 70 228 95 Z"
        fill="url(#stickGrip)"
        stroke="#38bdf8"
        strokeWidth="1.5"
      />

      {/* Main trigger (front of grip, side view) */}
      <rect x="218" y="155" width="14" height="36" rx="4" fill="#1e3a5f" stroke="#fbbf24" strokeWidth="2" />

      {/* Hat switch */}
      <rect x="252" y="78" width="16" height="16" rx="3" fill="#1a2332" stroke="#38bdf8" strokeWidth="1.5" />
      <line x1="260" y1="82" x2="260" y2="90" stroke="#38bdf8" strokeWidth="1" />
      <line x1="256" y1="86" x2="264" y2="86" stroke="#38bdf8" strokeWidth="1" />

      {/* Button cluster (front face dots) */}
      <circle cx="238" cy="120" r="5" fill="#38bdf8" opacity="0.8" />
      <circle cx="252" cy="115" r="5" fill="#38bdf8" opacity="0.8" />
      <circle cx="268" cy="120" r="5" fill="#38bdf8" opacity="0.8" />
      <circle cx="252" cy="130" r="5" fill="#38bdf8" opacity="0.8" />
      <text x="252" y="148" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="600">
        A B X Y
      </text>

      {/* Thumb button */}
      <ellipse cx="278" cy="168" rx="8" ry="6" fill="#1e3a5f" stroke="#38bdf8" strokeWidth="1.5" />

      {/* Tilt arrows on stick */}
      <path
        d="M 210 200 L 195 200 M 202 193 L 195 200 L 202 207"
        stroke="#fbbf24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 310 200 L 325 200 M 318 193 L 325 200 L 318 207"
        stroke="#fbbf24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="260" y="225" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="700">
        TILT
      </text>

      <DiagramCallout
        x1={260}
        y1={175}
        x2={120}
        y2={160}
        labelX={10}
        labelY={155}
        label="Tilt LEFT/RIGHT to bank and turn"
        highlight
        width={185}
      />
      <DiagramCallout
        x1={225}
        y1={173}
        x2={80}
        y2={100}
        labelX={10}
        labelY={95}
        label="Main trigger button — default: brakes"
        width={185}
      />
      <DiagramCallout
        x1={280}
        y1={318}
        x2={400}
        y2={300}
        labelX={310}
        labelY={285}
        label="TWIST to steer on the ground / rudder"
        highlight
        width={195}
      />
      <DiagramCallout
        x1={252}
        y1={125}
        x2={400}
        y2={90}
        labelX={310}
        labelY={85}
        label="A, B, X, Y — remappable actions"
        width={195}
      />
      <DiagramCallout
        x1={260}
        y1={86}
        x2={400}
        y2={55}
        labelX={310}
        labelY={50}
        label="Look around / view control"
        width={195}
      />
      <DiagramCallout
        x1={278}
        y1={168}
        x2={420}
        y2={155}
        labelX={330}
        labelY={150}
        label="PTT / view change"
        width={175}
      />
      <DiagramCallout
        x1={260}
        y1={328}
        x2={120}
        y2={360}
        labelX={10}
        labelY={355}
        label="Sits flat on the desk"
        width={175}
      />
    </svg>
  );
}
