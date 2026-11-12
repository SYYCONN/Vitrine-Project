function ServiceCard({ icon: Icon, title, badge, description, action }) {
  return (
    <article className="service-card">
      {(Icon || badge) && (
        <div className="service-card-header">
          {Icon && (
            <span className="service-card-icon" aria-hidden="true">
              <Icon size={28} strokeWidth={1.8} />
            </span>
          )}
          {badge && <span className="service-card-badge">{badge}</span>}
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {action &&
        (action.href ? (
          <a className="service-card-action" href={action.href}>
            {action.label}
          </a>
        ) : (
          <button className="service-card-action" type="button" disabled>
            {action.label}
          </button>
        ))}
    </article>
  );
}

export default ServiceCard;
