(() => {
  const grid = document.querySelector('.projects > .grid');
  if (!grid) return;

  const projects = [
    { number: '01', category: 'Lojas', name: 'Andra Elétrica', description: 'Catálogo, compra rápida e uma marca feita para aparecer em todos os canais.', sector: 'Varejo elétrico', mark: 'A', tone: 'red', action: 'Explorar case', handler: "openCaseById('andra')" },
    { number: '02', category: 'Lojas', name: 'Santil Iluminação', description: 'E-commerce com descoberta por ambiente.', sector: 'Iluminação', mark: 'S', tone: 'blue', handler: "openCaseById('santil')" },
    { number: '03', category: 'Lojas', name: 'Fogões Shop', description: 'Vitrine de produtos e navegação por coleção.', sector: 'Casa & construção', mark: 'F', tone: 'graphite', handler: "openCaseById('fogoes')" },
    { number: '04', category: 'Delivery', name: 'Manihi Sushi', description: 'Cardápio elegante que transforma desejo em pedido.', sector: 'Gastronomia japonesa', mark: 'M', tone: 'wine', handler: "openCaseById('manihi')" },
    { number: '05', category: 'Delivery', name: 'Flying Sushi', description: 'Rodízio, unidades e delivery em um só lugar.', sector: 'Japanese food', mark: 'F', tone: 'orange', handler: "openCaseById('flying')" },
    { number: '06', category: 'Delivery', name: 'Pastéis de Vento', description: 'Marca vibrante com cardápio e unidades.', sector: 'Comida de rua', mark: 'P', tone: 'gold', handler: "openCaseById('pasteis')" },
    { number: '07', category: 'Delivery', name: 'Veridiana Pizzaria', description: 'Presença premium para reservas e pedidos.', sector: 'Pizzaria & reservas', mark: 'V', tone: 'terracotta', handler: "openCaseById('veridiana')" },
    { number: '08', category: 'Clínicas', name: 'Clínica Camila Pimenta', description: 'Confiança, serviços e agendamento.', sector: 'Odontologia', mark: 'C', tone: 'sage', handler: "openCaseById('camila')" },
    { number: '09', category: 'Clínicas', name: 'OdontoFrison', description: 'Tecnologia e acolhimento para o sorriso.', sector: 'Atendimento dental', mark: 'O', tone: 'ink', handler: "openCaseById('frison')" },
    { number: '10', category: 'Clínicas', name: 'Dra. Mayara Vianna', description: 'Estética e restauração sofisticadas.', sector: 'Estética & saúde', mark: 'M', tone: 'pearl', handler: "openCaseById('mayara')" }
  ];

  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[char]);
  const action = (project) => project.handler
    ? project.handler
    : `openFullscreen('${project.source}','${project.category} · ${project.name}')`;

  grid.className = 'grid project-grid';
  grid.innerHTML = projects.map((project) => `
    <article data-cat="${escape(project.category)}" class="project-card project-${escape(project.tone)}">
      <button class="project-entry" onclick="${action(project)}" aria-label="Abrir ${escape(project.name)}">
        <span class="project-index">${project.number}</span>
        <span class="project-mark">${escape(project.mark)}</span>
        <span class="project-line"></span>
        <span class="project-sector">${escape(project.sector)}</span>
        <span class="project-action">${project.action || 'Abrir projeto'} <b>↗</b></span>
      </button>
      <h3>${escape(project.name)}</h3>
      <p>${escape(project.description)}</p>
      <small>${escape(project.category).toUpperCase()}</small>
    </article>
  `).join('');
})();
