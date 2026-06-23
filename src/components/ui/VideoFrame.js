"use client";
import ReactPlayer from "react-player";

export default function VideoFrame({ url, onReady }) {
  return (
    // Оборачиваем в div с вашими стилями
    <ReactPlayer
      src={url}
      onReady={onReady}
      width="100%"
      height="100%"
      controls={true} // Стандартные элементы управления
      // playsInline={true} // Обязательно для мобильных
      config={{
        youtube: {
          playerVars: {
            origin: typeof window !== "undefined" ? window.location.origin : "",
            enablejsapi: 1,
          },
        },
      }}
    />
  );
}
