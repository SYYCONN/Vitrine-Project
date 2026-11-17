import FAQItem from "../components/FAQItem.jsx";
import "../styles/FAQ.css";

const questions = [
  {
    question: "A Vitrine é mesmo gratuita?",
    answer: (
      <p>
        Sim. A Vitrine é um projeto de extensão do IFSP – Campus Bragança
        Paulista, e a criação da landing page não tem nenhum custo para o
        empreendedor.
      </p>
    ),
  },
  {
    question: "Quem pode solicitar uma página?",
    answer: (
      <p>
        MEIs, microempresários e comércios da região de Bragança Paulista que
        querem ser encontrados na internet.
      </p>
    ),
  },
  {
    question: "Quem cria as páginas?",
    answer: (
      <p>
        Estudantes do IFSP – Campus Bragança Paulista, que usam o que aprendem
        no curso para apoiar os negócios da região.
      </p>
    ),
  },
  {
    question: "O que é uma landing page?",
    answer: (
      <p>
        É uma página única, pensada para apresentar o seu negócio e levar o
        visitante a entrar em contato com você.{" "}
        <a href="#o-que-e-uma-landing-page">Entenda melhor como funciona</a>.
      </p>
    ),
  },
  {
    question: "Posso escolher o visual da minha página?",
    answer: (
      <p>
        Sim. A página é feita sob medida, com as cores da sua marca. Você pode
        se inspirar nos <a href="#layouts">modelos de layout</a> e nos{" "}
        <a href="#portfolio">projetos do portfólio</a>.
      </p>
    ),
  },
  {
    question: "O que é a rede de profissionais?",
    answer: (
      <p>
        É um espaço para encontrar o talento criativo certo para o seu
        projeto, seja em design, vídeo ou animação.
      </p>
    ),
  },
  {
    question: "Como os clientes vão falar comigo?",
    answer: (
      <p>
        A página leva o visitante direto para o seu WhatsApp, para que ele
        possa tirar dúvidas, pedir um orçamento ou fazer um pedido.
      </p>
    ),
  },
  {
    question: "A página pode ser alterada depois de publicada?",
    answer: (
      <p>
        Pode. Acompanhamos a página depois de publicada e fazemos melhorias
        quando for preciso.
      </p>
    ),
  },
];

const half = Math.ceil(questions.length / 2);
const columns = [questions.slice(0, half), questions.slice(half)];

function FAQ() {
  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq-intro">
          <span className="section-title">Dúvidas</span>
          <h2 id="faq-title">Perguntas frequentes</h2>
          <p>Tudo o que você precisa saber antes de pedir a sua página.</p>
        </div>
        <div className="faq-list">
          {columns.map((column, index) => (
            <div key={index} className="faq-column">
              {column.map(({ question, answer }) => (
                <FAQItem key={question} question={question}>
                  {answer}
                </FAQItem>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
