"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

const WindowSizeContext = createContext<WindowSize | undefined>(undefined);

export const WindowSizeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSize = () => {
  const context = useContext(WindowSizeContext);
  if (context === undefined) {
    throw new Error("useWindowSize must be used within a WindowSizeProvider");
  }
  return context;
};
