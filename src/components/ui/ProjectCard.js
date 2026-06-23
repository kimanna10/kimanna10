import Image from "next/image";

export default function ProjectCard({
  project,
  aspect,
  onClick,
  priority = false,
}) {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden  ${aspect}`}
      onClick={onClick}
    >
      <Image
        src={project.thumb}
        alt={project.title}
        fill
        priority={priority} // Используем переданный пропс
        loading={priority ? "eager" : "lazy"} // Явное управление
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover h-full w-full transition-all duration-700 hover:scale-110 ease-in-out"
      />
    </div>
  );
}
