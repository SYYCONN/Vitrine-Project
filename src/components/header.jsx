import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import '../styles/global.css'

const links = [
    { href: "#sobre", label: "SOBRE" },
    { href: "#servicos", label: "SERVIÇOS" },
    { href: "#processo", label: "PROCESSO" },
    { href: "#portfolio", label: "PORTFÓLIO" },
    { href: "#faq", label: "FAQ" },
];

function Header(){
    const [open, setOpen] = useState(false);
    const headerRef = useRef(null);

    // No celular, fecha o menu com Esc ou ao tocar fora dele
    useEffect(() => {
        if (!open) return;

        function onKeyDown(event) {
            if (event.key === "Escape") setOpen(false);
        }

        function onPointerDown(event) {
            if (!headerRef.current.contains(event.target)) setOpen(false);
        }

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("pointerdown", onPointerDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("pointerdown", onPointerDown);
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <header ref={headerRef} data-open={open || undefined}>
            <div className="header-content">
                <a href="#top" className="header-logo" aria-label="Vitrine, ir para o início">
                    <img src='/icon-vitrine.png' alt="Vitrine" />
                </a>
                <button
                    type="button"
                    className="header-toggle"
                    aria-expanded={open}
                    aria-controls="header-menu"
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                </button>
                <div id="header-menu" className="header-menu">
                    <nav className="header-actions">
                        {links.map(({ href, label }) => (
                            <a key={href} href={href} onClick={close}>{label}</a>
                        ))}
                    </nav>
                    <div className="header-btn">
                        <button type="button" data-contact="landing-page" onClick={close}>Solicitar Contato</button>
                    </div>
                </div>
                <ThemeToggle />
            </div>
        </header>
    )
}

export default Header
