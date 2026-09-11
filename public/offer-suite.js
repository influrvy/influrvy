(() => {
  const mount = document.querySelector('#projetos');
  if (!mount || document.querySelector('#estrutura')) return;

  const icons = {
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 18.5 3.5 21l.6-4.2A8.5 8.5 0 1 1 7 19.3"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg>',
    panel: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11M13 13h4M13 16h3"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M7 14h3M7 17h6"/></svg>',
    orders: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12l2 4-2 12H6L4 8l2-4Z"/><path d="M4 8h16M9 12h6"/></svg>',
    showcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16v12H4zM3 8l2-5h14l2 5"/><path d="M8 12h8M8 16h5"/></svg>',
    users: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 4v2"/></svg>',
    card: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="m10 8 6 4-6 4V8Z"/></svg>',
    growth: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5M4 19h16M7 15l4-4 3 2 5-6"/><path d="M15 7h4v4"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5M7 10h6M10 7v6"/></svg>',
    article: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v5h4M9 12h6M9 16h6"/></svg>',
    target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m15.5 8.5 5-5"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M14 7l5 5-5 5"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>'
  };

  const checkList = (items) => `<ul class="ops-checks">${items.map(item => `<li>${icons.check}<span>${item}</span></li>`).join('')}</ul>`;
  const miniCard = (icon, title, copy) => `<article class="ops-mini-card"><span class="ops-mini-icon">${icons[icon]}</span><div><h4>${title}</h4><p>${copy}</p></div></article>`;

  const section = document.createElement('section');
  section.className = 'ops-suite';
  section.id = 'estrutura';
  section.innerHTML = `
    <div class="ops-suite-head">
      <div>
        <p class="eyebrow">Estrutura Influrvy</p>
        <h2>Uma estrutura digital completa <em>para sua empresa.</em></h2>
      </div>
      <p>Da presença online ao atendimento, à organização e ao crescimento do negócio.</p>
    </div>

    <div class="ops-command">
      <div class="ops-command-top">
        <div class="ops-live"><i></i><span>OPERAÇÃO DIGITAL</span></div>
        <span>Explore cada frente da estrutura</span>
      </div>

      <div class="ops-layout">
        <div class="ops-tabs" role="tablist" aria-label="Soluções da Influrvy">
          <button class="active" role="tab" aria-selected="true" aria-controls="ops-presenca" data-ops-tab="presenca"><b>01</b>${icons.globe}<span>Presença digital</span></button>
          <button role="tab" aria-selected="false" aria-controls="ops-business" data-ops-tab="business"><b>02</b>${icons.panel}<span>Influr Business</span></button>
          <button role="tab" aria-selected="false" aria-controls="ops-whatsapp" data-ops-tab="whatsapp"><b>03</b>${icons.chat}<span>Atendente inteligente</span></button>
          <button role="tab" aria-selected="false" aria-controls="ops-conteudo" data-ops-tab="conteudo"><b>04</b>${icons.play}<span>Conteúdo e redes</span></button>
          <button role="tab" aria-selected="false" aria-controls="ops-crescimento" data-ops-tab="crescimento"><b>05</b>${icons.growth}<span>Visibilidade e crescimento</span></button>
        </div>

        <div class="ops-panels">
          <article class="ops-panel active" id="ops-presenca" role="tabpanel" data-ops-panel="presenca">
            <div class="ops-panel-head">
              <span class="ops-number">01 / PRESENÇA DIGITAL</span>
              <div class="ops-title-icon">${icons.globe}</div>
              <h3>A base para sua empresa ser encontrada, entendida e escolhida.</h3>
              <p>Criamos uma presença online que apresenta o negócio com clareza e conduz cada visitante para uma ação.</p>
            </div>
            <div class="ops-two-col">
              ${checkList([
                'Site profissional, empresarial ou institucional',
                'Apresentação de serviços e catálogo de produtos',
                'Cardápio digital e vitrines para diferentes segmentos',
                'Pedidos, orçamentos, agendamentos e reservas',
                'Landing pages para promoções e campanhas',
                'WhatsApp, Instagram, e-mail, telefone e localização',
                'Domínio, hospedagem, segurança e manutenção'
              ])}
              <div class="ops-browser-visual" aria-label="Representação de uma presença digital integrada">
                <div class="ops-browser-bar"><i></i><i></i><i></i><span>empresa.digital</span></div>
                <div class="ops-browser-body"><span>PRESENÇA ATIVA</span><strong>Sua empresa pronta<br>para ser escolhida.</strong><div><i></i><i></i><i></i></div></div>
              </div>
            </div>
            <aside class="ops-feature-callout">${icons.chat}<div><h4>Chat inteligente no site</h4><p>Uma IA integrada que conversa com os visitantes, esclarece dúvidas, apresenta serviços e conduz cada pessoa ao próximo passo.</p></div><span>IA INTEGRADA</span></aside>
          </article>

          <article class="ops-panel" id="ops-business" role="tabpanel" data-ops-panel="business" hidden>
            <div class="ops-panel-head">
              <span class="ops-number">02 / INFLUR BUSINESS</span>
              <div class="ops-title-icon">${icons.panel}</div>
              <h3>Gestão do negócio em uma visão simples e organizada.</h3>
              <p>Um painel próprio para acompanhar a operação digital, centralizar informações e saber o que precisa de atenção.</p>
            </div>
            <div class="ops-business-layout">
              <div class="ops-dashboard" aria-label="Dashboard demonstrativo com dados fictícios">
                <div class="ops-dash-head"><b>Influr Business</b><span>Visão geral</span></div>
                <div class="ops-kpis"><div><small>LEADS</small><strong>128</strong><em>+18%</em></div><div><small>AGENDA</small><strong>42</strong><em>+12%</em></div><div><small>PEDIDOS</small><strong>76</strong><em>+24%</em></div></div>
                <div class="ops-chart"><div class="ops-chart-head"><span>Atividade</span><small>Últimos 7 dias</small></div><svg viewBox="0 0 420 130" aria-hidden="true"><defs><linearGradient id="opsArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9b72ff" stop-opacity=".5"/><stop offset="1" stop-color="#9b72ff" stop-opacity="0"/></linearGradient></defs><path class="area" d="M0 112 C45 108 55 80 96 86 S150 105 185 64 S250 79 284 42 S345 58 420 18 L420 130 L0 130Z"/><path class="line" d="M0 112 C45 108 55 80 96 86 S150 105 185 64 S250 79 284 42 S345 58 420 18"/><circle cx="420" cy="18" r="4"/></svg></div>
              </div>
              <div class="ops-mini-grid">
                ${miniCard('panel','Dashboard geral','Leads, atendimentos, pedidos, agenda e atividades em uma visão única.')}
                ${miniCard('calendar','Agenda','Agendamentos, reservas, confirmações e lembretes organizados.')}
                ${miniCard('orders','Pedidos e solicitações','Acompanhamento de pedidos, orçamentos e contatos recebidos.')}
                ${miniCard('showcase','Vitrine','Produtos, serviços, cardápios, preços e disponibilidade atualizados.')}
                ${miniCard('users','Leads e clientes','Contatos organizados por origem, status e histórico.')}
                ${miniCard('card','Pagamentos e assinaturas','Serviços ativos, pagamentos e recursos contratados em um só lugar.')}
              </div>
            </div>
          </article>

          <article class="ops-panel" id="ops-whatsapp" role="tabpanel" data-ops-panel="whatsapp" hidden>
            <div class="ops-panel-head">
              <span class="ops-number">03 / ATENDENTE INTELIGENTE</span>
              <div class="ops-title-icon">${icons.chat}</div>
              <h3>Um atendente disponível todos os dias.</h3>
              <p>O agente de IA atua como parte da equipe, mantém o contexto da conversa e encaminha cada solicitação corretamente.</p>
            </div>
            <div class="ops-chat-layout">
              ${checkList([
                'Conversa natural e humanizada',
                'Respostas sobre serviços, produtos, preços e horários',
                'Apresentação de catálogo ou cardápio',
                'Pedidos de orçamento e coleta de informações',
                'Agendamentos, reservas, confirmações e lembretes',
                'Registro das informações no painel',
                'Transferência para uma pessoa quando necessário'
              ])}
              <div class="ops-phone" aria-label="Simulação de conversa profissional no WhatsApp">
                <header><i>IA</i><div><b>Atendimento da empresa</b><span>disponível agora</span></div><em>•••</em></header>
                <div class="ops-messages">
                  <p class="received">Olá, gostaria de saber quais horários estão disponíveis amanhã.</p>
                  <p class="sent">Claro. Tenho disponibilidade às 10h30 e às 15h. Qual horário funciona melhor para você?</p>
                  <p class="received">Às 15h, por favor.</p>
                  <p class="sent">Perfeito. Vou reservar esse horário e enviar a confirmação. Pode me informar seu nome?</p>
                  <small>Atendimento registrado no Influr Business</small>
                </div>
                <footer><span>Digite uma mensagem</span><button aria-label="Enviar mensagem demonstrativa">${icons.arrow}</button></footer>
              </div>
            </div>
          </article>

          <article class="ops-panel" id="ops-conteudo" role="tabpanel" data-ops-panel="conteudo" hidden>
            <div class="ops-panel-head">
              <span class="ops-number">04 / CONTEÚDO E REDES SOCIAIS</span>
              <div class="ops-title-icon">${icons.play}</div>
              <h3>Uma marca consistente em cada formato.</h3>
              <p>Planejamos como sua empresa aparece, se comunica e mantém presença nas redes sociais ao longo do mês.</p>
            </div>
            <div class="ops-content-layout">
              ${checkList([
                'Posts profissionais e carrosséis',
                'Imagens criadas com IA',
                'Vídeos profissionais e interativos',
                'Reels, vídeos curtos e stories promocionais',
                'Legendas e chamadas para ação',
                'Organização de perfil, bio e destaques',
                'Planejamento e publicação de conteúdo'
              ])}
              <div class="ops-content-grid" aria-label="Grade demonstrativa de posts e vídeos">
                <div class="ops-post post-a"><small>CONTEÚDO</small><strong>Clareza<br>que aproxima.</strong></div>
                <div class="ops-post post-video"><span>${icons.play}</span><small>REEL / 00:18</small></div>
                <div class="ops-post post-b"><i></i><b>NOVA<br>PRESENÇA</b></div>
                <div class="ops-post post-c"><small>ESTRATÉGIA</small><strong>Marca em<br>movimento.</strong></div>
                <div class="ops-post post-d"><div></div><span>01</span><span>02</span><span>03</span></div>
                <div class="ops-post post-e"><small>RESULTADO</small><b>Conteúdo que<br>leva à ação.</b></div>
              </div>
            </div>
          </article>

          <article class="ops-panel" id="ops-crescimento" role="tabpanel" data-ops-panel="crescimento" hidden>
            <div class="ops-panel-head">
              <span class="ops-number">05 / VISIBILIDADE E CRESCIMENTO</span>
              <div class="ops-title-icon">${icons.growth}</div>
              <h3>Mais caminhos para sua empresa ser descoberta.</h3>
              <p>Combinamos reputação, conteúdo recorrente e campanhas para ampliar alcance e gerar novas oportunidades.</p>
            </div>
            <div class="ops-growth-grid">
              <article>${icons.search}<span>01</span><h4>Google e reputação</h4>${checkList(['Perfil da Empresa no Google','Horários, fotos, serviços e localização','Respostas a avaliações','QR Code para avaliações reais'])}</article>
              <article>${icons.article}<span>02</span><h4>Conteúdo para o site</h4>${checkList(['Blog e artigos','Páginas sobre serviços','Conteúdo recorrente para fortalecer a presença no Google'])}</article>
              <article>${icons.target}<span>03</span><h4>Tráfego pago</h4>${checkList(['Campanhas no Instagram, Facebook e Google','Criativos e landing pages','Captação de contatos pelo WhatsApp','Relatórios e otimizações'])}</article>
            </div>
            <p class="ops-media-note">A verba de anúncios é definida e paga diretamente pela empresa. A Influrvy realiza a criação, gestão e otimização das campanhas.</p>
          </article>
        </div>
      </div>
    </div>

    <div class="ops-flow-wrap">
      <p class="eyebrow">Uma operação conectada</p>
      <div class="ops-constellation" aria-label="As frentes da operação digital se conectam em uma única estrutura">
        <div class="ops-constellation-grid" aria-hidden="true"></div>
        <div class="ops-orbit ops-orbit-one" aria-hidden="true"><i></i></div>
        <div class="ops-orbit ops-orbit-two" aria-hidden="true"><i></i></div>
        <div class="ops-orbit ops-orbit-three" aria-hidden="true"><i></i></div>
        <div class="ops-core"><small>INFLURVY</small><strong>operação<br>conectada</strong><i></i></div>
        <div class="ops-orbit-node node-strategy"><span>01</span><b>Estratégia</b></div>
        <div class="ops-orbit-node node-presence"><span>02</span><b>Presença digital</b></div>
        <div class="ops-orbit-node node-service"><span>03</span><b>Atendimento IA</b></div>
        <div class="ops-orbit-node node-content"><span>04</span><b>Conteúdo</b></div>
        <div class="ops-orbit-node node-growth"><span>05</span><b>Crescimento</b></div>
        <p>Uma marca, cinco frentes em movimento.</p>
      </div>
      <div class="ops-flow" aria-label="Fluxo da operação digital">
        <div><b>01</b><span>Presença<br>digital</span></div>${icons.arrow}
        <div><b>02</b><span>Vitrine, pedidos<br>e agendamentos</span></div>${icons.arrow}
        <div><b>03</b><span>Atendente<br>inteligente</span></div>${icons.arrow}
        <div><b>04</b><span>Gestão pelo<br>Influr Business</span></div>${icons.arrow}
        <div><b>05</b><span>Conteúdo, campanhas<br>e crescimento</span></div>
      </div>
      <div class="ops-closing">
        <p>A Influrvy conecta design, tecnologia e atendimento para transformar a presença digital da sua empresa em <em>oportunidades reais.</em></p>
        <a href="#contato">Quero estruturar minha empresa ${icons.arrow}</a>
      </div>
    </div>
  `;

  mount.parentNode.insertBefore(section, mount);

  const nav = document.querySelector('header nav');
  if (nav && !nav.querySelector('[href="#estrutura"]')) {
    const link = document.createElement('a');
    link.href = '#estrutura';
    link.textContent = 'Soluções';
    nav.insertBefore(link, nav.firstChild);
  }

  const tabs = [...section.querySelectorAll('[data-ops-tab]')];
  const panels = [...section.querySelectorAll('[data-ops-panel]')];

  const activate = (name, focus = false) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.opsTab === name;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && focus) tab.focus({ preventScroll: true });
    });
    panels.forEach((panel) => {
      const active = panel.dataset.opsPanel === name;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.dataset.opsTab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      else next = (index - 1 + tabs.length) % tabs.length;
      activate(tabs[next].dataset.opsTab, true);
    });
  });
})();
