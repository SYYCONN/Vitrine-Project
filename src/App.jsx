import "./styles/global.css";
import Header from "./components/header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Process from "./sections/Process.jsx";
import Projects from "./sections/Projects.jsx";
import FAQ from "./sections/FAQ.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
