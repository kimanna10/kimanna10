"use client";
import { useState } from "react";

export default function LoadableContent({ children }) {
  const [isReady, setIsReady] = useState(false);

  // Мы создаем функцию, которую передадим внутрь, чтобы контент сказал: "Я готов!"
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Спиннер: виден, пока isReady = false */}
      {!isReady && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-background">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-foreground border-t-transparent shadow-lg" />
        </div>
      )}

      {/* Контент: скрыт (opacity-0), пока не готов */}
      <div
        className={`w-full transition-opacity flex items-center justify-center duration-700 ${isReady ? "opacity-100" : "opacity-0"}`}
      >
        {children(setIsReady)}
      </div>
    </div>
  );
}
