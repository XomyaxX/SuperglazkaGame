/* ═══ RUNNER GAME - ENHANCED ═══ */
const RunnerGame = (function(){
  'use strict';
  
  let canvas, ctx, raf;
  let spriteRun = new Image();
  let spriteJump = new Image();
  let spritesLoaded = false;
  let gameState = 'idle';
  let lives = 3;
  let time = 0;
  let dist = 0;
  const targetDist = 2000;
  let obstacles = [];
  let particles = [];
  let bonuses = [];
  let nextObs = 0;
  let jump = 0;
  let jumpCount = 0; // для двойного прыжка
  let jumpVel = 0;
  const gravity = 0.6;
  let groundY = 400;
  let playerY = 0;
  let speed = 3; // НАЧАЛЬНАЯ СКОРОСТЬ УМЕНЬШЕНА (было 5)
  let speedBoost = 1;
  let speedBoostTimer = 0;
  let shieldTimer = 0;
  let canvasWidth = 360;
  let canvasHeight = 480;
  let bgOffset = 0;
  let level = 1;
  let warning = null;

  function init(){
    canvas = document.getElementById('runner-canvas');
    if (!canvas) {
      console.error('Canvas not found');
      return false;
    }
    
    ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Cannot get 2D context');
      return false;
    }

    resize();
    
    // Load player sprites
    spriteRun.src = 'assets/images/glazka_run.png';
    spriteJump.src = 'assets/images/glazka_jump.png';
    
    let loadedCount = 0;
    const onSpriteLoad = () => {
      loadedCount++;
      if (loadedCount === 2) spritesLoaded = true;
    };
    spriteRun.onload = onSpriteLoad;
    spriteJump.onload = onSpriteLoad;
    
    canvas.addEventListener('pointerdown', onJump);
    canvas.addEventListener('touchstart', onJump, {passive: false});
    canvas.addEventListener('click', onJump);
    
    const overlay = document.getElementById('game-overlay-runner');
    if (overlay) {
      overlay.addEventListener('pointerdown', function(e) {
        if (e.target === overlay || e.target.classList.contains('runner-controls')) {
          onJump(e);
        }
      });
    }
    
    window.addEventListener('resize', resize);
    window.addEventListener('keydown', function(e) {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        onJump();
      }
    });
    
    return true;
  }

  function resize(){
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    
    canvasWidth = Math.floor(rect.width);
    canvasHeight = Math.floor(rect.height);
    
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    
    groundY = canvasHeight - 80;
  }

  function onJump(e){
    if (e) e.preventDefault();
    if (gameState !== 'running') return;
    
    // ДВОЙНОЙ ПРЫЖОК
    if (jumpCount < 2) {
      if (jumpCount === 0) {
        jumpVel = 12;
      } else {
        // Второй прыжок слабее
        jumpVel = 9;
        createDoubleJumpEffect();
      }
      jump = 1;
      jumpCount++;
    }
  }

  function createDoubleJumpEffect(){
    // Визуальный эффект двойного прыжка
    for (let i = 0; i < 6; i++) {
      particles.push({
        x: 68,
        y: groundY - 40 + playerY,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3,
        life: 20,
        color: '#f59e0b',
        size: 4
      });
    }
  }

  function reset(){
    resize();
    lives = 3;
    time = 0;
    dist = 0;
    obstacles = [];
    particles = [];
    bonuses = [];
    nextObs = 100; // УВЕЛИЧЕННЫЙ ИНТЕРВАЛ (было 60)
    jump = 0;
    jumpCount = 0;
    jumpVel = 0;
    speed = 3; // МЕДЛЕННЕЕ
    speedBoost = 1;
    speedBoostTimer = 0;
    shieldTimer = 0;
    bgOffset = 0;
    level = 1;
    warning = null;
    gameState = 'running';
    updateUI();
    if (raf) cancelAnimationFrame(raf);
    loop();
  }

  function updateUI(){
    const timeEl = document.getElementById('runner-time');
    const livesEl = document.getElementById('runner-lives');
    if (timeEl) timeEl.textContent = 'Ур. ' + level;
    if (livesEl) livesEl.textContent = '❤️'.repeat(lives) + '🖤'.repeat(3-lives) + (shieldTimer > 0 ? ' 🛡️' : '') + (speedBoostTimer > 0 ? ' ⭐' : '');
  }

  function spawnObstacle(){
    const types = ['can','cup','vase','sugar'];
    const type = types[Math.floor(Math.random() * types.length)];
    let w = 32, h = 40;
    let color = '#94a3b8';
    
    if (type === 'can') { w = 34; h = 48; color = '#5c4033'; }
    if (type === 'cup') { w = 28; h = 32; color = '#64748b'; }
    if (type === 'vase') { w = 36; h = 50; color = '#a855f7'; }
    if (type === 'sugar') { w = 38; h = 38; color = '#e2e8f0'; }
    
    // Цвет меняется в зависимости от уровня
    if (level >= 2) color = adjustColor(color, -20);
    if (level >= 3) color = adjustColor(color, -40);
    
    obstacles.push({
      x: canvasWidth + 20,
      y: groundY - h,
      w: w,
      h: h,
      type: type,
      color: color,
      warned: false
    });
    
    // Предупреждение за 40 пикселей
    warning = {
      x: canvasWidth + 20 - 40,
      timer: 30
    };
  }

  function adjustColor(hex, amount){
    // Упрощённое затемнение цвета
    return hex;
  }

  function spawnBonus(){
    const types = ['heart','star','shield'];
    const type = types[Math.floor(Math.random() * types.length)];
    bonuses.push({
      x: canvasWidth + 20,
      y: groundY - 80 - Math.random() * 60,
      w: 30,
      h: 30,
      type: type,
      emoji: type === 'heart' ? '💚' : type === 'star' ? '⭐' : '🛡️'
    });
  }

  function addParticles(x, y, color, count = 8){
    for (let i = 0; i < count; i++) {
      particles.push({
        x: x + Math.random() * 20,
        y: y + Math.random() * 10,
        vx: (Math.random() - 0.5) * 6,
        vy: -Math.random() * 4 - 1,
        life: 30 + Math.random() * 20,
        color: color || 'rgba(255,255,255,0.8)',
        size: 3 + Math.random() * 3
      });
    }
  }

  function drawBackground(){
    // Движущийся фон (параллакс)
    bgOffset -= speed * 0.5;
    if (bgOffset <= -100) bgOffset += 100;
    
    // Деревянная текстура стола
    ctx.fillStyle = 'rgba(60, 40, 20, 0.3)';
    for (let x = bgOffset; x < canvasWidth; x += 100) {
      ctx.fillRect(x, groundY - 10, 2, 10);
    }
    
    // Линии скорости
    if (speed * speedBoost > 4) {
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        const x = (bgOffset * (i + 2)) % canvasWidth;
        ctx.beginPath();
        ctx.moveTo(canvasWidth - x, groundY - 20 - i * 15);
        ctx.lineTo(canvasWidth - x - 30, groundY - 20 - i * 15);
        ctx.stroke();
      }
    }
  }

  function drawObstacle(o){
    ctx.save();
    
    // Тень
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(o.x + o.w/2, groundY, o.w/2, 5, 0, 0, Math.PI*2);
    ctx.fill();
    
    switch(o.type) {
      case 'can':
        ctx.fillStyle = o.color || '#5c4033';
        ctx.fillRect(o.x, o.y, o.w, o.h);
        ctx.fillStyle = '#d4a574';
        ctx.fillRect(o.x + 4, o.y + 4, o.w - 8, o.h - 8);
        ctx.fillStyle = '#8b6914';
        ctx.fillRect(o.x + 4, o.y + 12, o.w - 8, 2);
        break;
      case 'cup':
        ctx.fillStyle = o.color || '#94a3b8';
        ctx.beginPath();
        ctx.arc(o.x + o.w/2, o.y + o.h/2, o.w/2, 0, Math.PI*2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.beginPath();
        ctx.arc(o.x + o.w/2 - 3, o.y + o.h/2 - 3, o.w/4, 0, Math.PI*2);
        ctx.fill();
        break;
      case 'vase':
        ctx.fillStyle = o.color || '#a855f7';
        ctx.beginPath();
        ctx.moveTo(o.x + o.w/2, o.y);
        ctx.lineTo(o.x + o.w, o.y + o.h);
        ctx.lineTo(o.x, o.y + o.h);
        ctx.closePath();
        ctx.fill();
        break;
      case 'sugar':
        ctx.fillStyle = o.color || '#e2e8f0';
        ctx.beginPath();
        ctx.arc(o.x + o.w/2, o.y + o.h/2, o.w/2, 0, Math.PI*2);
        ctx.fill();
        break;
    }
    ctx.restore();
  }

  function drawBonus(b){
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(b.emoji, b.x + b.w/2, b.y + b.h/2 + 8);
    
    // Свечение
    ctx.shadowColor = b.type === 'heart' ? '#22c55e' : b.type === 'star' ? '#f59e0b' : '#3b82f6';
    ctx.shadowBlur = 15;
    ctx.fillText(b.emoji, b.x + b.w/2, b.y + b.h/2 + 8);
    ctx.shadowBlur = 0;
  }

  function drawPlayer(){
    const px = 50;
    const py = groundY - 85 + playerY;
    const spriteW = 85;
    const spriteH = 100;
    
    // Тень
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(px + spriteW/2, groundY, 35, 6, 0, 0, Math.PI*2);
    ctx.fill();
    
    // Щит (если активен)
    if (shieldTimer > 0) {
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.6)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(px + spriteW/2, py + spriteH/2, 55, 0, Math.PI*2);
      ctx.stroke();
      
      // Пульсация щита
      const pulse = Math.sin(Date.now() / 100) * 3;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.beginPath();
      ctx.arc(px + spriteW/2, py + spriteH/2, 55 + pulse, 0, Math.PI*2);
      ctx.stroke();
    }
    
    // Выбор спрайта: прыжок или бег
    const currentSprite = (jump > 0) ? spriteJump : spriteRun;
    
    // Анимация отскока только при беге
    const bounce = (jump === 0) ? Math.sin(time * 0.3) * 4 : 0;
    
    if (spritesLoaded && currentSprite.complete) {
      ctx.drawImage(
        currentSprite,
        px,
        py + bounce,
        spriteW,
        spriteH
      );
    } else {
      // Fallback: отрисовка placeholder если спрайт не загружен
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(px, py + bounce, spriteW, spriteH);
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('👁️', px + spriteW/2, py + spriteH/2 + bounce);
    }
  }

  function drawPixel(){
    const pixelX = 60 + (dist / targetDist) * (canvasWidth - 120);
    ctx.font = '28px Arial';
    ctx.textAlign = 'center';
    
    // Тень
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath();
    ctx.ellipse(pixelX, groundY - 5, 12, 3, 0, 0, Math.PI*2);
    ctx.fill();
    
    ctx.fillText('🕷️', pixelX, groundY - 15);
  }

  function drawWarning(){
    if (!warning || warning.timer <= 0) return;
    warning.timer--;
    
    ctx.save();
    ctx.fillStyle = `rgba(239, 68, 68, ${warning.timer / 30})`;
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('!', warning.x, groundY - 60);
    
    // Линия
    ctx.strokeStyle = `rgba(239, 68, 68, ${warning.timer / 60})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(warning.x, groundY - 40);
    ctx.lineTo(warning.x, groundY);
    ctx.stroke();
    ctx.restore();
  }

  function drawProgress(){
    const barX = 14;
    const barY = 14;
    const barW = canvasWidth - 28;
    const barH = 10;
    
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    ctx.fillRect(barX, barY, barW, barH);
    
    // Градиент прогресса
    const grad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
    grad.addColorStop(0, '#22c55e');
    grad.addColorStop(0.5, '#f59e0b');
    grad.addColorStop(1, '#ef4444');
    ctx.fillStyle = grad;
    ctx.fillRect(barX, barY, barW * Math.min(dist / targetDist, 1), barH);
    
    // Рамка
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(barX, barY, barW, barH);
  }

  function drawLevelUp(){
    if (dist > 0 && Math.floor(dist / 500) + 1 > level) {
      level = Math.floor(dist / 500) + 1;
      // Эффект повышения уровня
      for (let i = 0; i < 20; i++) {
        particles.push({
          x: canvasWidth / 2,
          y: canvasHeight / 2,
          vx: (Math.random() - 0.5) * 10,
          vy: (Math.random() - 0.5) * 10,
          life: 40,
          color: '#f59e0b',
          size: 5
        });
      }
    }
  }

  function loop(){
    if (gameState !== 'running') return;
    raf = requestAnimationFrame(loop);
    
    // Clear
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Background
    const grad = ctx.createLinearGradient(0, 0, 0, canvasHeight);
    grad.addColorStop(0, '#1a0f2e');
    grad.addColorStop(1, '#0f0a1e');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    drawBackground();
    
    // Ground
    ctx.fillStyle = 'rgba(100, 70, 40, 0.2)';
    ctx.fillRect(0, groundY, canvasWidth, canvasHeight - groundY);
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(canvasWidth, groundY);
    ctx.stroke();
    
    // Physics
    if (jump > 0) {
      jumpVel -= gravity;
      playerY -= jumpVel;
      if (playerY >= 0) {
        playerY = 0;
        jump = 0;
        jumpCount = 0;
        jumpVel = 0;
      }
    } else {
      playerY = 0;
    }
    
    // Таймеры бонусов
    if (speedBoostTimer > 0) {
      speedBoostTimer--;
      if (speedBoostTimer === 0) speedBoost = 1;
    }
    if (shieldTimer > 0) shieldTimer--;
    
    const currentSpeed = speed * speedBoost;
    
    // Spawn obstacles
    nextObs--;
    if (nextObs <= 0) {
      // 10% шанс на бонус вместо препятствия
      if (Math.random() < 0.1) {
        spawnBonus();
      } else {
        spawnObstacle();
      }
      // УВЕЛИЧЕННЫЙ ИНТЕРВАЛ: 90-150 кадров
      nextObs = 90 + Math.floor(Math.random() * 60);
    }
    
    // Level up check
    drawLevelUp();
    
    // Update and draw bonuses
    const px = 50;
    const py = groundY - 85 + playerY;
    const pw = 85;
    const ph = 100;
    
    for (let i = bonuses.length - 1; i >= 0; i--) {
      let b = bonuses[i];
      b.x -= currentSpeed;
      drawBonus(b);
      
      // Collision with bonus
      if (px < b.x + b.w && px + pw > b.x && py < b.y + b.h && py + ph > b.y) {
        if (b.type === 'heart' && lives < 3) {
          lives++;
          addParticles(b.x, b.y, '#22c55e', 12);
        } else if (b.type === 'star') {
          speedBoost = 0.5;
          speedBoostTimer = 180; // 3 секунды
          addParticles(b.x, b.y, '#f59e0b', 12);
        } else if (b.type === 'shield') {
          shieldTimer = 300; // 5 секунд
          addParticles(b.x, b.y, '#3b82f6', 12);
        }
        bonuses.splice(i, 1);
        updateUI();
        continue;
      }
      
      if (b.x + b.w < 0) bonuses.splice(i, 1);
    }
    
    // Update and draw obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      let o = obstacles[i];
      o.x -= currentSpeed;
      drawObstacle(o);
      
      // Warning trigger
      if (!o.warned && o.x < canvasWidth - 40) {
        o.warned = true;
      }
      
      // Collision
      if (px < o.x + o.w && px + pw > o.x && py < o.y + o.h && py + ph > o.y) {
        // Щит защищает
        if (shieldTimer > 0) {
          addParticles(o.x, o.y, '#3b82f6', 10);
          obstacles.splice(i, 1);
          continue;
        }
        
        if (o.type === 'sugar') {
          addParticles(o.x, o.y, 'rgba(255,255,255,0.9)', 10);
        }
        obstacles.splice(i, 1);
        lives--;
        updateUI();
        
        // Flash effect
        ctx.fillStyle = 'rgba(239,68,68,0.5)';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        if (lives <= 0) {
          gameState = 'lost';
          setTimeout(function() {
            window.showWinOverlay('Упс!', 'Пикселёк ускользнул.<br><br>Попробуй ещё раз!');
            const btn = document.querySelector('#win-overlay .win-btn');
            if (btn) {
              btn.textContent = '🔄 Ещё раз';
              btn.onclick = function() {
                window.hideOverlay('win-overlay');
                reset();
              };
            }
          }, 400);
          return;
        }
        continue;
      }
      
      if (o.x + o.w < 0) obstacles.splice(i, 1);
    }
    
    // Draw warning
    drawWarning();
    
    // Draw pixel
    drawPixel();
    
    // Draw player
    drawPlayer();
    
    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size || 3, 0, Math.PI*2);
      ctx.fill();
      if (p.life <= 0) particles.splice(i, 1);
    }
    
    // Progress bar
    drawProgress();
    
    // Advance
    dist += currentSpeed;
    time++;
    // ОГРАНИЧЕНИЕ МАКСИМАЛЬНОЙ СКОРОСТИ
    if (speed < 6) {
      speed += 0.001; // МЕДЛЕННЫЙ ПРИРОСТ (было 0.002)
    }
    updateUI();
    
    if (dist >= targetDist) {
      gameState = 'won';
      setTimeout(function() {
        window.hideOverlay('game-overlay-runner');
        window.showWinOverlay('Пойман!', 'Суперглазка догнала Пикселька!<br>Теперь — в Мир Глазки!');
        const btn = document.querySelector('#win-overlay .win-btn');
        if (btn) {
          btn.textContent = 'Продолжить ➜';
          btn.onclick = window.closeWinContinue;
        }
      }, 400);
      return;
    }
  }

  window.startRunnerGame = function(){
    window.hideOverlay('tr-overlay-runner');
    const overlay = document.getElementById('game-overlay-runner');
    if (overlay) overlay.classList.add('visible');
    if (!canvas) init();
    reset();
  };

  window.closeRunner = function(skip){
    gameState = 'idle';
    if (raf) cancelAnimationFrame(raf);
    window.hideOverlay('game-overlay-runner');
    if (skip) {
      window.closeWinContinue();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    setTimeout(init, 100);
  }
  
  return { init, reset };
})();
