import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Emre Küçük</h1>
      <p>Software Team Lead</p>
      <nav>
        <Link to="/">Anasayfa</Link>
        <Link to="/jobs">İşler</Link>
        <Link to="/projects">Projeler</Link>
        <Link to="/skills">Beceriler</Link>
        <Link to="/educations">Eğitim</Link>
      </nav>
    </header>
  );
}
