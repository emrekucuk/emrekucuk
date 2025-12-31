import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Emre Küçük</h1>
      <p>Backend Developer (.NET)</p>
      <nav>
        <Link to="/">Anasayfa</Link>
        <Link to="/project">Projeler</Link>
        <Link to="/jobs">İşler</Link>
        <Link to="/education">Eğitim</Link>
      </nav>
    </header>
  );
}
