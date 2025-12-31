export default function EducationCard({ education }) {
  return (
    <div className="education-card">
      <h3>{education.title}</h3>
      <p>{education.description}</p>
      <small>{education.tech}</small>
    </div>
  );
}
