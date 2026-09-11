(() => {
  const modal = document.getElementById('caseModal');
  if (!modal) return;

  const studies = {
    andra: { order: '01', name: 'Andra Elétrica', mono: 'A', category: 'Varejo elétrico', headline: 'Uma vitrine que converte.', description: 'Um ecossistema digital pensado para tornar uma loja técnica mais fácil de explorar, comprar e lembrar.', site: '/projects/andra.png', social: 'andra-social.png', accent: '#f04c56', wash: '#f04c562b', deep: '#1a0e13', colors: ['#f04c56', '#f8f8f4', '#2b2c31', '#ffc334'], handle: 'andra.energia', socialTitle: 'Luz, escolha e projeto em uma identidade que funciona todos os dias.', video: 'A casa muda quando a luz certa entra em cena.', ad: 'Soluções para projetos mais inteligentes.' },
    santil: { order: '02', name: 'Santil Iluminação', mono: 'S', category: 'Iluminação', headline: 'Uma descoberta por ambiente.', description: 'Uma experiência que organiza inspiração, produto e compra para cada tipo de espaço.', site: '/projects/santil.png', social: 'santil-social.png', accent: '#efc332', wash: '#efc3322b', deep: '#0a2047', colors: ['#0d58a6', '#efc332', '#f4f5f2', '#12213b'], handle: 'santil.ambientes', socialTitle: 'Iluminação para ver a casa com novos olhos.', video: 'A luz certa transforma o lugar inteiro.', ad: 'Encontre a luz para o seu ambiente.' },
    fogoes: { order: '03', name: 'Fogões Shop', mono: 'F', category: 'Casa & construção', headline: 'Produtos que fazem a casa funcionar.', description: 'Uma presença de loja que simplifica categorias técnicas sem perder a força comercial.', site: '/projects/fgs.png', social: 'fogoes-social.png', accent: '#ed4853', wash: '#ed48532b', deep: '#15181e', colors: ['#ef3340', '#f2c446', '#f7f7f4', '#1a1d25'], handle: 'fogoes.projeto', socialTitle: 'Detalhes de casa, obra e cozinha que merecem protagonismo.', video: 'O acabamento que muda a cozinha.', ad: 'Escolhas que fazem o projeto acontecer.' },
    manihi: { order: '04', name: 'Manihi Sushi', mono: 'M', category: 'Gastronomia japonesa', headline: 'Desejo que começa antes do pedido.', description: 'Uma experiência sensorial para cardápio, reservas e uma marca que fica na memória.', site: '/projects/sushi.png', social: 'manihi-social.png', accent: '#d35d62', wash: '#d35d622b', deep: '#231217', colors: ['#aa2028', '#f3ede5', '#20191a', '#d7a85d'], handle: 'manihi.sushi', socialTitle: 'Textura, cuidado e sabor em cada quadro.', video: 'Um corte, um brilho, vontade de pedir.', ad: 'Seu próximo ritual japonês começa aqui.' },
    flying: { order: '05', name: 'Flying Sushi', mono: 'F', category: 'Japanese food', headline: 'O rodízio em movimento.', description: 'Uma jornada digital que apresenta pratos, unidades e delivery com energia contemporânea.', site: '/projects/sushi2.png', social: 'flying.sushi-social.png', accent: '#ff8b62', wash: '#ff8b622b', deep: '#10232c', colors: ['#ff7346', '#102b36', '#f6eee7', '#efb06d'], handle: 'flying.sushi.studio', socialTitle: 'Um feed para fazer o próximo pedido parecer inevitável.', video: 'Chega à mesa. Fica na memória.', ad: 'Rodízio, delivery e sabor em movimento.' },
    pasteis: { order: '06', name: 'Pastéis de Vento', mono: 'P', category: 'Comida de rua', headline: 'Crocância que chama no feed.', description: 'Uma marca leve, próxima e irresistível em todos os momentos de decisão.', site: '/projects/pastel.png', social: 'pasteis-social.png', accent: '#f4be32', wash: '#f4be322b', deep: '#2b1d0f', colors: ['#f6bc18', '#e94e53', '#fff9e9', '#463525'], handle: 'pasteis.de.vento', socialTitle: 'Produto de verdade, fome de verdade, conteúdo que dá vontade.', video: 'O som da crocância faz o resto.', ad: 'Seu momento de pastel começa agora.' },
    veridiana: { order: '07', name: 'Veridiana Pizzaria', mono: 'V', category: 'Pizzaria & reservas', headline: 'A reserva começa pela atmosfera.', description: 'Uma presença editorial que transforma tradição, ambiente e pedidos em desejo.', site: '/projects/pizza.png', social: 'veridiana.atelier-social.png', accent: '#d38665', wash: '#d386652b', deep: '#251312', colors: ['#ba171d', '#d38a51', '#f5eee7', '#2b1a16'], handle: 'veridiana.reservas', socialTitle: 'Tradição servida com atmosfera, forno e histórias.', video: 'Uma noite italiana começa no primeiro frame.', ad: 'Reserve uma noite para lembrar.' },
    camila: { order: '08', name: 'Clínica Camila Pimenta', mono: 'C', category: 'Odontologia', headline: 'Cuidado que transmite confiança.', description: 'Uma apresentação acolhedora para tratamentos, rotina clínica e agendamentos.', site: '/projects/clinica.png', social: 'camila-social.png', accent: '#9eb49b', wash: '#9eb49b2b', deep: '#1a2520', colors: ['#657964', '#e8e2d8', '#ffffff', '#b8a483'], handle: 'camila.sorriso', socialTitle: 'Cuidado profissional mostrado com calma e clareza.', video: 'Detalhes que fazem sorrir com tranquilidade.', ad: 'Seu cuidado começa com uma boa conversa.' },
    frison: { order: '09', name: 'OdontoFrison', mono: 'O', category: 'Atendimento dental', headline: 'Tecnologia próxima de cada sorriso.', description: 'Uma experiência digital clara para apresentar estrutura, confiança e atendimento.', site: '/projects/clins.png', social: 'frison-social.png', accent: '#d8ba49', wash: '#d8ba492b', deep: '#111a29', colors: ['#d5b540', '#111c2d', '#f7f7f3', '#7187a0'], handle: 'odonto.frison', socialTitle: 'Tecnologia, presença e cuidado em um conteúdo que aproxima.', video: 'Atendimento pensado para o seu tempo.', ad: 'Seu sorriso merece atenção completa.' },
    mayara: { order: '10', name: 'Dra. Mayara Vianna', mono: 'M', category: 'Estética & saúde', headline: 'Estética que respeita sua expressão.', description: 'Uma narrativa sofisticada para tratamentos, resultados e uma experiência exclusiva.', site: '/projects/clinnc.png', social: 'mayara.vianna-social.png', accent: '#e7caa9', wash: '#e7caa92b', deep: '#2a231e', colors: ['#d8b796', '#f4eee8', '#2b2624', '#a47967'], handle: 'mayara.vianna.estetica', socialTitle: 'Beleza, naturalidade e detalhes que comunicam sofisticação.', video: 'Cuidado preciso, resultado que parece seu.', ad: 'Sua melhor versão começa com escuta.' }
  };

  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]);
  const positions = ['0% 0%', '50% 0%', '100% 0%', '0% 50%', '50% 50%', '100% 50%', '0% 100%', '50% 100%', '100% 100%'];
  const feed = (study) => positions.map((position) => `<figure class="case-feed-post" style="background-image:url('/cases/${study.social}');background-position:${position}"></figure>`).join('');
  const socialUrl = (study) => `/cases/${study.social}`;

  const render = (study) => `
    <div class="case-shell case-study-shell" style="--case-accent:${study.accent};--case-wash:${study.wash};--case-deep:${study.deep}">
      <aside class="case-sidebar case-study-sidebar">
        <p class="case-kicker">CASE / ${study.order}</p>
        <h2>${escape(study.name).replace(' ', '<br><em>').replace(/<em>([^<]+)$/, '<em>$1.</em>')}</h2>
        <p class="case-description">${escape(study.description)}</p>
        <div class="brand-kit"><p>IDENTIDADE</p><div class="brand-colors">${study.colors.map((color) => `<i style="background:${color}"></i>`).join('')}</div><span>${escape(study.category)} · direção visual demonstrativa</span></div>
        <nav class="case-tabs" aria-label="Formatos do case">
          <button class="active" data-case-study="site" onclick="caseStudyTab('site')"><b>01</b> Site</button>
          <button data-case-study="social" onclick="caseStudyTab('social')"><b>02</b> Redes sociais</button>
          <button data-case-study="video" onclick="caseStudyTab('video')"><b>03</b> Vídeo curto</button>
          <button data-case-study="traffic" onclick="caseStudyTab('traffic')"><b>04</b> Criativos de mídia</button>
        </nav>
        <p class="case-note">Simulação conceitual de uma presença digital integrada.</p>
      </aside>
      <section class="case-stage case-study-stage">
        <header class="case-stage-head"><span>${escape(study.name).toUpperCase()} / EXPERIÊNCIA DE MARCA</span><button class="case-close" onclick="closeCaseStudy()" aria-label="Fechar case">×</button></header>
        <div class="case-views case-study-views">
          <div class="case-view active" data-study-view="site">
            <div class="site-preview-label"><span>01</span><p>Site da marca<br><b>${escape(study.headline)}</b></p><small>ROLE PARA EXPLORAR ↓</small></div>
            <div class="case-browser"><div class="browser-bar"><i></i><i></i><i></i><span>experiência demonstrativa</span></div><div class="case-site-scroll"><img src="${study.site}" alt="Prévia demonstrativa do site ${escape(study.name)}"></div></div>
          </div>
          <div class="case-view" data-study-view="social">
            <div class="case-channel-intro"><span>02</span><p>Redes sociais<br><b>${escape(study.socialTitle)}</b></p></div>
            <div class="case-social-stage">
              <div class="case-channel-copy"><small>PERFIL DEMONSTRATIVO</small><h3>Identidade que vive<br><em>em cada publicação.</em></h3><p>Conteúdo pensado como um perfil real: produto, ambiente, bastidor e serviço se alternam com unidade visual.</p><div><b>CONTEÚDO</b><b>RECONHECIMENTO</b><b>CONVERSÃO</b></div></div>
              <div class="case-phone-orbit"><div class="case-social-phone"><div class="phone-status"><span>9:41</span><i></i><b>◒ ▰</b></div><div class="social-top"><span>‹</span><b>${escape(study.handle)}</b><span>•••</span></div><div class="social-profile"><i>${escape(study.mono)}</i><div><b>24</b><span>posts</span></div><div><b>4,8k</b><span>seguidores</span></div><div><b>188</b><span>seguindo</span></div></div><div class="social-bio"><b>${escape(study.name)}</b><span>${escape(study.category)} com uma presença que acompanha cada escolha.</span><em>Perfil demonstrativo</em></div><div class="social-actions"><button>Seguir</button><button>Mensagem</button><button>⌄</button></div><div class="social-tabs"><b>▦</b><span>▱</span></div><div class="case-feed">${feed(study)}</div><div class="social-nav"><b>⌂</b><span>⌕</span><span>▣</span><span>♧</span><i>${escape(study.mono)}</i></div></div></div>
            </div>
          </div>
          <div class="case-view" data-study-view="video">
            <div class="case-media-copy"><span>03</span><p>Vídeo curto<br><b>${escape(study.video)}</b></p><small>Uma cena direta de produto ou serviço para transformar atenção em próxima ação — pensada para Reels, Stories e anúncios.</small></div>
            <div class="case-reel"><div class="reel-visual" style="background-image:url('${socialUrl(study)}')"></div><div class="reel-scrim"></div><div class="reel-top"><span>● EM EXIBIÇÃO</span><b>00:08</b></div><div class="reel-copy"><small>${escape(study.name).toUpperCase()}</small><b>${escape(study.video)}</b></div><div class="reel-progress"><i></i></div><span class="reel-foot">Vídeo demonstrativo · formato vertical</span></div>
          </div>
          <div class="case-view" data-study-view="traffic">
            <div class="case-channel-intro"><span>04</span><p>Criativos de mídia<br><b>Uma campanha que parece nativa em cada plataforma.</b></p></div>
            <div class="case-paid-stage"><div class="case-channel-copy"><small>CAMPANHA DEMONSTRATIVA</small><h3>O mesmo posicionamento,<br><em>dois contextos reais.</em></h3><p>O criativo leva a identidade da marca sem transformar a plataforma em uma peça de propaganda.</p></div><div class="case-ad-pair"><article class="case-ad instagram-ad"><header><b>Instagram</b><span>⌁</span></header><div class="ad-author"><i>${escape(study.mono)}</i><div><b>${escape(study.handle)}</b><small>Patrocinado</small></div><em>•••</em></div><div class="ad-visual" style="background-image:url('${socialUrl(study)}')"><div><small>${escape(study.name).toUpperCase()}</small><b>${escape(study.ad)}</b></div></div><footer><span>♡</span><span>◯</span><span>⌁</span><b>Saiba mais</b></footer></article><article class="case-ad facebook-ad"><header><b>facebook</b><span>＋　⌕　☵</span></header><div class="fb-tabs"><b>⌂</b><span>▱</span><span>♧</span><span>▣</span></div><div class="ad-author"><i>${escape(study.mono)}</i><div><b>${escape(study.name)}</b><small>Patrocinado · ◉</small></div><em>•••</em></div><p>${escape(study.ad)}</p><div class="ad-visual" style="background-image:url('${socialUrl(study)}')"><div><small>PROJETO DEMONSTRATIVO</small><b>${escape(study.headline)}</b></div></div><footer><span>♡ Curtir</span><span>◯ Comentar</span><b>Saiba mais</b></footer></article></div></div>
          </div>
        </div>
      </section>
    </div>`;

  window.openCaseById = (id) => {
    const study = studies[id];
    if (!study) return;
    modal.innerHTML = render(study);
    modal.classList.add('show');
    document.body.classList.add('case-open');
    modal.onclick = (event) => { if (event.target === modal) window.closeCaseStudy(); };
  };
  window.closeCaseStudy = () => {
    modal.classList.remove('show');
    document.body.classList.remove('case-open');
  };
  window.caseStudyTab = (view) => {
    modal.querySelectorAll('[data-case-study]').forEach((button) => button.classList.toggle('active', button.dataset.caseStudy === view));
    modal.querySelectorAll('[data-study-view]').forEach((panel) => panel.classList.toggle('active', panel.dataset.studyView === view));
  };
  modal.addEventListener('pointerover', (event) => { if (event.target.closest('button')) document.body.classList.add('cursor-hover'); });
  modal.addEventListener('pointerout', (event) => { if (event.target.closest('button')) document.body.classList.remove('cursor-hover'); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('show')) window.closeCaseStudy(); });
})();
