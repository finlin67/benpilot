const SOUND_PREF_KEY = "pilotben-sounds-enabled";

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;

  if (!audioContext) {
    audioContext = new AudioContext();
  }

  if (audioContext.state === "suspended") {
    void audioContext.resume();
  }

  return audioContext;
}

export function isSoundEnabled(): boolean {
  if (typeof window === "undefined") return false;

  try {
    return localStorage.getItem(SOUND_PREF_KEY) === "true";
  } catch {
    return false;
  }
}

export function setSoundEnabled(enabled: boolean) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SOUND_PREF_KEY, String(enabled));
  window.dispatchEvent(new CustomEvent("pilotben-sound-pref-change"));
}

function playTone(
  frequency: number,
  duration: number,
  options: {
    type?: OscillatorType;
    volume?: number;
    attack?: number;
    decay?: number;
  } = {}
) {
  if (!isSoundEnabled()) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  const {
    type = "sine",
    volume = 0.08,
    attack = 0.01,
    decay = duration,
  } = options;

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + attack);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + decay);

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + decay + 0.05);
}

export function playClick() {
  if (!isSoundEnabled()) return;

  const ctx = getAudioContext();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(880, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.04);

  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.08);
}

export function playDing() {
  playTone(523.25, 0.18, { volume: 0.1 });
  setTimeout(() => playTone(659.25, 0.28, { volume: 0.1 }), 90);
  setTimeout(() => playTone(783.99, 0.4, { volume: 0.09 }), 180);
}

export function playCorrect() {
  playTone(523.25, 0.15, { volume: 0.09 });
  setTimeout(() => playTone(659.25, 0.22, { volume: 0.09 }), 70);
}

export function playWrong() {
  playTone(220, 0.25, { type: "sawtooth", volume: 0.05 });
  setTimeout(() => playTone(185, 0.3, { type: "sawtooth", volume: 0.04 }), 100);
}

export { SOUND_PREF_KEY };
