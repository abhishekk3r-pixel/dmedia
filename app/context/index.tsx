"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useHydrated } from "../hooks/useHydrated";

export type MediaQueryContextType = {
  isSmUp: boolean;
  isMdUp: boolean;
  isLgUp: boolean;
  isXlUp: boolean;
  isMobileScreen: boolean;
};

export const MediaQueryContext = createContext<MediaQueryContextType | null>(null);

export function MediaQueryProvider({ children }: { children: ReactNode }) {
  const isSmUp = useMediaQuery("(min-width: 640px)");
  const isMdUp = useMediaQuery("(min-width: 768px)");
  const isLgUp = useMediaQuery("(min-width: 1024px)");
  const isXlUp = useMediaQuery("(min-width: 1280px)");
  const isMobileScreen = useMediaQuery("(max-width: 639px)");
  const isHydrated = useHydrated();

  if (!isHydrated) {
    return null;
  }

  return (
    <MediaQueryContext.Provider
      value={{ isSmUp, isMdUp, isLgUp, isXlUp, isMobileScreen }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
}

export function useMedia() {
  const context = useContext(MediaQueryContext);

  if (!context) {
    throw new Error("useMedia must be used within MediaQueryProvider");
  }

  return context;
}
