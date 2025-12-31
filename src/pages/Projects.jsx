import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "POS Backoffice System",
      description: "Mikroservis mimarisi ile geliştirilen backoffice uygulaması",
      tech: ".NET Core, MSSQL, Docker",
    },
    {
      title: "Payment Gateway",
      description: "Ödeme altyapısı ve banka entegrasyonları",
      tech: ".NET, REST, PostgreSQL",
    },
    {
      title: "Worker Service",
      description: "Background job ve queue işlemleri",
      tech: ".NET Worker, Kubernetes",
    },
  ];

  return (
    <section>
      <h2>Projeler</h2>

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
}