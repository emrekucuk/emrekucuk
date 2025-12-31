import JobCard from "../components/JobCard";

export default function Jobs() {
  const jobs = [
    {
      title: "Tarım Kredi Teknoloji | May 2023 - Now",
      description: "Mikroservis mimarisi ile geliştirilen backoffice uygulaması",
      tech: ".NET Core, MSSQL, Docker, Kubernetes",
    },
    {
      title: "Crosstech Bilişim Teknolojileri | January 2022 - March 2023",
      description: "",
      tech: ".NET Core, MSSQL, Docker, Kubernetes",
    },
    {
      title: "Roboplas | August 2020 - January 2022",
      description: "Background job ve queue işlemleri",
      tech: ".NET Worker, Kubernetes",
    },
    {
      title: "Roboplas | September 2019 - October 2019",
      description: "Background job ve queue işlemleri",
      tech: ".NET Worker, Kubernetes",
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