import ProjectPage from "@/components/ui/ProjectPage"; // Выносим логику клиента сюда
import { getProjectsFromSheet } from "@/lib/data";

// Эта строка заставляет Vercel обновлять данные каждые 60 секунд
export const revalidate = 10;

export default async function ProjectsPage() {
  const projects = await getProjectsFromSheet("projects");

  // Передаем данные в клиентский компонент
  return <ProjectPage initialProjects={projects} />;
}
