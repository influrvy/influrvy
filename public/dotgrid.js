(() => {
  const canvas = document.getElementById('dotgrid');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = () => Math.min(window.devicePixelRatio || 1, 2);
  const settings = { gap: 27, radius: 1.7, proximity: 150, shockRadius: 250 };
  const pointer = { x: -9999, y: -9999, vx: 0, vy: 0, speed: 0, last: 0 };
  let dots = [];

  function resize() {
    const ratio = dpr();
    canvas.width = Math.floor(innerWidth * ratio);
    canvas.height = Math.floor(innerHeight * ratio);
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    dots = [];
    for (let y = settings.gap / 2; y < innerHeight + settings.gap; y += settings.gap) {
      for (let x = settings.gap / 2; x < innerWidth + settings.gap; x += settings.gap) {
        dots.push({ x, y, ox: x, oy: y, vx: 0, vy: 0, flash: 0 });
      }
    }
  }

  addEventListener('resize', resize, { passive: true });
  addEventListener('pointermove', (event) => {
    const now = performance.now();
    const dt = Math.max(8, now - pointer.last);
    pointer.vx = (event.clientX - pointer.x) / dt * 16;
    pointer.vy = (event.clientY - pointer.y) / dt * 16;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.speed = Math.min(120, Math.hypot(pointer.vx, pointer.vy));
    pointer.last = now;
  }, { passive: true });

  addEventListener('click', () => {
    for (const dot of dots) {
      const dx = dot.x - pointer.x;
      const dy = dot.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance > settings.shockRadius) continue;
      const force = (1 - distance / settings.shockRadius) * 7;
      const angle = Math.atan2(dy, dx);
      dot.vx += Math.cos(angle) * force;
      dot.vy += Math.sin(angle) * force;
      dot.flash = 1;
    }
  });

  function frame() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    pointer.speed *= 0.9;
    for (const dot of dots) {
      const dx = dot.x - pointer.x;
      const dy = dot.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      const near = distance < settings.proximity ? 1 - distance / settings.proximity : 0;
      if (near > 0) {
        const push = near * (0.35 + pointer.speed * 0.045);
        dot.vx += (dx / (distance || 1)) * push;
        dot.vy += (dy / (distance || 1)) * push;
      }
      dot.vx += (dot.ox - dot.x) * 0.012;
      dot.vy += (dot.oy - dot.y) * 0.012;
      dot.vx *= 0.86;
      dot.vy *= 0.86;
      dot.x += dot.vx;
      dot.y += dot.vy;
      dot.flash *= 0.94;
      const glow = Math.max(near, dot.flash);
      const alpha = 0.18 + glow * 0.62;
      const red = Math.round(120 + (120 - 120) * glow);
      const green = Math.round(95 + (232 - 95) * glow);
      const blue = Math.round(180 + (225 - 180) * glow);
      ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, settings.radius + glow * 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }

  resize();
  frame();
})();
