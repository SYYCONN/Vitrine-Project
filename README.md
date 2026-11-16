# Vitrine

Landing page da **Vitrine**, um projeto de extensão de estudantes do **IFSP – Campus Bragança Paulista**. O projeto cria landing pages **gratuitas** para MEIs, microempresários e comércios da região, para que mais pessoas encontrem esses negócios na internet e entrem em contato pelo WhatsApp.

> 🚧 **Projeto em desenvolvimento.** Cabeçalho, Hero, Sobre, Serviços e Portfólio estão prontos. FAQ, Contato e Rodapé estão em construção.

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Lucide React](https://lucide.dev/) (ícones)
- CSS puro com variáveis (custom properties)
- Google Fonts: Bruno Ace e Lato
- ESLint
- Deploy contínuo no [Netlify](https://www.netlify.com/)

## Estrutura do projeto

```
Vitrine-Project/
├── public/                 # Arquivos estáticos copiados para a raiz do site (favicon, logo, fundo)
├── src/
│   ├── assets/             # Imagens usadas nos componentes (sempre importadas com import)
│   ├── components/         # Componentes reutilizáveis
│   │   ├── header.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ProjectCard.jsx
│   │   └── FAQItem.jsx
│   ├── sections/           # Seções da página, na ordem em que aparecem
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── global.css      # Paleta de cores, fontes, base, cabeçalho, Hero e classes compartilhadas
│   │   ├── About.css       # Um arquivo de estilo por seção
│   │   ├── Services.css
│   │   ├── Projects.css
│   │   ├── FAQ.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx             # Monta as seções na ordem da página
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior.

```bash
# Clone o repositório
git clone https://github.com/SYYCONN/Vitrine-Project.git
cd Vitrine-Project

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5150`.

## Scripts

| Comando           | Descrição                                     |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento          |
| `npm run build`   | Gera a versão de produção na pasta `dist/`    |
| `npm run preview` | Serve localmente a versão de produção gerada  |
| `npm run lint`    | Executa o ESLint no projeto                   |

## Deploy

O site é publicado automaticamente pelo Netlify a cada push na branch `main`. O Netlify roda `npm run build` e publica a pasta `dist/`, por isso a `dist/` não é versionada no Git.

## Como contribuir

- Cada tarefa é feita em uma branch `feature/*` e entra na `main` por Pull Request.
- Antes de começar, atualize a branch com `git pull origin main`.
- Cada seção tem o próprio arquivo CSS em `src/styles/`, importado dentro do componente.
- Use o nome da seção como prefixo das classes (`about-…`, `services-…`, `faq-…`) para evitar conflitos.
- Para etiquetas de seção e palavras em destaque nos títulos, use as classes compartilhadas `.section-title` e `.highlight-text`.
- Imagens em `src/assets/` devem ser importadas (`import foto from "../assets/foto.png"`); arquivos em `public/` são referenciados com caminho a partir da raiz (`/icon-vitrine.png`).
- Rode `npm run lint` e `npm run build` antes de abrir o Pull Request.
- Não edite `App.jsx` ou `global.css` sem combinar com o responsável pelo projeto.

## Paleta de cores

As cores estão definidas como variáveis em `src/styles/global.css`:

| Variável       | Cor       |
| -------------- | --------- |
| `--color-p`    | `#fdfcf6` |
| `--color-s`    | `#59d9e4` |
| `--color-t`    | `#35b5fe` |
| `--color-q`    | `#5571ff` |
| `--color-qi`   | `#0c57b1` |
| `--color-sx`   | `#23231c` |

## Roadmap

- [x] Cabeçalho com navegação e rolagem suave
- [x] Seção Hero com chamadas para ação e benefícios
- [x] Seção Sobre
- [x] Seção Serviços
- [x] Seção Portfólio
- [ ] Seção FAQ
- [ ] Seção Contato
- [ ] Rodapé
- [ ] Definir as seções Processo e Depoimentos (presentes no menu)
- [ ] Layout responsivo para celular e tablet
- [x] Deploy

## Licença

Este projeto ainda não possui uma licença definida.
