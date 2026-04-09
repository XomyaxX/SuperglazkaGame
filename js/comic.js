/* ═══ COMIC CORE ═══ */
const ComicApp = (function(){
  'use strict';
  
  const container = document.getElementById('scroll-container');
  const panels = document.querySelectorAll('.panel');
  const total = panels.length;
  let currentPanel = 0;
  let ac = null;

  function getAudioContext(){
    if (!ac) {
      try { 
        ac = new (window.AudioContext || window.webkitAudioContext)(); 
      } catch(e){ 
        console.log('Web Audio not supported'); 
      }
    }
    if (ac && ac.state === 'suspended') {
      ac.resume().catch(()=>{});
    }
    return ac;
  }

  /* ─── Progress dots ─── */
  function initProgressDots(){
    panels.forEach((panel, idx) => {
      const strip = panel.querySelector('.progress-strip');
      if (!strip) return;
      strip.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = 'pdot' + (i === idx ? ' active' : '');
        strip.appendChild(dot);
      }
    });
  }

  function updateProgress(idx){
    panels.forEach((panel, pIdx) => {
      const dots = panel.querySelectorAll('.pdot');
      dots.forEach((dot, dIdx) => {
        dot.classList.remove('active','done');
        if (dIdx === idx) dot.classList.add('active');
        else if (dIdx < idx) dot.classList.add('done');
      });
    });
  }

  /* ─── Scroll observer ─── */
  function initIntersectionObserver(){
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const idx = parseInt(e.target.dataset.index) || 0;
        const panel = e.target;
        const video = panel.querySelector('video.panel-bg');
        
        panel.classList.toggle('active', e.isIntersecting);
        
        // Play/pause video based on visibility
        if (video) {
          if (e.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
        
        if (e.isIntersecting && idx !== currentPanel) {
          currentPanel = idx;
          updateProgress(idx);
          playPanelSound(idx);
        }
      });
    }, { threshold: 0.55 });

    panels.forEach(p => io.observe(p));
  }

  /* ─── Sounds ─── */
  function sfxMagic(){
    const a = getAudioContext(); 
    if (!a) return;
    const now = a.currentTime;
    [523,659,784,1047].forEach((f,i)=>{
      const osc = a.createOscillator();
      const gain = a.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i*0.1);
      gain.gain.setValueAtTime(0, now + i*0.1);
      gain.gain.linearRampToValueAtTime(0.08, now + i*0.1 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i*0.1 + 0.4);
      osc.connect(gain);
      gain.connect(a.destination);
      osc.start(now + i*0.1);
      osc.stop(now + i*0.1 + 0.45);
    });
  }

  function sfxPop(){
    const a = getAudioContext(); 
    if (!a) return;
    const t = a.currentTime;
    const osc = a.createOscillator();
    const gain = a.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.08, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
    osc.connect(gain);
    gain.connect(a.destination);
    osc.start(t);
    osc.stop(t + 0.12);
  }

  function sfxBoom(){
    const a = getAudioContext(); 
    if (!a) return;
    const t = a.currentTime;
    const osc = a.createOscillator();
    const gain = a.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, t);
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.06, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    osc.connect(gain);
    gain.connect(a.destination);
    osc.start(t);
    osc.stop(t + 0.4);
  }

  function sfxWin(){
    const a = getAudioContext(); 
    if (!a) return;
    [523,659,784,1047,784,1047,1318].forEach((f,i)=>{
      const t = a.currentTime + i*0.1;
      const osc = a.createOscillator();
      const gain = a.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.08, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
      osc.connect(gain);
      gain.connect(a.destination);
      osc.start(t);
      osc.stop(t + 0.25);
    });
  }

  const panelSounds = [sfxPop, sfxPop, sfxBoom, sfxPop, sfxPop, sfxMagic, sfxPop, sfxMagic, sfxPop, sfxPop, sfxMagic, sfxWin, sfxPop, sfxPop, sfxMagic, sfxWin];

  function playPanelSound(idx){
    if (panelSounds[idx]) {
      try {
        panelSounds[idx]();
      } catch(e) {}
    }
  }

  /* ─── Audio narration ─── */
  const audioMap = {};
  const activeAudio = { el: null, btn: null };

  function stopAudio(){
    if (activeAudio.el) {
      try {
        activeAudio.el.pause();
        activeAudio.el.currentTime = 0;
      } catch(e) {}
      if (activeAudio.btn) activeAudio.btn.classList.remove('playing');
      activeAudio.el = null;
      activeAudio.btn = null;
    }
  }

  window.speakPanel = function(idx){
    getAudioContext();
    const panel = panels[idx];
    if (!panel) return;
    const btn = panel.querySelector('.audio-crystal');
    const src = panel.dataset.audio;
    if (!src) return;

    if (activeAudio.el && activeAudio.el.dataset.panelIdx == idx) {
      stopAudio();
      return;
    }
    stopAudio();

    let el = audioMap[src];
    if (!el) {
      el = document.createElement('audio');
      el.src = src;
      el.preload = 'auto';
      el.dataset.panelIdx = idx;
      el.onended = function() { 
        if (btn) btn.classList.remove('playing'); 
        activeAudio.el = null; 
        activeAudio.btn = null; 
      };
      audioMap[src] = el;
    }
    activeAudio.el = el;
    activeAudio.btn = btn;
    if (btn) btn.classList.add('playing');
    el.play().catch(()=>{});
  };

  /* ─── Splash start ─── */
  function initSplash(){
    const startBtn = document.getElementById('startBtn');
    const splashVideo = document.querySelector('#splash video.sp-char');
    if (!startBtn) return;

    function doStart(e){
      if (e) e.preventDefault();
      getAudioContext();
      sfxMagic();
      const splash = document.getElementById('splash');
      
      // Pause splash video
      if (splashVideo) {
        splashVideo.pause();
      }
      
      splash.classList.add('hide');
      container.style.display = 'block';
      setTimeout(()=>{
        splash.style.display = 'none';
        container.scrollTop = 0;
        updateProgress(0);
        if (panels[0]) {
          panels[0].classList.add('active');
          // Play first panel video
          const firstVideo = panels[0].querySelector('video.panel-bg');
          if (firstVideo) firstVideo.play().catch(() => {});
        }
        playPanelSound(0);
      }, 600);
    }

    startBtn.addEventListener('click', doStart);
    startBtn.addEventListener('touchend', doStart);
  }

  /* ─── Game transitions ─── */
  window.showTransition = function(type){
    sfxMagic();
    const el = document.getElementById('tr-overlay-' + type);
    if (el) el.classList.add('visible');
  };

  window.hideOverlay = function(id){
    const el = typeof id === 'string' ? document.getElementById(id) : id;
    if (el) el.classList.remove('visible');
  };

  window.showWinOverlay = function(title, sub){
    sfxWin();
    const w = document.getElementById('win-overlay');
    const titleEl = document.getElementById('win-title');
    const subEl = document.getElementById('win-sub');
    if (titleEl) titleEl.textContent = title || 'Отлично!';
    if (subEl) subEl.innerHTML = sub || 'Ты справился!';
    if (w) w.classList.add('visible');
  };

  window.closeWinContinue = function(){
    window.hideOverlay('win-overlay');
    const next = currentPanel + 1;
    if (next < total && panels[next]) {
      panels[next].scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ─── Video autoplay unlock ─── */
  let videoUnlocked = false;
  function unlockVideoAutoplay(){
    if (videoUnlocked) return;
    videoUnlocked = true;
    // Try to play all visible videos after user interaction
    panels.forEach(panel => {
      if (panel.classList.contains('active')) {
        const video = panel.querySelector('video.panel-bg');
        if (video) video.play().catch(() => {});
      }
    });
  }
  document.addEventListener('click', unlockVideoAutoplay, { once: true });
  document.addEventListener('touchstart', unlockVideoAutoplay, { once: true });

  /* ─── Init ─── */
  function init(){
    initProgressDots();
    initIntersectionObserver();
    initSplash();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return {
    getCurrentPanel: () => currentPanel,
    getTotalPanels: () => total
  };
})();
