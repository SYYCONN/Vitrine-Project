import '../styles/global.css'

function Header(){
    return (
        <header>
            <div className="header-content">
                <div className="header-logo">
                    <img src='./public/icon-vitrine.png' />
                </div>
                <nav className="header-actions">
                    <a>SOBRE</a>
                    <a href="#servicos">SERVIÇOS</a>
                    <a>PROCESSO</a>
                    <a>PORTFÓLIO</a>
                    <a>DEPOIMENTOS</a>
                </nav>
                <div className="header-btn">
                    <button>Solicitar Contato</button>
                </div>
            </div>
        </header>
    )
}

export default Header