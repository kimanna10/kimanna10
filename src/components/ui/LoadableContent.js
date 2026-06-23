"use client";
import { useEffect, useState } from "react";

export default function LoadableContent({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center bg-background transition-opacity duration-700 ease-in-out ${isReady ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-foreground border-t-transparent shadow-lg" />
      </div>

      <div
        className={`w-full transition-opacity flex items-center justify-center duration-700 ${isReady ? "opacity-100" : "opacity-0"}`}
      >
        {children(setIsReady)}
      </div>
    </div>
  );
}
