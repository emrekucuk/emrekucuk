// export default function SkillCard({ skill }) {
//   return (
//     <div className="skill-card">
//        <ul class="tech-list">   
//               <li>{skill.title}</li>
//           </ul>
//     </div>
//   );
// }

export default function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <ul className="tech-list">
        <li>{skill.title}</li>
      </ul>
    </div>
  );
}
