function ProjectCard({ project, onOpen, onHover, onLeave }) {
  const { name, description, screenshots } = project;
  const [cover] = screenshots;

  return (
    <article className="projects-layout-card project-card" onPointerEnter={onHover} onPointerLeave={onLeave}>
      <div className="project-card-cover">
        <img src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} decoding="async" draggable={false} />
      </div>
      <div className="projects-layout-caption">
        <div><h3>{name}</h3><p>{description}</p></div>
        <button type="button" aria-label={`Ver projeto: ${name}`} aria-haspopup="dialog" onClick={onOpen}>Ver projeto</button>
      </div>
    </article>
  );
}

export default ProjectCard;
