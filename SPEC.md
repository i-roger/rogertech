# RogerTech — Especificação do Projeto

## Visão Geral

Landing page institucional para a **RogerTech**, empresa de soluções digitais (desenvolvimento web, SaaS, mobile, TI). Single-page application construída com **Next.js 16 (App Router)**, **React 19**, **TypeScript 5** e **TailwindCSS v4**.

Única rota: `/inicio` (raiz `/` redireciona permanentemente).

---

## Estrutura de Arquivos (após refatoração)

```
app/
├── globals.css          # Estilos globais (Tailwind + body)
├── layout.tsx           # Root layout (JetBrains Mono, html/body)
└── inicio/
    └── page.tsx          # Página principal (28 linhas, só composição)

components/
├── ui/
│   ├── sectionBadge.tsx  # Badge de seção (indigo/emerald)
│   └── sectionTitle.tsx  # Título h2 reutilizável
├── header/
│   └── header.tsx        # Nav sticky + status do sistema + menu mobile
├── hero/
│   ├── hero.tsx          # Seção hero (título, CTAs, métricas)
│   └── systemDashboard.tsx # Painel direito (progress bars, logs)
├── services/
│   ├── servicesSection.tsx # Grade de 5 cards de serviço
│   └── serviceCard.tsx   # Card individual com cores configuráveis
├── analytics/
│   ├── analyticsSection.tsx # Tabela comparativa de métricas
│   └── comparisonTable.tsx  # Tabela genérica reutilizável
├── comparison/
│   └── diagnosticsComparison.tsx # Tabela Completo vs Básico
├── portfolio/
│   ├── portfolioSection.tsx  # Orquestrador com estado
│   ├── projectSelector.tsx   # Lista de projetos (sidebar)
│   ├── projectViewer.tsx     # Detalhes do projeto selecionado
│   └── lighthouseMetric.tsx  # Círculo SVG de métrica Lighthouse
├── contact/
│   └── contactForm.tsx   # Formulário de contato → WhatsApp
└── footer/
    └── footer.tsx        # Marquee + copyright

lib/
├── types.ts             # Interface Project
├── data.tsx             # projectsData (3 projetos)
├── utils.ts             # scrollToSection()
└── hooks.ts             # useSystemTelemetry() — uptime/ping/logs simulados
```

---

## Layout e Navegação

| Seção | ID | Componente | Descrição |
|-------|----|------------|-----------|
| Header | — | `header/header.tsx` | Sticky top, logo + nav (5 links), status do sistema (uptime/ping), hamburger mobile |
| Hero | `hero` | `hero/hero.tsx` | Título com gradiente, métricas (100% mobile, <0.8s, +3x), 2 CTAs + dashboard |
| Serviços | `services` | `services/servicesSection.tsx` | Grid 5 cards: Landing Pages, SaaS, Mobile, Automação, Suporte TI |
| Analíticos | `analytics` | `analytics/analyticsSection.tsx` | Tabela RogerTech vs Convencionais (velocidade, conversão, SEO, segurança) |
| Diagnóstico | `diagnostics` | `comparison/diagnosticsComparison.tsx` | Tabela Completo vs Básico (diagnóstico de PC) |
| Portfólio | `portfolio` | `portfolio/portfolioSection.tsx` | Seletor de projetos + visualizador com métricas Lighthouse |
| Contato | `contact` | `contact/contactForm.tsx` | Formulário → WhatsApp (nome, contato, orçamento, descrição) |
| Footer | — | `footer/footer.tsx` | Marquee com status do sistema + copyright |

---

## Funcionalidades

- **Navegação suave**: `scrollToSection()` via `lib/utils.ts`
- **Telemetria simulada**: hook `useSystemTelemetry()` em `lib/hooks.ts` — atualiza uptime/ping a cada 1s e logs/dashboard a cada 4s
- **Formulário → WhatsApp**: gera mensagem formatada e abre `api.whatsapp.com/send`
- **Portfólio interativo**: seleção de projeto com visualização dinâmica de stack e métricas SVG
- **Responsividade**: layout adaptativo com menu mobile (hamburger) e grids responsivos
- **Design system próprio**: cores dark `#09090b`, accent indigo/emerald, tipografia JetBrains Mono

---

## Dependências

| Pacote | Versão | Uso |
|--------|--------|-----|
| `next` | ^16.2.3 | Framework React |
| `react` / `react-dom` | ^19.2.5 | Runtime |
| `tailwindcss` | ^4 | Estilização |
| `@tailwindcss/postcss` | ^4 | PostCSS plugin |
| `typescript` | ^5 | Tipagem estática |

---

# Todas as alterações realizadas

## 3. Correções de Bugs

| # | Problema | Causa | Correção | Arquivo |
|---|----------|-------|----------|---------|
| 1 | **Build quebrado** — `Expression expected` | `lib/data.ts` com JSX (`<>`) mas extensão `.ts` | Renomeado para `lib/data.tsx` | `lib/data.tsx` |
| 2 | **Botões e animação quebrados no mobile** | `content` do Tailwind escaneava apenas `./app/`, perdendo classes de `./components/` e `./lib/` | Adicionados paths `./components/**/*` e `./lib/**/*` | `tailwind.config.ts` |
| 3 | **Dev server inacessível do celular via IP local** | `allowedDevOrigins` aninhado dentro de `redirects` em vez da raiz do `nextConfig` | Movido `allowedDevOrigins` para o nível raiz | `next.config.ts` |
| 4 | **Hydration error com atributos `__gcr*`** | Extensão de navegador injetando `__gcr*` no DOM antes da hidratação do React | `suppressHydrationWarning` no `<html>`, `<form>`, `<input>`, `<select>`, `<textarea>` | `app/layout.tsx`, `components/contact/contactForm.tsx` |
| 5 | **Hydration error com `-webkit-text-size-adjust`** | Safari mobile injeta `style="-webkit-text-size-adjust: 100%"` no `<body>` | `suppressHydrationWarning` no `<body>` | `app/layout.tsx` |
| 6 | **Área branca no overscroll do mobile** | `body { background: #ededed }` (quase branco) conflitando com tema escuro `#09090b` | Alterado `background` para `#09090b` e removido `color: #171717` | `app/globals.css` |

---

## Como Rodar

```bash
npm install      # Instalar dependências
npm run dev      # Desenvolvimento (localhost:3000)
npm run build    # Produção
npm start        # Servir produção
```
