"use client";
import { useEffect } from "react";

export default function InstagramEmbed({ url }) {
  useEffect(() => {
    // Проверяем, загружен ли скрипт Instagram
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="flex justify-center my-4">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      >
        {/* <a href={url} target="_blank" rel="noreferrer">
          Посмотреть пост в Instagram
        </a> */}
      </blockquote>
      {/* Скрипт подгружается динамически */}
      <script async src="//www.instagram.com/embed.js" />
    </div>
  );
}
