# Vitrine

Landing page institucional da **Vitrine**, um estúdio que cria landing pages estratégicas, com design atrativo, copy persuasiva e foco em conversão.

> 🚧 **Projeto em desenvolvimento.** O cabeçalho e a seção Hero estão prontos; as demais seções estão em construção.

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Lucide React](https://lucide.dev/) (ícones)
- CSS puro com variáveis (custom properties)
- Google Fonts: Bruno Ace e Lato
- ESLint

## Estrutura do projeto

```
vitrine/
├── public/                 # Arquivos estáticos (favicon, logo, imagem de fundo)
├── src/
│   ├── assets/             # Imagens usadas nos componentes
│   ├── components/         # Componentes reutilizáveis
│   │   ├── header.jsx
│   │   ├── FAQItem.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ServiceCard.jsx
│   ├── sections/           # Seções da página
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   └── global.css      # Estilos globais e paleta de cores
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou superior.

```bash
# Clone o repositório
git clone https://github.com/<seu-usuario>/vitrine.git
cd vitrine

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5177`.

## Scripts

| Comando           | Descrição                                     |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento          |
| `npm run build`   | Gera a versão de produção na pasta `dist/`    |
| `npm run preview` | Serve localmente a versão de produção gerada  |
| `npm run lint`    | Executa o ESLint no projeto                   |

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

- [x] Cabeçalho com navegação
- [x] Seção Hero com chamadas para ação e benefícios
- [ ] Seção Sobre
- [ ] Seção Serviços
- [ ] Seção Portfólio / Projetos
- [ ] Seção FAQ
- [ ] Seção Contato
- [ ] Rodapé
- [ ] Layout responsivo para dispositivos móveis
- [ ] Deploy

## Licença

Este projeto ainda não possui uma licença definida.
