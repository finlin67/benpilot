export type HardwareSource = "KEYBOARD" | "JOYSTICK" | "THROTTLE" | "MOUSE";

export type ControlCategory = "ground" | "air" | "systems" | "camera";

export type BindingInputType = "key" | "axis" | "button" | "combo" | "mouse";

export interface Binding {
  label: string;
  alternate?: string;
  device: HardwareSource;
  inputType: BindingInputType;
}

export type BindingMap = Record<string, Binding>;

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
  | "settings"
  | "accessibility"
  | "ribbon";

export interface MsfsAction {
  id: string;
  name: string;
  description: string;
  category: ControlCategory;
  device: HardwareSource;
  icon: ControlIconName;
  msfsPath?: string;
}

export type FlightPhase =
  | "startup"
  | "taxi"
  | "takeoff"
  | "flight"
  | "landing"
  | "taxi-to-gate"
  | "camera";

export interface PhaseLesson {
  id: FlightPhase;
  label: string;
  tricky?: boolean;
  actionIds: string[];
  tip: string;
}

export interface LessonStep {
  title: string;
  body: string;
  emoji?: string;
}

export interface LessonSection {
  id: string;
  title: string;
  subtitle?: string;
  steps: LessonStep[];
}

export interface QuickHelpItem {
  id: string;
  title: string;
  emoji: string;
  color: "sky" | "amber" | "emerald";
  actionIds: string[];
  reminder: string;
}
