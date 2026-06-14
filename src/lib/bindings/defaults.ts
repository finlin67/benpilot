import type { BindingMap } from "./types";

/** MSFS 2024 suggested defaults — editable by the user in /bindings */
export const defaultBindings: BindingMap = {
  "auto-start": {
    label: "Ctrl+E",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "master-battery": {
    label: "Ctrl+Z",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "parking-brake": {
    label: "Ctrl+Space",
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
    alternate: "R",
    device: "THROTTLE",
    inputType: "axis",
  },
  "slow-down": {
    label: "Throttle back",
    alternate: "F",
    device: "THROTTLE",
    inputType: "axis",
  },
  brakes: {
    label: "Space",
    device: "KEYBOARD",
    inputType: "key",
  },
  "steer-ground": {
    label: "Twist joystick",
    device: "JOYSTICK",
    inputType: "axis",
  },
  pushback: {
    label: "Alt+P",
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
    label: "/",
    device: "KEYBOARD",
    inputType: "key",
  },
  "flaps-up": {
    label: "V",
    alternate: "Ctrl+V",
    device: "KEYBOARD",
    inputType: "key",
  },
  "flaps-down": {
    label: "B",
    alternate: "Ctrl+B",
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
    alternate: "F / R",
    device: "THROTTLE",
    inputType: "axis",
  },
  autopilot: {
    label: "Ctrl+1",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "show-map": {
    label: "Tab",
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
    label: "Ctrl+\\",
    device: "KEYBOARD",
    inputType: "combo",
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
    label: "Backspace",
    device: "KEYBOARD",
    inputType: "key",
  },
  "taxi-speed": {
    label: "Keep at 10–15 knots",
    device: "THROTTLE",
    inputType: "axis",
  },
  "cockpit-toggle": {
    label: "Backspace",
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
    label: "Shift+X",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "zoom-in": {
    label: "Shift+O",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "zoom-out": {
    label: "Shift+U",
    device: "KEYBOARD",
    inputType: "combo",
  },
  "reset-view": {
    label: "Shift+Space",
    device: "KEYBOARD",
    inputType: "combo",
  },
};

export const STORAGE_KEY = "pilotben-msfs2024-bindings";
