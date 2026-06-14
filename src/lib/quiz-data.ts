import type { FlightPhase } from "@/components/PhaseBadge";

export type QuizDifficulty = "cadet" | "pilot" | "captain";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  phase: FlightPhase;
  difficulty: QuizDifficulty;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "auto-start",
    question: "What key starts the engine automatically?",
    options: ["Ctrl+E", "G", "Z", "Alt+B"],
    correctIndex: 0,
    explanation: "Ctrl+E auto-starts the engine — like flipping every switch at once!",
    phase: "startup",
    difficulty: "cadet",
  },
  {
    id: "landing-gear",
    question: "How do you lower the landing gear?",
    options: ["/ (slash key)", "G key", "F8", "End"],
    correctIndex: 0,
    explanation: "Press / to put the landing gear up or down in MSFS 2024!",
    phase: "landing",
    difficulty: "cadet",
  },
  {
    id: "ground-steer",
    question: "Which control steers the plane on the ground?",
    options: ["Joystick twist", "Joystick tilt", "Throttle", "End key"],
    correctIndex: 0,
    explanation: "Twist the joystick left or right to steer with the nose wheel on the ground.",
    phase: "taxi",
    difficulty: "cadet",
  },
  {
    id: "brakes",
    question: "Which key do you HOLD to use the brakes?",
    options: ["Space", ". (period)", "Ctrl+Space", "/"],
    correctIndex: 0,
    explanation: "Hold Space to apply the brakes — like a car brake pedal!",
    phase: "taxi",
    difficulty: "cadet",
  },
  {
    id: "efb-tablet",
    question: "What key opens the EFB cockpit tablet?",
    options: ["Tab", "V", "M", "B"],
    correctIndex: 0,
    explanation: "Press Tab to open the EFB tablet with maps and airport info.",
    phase: "flight",
    difficulty: "cadet",
  },
  {
    id: "takeoff-pull",
    question: "To take off, when do you pull back on the stick?",
    options: ["At 130-150 knots", "Right away", "After gear up", "At 200 knots"],
    correctIndex: 0,
    explanation: "Wait until you're going 130-150 knots, then gently pull back to lift off!",
    phase: "takeoff",
    difficulty: "cadet",
  },
  {
    id: "camera-toggle",
    question: "What key switches between cockpit and outside view?",
    options: ["Backspace", "End", "Insert", "Delete"],
    correctIndex: 0,
    explanation: "Backspace switches between inside the cockpit and outside views.",
    phase: "camera",
    difficulty: "cadet",
  },
  {
    id: "drone-camera",
    question: "How do you enter drone camera mode?",
    options: ["Shift+X", "Insert", "Home", "End"],
    correctIndex: 0,
    explanation: "Shift+X puts you in drone camera mode to look at your plane from anywhere.",
    phase: "camera",
    difficulty: "captain",
  },
  {
    id: "pushback",
    question: "What is Alt+P used for?",
    options: ["Pushback from gate", "Parking brake", "Pause", "Propeller"],
    correctIndex: 0,
    explanation: "Alt+P starts pushback — a truck pushes your plane away from the gate.",
    phase: "startup",
    difficulty: "pilot",
  },
  {
    id: "autopilot",
    question: "What key turns on autopilot?",
    options: ["Ctrl+1", "Z", "A", "P"],
    correctIndex: 0,
    explanation: "Ctrl+1 toggles autopilot master so the plane can fly itself for a while.",
    phase: "flight",
    difficulty: "pilot",
  },
  {
    id: "flaps-up",
    question: "What key increases flaps one notch?",
    options: ["B", "V", "F7", "F8"],
    correctIndex: 0,
    explanation: "B extends the flaps one notch — flaps help you fly slower for landing.",
    phase: "landing",
    difficulty: "captain",
  },
  {
    id: "taxi-speed",
    question: "How fast should you taxi on the ground?",
    options: ["10-15 knots", "50 knots", "100 knots", "As fast as possible"],
    correctIndex: 0,
    explanation: "Taxi slowly at 10-15 knots — like walking speed for a giant plane!",
    phase: "taxi",
    difficulty: "cadet",
  },
  {
    id: "ctrl-e",
    question: "What does Ctrl+E do?",
    options: ["Auto-starts the engine", "Ejects", "Extends gear", "Opens exit"],
    correctIndex: 0,
    explanation: "Ctrl+E auto-starts the engine — no need to flip switches one by one.",
    phase: "startup",
    difficulty: "pilot",
  },
  {
    id: "mouse-look",
    question: "To look around the cockpit with a mouse, you...",
    options: ["Right-click and drag", "Left-click and drag", "Scroll wheel", "Middle-click"],
    correctIndex: 0,
    explanation: "Right-click and drag to look around inside the cockpit.",
    phase: "camera",
    difficulty: "pilot",
  },
  {
    id: "spoilers",
    question: "What key arms the spoilers?",
    options: ["Ctrl+\\", "/ (slash)", "S", "Space"],
    correctIndex: 0,
    explanation: "Ctrl+\\ arms spoilers — they pop up on landing to slow you down.",
    phase: "landing",
    difficulty: "captain",
  },
  {
    id: "after-landing",
    question: "After landing, what should you do FIRST?",
    options: ["Pull throttle to idle", "Open door", "Retract gear", "Turn autopilot on"],
    correctIndex: 0,
    explanation: "First pull the throttle to idle to slow the engines after touchdown.",
    phase: "landing",
    difficulty: "pilot",
  },
  {
    id: "reset-view",
    question: "What key resets your cockpit view to forward?",
    options: ["Shift+Space", "Ctrl+Space", "Backspace", "P"],
    correctIndex: 0,
    explanation: "Shift+Space resets your cockpit view back to looking straight ahead.",
    phase: "camera",
    difficulty: "captain",
  },
  {
    id: "zoom-instruments",
    question: "How do you zoom into cockpit instruments?",
    options: ["Shift+O", "= key", "Z key", "Ctrl+Z"],
    correctIndex: 0,
    explanation: "Shift+O zooms in on the cockpit view for a closer look at instruments.",
    phase: "camera",
    difficulty: "captain",
  },
  {
    id: "centerline",
    question: "The yellow line on the taxiway is called the...",
    options: ["Centerline", "Finish line", "Warning line", "Speed line"],
    correctIndex: 0,
    explanation: "The centerline is the yellow guide line — follow it to stay on the taxiway!",
    phase: "taxi",
    difficulty: "cadet",
  },
  {
    id: "joystick-back",
    question: "What does pulling the joystick BACK do in the air?",
    options: ["Nose goes up / climbs", "Nose goes down", "Turns left", "Lands the plane"],
    correctIndex: 0,
    explanation: "Pulling back on the stick makes the nose go up and the plane climbs!",
    phase: "flight",
    difficulty: "cadet",
  },
];

const QUESTIONS_PER_ROUND = 10;

function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getQuestionsForDifficulty(difficulty: QuizDifficulty): QuizQuestion[] {
  const pool =
    difficulty === "cadet"
      ? quizQuestions.filter((q) => q.difficulty === "cadet")
      : difficulty === "pilot"
        ? quizQuestions.filter((q) => q.difficulty !== "captain")
        : quizQuestions;

  return shuffle(pool).slice(0, QUESTIONS_PER_ROUND);
}

export function getRank(score: number, total: number): { title: string; subtitle: string } {
  if (score === total) {
    return { title: "Ace Pilot", subtitle: "PERFECT SCORE!" };
  }
  if (score >= 8) {
    return { title: "Captain", subtitle: "Excellent work!" };
  }
  if (score >= 5) {
    return { title: "First Officer", subtitle: "Great job!" };
  }
  return { title: "Student Pilot", subtitle: "Keep practicing!" };
}
