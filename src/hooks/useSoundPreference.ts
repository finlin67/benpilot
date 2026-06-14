"use client";

import { useCallback, useEffect, useState } from "react";
import {
  isSoundEnabled,
  playClick,
  playCorrect,
  playDing,
  playWrong,
  setSoundEnabled,
} from "@/lib/sounds";

export function useSoundPreference() {
  const [enabled, setEnabled] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setEnabled(isSoundEnabled());
    setHydrated(true);

    const onChange = () => setEnabled(isSoundEnabled());
    window.addEventListener("pilotben-sound-pref-change", onChange);
    return () =>
      window.removeEventListener("pilotben-sound-pref-change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = !isSoundEnabled();
    setSoundEnabled(next);
    setEnabled(next);

    if (next) {
      playClick();
    }
  }, []);

  return {
    enabled: hydrated ? enabled : false,
    toggle,
    playClick,
    playDing,
    playCorrect,
    playWrong,
  };
}
