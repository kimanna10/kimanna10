"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

export default function MobileGrid({ sortedProjects, onOpen }) {
  const distributeToColumns = (items, colCount) => {
    const columns = Array.from({ length: colCount }, () => []);
    items.forEach((item, index) => {
      // Сохраняем "глобальный" индекс для getAspect
      columns[index % colCount].push({ ...item, globalIndex: index });
    });
    return columns;
  };

  const cols2 = distributeToColumns(sortedProjects, 2);
  const cols4 = distributeToColumns(sortedProjects, 4);

  // 1. Настройка анимации (появление с мягким выездом)
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.02,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      <div className="md:hidden grid grid-cols-2 gap-2">
        {cols2.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-2">
            {col.map((p) => (
              <motion.div
                key={p.id}
                custom={p.globalIndex}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ProjectCard
                  project={p}
                  priority={p.globalIndex < 8}
                  aspect={getAspect(p.globalIndex)}
                  onClick={() => onOpen(p.globalIndex)}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-4 gap-4">
        {cols4.map((col, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            {col.map((p) => (
              <motion.div
                key={p.id}
                custom={p.globalIndex}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <ProjectCard
                  project={p}
                  priority={p.globalIndex < 8}
                  aspect={getAspect(p.globalIndex)}
                  onClick={() => onOpen(p.globalIndex)}
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

function getAspect(index) {
  if (index % 19 === 0) return "aspect-[16/9]";
  if (index % 13 === 0) return "aspect-[9/16]";

  const aspects = [
    "aspect-square",
    "aspect-[4/3]",

    "aspect-[3/4]",
    "aspect-[4/5]",

    "aspect-[5/4]",

    "aspect-video",

    "aspect-[3/2]",

    "aspect-[3/4]",
    "aspect-[4/5]",

    "aspect-square",
  ];

  return aspects[(index * 7 + 5) % aspects.length];
}
