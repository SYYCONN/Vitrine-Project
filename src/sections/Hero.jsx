import "../styles/global.css";
import { ShieldCheck, Rocket, ChartNoAxesCombined } from "lucide-react";

function Hero() {
  return (
    <section className="hero-content">
      <div className="container">
        <div className="hero-container">
          <div className="hero-info">
            <div className="hero-title">
              <h1>
                Landing Pages que <br />
                transformam visitas
                <br />
                em clientes.
              </h1>
              <p>
                Criamos páginas estratégicas, com design atrativo, copies
                persuasivas e alta performance para gerar mais leads, conversões
                e resultados para seu negócio.
              </p>
            </div>
            <div className="hero-btn">
              <button>Entrar em contato</button>
              <button>Ver Projetos</button>
            </div>
            <div className="hero-benefits">
              <div className="benefit-item">
                <ShieldCheck />
                <span>Projetos Sob Medida</span>
              </div>
              <div className="benefit-item">
                <Rocket />
                <span>Alta Performance</span>
              </div>
              <div className="benefit-item">
                <ChartNoAxesCombined />
                <span>Foco em Conversão</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="../src/assets/hero-img.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
