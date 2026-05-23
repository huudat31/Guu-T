"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import EdgeScrollbar from "../ui/EdgeScrollbar";

interface AppContextType {
  isLoaderFinished: boolean;
  setIsLoaderFinished: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaderFinished(true);
    }, 3000); // 3 seconds loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContext.Provider value={{ isLoaderFinished, setIsLoaderFinished }}>
      {children}
      <EdgeScrollbar />
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
