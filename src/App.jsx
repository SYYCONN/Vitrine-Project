import "./styles/global.css";
import Header from "./components/header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </>
  );
}

export default App;
