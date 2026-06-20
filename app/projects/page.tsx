import styles from "./project.module.css";
import { projects } from "@/lib/projects";
import ProjectsList from "@/components/projects/ProjectsList";

export const metadata = {
  title: "Projects",
  description: "A showcase of my software development projects.",
};

export default function ProjectsPage() {
  return (
    <section className={styles.projectsPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            A collection of work that reflects my learning and experience in
            software development.
          </p>
        </div>
        <ProjectsList projects={projects} />
      </div>
    </section>
  );
}
