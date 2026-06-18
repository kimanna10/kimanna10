// "use client";
// import ProjectCard from "@/components/ui/ProjectCard";

// export default function MobileGrid({ projects, onOpen }) {
//   const items = [];
//   let i = 0;
//   let step = 0;

//   while (i < projects.length) {
//     const pattern = step % 3;

//     if (pattern === 0 && projects[i + 1]) {
//       items.push(
//         <div key={i} className="col-span-2 grid grid-cols-[2fr_1fr] gap-2">
//           <ProjectCard
//             project={projects[i]}
//             aspect="aspect-[4/3]"
//             onClick={() => onOpen(i)}
//           />
//           <ProjectCard
//             project={projects[i + 1]}
//             aspect="aspect-[2/3]"
//             onClick={() => onOpen(i + 1)}
//           />
//         </div>,
//       );
//       i += 2;
//     } else if (pattern === 1 && projects[i + 1]) {
//       items.push(
//         <div key={i} className="col-span-2 grid grid-cols-[1fr_2fr]  gap-2">
//           <ProjectCard
//             project={projects[i]}
//             aspect="aspect-[2/3]"
//             onClick={() => onOpen(i)}
//           />
//           <ProjectCard
//             project={projects[i + 1]}
//             aspect="aspect-[4/3]"
//             onClick={() => onOpen(i + 1)}
//           />
//         </div>,
//       );
//       i += 2;
//     } else {
//       items.push(
//         <div key={i} className="col-span-2 grid grid-cols-2 gap-2">
//           <ProjectCard
//             project={projects[i]}
//             aspect="aspect-[2/1]"
//             onClick={() => onOpen(i)}
//           />
//         </div>,
//       );
//       i += 1;
//     }
//     step++;
//   }
//   return <div className="grid grid-cols-2">{items}</div>;
// }

// "use client";
// import ProjectCard from "@/components/ui/ProjectCard";

// export default function MobileGrid({ projects, onOpen }) {
//   const items = [];
//   let i = 0;
//   let step = 0;

//   while (i < projects.length) {
//     const pattern = step % 3;

//     if (pattern === 0 && projects[i + 1]) {
//       items.push(
//         <div key={i} className="col-span-3 grid grid-cols-[2fr_1fr]">
//           <ProjectCard
//             project={projects[i]}
//             aspect="aspect-[4/3]"
//             onClick={() => onOpen(i)}
//           />
//           <ProjectCard
//             project={projects[i + 1]}
//             aspect="aspect-[2/3]"
//             onClick={() => onOpen(i + 1)}
//           />
//         </div>,
//       );
//       i += 2;
//     } else if (pattern === 1 && projects[i + 1]) {
//       items.push(
//         <div key={i} className="col-span-3 grid grid-cols-[1fr_2fr]">
//           <ProjectCard
//             project={projects[i]}
//             aspect="aspect-[2/3]"
//             onClick={() => onOpen(i)}
//           />
//           <ProjectCard
//             project={projects[i + 1]}
//             aspect="aspect-[4/3]"
//             onClick={() => onOpen(i + 1)}
//           />
//         </div>,
//       );
//       i += 2;
//     } else {
//       items.push(
//         <div key={i} className="col-span-3">
//           <ProjectCard
//             project={projects[i]}
//             aspect="aspect-[2/1]"
//             onClick={() => onOpen(i)}
//           />
//         </div>,
//       );
//       i += 1;
//     }
//     step++;
//   }

//   return (
//     <div className="grid grid-cols-3 border-l border-t border-foreground/10">
//       {items}
//     </div>
//   );
// }
"use client";

import ProjectCard from "@/components/ui/ProjectCard";

export default function MobileGrid({ projects, onOpen }) {
  return (
    <div className="columns-2 md:columns-3 xl:columns-4 md:gap-4 gap-2">
      {projects.map((project, index) => (
        <div
          key={project.id || index}
          className="md:mb-4 mb-2 break-inside-avoid"
        >
          <ProjectCard
            project={project}
            aspect={getAspect(index)}
            onClick={() => onOpen(index)}
          />
        </div>
      ))}
    </div>
  );
}

// function getAspect(index) {
//   const layouts = [
//     "aspect-[4/5]",
//     "aspect-video",
//     "aspect-square",
//     "aspect-[3/4]",
//     "aspect-[5/4]",
//     "aspect-[9/16]",
//     "aspect-[16/10]",
//   ];

//   return layouts[index % layouts.length];
// }
// function getAspect(index) {
//   if (index % 12 === 0) return "aspect-[4/5]";

//   const aspects = [
//     "aspect-video",
//     "aspect-[4/3]",
//     "aspect-square",
//     "aspect-[16/10]",
//     "aspect-[3/2]",
//   ];

//   return aspects[index % aspects.length];
// }

// function getAspect(index) {
//   if (index % 11 === 0) return "aspect-[16/9]";
//   if (index % 7 === 0) return "aspect-square";
//   if (index % 5 === 0) return "aspect-[9/16]";

//   return ["aspect-[4/5]", "aspect-video", "aspect-[5/4]", "aspect-[3/4]"][
//     index % 4
//   ];
// }
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
