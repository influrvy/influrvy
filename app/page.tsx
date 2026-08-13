import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Influrvy Business | Soluções para negócios",
  description: "A frente Business da Influrvy conecta negócios a oportunidades digitais.",
};

const whatsappUrl = "https://wa.me/5511914288729";

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Influrvy Business, início">
          Influr<span>vy</span><small>Business</small>
        </a>
        <a className="nav-link" href="#como-funciona">Como funciona</a>
        <a className="button button-small" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a gente</a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Influrvy Business</p>
          <h1>Conexões que fazem o seu negócio avançar.</h1>
          <p className="lead">A frente corporativa da Influrvy para empresas que querem criar presença, relacionamento e novas oportunidades no digital.</p>
          <div className="actions">
            <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">Iniciar conversa <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#como-funciona">Conheça a Influrvy Business <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Rede de conexões digitais">
          <div className="orb orb-main">impacto<br />em rede</div>
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="orb orb-three" />
          <div className="line line-one" />
          <div className="line line-two" />
          <div className="line line-three" />
          <p className="art-label label-one">estratégia</p>
          <p className="art-label label-two">conexão</p>
          <p className="art-label label-three">crescimento</p>
        </div>
      </section>

      <section className="intro" id="como-funciona">
        <p className="eyebrow">Nossa atuação</p>
        <div className="intro-grid">
          <h2>Uma forma mais próxima de construir oportunidades.</h2>
          <p>A Influrvy Business trabalha ao lado de empresas em iniciativas que aproximam marcas, pessoas e negócios. Cada conversa começa entendendo o momento e o objetivo da sua empresa.</p>
        </div>
      </section>

      <section className="pillars" aria-label="Pilares da Influrvy Business">
        <article>
          <span>01</span><h3>Presença</h3><p>Clareza de posicionamento para negócios que querem ser vistos e lembrados.</p>
        </article>
        <article>
          <span>02</span><h3>Relacionamento</h3><p>Conexões construídas com contexto, propósito e proximidade.</p>
        </article>
        <article>
          <span>03</span><h3>Oportunidades</h3><p>Caminhos digitais alinhados à realidade e ao ritmo da sua empresa.</p>
        </article>
      </section>

      <section className="contact">
        <div>
          <p className="eyebrow">Vamos conversar?</p>
          <h2>Seu próximo movimento pode começar agora.</h2>
        </div>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Chamar no WhatsApp <span aria-hidden="true">↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">Influr<span>vy</span><small>Business</small></a>
        <p>© {new Date().getFullYear()} Influrvy. Todos os direitos reservados.</p>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">+55 11 91428-8729</a>
      </footer>
    </main>
  );
}
