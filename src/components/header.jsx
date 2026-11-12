import '../styles/global.css'

function Header(){
    return (
        <header>
            <div className="header-content">
                <div className="header-logo">
                    <img src='/icon-vitrine.png' />
                </div>
                <nav className="header-actions">
                    <a href="#sobre">SOBRE</a>
                    <a href="#servicos">SERVIÇOS</a>
                    <a href="#processo">PROCESSO</a>
                    <a href="#portifolio">PORTFÓLIO</a>
                    <a href="#depoimentos">DEPOIMENTOS</a>
                </nav>
                <div className="header-btn">
                    <button>Solicitar Contato</button>
                </div>
            </div>
        </header>
    )
}

export default Header