import JobCard from "../components/JobCard";

export default function Jobs() {
  const jobs = [
    {
      title: "Tarım Kredi Teknoloji | Team Lead | Eylül 2024 - Devam Ediyor",
      description: "KoopEnerji ve KoopPOS projelerinde hem geliştirici hem de takım lideri olara kgörev almaktayım",
      tech: "Dotnet, MsSql, Mikroservice, MongoDb, Kafka, Docker, Jenkins, Kubernetes, Jira, Gitlab, Serilog, Graylog, WebSocket",
    },
    {
      title: "Tarım Kredi Teknoloji | Software Developer | Mayıs 2023 - Eylül 2024",
      description: "Birden fazla projede aktif olarak geliştirici rolü üstlendim. KoopEnerji projesinin sıfırdan yazılmasında ve Toprak platformunda mikroservis mimarisinde bir çok modülde görev aldım.",
      tech: "Dotnet, MsSql, Mikroservis, MongoDb, Kafka, Docker, Jenkins, Kubernetes, Jira, Gitlab, Serilog, Graylog, WebSocket",
    },
    {
      title: "Crosstech Bilişim Teknolojileri | Ocak 2022 - Mart 2023",
      description: "Şirkete gelen özel projeler doğrultusunda yapılan gelişitirmelerde görev aldım.",
      tech: "Asp.Net Core, PostgreSql, Docker, Kubernetes, Azure DevOps ve Google Cloud.",
    },
    {
      title: "Roboplas | Ağustos 2020 - Ocak 2022",
      description: "ERP projesinin birkaç modülünün geliştirilmesinde Backend Developer olarak çalıştım.",
      tech: "ASP.NET, Ms SQL",    },
    {
      title: "Roboplas | Eylül 2019 - Ekim 2019",
      description: "ERP projesinin birkaç modülünün geliştirilmesinde Backend Developer olarak çalıştım.",
      tech: "ASP.NET, Ms SQL",
    },
  ];

  return (
    <section>
      <h2>Çalıştığım Yerler</h2>

      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </section>
  );
}