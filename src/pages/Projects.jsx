import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "KoopPOS",
      description: "KoopPOS, modern, web tabanlı bir kasa platformudur. Sıfırdan geliştirilmiştir.\n 'KoopPOS Kooperatif', 1100'den fazla kooperatif lokasyonunda çalışmaktadır. 'KoopPOS Market' aktif olarak geliştirilmekte olup, 2500'den fazla market lokasyonunda çalışması planlanmaktadır. ",
      tech: "DOTNET 10, React, Ms SQL, Hangfire, WebSocket, Docker, Jenkins, Kubernetes, IIS, Graylog, Serilog, Nexus",
    },
    {
      title: "KoopEnerji",
      description: "modern, web tabanlı bir yakıt otomasyon sistemidir. Sıfırdan geliştirilmiştir. Sahada aktif olarak test edilmektedir. Tarpet, KoopEnerji'nin eski versiyonudur. 1600'den fazla lokasyonda çalışmaktadır. 3 yıldır bakımını yapıyoruz.",
      tech: "DOTNET 10, React, Ms SQL, WebSocket, Docker, Jenkins, Kubernetes, IIS, Graylog, Serilog, Nexus",
    },
    {
      title: "Toprak",
      description: "kurumsal modüllerden oluşan bir kurumsal yazılım platformudur. Sıfırdan geliştirilmiştir. Tarım Kredi Grubu'ndaki 18 şirket tarafından kullanılmaktadır. Backend mikroservis mimarisi, Frontend mikrofrontend ve mobil uygulaması vardır. Birçok modülünde aktif olarak geliştirme yaptım. ",
      tech: "DOTNET 10, React, Ms SQL, WebSocket, Docker, Jenkins, Kubernetes, IIS, Graylog, Serilog, Nexus, Microservices",
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