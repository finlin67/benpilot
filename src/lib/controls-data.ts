import type { FlightPhase } from "@/components/PhaseBadge";

export type HardwareSource = "KEYBOARD" | "JOYSTICK" | "THROTTLE" | "MOUSE";

export type ControlIconName =
  | "zap"
  | "battery"
  | "circle-parking"
  | "gauge"
  | "arrow-up"
  | "arrow-down"
  | "octagon"
  | "rotate-cw"
  | "plane"
  | "arrow-up-from-line"
  | "move-horizontal"
  | "cog"
  | "layers"
  | "map"
  | "chevrons-down"
  | "chevrons-up"
  | "wind"
  | "mouse-pointer"
  | "eye"
  | "camera"
  | "zoom-in"
  | "refresh-cw"
  | "signpost"
  | "building"
  | "route"
  | "tablet";

export type ControlInput =
  | { type: "key"; label: string }
  | { type: "text"; label: string };

export interface ControlItem {
  id: string;
  action: string;
  icon: ControlIconName;
  source: HardwareSource;
  inputs: ControlInput[];
  inputJoiner?: "or" | "then" | "and";
  description: string;
  mustKnow?: boolean;
}

export interface PhaseControls {
  id: FlightPhase;
  label: string;
  tricky?: boolean;
  controls: ControlItem[];
  tip: string;
}

const ACTIVE_PAUSE_TIP =
  "Active Pause: press P to freeze the plane so you can take a break or look something up. Press P again to unpause.";

export const controlsPhases: PhaseControls[] = [
  {
    id: "startup",
    label: "Start Up",
    controls: [
      {
        id: "auto-start",
        action: "Auto-Start",
        icon: "zap",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Ctrl+E" }],
        description:
          "Press this first! Starts everything automatically — like magic!",
      },
      {
        id: "master-battery",
        action: "Master Battery",
        icon: "battery",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Alt+B" }],
        description: "Turns on the plane's electrical power.",
      },
      {
        id: "parking-brake",
        action: "Parking Brake",
        icon: "circle-parking",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Ctrl+Space" }],
        description: "Keeps the plane still while you're on the ground.",
      },
      {
        id: "throttle-idle",
        action: "Throttle to Idle",
        icon: "gauge",
        source: "THROTTLE",
        inputs: [{ type: "text", label: "Lever all the way back" }],
        description: "Make sure the engines aren't pushing you forward yet.",
      },
    ],
    tip: `Always do Auto-Start first — it's like flipping all the switches at once! ${ACTIVE_PAUSE_TIP}`,
  },
  {
    id: "taxi",
    label: "Taxi to Runway",
    controls: [
      {
        id: "taxi-ribbon",
        action: "Toggle Taxi Ribbon",
        icon: "route",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Alt+3" }],
        mustKnow: true,
        description:
          "Turns on a GREEN LINE on the ground showing you exactly where to taxi! Turn this on before every flight.",
      },
      {
        id: "move-forward",
        action: "Move Forward",
        icon: "arrow-up",
        source: "THROTTLE",
        inputs: [
          { type: "text", label: "Throttle forward" },
          { type: "key", label: "R" },
        ],
        inputJoiner: "or",
        description: "Roll slowly toward the runway — no rush!",
      },
      {
        id: "slow-down",
        action: "Slow Down",
        icon: "arrow-down",
        source: "THROTTLE",
        inputs: [
          { type: "text", label: "Throttle back" },
          { type: "key", label: "F" },
        ],
        inputJoiner: "or",
        description: "Ease off the gas when you need to go slower.",
      },
      {
        id: "brakes",
        action: "Brakes",
        icon: "octagon",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Space" }],
        description: "Hold this key to brake — like a car brake pedal.",
      },
      {
        id: "left-brake",
        action: "Left Brake",
        icon: "octagon",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Num /" }],
        description: "Press to brake the left wheels only — helps you turn tight.",
      },
      {
        id: "right-brake",
        action: "Right Brake",
        icon: "octagon",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Num *" }],
        description: "Press to brake the right wheels only — helps you turn tight.",
      },
      {
        id: "steer",
        action: "Steer Left / Right",
        icon: "rotate-cw",
        source: "JOYSTICK",
        inputs: [{ type: "text", label: "Twist the joystick" }],
        description: "Twist the stick left or right to steer on the ground.",
      },
      {
        id: "parking-brake-taxi",
        action: "Parking Brake",
        icon: "circle-parking",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Ctrl+Space" }],
        description: "Turn the parking brake on or off when you need to stop.",
      },
      {
        id: "pushback",
        action: "Pushback from Gate",
        icon: "plane",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Alt+P" }],
        description: "Gets a truck to push your plane away from the gate.",
      },
    ],
    tip: `Turn on the Taxi Ribbon (Alt+3) first so you can see where to go! Go slow on the ground — airplanes aren't race cars. ${ACTIVE_PAUSE_TIP}`,
  },
  {
    id: "takeoff",
    label: "Take Off",
    controls: [
      {
        id: "full-throttle",
        action: "Full Throttle",
        icon: "gauge",
        source: "THROTTLE",
        inputs: [{ type: "text", label: "Lever all the way forward" }],
        description: "Push the power up so you can speed down the runway!",
      },
      {
        id: "rotate",
        action: "Rotate / Pull Up",
        icon: "arrow-up-from-line",
        source: "JOYSTICK",
        inputs: [{ type: "text", label: "Pull stick back at 130–150 kts" }],
        description:
          "When you're going fast enough, gently pull back to lift off the ground.",
      },
      {
        id: "wings-level",
        action: "Keep Wings Level",
        icon: "move-horizontal",
        source: "JOYSTICK",
        inputs: [{ type: "text", label: "Tilt stick left or right" }],
        description: "Keep the plane straight as you climb into the sky.",
      },
      {
        id: "gear-up",
        action: "Gear Up",
        icon: "cog",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "/" }],
        description: "Pull the wheels up after you're safely in the air.",
      },
      {
        id: "flaps-retract",
        action: "Retract Flaps",
        icon: "layers",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "F6" }, { type: "key", label: "F5" }],
        inputJoiner: "or",
        description: "Fold the flaps back in once you're climbing.",
      },
    ],
    tip: `Wait until you're going 130–150 knots before pulling up — patience pays off! ${ACTIVE_PAUSE_TIP}`,
  },
  {
    id: "flight",
    label: "Flying",
    controls: [
      {
        id: "pitch",
        action: "Pitch Up / Down",
        icon: "arrow-up-from-line",
        source: "JOYSTICK",
        inputs: [{ type: "text", label: "Push or pull the stick" }],
        description: "Point the nose up or down to climb or descend.",
      },
      {
        id: "bank",
        action: "Bank Left / Right",
        icon: "move-horizontal",
        source: "JOYSTICK",
        inputs: [{ type: "text", label: "Tilt stick left or right" }],
        description: "Tilt the plane to turn left or right in the sky.",
      },
      {
        id: "rudder",
        action: "Rudder",
        icon: "rotate-cw",
        source: "JOYSTICK",
        inputs: [{ type: "text", label: "Twist the joystick" }],
        description: "Helps keep the plane pointed where you want to go.",
      },
      {
        id: "throttle-speed",
        action: "Throttle / Speed",
        icon: "gauge",
        source: "THROTTLE",
        inputs: [
          { type: "text", label: "Move throttle lever" },
          { type: "key", label: "F" },
          { type: "key", label: "R" },
        ],
        inputJoiner: "or",
        description: "Control how fast you're flying through the air.",
      },
      {
        id: "autopilot",
        action: "Autopilot",
        icon: "zap",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Z" }],
        description: "Let the computer help fly — great for cruising!",
      },
      {
        id: "show-map",
        action: "Show Map",
        icon: "map",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "V" }],
        description: "Open the map to see where you are in the world.",
      },
    ],
    tip: `Small, gentle moves on the joystick — you don't need to yank it! ${ACTIVE_PAUSE_TIP}`,
  },
  {
    id: "landing",
    label: "Landing",
    controls: [
      {
        id: "flaps-down",
        action: "Flaps Down",
        icon: "chevrons-down",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "F7" }, { type: "key", label: "F8" }],
        inputJoiner: "or",
        description: "Extend the flaps to slow down for landing.",
      },
      {
        id: "gear-down",
        action: "Gear Down",
        icon: "cog",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "/" }],
        description: "Don't forget! Put the wheels down before you land.",
      },
      {
        id: "reduce-throttle",
        action: "Reduce Throttle",
        icon: "gauge",
        source: "THROTTLE",
        inputs: [{ type: "text", label: "Lever to about 30%" }],
        description: "Slow down as you line up with the runway.",
      },
      {
        id: "flare",
        action: "Flare on Touchdown",
        icon: "wind",
        source: "JOYSTICK",
        inputs: [{ type: "text", label: "Gentle pull back on stick" }],
        description:
          "Right before you touch down, ease the nose up for a smooth landing.",
      },
      {
        id: "brake-landing",
        action: "Brake After Touchdown",
        icon: "octagon",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Space" }],
        description: "Press the brakes once your wheels are on the runway.",
      },
      {
        id: "spoilers",
        action: "Spoilers",
        icon: "chevrons-up",
        source: "KEYBOARD",
        inputs: [{ type: "text", label: "Speedbrake lever or binding" }],
        description: "Pop up panels on the wings to help you slow down fast.",
      },
    ],
    tip: `Start slowing down early and line up with the runway nice and straight! ${ACTIVE_PAUSE_TIP}`,
  },
  {
    id: "taxi-to-gate",
    label: "Taxi to Gate",
    tricky: true,
    controls: [
      {
        id: "taxi-ribbon-gate",
        action: "Toggle Taxi Ribbon",
        icon: "route",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Alt+3" }],
        mustKnow: true,
        description:
          "Same green line helps you find the gate! Turn it on after landing.",
      },
      {
        id: "back-on-track",
        action: "Back on Track",
        icon: "refresh-cw",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Shift+B" }],
        description:
          "If you get lost or stuck on the taxiway, press this to teleport back to the right spot!",
      },
      {
        id: "toggle-efb",
        action: "Toggle EFB (Tablet)",
        icon: "tablet",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Tab" }],
        description:
          "Opens a tablet in the cockpit with maps and airport info.",
      },
      {
        id: "leave-runway",
        action: "Turn Off Runway",
        icon: "signpost",
        source: "THROTTLE",
        inputs: [
          { type: "text", label: "Throttle 5–10%" },
          { type: "text", label: "Twist joystick to steer" },
        ],
        inputJoiner: "and",
        description: "Exit the runway carefully and head toward the taxiway.",
      },
      {
        id: "follow-yellow-line",
        action: "Follow Yellow Line",
        icon: "route",
        source: "JOYSTICK",
        inputs: [{ type: "text", label: "Steer gently" }],
        description: "Follow the yellow lines on the ground like a road map.",
      },
      {
        id: "outside-camera",
        action: "Outside Camera",
        icon: "camera",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Backspace" }],
        description:
          "Switch to an outside view so you can see where you're going.",
      },
      {
        id: "open-map",
        action: "Open Map",
        icon: "map",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "V" }],
        description: "Check the map to find your gate.",
      },
      {
        id: "taxi-speed",
        action: "Taxi Speed",
        icon: "gauge",
        source: "THROTTLE",
        inputs: [{ type: "text", label: "Keep it at 10–15 knots" }],
        description: "Go super slow — you're almost parked!",
      },
      {
        id: "park-brake",
        action: "Park + Brake",
        icon: "building",
        source: "KEYBOARD",
        inputs: [
          { type: "key", label: "Space" },
          { type: "key", label: "Ctrl+Space" },
        ],
        inputJoiner: "then",
        description: "Brake to a stop, then set the parking brake at your gate.",
      },
    ],
    tip: `This is the trickiest part! Use the Taxi Ribbon (Alt+3) and Back on Track (Shift+B) if you get lost. ${ACTIVE_PAUSE_TIP}`,
  },
  {
    id: "camera",
    label: "Camera Views",
    controls: [
      {
        id: "cockpit-toggle",
        action: "Cockpit / Outside Toggle",
        icon: "eye",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Backspace" }],
        description: "Switch between sitting inside and watching from outside.",
      },
      {
        id: "look-around",
        action: "Look Around",
        icon: "mouse-pointer",
        source: "MOUSE",
        inputs: [{ type: "text", label: "Right-click + drag" }],
        description: "Hold right-click and move the mouse to look around.",
      },
      {
        id: "look-left",
        action: "Look Left",
        icon: "move-horizontal",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Shift+J" }],
        description: "Snap your view to the left quickly.",
      },
      {
        id: "look-right",
        action: "Look Right",
        icon: "move-horizontal",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Shift+L" }],
        description: "Snap your view to the right quickly.",
      },
      {
        id: "look-up",
        action: "Look Up",
        icon: "arrow-up-from-line",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Shift+I" }],
        description: "Snap your view up quickly.",
      },
      {
        id: "look-down",
        action: "Look Down",
        icon: "arrow-down",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Shift+K" }],
        description: "Snap your view down quickly.",
      },
      {
        id: "drone-camera",
        action: "Drone Camera",
        icon: "camera",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Insert" }],
        description: "Fly a free camera anywhere around your plane!",
      },
      {
        id: "zoom-in",
        action: "Zoom In",
        icon: "zoom-in",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Shift+O" }],
        description: "Get a closer look at your cockpit or plane.",
      },
      {
        id: "zoom-out",
        action: "Zoom Out",
        icon: "zoom-in",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Shift+U" }],
        description: "Zoom out to see more of the world around you.",
      },
      {
        id: "reset-view",
        action: "Reset Cockpit View",
        icon: "refresh-cw",
        source: "KEYBOARD",
        inputs: [{ type: "key", label: "Shift+Space" }],
        description: "Snap back to the normal pilot view if you get lost.",
      },
    ],
    tip: `Try the drone camera — it's awesome for watching your plane from cool angles! ${ACTIVE_PAUSE_TIP}`,
  },
];
