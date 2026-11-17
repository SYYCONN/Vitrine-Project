import {
  ClipboardList,
  CodeXml,
  FolderUp,
  MessageCircle,
  Palette,
  PencilLine,
  Rocket,
  Wrench,
} from "lucide-react";
import "../styles/Process.css";

const phases = [
  {
    title: "Conversa",
    steps: [
      {
        Icon: MessageCircle,
        title: "Primeiro contato",
        text: "Você entra em contato com a Vitrine e conta um pouco sobre o seu negócio.",
      },
      {
        Icon: ClipboardList,
        title: "O que você precisa",
        text: "Conversamos sobre seus produtos ou serviços, seu público e o que a página precisa mostrar.",
      },
    ],
  },
  {
    title: "Materiais",
    steps: [
      {
        Icon: FolderUp,
        title: "Envio de arquivos",
        text: "Você envia o logo, as fotos e os textos que quer usar na página.",
      },
      {
        Icon: Palette,
        title: "Identidade visual",
        text: (
          <>
            Você escolhe as cores, o estilo e um{" "}
            <a href="#layouts">modelo de layout</a> como ponto de partida.
          </>
        ),
      },
    ],
  },
  {
    title: "Criação",
    steps: [
      {
        Icon: CodeXml,
        title: "Desenvolvimento",
        text: "Os estudantes da Vitrine criam a página com base no que foi combinado.",
      },
      {
        Icon: PencilLine,
        title: "Revisão",
        text: "Você vê a primeira versão e pede os ajustes que achar necessários.",
      },
    ],
  },
  {
    title: "No ar",
    steps: [
      {
        Icon: Rocket,
        title: "Publicação",
        text: "A página vai para a internet e seus clientes passam a falar com você pelo WhatsApp.",
      },
      {
        Icon: Wrench,
        title: "Acompanhamento",
        text: "Seguimos acompanhando a página e fazemos melhorias quando precisar.",
      },
    ],
  },
];

function Process() {
  return (
    <section id="processo" className="process-section" aria-labelledby="process-title">
      <div className="container">
        <div className="process-intro">
          <span className="section-title">Como funciona</span>
          <h2 id="process-title">Do primeiro contato à página no ar</h2>
          <p>Veja o caminho que a sua landing page percorre, etapa por etapa.</p>
        </div>

        <ol className="process-map">
          {phases.map(({ title, steps }, phaseIndex) => (
            <li key={title} className="process-phase">
              <div className="process-node">
                <span className="process-number" aria-hidden="true">{phaseIndex + 1}</span>
                <h3>
                  <span className="visually-hidden">Fase {phaseIndex + 1}: </span>
                  {title}
                </h3>
              </div>
              <ul className="process-steps">
                {steps.map(({ Icon, title: stepTitle, text }) => (
                  <li key={stepTitle} className="process-step">
                    <span className="process-icon" aria-hidden="true"><Icon size={20} /></span>
                    <div>
                      <h4>{stepTitle}</h4>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
