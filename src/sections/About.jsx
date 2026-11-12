import { Gift, GraduationCap, MapPin } from "lucide-react";
import "../styles/About.css";

const highlights = [
  {
    Icon: GraduationCap,
    title: "Projeto IFSP",
    text: "Extensão do Instituto Federal de Bragança Paulista",
  },
  {
    Icon: Gift,
    title: "100% gratuito",
    text: "Sem nenhum custo para o empreendedor",
  },
  {
    Icon: MapPin,
    title: "Feito para a região",
    text: "Apoio aos MEIs e ao comércio local",
  },
];

function About() {
  return (
    <section className="about-content" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-title">Sobre nós</span>
            <h2>
              Presença digital <span className="highlight-text">gratuita</span> para MEIs e pequenos empreendedores
            </h2>
            <p>
              A Vitrine é um projeto de extensão de estudantes do IFSP – Campus
              Bragança Paulista. Nosso objetivo é usar o que aprendemos no curso
              para apoiar MEIs, microempresários e o comércio da nossa região.
            </p>
            <p>
              Criamos landing pages feitas sob medida para cada negócio, para
              que mais pessoas encontrem você na internet e entrem em contato
              pelo WhatsApp.
            </p>
          </div>
          <div className="about-highlights">
            {highlights.map((highlight) => (
              <div className="about-highlight" key={highlight.title}>
                <div className="about-highlight-icon">
                  <highlight.Icon />
                </div>
                <div className="about-highlight-content">
                  <h3>{highlight.title}</h3>
                  <p>{highlight.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
