import { PanelsTopLeft, PenTool, UsersRound, Wrench } from "lucide-react";
import kitchenImage from "../assets/portfolio-cozinha.jpg";
import shelvesImage from "../assets/portfolio-estante.jpg";
import counterImage from "../assets/portfolio-balcao.jpg";
import ServiceCard from "../components/ServiceCard.jsx";
import "../styles/Services.css";

const landingPageInfoId = "o-que-e-uma-landing-page";

const services = [
  {
    id: "landing-page",
    icon: PanelsTopLeft,
    title: (
      <>
        Criação da{" "}
        <a className="service-card-title-link" href={`#${landingPageInfoId}`}>
          landing page
        </a>
      </>
    ),
    badge: "100% gratuito",
    description:
      "Uma página única, pensada para o seu negócio, seus produtos e seu público.",
    action: { label: "Solicitar minha página" },
  },
  {
    id: "rede-profissionais",
    icon: UsersRound,
    title: "Rede de profissionais",
    description:
      "Encontre o talento criativo certo para o seu projeto, seja em design, vídeo ou animação.",
    action: { label: "Explorar Vitrine de profissionais" },
  },
  {
    id: "design",
    icon: PenTool,
    title: "Design que valoriza",
    description:
      "Visual moderno, com as cores da sua marca, que passa confiança logo de cara.",
    action: { label: "Ver exemplos de layout" },
  },
  {
    id: "ajustes-e-cuidado",
    icon: Wrench,
    title: "Ajustes e cuidado",
    description:
      "Acompanhamos a página depois de publicada e fazemos melhorias quando precisar.",
    action: { label: "Entre em contato conosco" },
  },
];

const portfolioExamples = [
  {
    title: "Cozinha planejada",
    image: kitchenImage,
    alt: "Cozinha com armários de madeira clara e bancada em L",
  },
  {
    title: "Estante sob medida",
    image: shelvesImage,
    alt: "Estante de madeira com prateleiras e painel para televisão",
  },
  {
    title: "Balcão comercial",
    image: counterImage,
    alt: "Balcão de madeira ripada com prateleiras atrás",
  },
];

function LandingPageInfo() {
  return (
    <section
      id={landingPageInfoId}
      className="landing-page-info"
      aria-labelledby="landing-page-info-title"
      tabIndex={-1}
    >
      <div className="container">
        <div className="landing-page-info-intro">
          <h2 id="landing-page-info-title">O que é uma landing page?</h2>
          <p>
            É uma página feita para mostrar o que você oferece e indicar o
            próximo passo.
          </p>
        </div>
        <div className="landing-page-info-layout">
          <figure className="landing-page-example">
            <div className="landing-page-example-screen">
              <div className="landing-page-example-toolbar">
                <span className="landing-page-example-dots" aria-hidden="true" />
                Marcos Móveis Sob Medida
              </div>
              <div className="landing-page-example-content">
                <h3>Veja alguns dos meus trabalhos</h3>
                <ul className="landing-page-projects">
                  {portfolioExamples.map(({ title, image, alt }) => (
                    <li key={title}>
                      <img
                        src={image}
                        alt={alt}
                        width={640}
                        height={480}
                        loading="lazy"
                        decoding="async"
                      />
                      <span>{title}</span>
                    </li>
                  ))}
                </ul>
                <div className="landing-page-example-quote">
                  <h4>Quer um móvel assim?</h4>
                  <div className="landing-page-example-fields">
                    <div className="landing-page-example-field">
                      Seu nome
                      <span className="landing-page-example-field-box" aria-hidden="true" />
                    </div>
                    <div className="landing-page-example-field">
                      Seu WhatsApp
                      <span className="landing-page-example-field-box" aria-hidden="true" />
                    </div>
                  </div>
                  <span className="landing-page-example-cta">Pedir orçamento</span>
                </div>
              </div>
            </div>
            <figcaption>Exemplo ilustrativo. Não é um formulário real.</figcaption>
          </figure>
          <div className="landing-page-info-copy">
            <h3>01 — Da vitrine à oportunidade</h3>
            <p>
            Marcos apresenta seus móveis em uma página personalizada. Os visitantes podem conhecer seus
            trabalhos e solicitar um orçamento diretamente pelo site.
            </p>
            <dl className="landing-page-outcomes">
              <div>
                <dt>02 — O que é uma conversão?</dt>
                <dd>Quando um visitante realiza uma ação desejada, como solicitar um orçamento, ele gera uma conversão</dd>
              </div>
              <div>
                <dt>03 — O que é um lead?</dt>
                <dd>É um potencial cliente que demonstrou interesse em um produto ou serviço e forneceu informações para contato.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <>
      <section
        id="servicos"
        className="services-section"
        aria-labelledby="services-title"
      >
        <div className="container">
          <div className="services-intro">
            <h2 id="services-title">O que a Vitrine faz pelo seu negócio</h2>
            <p>
              Tudo o que você precisa para ter presença online de verdade, em
              uma única página.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ id, ...service }) => (
              <ServiceCard key={id} {...service} />
            ))}
          </div>
        </div>
      </section>
      <LandingPageInfo />
    </>
  );
}

export default Services;
