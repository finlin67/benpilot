export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  hint: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "auto-start",
    question: "What key do you press FIRST to start the plane automatically?",
    options: ["Ctrl+E", "Alt+B", "Ctrl+Space", "P"],
    correctIndex: 0,
    hint: "It's the Auto-Start shortcut — like flipping every switch at once!",
  },
  {
    id: "taxi-ribbon",
    question: "What key turns on the green Taxi Ribbon on the ground?",
    options: ["Alt+3", "V", "Shift+B", "Tab"],
    correctIndex: 0,
    hint: "This shows you a green line so you know exactly where to taxi!",
  },
  {
    id: "brakes",
    question: "Which key do you HOLD to use the brakes?",
    options: ["Space", ".", "Ctrl+Space", "/"],
    correctIndex: 0,
    hint: "In MSFS 2024, brakes moved to a big easy key you hold down.",
  },
  {
    id: "parking-brake",
    question: "What key toggles the parking brake on and off?",
    options: ["Ctrl+Space", "Space", "Ctrl+.", "Alt+P"],
    correctIndex: 0,
    hint: "It's like brakes, but with Ctrl added — keeps the plane parked.",
  },
  {
    id: "gear",
    question: "What key puts the landing gear UP or DOWN?",
    options: ["/", "G", "Space", "Shift+B"],
    correctIndex: 0,
    hint: "In MSFS 2024, gear is NOT the G key anymore!",
  },
  {
    id: "throttle-up",
    question: "What keyboard key increases the throttle?",
    options: ["R", "F3", "F", "Space"],
    correctIndex: 0,
    hint: "Think R for 'Rev up' — the throttle keyboard key changed in 2024.",
  },
  {
    id: "throttle-down",
    question: "What keyboard key decreases the throttle?",
    options: ["F", "F2", "R", "Space"],
    correctIndex: 0,
    hint: "F helps you ease off the power.",
  },
  {
    id: "pushback",
    question: "What key starts pushback from the gate?",
    options: ["Alt+P", "Shift+P", "Ctrl+P", "Tab"],
    correctIndex: 0,
    hint: "A truck pushes your plane back — Alt+P in MSFS 2024.",
  },
  {
    id: "camera-toggle",
    question: "What key switches between cockpit and outside camera?",
    options: ["Backspace", "End", "Insert", "V"],
    correctIndex: 0,
    hint: "In MSFS 2024, this changed from the End key.",
  },
  {
    id: "reset-view",
    question: "What key resets your cockpit view back to normal?",
    options: ["Shift+Space", "Ctrl+Space", "Backspace", "Shift+B"],
    correctIndex: 0,
    hint: "Use this if you looked around and got lost!",
  },
  {
    id: "active-pause",
    question: "What key freezes the plane so you can take a break?",
    options: ["P", "Space", "Tab", "Z"],
    correctIndex: 0,
    hint: "Active Pause — press it again to unpause and keep flying.",
  },
  {
    id: "back-on-track",
    question: "You got lost on the taxiway! What key helps you get back on track?",
    options: ["Shift+B", "Alt+3", "Backspace", "Ctrl+Space"],
    correctIndex: 0,
    hint: "This MSFS 2024 feature teleports you back to the right spot.",
  },
  {
    id: "left-brake",
    question: "What numpad key is the LEFT brake?",
    options: ["Num /", "Num *", "Num Enter", "Num 0"],
    correctIndex: 0,
    hint: "Left brake helps you turn tight on the ground.",
  },
  {
    id: "right-brake",
    question: "What numpad key is the RIGHT brake?",
    options: ["Num *", "Num /", "Num Enter", "Num 0"],
    correctIndex: 0,
    hint: "Right brake is on the numpad multiply key.",
  },
  {
    id: "look-left",
    question: "What key snaps your view to look LEFT?",
    options: ["Shift+J", "Shift+L", "Shift+I", "Ctrl+Left"],
    correctIndex: 0,
    hint: "J is on the left side of the keyboard — like looking left!",
  },
  {
    id: "efb",
    question: "What key opens the EFB tablet in the cockpit?",
    options: ["Tab", "V", "Alt+3", "Insert"],
    correctIndex: 0,
    hint: "The EFB is like a tablet with maps and airport info.",
  },
];
