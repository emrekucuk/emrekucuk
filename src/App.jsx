import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Jobs from "./pages/Jobs";
import Educations from "./pages/Educations";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/education" element={<Educations />} />
      </Routes>
      <Footer />
    </div>
  );
}
