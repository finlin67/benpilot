export interface ChecklistItem {
  id: string;
  action: string;
  state: string;
}

export type ChecklistId = "before-takeoff" | "after-landing";

export interface Checklist {
  id: ChecklistId;
  tabLabel: string;
  title: string;
  completionMessage: string;
  items: ChecklistItem[];
}

export const checklists: Checklist[] = [
  {
    id: "before-takeoff",
    tabLabel: "Before Takeoff",
    title: "Before Takeoff Checklist",
    completionMessage: "Checklist Complete — Cleared for Takeoff! ✈️",
    items: [
      { id: "parking-brake-set", action: "Parking brake", state: "SET" },
      {
        id: "auto-start",
        action: "Auto-start engine (Ctrl+E)",
        state: "ENGINE RUNNING",
      },
      { id: "throttle-idle", action: "Throttle", state: "IDLE (all the way back)" },
      {
        id: "flaps-takeoff",
        action: "Flaps",
        state: "SET FOR TAKEOFF (B once or twice)",
      },
      {
        id: "instruments",
        action: "Flight instruments",
        state: "CHECK (look at speed, altitude, heading)",
      },
      {
        id: "lights",
        action: "Lights on",
        state: "BEACON + NAV LIGHTS (cockpit switches)",
      },
      { id: "fuel-pump", action: "Fuel pump", state: "ON (cockpit switches)" },
      { id: "taxi-runway", action: "Taxi to runway", state: "CLEARED" },
      {
        id: "centerline",
        action: "Lineup on runway centerline",
        state: "CONFIRMED",
      },
      {
        id: "parking-brake-release",
        action: "Parking brake",
        state: "RELEASE (Ctrl+Space)",
      },
    ],
  },
  {
    id: "after-landing",
    tabLabel: "After Landing",
    title: "After Landing Checklist",
    completionMessage: "Checklist Complete — Safe on the Ground! ✈️",
    items: [
      { id: "throttle-idle", action: "Throttle", state: "IDLE (all the way back)" },
      { id: "brakes", action: "Brakes", state: "APPLY (hold Space)" },
      {
        id: "speed",
        action: "Speed",
        state: "BELOW 15 KNOTS before turning",
      },
      { id: "turn-off", action: "Turn off runway", state: "COMPLETED" },
      { id: "flaps-retract", action: "Flaps", state: "RETRACT (V or Ctrl+V)" },
      { id: "landing-lights", action: "Landing lights", state: "OFF" },
      {
        id: "taxi-gate",
        action: "Taxi to gate",
        state: "FOLLOW YELLOW LINE",
      },
      {
        id: "parking-brake-set",
        action: "Parking brake",
        state: "SET (Ctrl+Space)",
      },
    ],
  },
];

export const STORAGE_KEY = "pilotben-checklists";

export type ChecklistState = Record<ChecklistId, string[]>;

export function createEmptyChecklistState(): ChecklistState {
  return {
    "before-takeoff": [],
    "after-landing": [],
  };
}
