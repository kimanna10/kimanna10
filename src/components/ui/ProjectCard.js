import Image from "next/image";

export default function ProjectCard({ project, aspect, onClick }) {
  return (
    <div
      className={`relative cursor-pointer overflow-hidden  ${aspect}`}
      onClick={onClick}
    >
      <Image
        src={project.thumb}
        alt={project.title}
        fill
        className="object-cover h-full w-full transition-all duration-700 hover:scale-110 ease-in-out"
      />
    </div>
  );
}
