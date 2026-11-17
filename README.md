# Vitrine

Landing page da **Vitrine**, um projeto de extensão de estudantes do **IFSP – Campus Bragança Paulista**. O projeto cria landing pages **gratuitas** para MEIs, microempresários e comércios da região, para que mais pessoas encontrem esses negócios na internet e entrem em contato pelo WhatsApp.

> 🚧 **Projeto em desenvolvimento.** Todas as seções da página estão prontas, com versão para celular e tablet. Falta a seção de Depoimentos, que depende de depoimentos reais dos primeiros empreendedores atendidos.

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Lucide React](https://lucide.dev/) (ícones)
- CSS puro com variáveis (custom properties)
- Google Fonts: Bruno Ace e Lato
- ESLint
- Deploy contínuo e formulário de contato no [Netlify](https://www.netlify.com/) (Netlify Forms)

## Estrutura do projeto

```
Vitrine-Project/
├── public/                 # Arquivos estáticos copiados para a raiz do site (favicon, logo, fundo)
├── src/
│   ├── assets/             # Imagens usadas nos componentes (sempre importadas com import)
│   ├── components/         # Componentes reutilizáveis
│   │   ├── header.jsx      # Cabeçalho (menu ☰ em telas até 1100px)
│   │   ├── ServiceCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── FAQItem.jsx
│   │   ├── ContactModal.jsx # Modal com o formulário de contato (Netlify Forms)
│   │   └── Select.jsx      # Select próprio e acessível, usado no formulário
│   ├── hooks/
│   │   └── useCleanHashLinks.js # Links internos (#secao) sem deixar o # na URL
│   ├── sections/           # Seções da página, na ordem em que aparecem
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx    # Serviços e "O que é uma Landing Page?"
│   │   ├── Process.jsx     # Mapa do processo, do primeiro contato à página no ar
│   │   ├── Projects.jsx    # Portfólio e modelos de layout
│   │   ├── FAQ.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── global.css      # Paleta, fontes, base, cabeçalho, Hero, divisória entre seções e classes compartilhadas
│   │   ├── About.css       # Um arquivo de estilo por seção ou componente
│   │   ├── Services.css
│   │   ├── Process.css
│   │   ├── Projects.css
│   │   ├── FAQ.css
│   │   ├── Contact.css     # Modal de contato
│   │   ├── Select.css
│   │   └── Footer.css
│   ├── App.jsx             # Monta as seções na ordem da página
│   └── main.jsx
├── index.html              # Inclui a cópia escondida do formulário para o Netlify
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

## Formulário de contato

Todos os botões de contato do site abrem o mesmo modal ([`ContactModal.jsx`](src/components/ContactModal.jsx)). Os envios vão para o **Netlify Forms**, e o Netlify repassa cada um por e-mail.

- **Para um botão ou link abrir o modal**, adicione o atributo `data-contact` com o assunto que deve vir escolhido: `landing-page`, `profissionais` ou `duvida`. Exemplo: `<button type="button" data-contact="landing-page">Fale conosco</button>`.
- **O Netlify só reconhece o formulário pela cópia escondida no [`index.html`](index.html)**, porque o React monta a página depois. Se adicionar, remover ou renomear um campo no modal, faça o mesmo no `index.html`.
- **No servidor local (`npm run dev`) o envio sempre mostra erro**, porque não há Netlify por trás. Teste o envio no site publicado.
- **Envios e notificações** ficam no painel do Netlify, em **Forms**. O e-mail que recebe os pedidos é configurado em **Forms → Form submission notifications**.

## Como contribuir

- Cada tarefa é feita em uma branch `feature/*` e entra na `main` por Pull Request.
- Antes de começar, atualize a branch com `git pull origin main`.
- Cada seção tem o próprio arquivo CSS em `src/styles/`, importado dentro do componente.
- Use o nome da seção como prefixo das classes (`about-…`, `services-…`, `faq-…`) para evitar conflitos.
- Para etiquetas de seção e palavras em destaque nos títulos, use as classes compartilhadas `.section-title` e `.highlight-text`.
- A linha divisória entre seções é automática: toda `<section>` dentro de `<main>`, exceto a primeira, ganha a linha (cor em `--section-line`). Não crie bordas próprias entre seções.
- Links internos usam `href="#id-da-secao"` normalmente. O hook `useCleanHashLinks` cuida da rolagem e de manter a URL limpa.
- Teste no celular: o site não pode rolar para os lados em nenhuma largura a partir de 320px.
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

Também em `global.css`, `--section-line` define a cor das linhas divisórias. O rodapé usa um azul-marinho próprio, derivado de `--color-qi`, definido em `Footer.css`.

## Roadmap

- [x] Cabeçalho com navegação e rolagem suave
- [x] Seção Hero com chamadas para ação e benefícios
- [x] Seção Sobre
- [x] Seção Serviços
- [x] Seção Processo
- [x] Seção Portfólio, com modal de projetos e modelos de layout
- [x] Seção FAQ
- [x] Contato por formulário (modal + Netlify Forms)
- [x] Rodapé
- [x] Layout responsivo para celular e tablet
- [x] Deploy
- [ ] Seção Depoimentos (quando houver depoimentos reais, com autorização dos clientes, e voltar o link ao menu)
- [ ] Canais de contato diretos (WhatsApp, e-mail, redes sociais) no rodapé

## Licença

Este projeto ainda não possui uma licença definida.
