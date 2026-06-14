import type { BindingMap } from "./types";

/** MSFS 2024 suggested defaults — editable by the user in /bindings */
export const defaultBindings: BindingMap = {
  "auto-start": {
    label: "Ctrl+E",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "master-battery": {
    label: "Alt+B",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "parking-brake": {
    label: "Ctrl+.",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "throttle-idle": {
    label: "Lever all the way back",
    device: "THROTTLE",
    inputType: "axis",
  },
  "move-forward": {
    label: "Throttle forward",
    alternate: "F3",
    device: "THROTTLE",
    inputType: "axis",
  },
  "slow-down": {
    label: "Throttle back",
    alternate: "F2",
    device: "THROTTLE",
    inputType: "axis",
  },
  brakes: {
    label: ".",
    device: "KEYBOARD",
    inputType: "key",
  },
  "steer-ground": {
    label: "Twist joystick",
    device: "JOYSTICK",
    inputType: "axis",
  },
  pushback: {
    label: "Shift+P",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "full-throttle": {
    label: "Lever all the way forward",
    device: "THROTTLE",
    inputType: "axis",
  },
  rotate: {
    label: "Pull stick back at 130–150 kts",
    device: "JOYSTICK",
    inputType: "axis",
  },
  "wings-level": {
    label: "Tilt stick left or right",
    device: "JOYSTICK",
    inputType: "axis",
  },
  "gear-toggle": {
    label: "G",
    device: "KEYBOARD",
    inputType: "key",
  },
  "flaps-up": {
    label: "F6",
    alternate: "F5",
    device: "KEYBOARD",
    inputType: "key",
  },
  "flaps-down": {
    label: "F7",
    alternate: "F8",
    device: "KEYBOARD",
    inputType: "key",
  },
  pitch: {
    label: "Push or pull stick",
    device: "JOYSTICK",
    inputType: "axis",
  },
  bank: {
    label: "Tilt stick left or right",
    device: "JOYSTICK",
    inputType: "axis",
  },
  rudder: {
    label: "Twist joystick",
    alternate: "Num 0 / Num Enter",
    device: "JOYSTICK",
    inputType: "axis",
  },
  "throttle-adjust": {
    label: "Move throttle lever",
    alternate: "F2 / F3",
    device: "THROTTLE",
    inputType: "axis",
  },
  autopilot: {
    label: "Z",
    device: "KEYBOARD",
    inputType: "key",
  },
  "show-map": {
    label: "V",
    device: "KEYBOARD",
    inputType: "key",
  },
  "reduce-throttle": {
    label: "Lever to about 30%",
    device: "THROTTLE",
    inputType: "axis",
  },
  flare: {
    label: "Gentle pull back on stick",
    device: "JOYSTICK",
    inputType: "axis",
  },
  spoilers: {
    label: "/",
    device: "KEYBOARD",
    inputType: "key",
  },
  "leave-runway": {
    label: "Throttle 5–10%",
    alternate: "Twist joystick to steer",
    device: "THROTTLE",
    inputType: "axis",
  },
  "follow-taxi-line": {
    label: "Steer gently",
    device: "JOYSTICK",
    inputType: "axis",
  },
  "outside-camera": {
    label: "End",
    device: "KEYBOARD",
    inputType: "key",
  },
  "taxi-speed": {
    label: "Keep at 10–15 knots",
    device: "THROTTLE",
    inputType: "axis",
  },
  "cockpit-toggle": {
    label: "End",
    device: "KEYBOARD",
    inputType: "key",
  },
  "look-around": {
    label: "Right-click + drag",
    device: "MOUSE",
    inputType: "mouse",
  },
  "quick-look": {
    label: "Ctrl+Arrow Keys",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "drone-camera": {
    label: "Insert",
    device: "KEYBOARD",
    inputType: "key",
  },
  "zoom-in": {
    label: "=",
    device: "KEYBOARD",
    inputType: "key",
  },
  "zoom-out": {
    label: "-",
    device: "KEYBOARD",
    inputType: "key",
  },
  "reset-view": {
    label: "Ctrl+Space",
    device: "KEYBOARD",
    inputType: "combo",
  },
};

export const STORAGE_KEY = "pilotben-msfs2024-bindings";
