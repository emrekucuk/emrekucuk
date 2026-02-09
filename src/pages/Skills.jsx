import SkillCard from "../components/SkillCard";

export default function Skills() {
  const skills = [
    {title: "ASP.NET Core"  },
    {title: "ASP.NET MVC"  },
    {title: "Microservices"  },
    {title: "PostgreSQL"  },
    {title: "MS SQL Server"  },
    {title: "MongoDB"  },
    {title: "Git"  },
    {title: "GitLab"  },
    {title: "Jenkins"  },
    {title: "Linux"  },
    {title: "Docker"  },
    {title: "Kubernetes"  },
    {title: "Cloudflare"  },
    {title: "Jira"  },
    {title: "Nexus"  },
    {title: "Kafka"  },
    {title: "Serilog"  },
    {title: "Graylog"  },
    {title: "WebSocket"  },
    {title: "Hangfire"  },
  ];


  return (
    <div className="row">
      <h2>Beceriler</h2>
    <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}


//   return (
//     <section>
//       <h2>Beceriler</h2>

//       {skills.map((skill, index) => (
//         <SkillCard key={index} skill={skill} />
//       ))}
//     </section>
//   );
// }