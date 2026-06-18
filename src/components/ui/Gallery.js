// "use client";
// import Image from "next/image";
// import "swiper/css";
// import { Autoplay, FreeMode } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// export default function Gallery({ images, onOpen }) {
//   return (
//     <div className="w-full border-t border-foreground/10 overflow-hidden">
//       <Swiper
//         modules={[Autoplay, FreeMode]}
//         slidesPerView={2.5}
//         spaceBetween={0}
//         loop={true}
//         freeMode={true}
//         speed={8000}
//         autoplay={{ delay: 0, disableOnInteraction: false }}
//         breakpoints={{ 768: { slidesPerView: 5 } }}
//       >
//         {images.map((src, i) => (
//           <SwiperSlide key={i}>
//             <div
//               className="aspect-square relative border-r border-foreground/10 cursor-pointer"
//               onClick={() => onOpen(i)}
//             >
//               <Image src={src} alt="Gallery" fill className="object-cover" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// "use client";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";
// import { useRef } from "react";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";

// export default function Gallery({ images, onOpen }) {
//   const swiperRef = useRef(null);

//   return (
//     <div className="w-full border-t border-b border-foreground/10 relative group">
//       {/* Кнопки управления */}
//       <div className="absolute top-1/2 left-4 z-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <button
//           onClick={() => swiperRef.current?.slidePrev()}
//           className="p-1 bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-lg hover:bg-foreground hover:text-background transition-all"
//         >
//           <ChevronLeft size={28} />
//         </button>
//       </div>

//       <div className="absolute top-1/2 right-4 z-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <button
//           onClick={() => swiperRef.current?.slideNext()}
//           className="p-1 bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-lg hover:bg-foreground hover:text-background transition-all"
//         >
//           <ChevronRight size={28} />
//         </button>
//       </div>

//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         slidesPerView={2.5}
//         spaceBetween={0}
//         loop={true}
//         speed={600}
//         breakpoints={{ 768: { slidesPerView: 5 } }}
//       >
//         {images.map((src, i) => (
//           <SwiperSlide key={i}>
//             <div
//               className="aspect-square relative border-r border-foreground/10 cursor-pointer overflow-hidden"
//               onClick={() => onOpen(i)}
//             >
//               <Image
//                 src={src}
//                 alt="Gallery"
//                 fill
//                 className="object-cover scale-100 hover:scale-110 transition-all duration-700 ease-in-out"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Gallery({ images, onOpen }) {
  const swiperRef = useRef(null);

  return (
    <div className="w-full  relative group">
      {/* Кнопки управления (скрыты на мобильном, где сетка) */}
      <div className="hidden md:block absolute top-1/2 left-4 z-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-1 bg-foreground/10 rounded-lg hover:bg-foreground/20 transition-all"
        >
          <ChevronLeft size={28} />
        </button>
      </div>

      <div className="hidden md:block absolute top-1/2 right-4 z-20 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-1 bg-foreground/10 rounded-lg hover:bg-foreground/20 transition-all"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="md:hidden grid grid-cols-2 auto-rows-[200px]">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => onOpen(i)}
            className={`relative cursor-pointer overflow-hidden 
              ${i % 3 === 0 ? "col-span-2 row-span-2" : "col-span-1"}`}
          >
            <Image
              src={src}
              alt="Gallery"
              fill
              className="object-cover scale-100 hover:scale-110 transition-all duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* Слайдер только для десктопа */}
      <div className="hidden md:block">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={5}
          loop={true}
          speed={600}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div
                className="aspect-square relative  cursor-pointer overflow-hidden"
                onClick={() => onOpen(i)}
              >
                <Image
                  src={src}
                  alt="Gallery"
                  fill
                  className="object-cover scale-100 hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
