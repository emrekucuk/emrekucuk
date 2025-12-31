import EducationCard from "../components/EducationCard";

export default function Educations() {
  const education = [
    {
      title: "Bachelor's Degree | 2014 - 2019",
      description: "Süleyman Demirel University (Turkey), Computer Engineering",
      tech: "I have graduated from Süleyman Demirel University, Computer Engineering at 2019.",
    },
    {
      title: "High School Degree | 2009 - 2013",
      description: "Barbaros Hayrettin Pasha Anatolian Maritime Vocational Higt School (Turkey)",
      tech: " I graduated from the captain's department in 2013.",
    }, 
  ];

  return (
    <section>
      <h2>Eğitimler</h2>

      {education.map((education, index) => (
        <EducationCard key={index} education={education} />
      ))}
    </section>
  );
}