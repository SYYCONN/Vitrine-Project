import "./styles/global.css";
import Header from "./components/header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Projects from "./sections/Projects.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
      </main>
    </>
  );
}

export default App;
