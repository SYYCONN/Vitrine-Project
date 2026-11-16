import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "../components/ProjectCard.jsx";
import nicacioBodyart from "../assets/nicacio-bodyart.jpeg";
import observaInicio from "../assets/observa-poder-inicio.png";
import observaRepresentantes from "../assets/observa-poder-representantes.png";
import observaGovernadores from "../assets/observa-poder-governadores.png";
import observaPartidos from "../assets/observa-poder-partidos.png";
import observaProjetos from "../assets/observa-poder-projetos.png";
import observaVotacoes from "../assets/observa-poder-votacoes.png";
import "../styles/Projects.css";

const projects = [
  {
    id: "nicacio-bodyart",
    name: "Nicácio Bodyart",
    description: "Landing page · Tatuagens autorais",
    screenshots: [{
      src: nicacioBodyart,
      alt: "Página inicial do Nicácio Bodyart com fundo de estúdio e a frase Arte que você carrega.",
      width: 1600,
      height: 875,
    }],
  },
  {
    id: "observa-poder",
    name: "Observa Poder",
    description: "Portal de dados públicos · Representantes, projetos e votações",
    screenshots: [
      [observaInicio, "Página inicial com busca e destaque de registros da Câmara"],
      [observaRepresentantes, "Consulta de deputados federais com filtros e lista de representantes"],
      [observaGovernadores, "Página de governadores com aviso de consulta em preparação"],
      [observaPartidos, "Página de partidos e seus membros com aviso de consulta em preparação"],
      [observaProjetos, "Consulta de projetos e proposições com filtros por casa legislativa, ano e tipo"],
      [observaVotacoes, "Consulta de votações com filtros de ano, resultado e modalidade"],
    ].map(([src, alt]) => ({ src, alt, width: 1233, height: 884 })),
  },
];

const layouts = [
  { id: "left", label: "Destaque à esquerda", description: "Texto à esquerda, destaque à direita" },
  { id: "editorial", label: "Editorial", description: "Contornos tracejados e galeria" },
  { id: "center", label: "Centralizado", description: "Título e conteúdo no centro" },
  { id: "right", label: "Destaque à direita", description: "Destaque à esquerda, texto à direita" },
  { id: "banner", label: "Faixa panorâmica", description: "Abertura em faixa horizontal" },
  { id: "mosaic", label: "Mosaico", description: "Blocos de tamanhos diferentes" },
  { id: "sidebar", label: "Menu lateral", description: "Menu organizado na lateral" },
  { id: "steps", label: "Passo a passo", description: "Conteúdo em sequência de etapas" },
  { id: "bands", label: "Faixas alternadas", description: "Blocos alternados de texto e destaque" },
];

const generalNav = [
  ["home", "Home"], ["about", "Sobre"], ["services", "Serviços"],
  ["work", "Portfólio"], ["blog", "Blog"], ["contact", "Contato"],
];
const editorialNav = [["about", "Sobre"], ["services", "Estilos"], ["work", "Galeria"]];
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam volutpat, purus sit amet luctus venenatis, lectus magna fringilla nisi.";


const demoArticles = [
  { title: "Como apresentar seu trabalho", intro: "Organize a apresentação para ajudar quem visita a entender o que você faz.", body: "Abra com uma frase clara, mostre um exemplo e indique um próximo passo. No portfólio, explique o desafio e o resultado de cada trabalho." },
  { title: "O que colocar no seu portfólio", intro: "Escolha trabalhos que mostrem como você pensa e o que você entrega.", body: "Para cada trabalho, apresente a proposta, explique uma decisão importante e mostre o resultado. Poucos exemplos bem explicados já ajudam a contar sua história." },
  { title: "Como facilitar o primeiro contato", intro: "Deixe claro como tirar dúvidas, pedir um orçamento ou agendar uma conversa.", body: "Coloque os canais de atendimento em um lugar fácil de encontrar e diga o que a pessoa pode informar no primeiro contato." },
];

const demoWork = [
  ["Apresentação de um negócio", "Uma abertura direta destaca a proposta e leva o visitante aos serviços."],
  ["Vitrine de trabalhos", "Uma galeria organiza exemplos e dá espaço para explicar o processo de cada trabalho."],
  ["Página de apresentação", "Texto e áreas visuais se alternam para guiar a leitura em passos curtos."],
  ["Página de contato", "Os canais de atendimento aparecem junto das dúvidas mais comuns."],
  ["Página de lançamento", "Uma faixa ampla destaca a novidade e chama para conhecer a proposta."],
  ["Página de processo", "As etapas explicam o que acontece do primeiro contato até a entrega."],
];

const demoChannels = [
  { label: "WhatsApp", text: "Aqui ficaria o link para conversar pelo WhatsApp do negócio." },
  { label: "E-mail", text: "Aqui ficaria o endereço de e-mail do negócio para dúvidas e orçamentos." },
  { label: "Redes sociais", text: "Aqui ficariam os links dos perfis oficiais do negócio." },
];

const demoQuestions = [
  ["Como solicito um orçamento?", "Escolha um canal de atendimento e descreva o que você precisa, incluindo o prazo e referências, se tiver."],
  ["Quais informações devo enviar?", "Informe seu objetivo, o serviço de interesse e a melhor forma de entrar em contato com você."],
];

function WireframeDemoPanel({ className = "", section, title, children }) {
  return (
    <section className={`projects-wire-panel ${className}`} data-part={section} tabIndex={-1}>
      <h5 className="projects-wire-subtitle">{title}</h5>
      {children}
    </section>
  );
}

function WireframeBox({ className = "" }) {
  return (
    <span className={`projects-wire-box ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
        <path d="M0 0L100 100M100 0L0 100" vectorEffect="non-scaling-stroke" />
      </svg>
    </span>
  );
}

function LayoutWireframe({ type, interactive = false }) {
  const [more, setMore] = useState(false);
  const [allWorks, setAllWorks] = useState(false);
  const [activeWork, setActiveWork] = useState(null);
  const [notice, setNotice] = useState(false);
  const [activeChannel, setActiveChannel] = useState(null);
  const editorial = type === "editorial";
  const nav = editorial ? editorialNav : generalNav;
  const gallery = editorial ? "Galeria" : "Nossos trabalhos";
  const features = editorial ? ["Título 1", "Título 2", "Título 3"] :
    type === "steps" ? ["Planejamento", "Criação", "Revisão", "Entrega"] :
    ["Qualidade", "Inovação", "Compromisso", "Suporte"];
  const workCount = editorial ? 6 : 4;
  const serviceDetails = editorial ? [
    ["Minimalista", "Tipografia em destaque, espaços amplos e poucos elementos por seção."],
    ["Editorial", "Títulos em destaque, colunas de texto e uma galeria para guiar a leitura."],
    ["Mosaico", "Blocos com tamanhos diferentes para dar peso aos trabalhos principais."],
  ] : type === "steps" ? [
    ["Planejamento", "Entenda o objetivo e organize o conteúdo necessário para o projeto."],
    ["Criação e revisão", "Veja a primeira proposta e ajuste os detalhes antes de finalizar."],
    ["Entrega", "Receba o material pronto e as orientações para usar o que foi produzido."],
  ] : [
    ["Apresentação do negócio", "Explique seus diferenciais e ajude o visitante a entender o que você oferece."],
    ["Projeto personalizado", "Apresente o processo, as etapas e o que está incluído na entrega."],
    ["Acompanhamento", "Mostre como funciona o suporte depois da entrega e onde pedir ajuda."],
  ];

  function goTo(event, section) {
    const site = event.currentTarget.closest(".projects-wire");
    const target = site.querySelector(`[data-part="${section}"]`);
    if (!target) return;
    const viewport = site.parentElement;
    viewport.scrollTo({ top: target.getBoundingClientRect().top - viewport.getBoundingClientRect().top + viewport.scrollTop });
    target.focus({ preventScroll: true });
  }

  function action(label, onClick, options = {}) {
    const { className = "", ...props } = options;
    if (!interactive) return <span className={className}>{label}</span>;
    return <button type="button" className={className} onClick={onClick} {...props}>{label}</button>;
  }

  function jump(label, target, className = "projects-wire-action") {
    return action(label, (event) => goTo(event, target), { className });
  }

  function navItems(items) {
    return items.map(([target, label]) => (
      <span key={target}>{jump(label, target, "projects-wire-link")}</span>
    ));
  }

  return (
    <div className="projects-wire" data-layout={type} data-interactive={interactive || undefined}>
      <div className="projects-wire-nav" data-part="home" tabIndex={interactive ? -1 : undefined}>
        {jump(<>{!editorial && <WireframeBox />}<strong>Logo</strong></>, "home", "projects-wire-logo")}
        <div className="projects-wire-menu">
          {navItems(nav)}
          {jump(editorial ? "Entre em contato" : "Botão", "contact")}
        </div>
      </div>
      <div className="projects-wire-hero">
        <div className="projects-wire-copy">
          <strong className="projects-wire-title">{editorial ? "Título principal aqui" : <>Título principal<br />vai aqui</>}</strong>
          <p>{editorial ? "Texto de apoio vai aqui. Fale sobre seu trabalho, seu estilo e o que torna seu estúdio único." : lorem}</p>
          <div className="projects-wire-actions">
            {jump(editorial ? "Entre em contato" : "Botão principal", "contact")}
            {jump(editorial ? "Ver galeria" : "Saiba mais", editorial ? "work" : "about")}
          </div>
        </div>
        {type === "steps" ? (
          <ol className="projects-wire-timeline">{features.map((title) => <li key={title}>{title}</li>)}</ol>
        ) : (
          <div className="projects-wire-visual">
            <WireframeBox />
            {type === "mosaic" && <><WireframeBox /><WireframeBox /></>}
          </div>
        )}
      </div>
      <div className="projects-wire-features" data-part="features" tabIndex={interactive ? -1 : undefined}>
        {features.map((title) => (
          <div key={title} className="projects-wire-feature">
            <WireframeBox />
            <div><strong>{title}</strong><p>{editorial ? "Texto curto descrevendo seu diferencial ou serviço." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p></div>
          </div>
        ))}
      </div>
      {!editorial && (
        <div className="projects-wire-about" data-part="about" tabIndex={interactive ? -1 : undefined}>
          <WireframeBox />
          <div>
            <strong className="projects-wire-subtitle">Sobre nós</strong>
            <p>{lorem}</p>
            {action(more ? "Mostrar menos" : "Conheça mais", () => setMore(!more), { className: "projects-wire-action", "aria-expanded": more })}
            {more && <p>Esta área mostra onde entram a história, a missão e os diferenciais do negócio.</p>}
          </div>
        </div>
      )}

      {interactive && (
        <WireframeDemoPanel section="services" title={editorial ? "Estilos de trabalho" : "Nossos serviços"}>
          <p>{editorial ? "Explore propostas visuais e veja como mudam a composição da página." : "Conheça o que pode ser apresentado nesta área do site."}</p>
          <div className="projects-wire-panel-grid">
            {serviceDetails.map(([title, description]) => (
              <details key={title} className="projects-wire-disclosure">
                <summary>{title}</summary>
                <p>{description}</p>
                {jump(editorial ? "Ver galeria" : "Falar sobre este serviço", editorial ? "work" : "contact")}
              </details>
            ))}
          </div>
        </WireframeDemoPanel>
      )}
      <div className="projects-wire-work" data-part="work" tabIndex={interactive ? -1 : undefined}>
        <strong className="projects-wire-subtitle">{gallery}</strong>
        <div className="projects-wire-work-grid">
          {Array.from({ length: allWorks ? demoWork.length : workCount }, (_, index) => (
            <div key={index}>
              {action(<WireframeBox />, () => setActiveWork(activeWork === index ? null : index), {
                className: "projects-wire-work-button",
                "aria-label": `Ver trabalho ${index + 1}`,
                "aria-pressed": activeWork === index,
              })}
            </div>
          ))}
        </div>
        {activeWork !== null && (
          <div className="projects-wire-demo-detail" aria-live="polite">
            <strong>Trabalho {activeWork + 1} — {demoWork[activeWork][0]}</strong>
            <p>{demoWork[activeWork][1]}</p>
          </div>
        )}
        {!editorial && action(allWorks ? "Ver menos" : "Ver todos", () => {
          if (allWorks && activeWork >= workCount) setActiveWork(null);
          setAllWorks(!allWorks);
        }, { className: "projects-wire-action", "aria-expanded": allWorks })}
      </div>

      {interactive && !editorial && (
        <WireframeDemoPanel section="blog" title="Blog" className="projects-wire-blog">
          <p>Espaço para publicar novidades, dicas e bastidores do negócio.</p>
          <div className="projects-wire-panel-grid">
            {demoArticles.map(({ title, intro, body }) => (
              <details key={title} className="projects-wire-disclosure">
                <summary>{title}</summary>
                <p>{intro}</p>
                <p>{body}</p>
              </details>
            ))}
          </div>
          {jump("Receber novidades", "news")}
        </WireframeDemoPanel>
      )}
      {editorial ? (
        <div className="projects-wire-about" data-part="about" tabIndex={interactive ? -1 : undefined}>
          <WireframeBox /><div><strong className="projects-wire-subtitle">Sobre o estúdio</strong><p>{lorem}</p></div>
        </div>
      ) : (
        <div className="projects-wire-news" data-part="news" tabIndex={interactive ? -1 : undefined}>
          <WireframeBox />
          <div><strong>Receba novidades</strong><p>Cadastre-se e receba conteúdos exclusivos por e-mail.</p></div>
          <span className="projects-wire-field">Seu melhor e-mail</span>
          {action(notice ? "Limpar teste" : "Enviar", () => setNotice(!notice), { className: "projects-wire-action" })}
          {notice && <p className="projects-wire-feedback" role="status">Envio simulado. Nenhum e-mail foi coletado ou enviado.</p>}
        </div>
      )}

      {interactive && (
        <WireframeDemoPanel section="contact" title="Entre em contato" className="projects-wire-contact">
          <p>Escolha um canal para ver como seria o atendimento nesta página de exemplo.</p>
          <div className="projects-wire-actions" role="group" aria-label="Canais de atendimento">
            {demoChannels.map(({ label }, index) => (
              <button
                key={label}
                type="button"
                className="projects-wire-action"
                aria-pressed={activeChannel === index}
                onClick={() => setActiveChannel(index)}
              >
                {label}
              </button>
            ))}
          </div>
          {activeChannel !== null && <p className="projects-wire-demo-detail" role="status">{demoChannels[activeChannel].text}</p>}
          <h5 className="projects-wire-subtitle">Dúvidas frequentes</h5>
          <div className="projects-wire-panel-grid">
            {demoQuestions.map(([question, answer]) => (
              <details key={question} className="projects-wire-disclosure">
                <summary>{question}</summary><p>{answer}</p>
              </details>
            ))}
          </div>
        </WireframeDemoPanel>
      )}
      <div className="projects-wire-footer">
        <div><div className="projects-wire-logo"><WireframeBox /><strong>Logo</strong></div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
        <div><strong>Navegação</strong>{navItems(nav)}</div>
        <div><strong>Institucional</strong>{navItems([["about", "Quem somos"], ["services", editorial ? "Nossos estilos" : "Nossos serviços"]])}</div>
        <div><strong>Redes sociais</strong>{interactive
          ? jump("Ver canais", "contact", "projects-wire-link")
          : <div className="projects-wire-social"><WireframeBox /><WireframeBox /><WireframeBox /></div>}</div>
        <div><strong>Contato</strong><p>Dados de contato do negócio</p><p>Rua Exemplo, 123</p>{jump("Voltar ao início", "home", "projects-wire-link")}</div>
      </div>
    </div>
  );
}

function LayoutCard({ layout, onOpen, onHover, onLeave }) {
  return (
    <article className="projects-layout-card" onPointerEnter={onHover} onPointerLeave={onLeave}>
      <div className="projects-layout-cover" aria-hidden="true">
        <LayoutWireframe type={layout.id} />
      </div>
      <div className="projects-layout-caption">
        <div><h4>{layout.label}</h4><p>{layout.description}</p></div>
        <button type="button" aria-label={`Ver modelo: ${layout.label}`} aria-haspopup="dialog" onClick={onOpen}>Ver modelo</button>
      </div>
    </article>
  );
}

function isLayoutBackdrop(event) {
  if (event.target !== event.currentTarget) return false;

  const { left, right, top, bottom } = event.currentTarget.getBoundingClientRect();
  return event.clientX < left || event.clientX > right ||
    event.clientY < top || event.clientY > bottom;
}

function GalleryTrack({ id, titleId, portfolio = false, children }) {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;

    function updateEdges() {
      const start = track.scrollLeft <= 1;
      const end = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
      setEdges((current) => current.start === start && current.end === end ? current : { start, end });
    }

    const observer = new ResizeObserver(updateEdges);
    observer.observe(track);
    updateEdges();
    track.addEventListener("scroll", updateEdges, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", updateEdges);
    };
  }, []);

  function shiftLayout(direction) {
    const track = trackRef.current;
    const [first, second] = track.children;
    if (!second) return;
    track.scrollBy({ left: direction * (second.offsetLeft - first.offsetLeft) });
  }

  const canScroll = !(edges.start && edges.end);

  return (
    <div className={`projects-layout-gallery${portfolio ? " projects-portfolio-gallery" : ""}`} role="group" aria-labelledby={titleId}>
      <button
        type="button"
        className="projects-layout-arrow projects-layout-prev"
        aria-label="Rolar para a esquerda"
        aria-controls={id}
        hidden={!canScroll}
        aria-disabled={edges.start}
        onClick={() => { if (!edges.start) shiftLayout(-1); }}
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>
      <div id={id} className="projects-layout-track" ref={trackRef}>{children}</div>
      <button
        type="button"
        className="projects-layout-arrow projects-layout-next"
        aria-label="Rolar para a direita"
        aria-controls={id}
        hidden={!canScroll}
        aria-disabled={edges.end}
        onClick={() => { if (!edges.end) shiftLayout(1); }}
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>
    </div>
  );
}

function useGalleryPreview() {
  const dialogRef = useRef(null);
  const hoverTimer = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected && !dialog.open) dialog.showModal();
  }, [selected]);

  useEffect(() => () => window.clearTimeout(hoverTimer.current), []);

  function cancelHover() {
    window.clearTimeout(hoverTimer.current);
  }

  function open(item) {
    cancelHover();
    setSelected(item);
  }

  function hover(event, item) {
    if (event.pointerType !== "mouse" || dialogRef.current.open) return;
    cancelHover();
    hoverTimer.current = window.setTimeout(() => open(item), 420);
  }

  return { dialogRef, selected, open, hover, cancelHover, clear: () => setSelected(null) };
}

function GalleryPreview({ preview, id, title, description, children }) {
  const { dialogRef, clear } = preview;
  const startedOnBackdrop = useRef(false);

  return (
    <dialog
      ref={dialogRef}
      className="projects-layout-dialog"
      aria-labelledby={id}
      onPointerDown={(event) => { startedOnBackdrop.current = isLayoutBackdrop(event); }}
      onPointerCancel={() => { startedOnBackdrop.current = false; }}
      onClick={(event) => {
        if (startedOnBackdrop.current && isLayoutBackdrop(event)) event.currentTarget.close();
        startedOnBackdrop.current = false;
      }}
      onClose={clear}
    >
      {preview.selected && (
        <>
          <div className="projects-layout-dialog-heading">
            <div>
              <h4 id={id}>{title}</h4>
              {description && <p>{description}</p>}
            </div>
            <button type="button" onClick={() => dialogRef.current.close()}>Fechar</button>
          </div>
          <div className="projects-layout-scroll" role="region" aria-label={title} tabIndex={0}>
            {children}
          </div>
        </>
      )}
    </dialog>
  );
}

function LayoutGallery() {
  const preview = useGalleryPreview();

  return (
    <div className="projects-layouts" id="layouts" tabIndex={-1}>
      <div>
        <h3 id="projects-layouts-title">Layouts</h3>
        <p id="projects-layouts-hint" className="projects-layout-hint">
          Passe o mouse sobre um modelo ou escolha “Ver modelo” para testar a página.
        </p>
      </div>
      <GalleryTrack id="projects-layout-track" titleId="projects-layouts-title">
        {layouts.map((layout) => (
          <LayoutCard
            key={layout.id}
            layout={layout}
            onOpen={() => preview.open(layout)}
            onHover={(event) => preview.hover(event, layout)}
            onLeave={preview.cancelHover}
          />
        ))}
      </GalleryTrack>
      <GalleryPreview preview={preview} id="projects-layout-dialog-title" title={preview.selected?.label}>
        {preview.selected && <LayoutWireframe key={preview.selected.id} type={preview.selected.id} interactive />}
      </GalleryPreview>
    </div>
  );
}

function PortfolioGallery() {
  const preview = useGalleryPreview();

  return (
    <div className="projects-portfolio">
      <GalleryTrack id="projects-portfolio-track" titleId="projects-title" portfolio>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => preview.open(project)}
            onHover={(event) => preview.hover(event, project)}
            onLeave={preview.cancelHover}
          />
        ))}
        <div className="projects-layout-card projects-coming-soon">
          <div className="projects-coming-cover"><span aria-hidden="true">+</span></div>
          <div className="projects-layout-caption">
            <div><p className="projects-coming-title">Mais em breve...</p><p>Novos projetos da Vitrine aparecerão aqui.</p></div>
          </div>
        </div>
      </GalleryTrack>
      <GalleryPreview
        preview={preview}
        id="projects-portfolio-dialog-title"
        title={preview.selected?.name}
        description={preview.selected?.description}
      >
        {preview.selected?.screenshots.map(({ src, alt, width, height }, index) => (
          <img className="projects-portfolio-capture" key={src} src={src} alt={alt} width={width} height={height} decoding="async" loading={index > 0 ? "lazy" : "eager"} />
        ))}
      </GalleryPreview>
    </div>
  );
}

function Projects() {
  return (
    <section id="portfolio" className="projects-section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Portfólio da Vitrine</h2>
        <p className="projects-layout-hint projects-portfolio-hint">Projetos desenvolvidos pela Vitrine.</p>
        <PortfolioGallery />
        <LayoutGallery />
      </div>
    </section>
  );
}

export default Projects;
