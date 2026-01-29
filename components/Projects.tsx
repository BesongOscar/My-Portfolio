import styles from "./Projects.module.css";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "A personal portfolio showcasing my skills, projects, and experience.",
    tech: ["Next.js", "CSS", "Framer Motion"],
  },
  {
    title: "CamHotel Mobile App",
    description:
      "A hotel discovery mobile application built for users in Cameroon.",
    tech: ["React Native", "Expo"],
  },
  {
    title: "Event Management Platform",
    description:
      "A web application for creating, managing, and discovering events.",
    tech: ["Next.js", "MongoDB", 'React'],
  },
];

export default function Projects() {
  return (
    <section className={styles.projects} aria-labelledby="projects-heading">
      <div className={styles.container}>
        <h2 id="projects-heading">Featured Projects.</h2>
        <p>Some projects that reflect my learning and experience.</p>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className={styles.techList}>
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a 
                className={styles.cta} 
                href={'/'}
                aria-label={`View ${project.title} project details`}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
