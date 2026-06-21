import ProjectPage from "@/components/ui/ProjectPage"; // Выносим логику клиента сюда
import { getProjectsFromSheet } from "@/lib/data";

export default async function ProjectsPage() {
  const projects = await getProjectsFromSheet("projects");

  // Передаем данные в клиентский компонент
  return <ProjectPage initialProjects={projects} />;
}
