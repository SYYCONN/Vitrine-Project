import { ArrowUp } from "lucide-react";
import "../styles/Footer.css";

const navigation = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#layouts", label: "Layouts" },
  { href: "#faq", label: "Perguntas frequentes" },
];

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" className="footer-logo" aria-label="Vitrine, voltar ao início">
              <img src="/icon-vitrine.png" alt="Vitrine" width="2172" height="724" />
            </a>
            <p>
              Landing pages gratuitas para MEIs, microempresários e comércios
              da região de Bragança Paulista.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="footer-links">
              {navigation.map(({ href, label }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} Vitrine · Projeto de extensão do IFSP – Campus Bragança Paulista
          </p>
          <a href="#top" className="footer-top">
            Voltar ao topo
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
