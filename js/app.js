/* ═══════════════════════════════════════════════════════════
   СУПЕРГЛАЗКА — App Logic
   ═══════════════════════════════════════════════════════════ */

const App = (function() {
  'use strict';

  // ─── STATE ───
  let currentFrameIdx = 0;
  let frames = [];
  let isPlayingAudio = false;
  let audioTimeout = null;
  let currentPhase = 'narration'; // 'narration' | 'video'

  // ─── DOM refs ───
  const mainMenu = document.getElementById('main-menu');
  const episodeViewer = document.getElementById('episode-viewer');
  const progressFill = document.querySelector('.progress-fill');
  const frameCounter = document.querySelector('.frame-counter');

  // ─── AUDIO SIMULATION ───
  function speakText(text, onEnd) {
    // ЗАГЛУШКА: симулируем озвучку рассказчика
    // В будущем заменить на реальный аудиофайл
    const words = text.split(/\s+/).length;
    const duration = Math.max(3000, words * 350); // ~350ms на слово

    const audioBtn = document.querySelector('.frame.active .audio-btn');
    if (audioBtn) audioBtn.classList.add('playing');
    isPlayingAudio = true;

    // Останавливаем предыдущий таймер
    if (audioTimeout) clearTimeout(audioTimeout);

    audioTimeout = setTimeout(() => {
      if (audioBtn) audioBtn.classList.remove('playing');
      isPlayingAudio = false;
      if (typeof onEnd === 'function') onEnd();
    }, duration);

    return duration;
  }

  function stopAudio() {
    if (audioTimeout) {
      clearTimeout(audioTimeout);
      audioTimeout = null;
    }
    const audioBtn = document.querySelector('.frame.active .audio-btn');
    if (audioBtn) audioBtn.classList.remove('playing');
    isPlayingAudio = false;
  }

  // ─── FRAME NAVIGATION ───
  function showFrame(idx) {
    frames.forEach((f, i) => {
      f.classList.toggle('active', i === idx);
    });
    currentFrameIdx = idx;
    currentPhase = 'narration';

    // Update progress
    const total = frames.length;
    if (progressFill) progressFill.style.width = ((idx + 1) / total * 100) + '%';
    if (frameCounter) frameCounter.textContent = `Кадр ${idx + 1} из ${total}`;

    // Reset frame state
    const frame = frames[idx];
    const bg = frame.querySelector('.frame-bg');
    const overlay = frame.querySelector('.frame-overlay');
    const narration = frame.querySelector('.narration-box');
    const videoContainer = frame.querySelector('.video-container');
    const dialogues = frame.querySelector('.dialogues-container');
    const playBtn = frame.querySelector('.play-clip-btn');
    const nextPanel = frame.querySelector('.next-frame-panel');
    const bubbles = frame.querySelectorAll('.speech-bubble');

    if (bg) { bg.classList.remove('clear'); bg.classList.add('blurred'); }
    if (overlay) { overlay.classList.remove('light'); }
    if (narration) { narration.classList.remove('hidden'); }
    if (videoContainer) { videoContainer.classList.remove('active'); }
    if (dialogues) { dialogues.classList.remove('active'); }
    if (playBtn) { playBtn.classList.remove('visible'); }
    if (nextPanel) { nextPanel.classList.remove('visible'); }
    bubbles.forEach(b => b.classList.remove('visible'));

    // Auto-start narration if text exists
    const narrTextEl = frame.querySelector('.narration-text');
    if (narrTextEl && narrTextEl.textContent.trim()) {
      // Small delay for visual entry
      setTimeout(() => {
        speakText(narrTextEl.textContent, () => {
          // Show play button when narration ends
          if (currentPhase === 'narration' && playBtn) {
            playBtn.classList.add('visible');
          }
        });
      }, 600);
    } else {
      // No narration, show play button immediately
      if (playBtn) playBtn.classList.add('visible');
    }
  }

  function nextFrame() {
    if (currentFrameIdx < frames.length - 1) {
      showTransition(() => {
        showFrame(currentFrameIdx + 1);
      });
    } else {
      // End of episode
      showEndScreen();
    }
  }

  function prevFrame() {
    if (currentFrameIdx > 0) {
      showFrame(currentFrameIdx - 1);
    }
  }

  // ─── PHASE TRANSITIONS ───
  function startVideoPhase() {
    currentPhase = 'video';
    const frame = frames[currentFrameIdx];
    const bg = frame.querySelector('.frame-bg');
    const overlay = frame.querySelector('.frame-overlay');
    const narration = frame.querySelector('.narration-box');
    const videoContainer = frame.querySelector('.video-container');
    const dialogues = frame.querySelector('.dialogues-container');
    const playBtn = frame.querySelector('.play-clip-btn');
    const bubbles = frame.querySelectorAll('.speech-bubble');

    // Hide narration and play button
    if (narration) narration.classList.add('hidden');
    if (playBtn) playBtn.classList.remove('visible');

    // Clear blur from background
    if (bg) {
      bg.classList.remove('blurred');
      bg.classList.add('clear');
    }
    if (overlay) overlay.classList.add('light');

    // Show video container
    setTimeout(() => {
      if (videoContainer) videoContainer.classList.add('active');
    }, 500);

    // Show dialogues with stagger
    setTimeout(() => {
      if (dialogues) dialogues.classList.add('active');
      bubbles.forEach((b, i) => {
        setTimeout(() => b.classList.add('visible'), i * 400 + 200);
      });
    }, 1200);

    // Show next frame panel after dialogues
    const hasDialogues = bubbles.length > 0;
    const delay = hasDialogues ? 3000 + bubbles.length * 400 : 2500;

    setTimeout(() => {
      const nextPanel = frame.querySelector('.next-frame-panel');
      if (nextPanel) nextPanel.classList.add('visible');
    }, delay);
  }

  // ─── TRANSITIONS ───
  function showTransition(onComplete) {
    const overlay = document.getElementById('transition-overlay');
    if (!overlay) {
      if (onComplete) onComplete();
      return;
    }
    overlay.classList.add('visible');
    setTimeout(() => {
      overlay.classList.remove('visible');
      if (onComplete) onComplete();
    }, 800);
  }

  function showEndScreen() {
    const overlay = document.getElementById('transition-overlay');
    const text = overlay ? overlay.querySelector('.transition-text') : null;
    if (text) text.textContent = 'Эпизод завершён! Скоро продолжение...';
    if (overlay) overlay.classList.add('visible');
    setTimeout(() => {
      if (overlay) overlay.classList.remove('visible');
      backToMenu();
    }, 3000);
  }

  // ─── MENU ───
  function startEpisode(episodeId) {
    if (mainMenu) mainMenu.classList.add('hidden');
    if (episodeViewer) episodeViewer.classList.add('active');

    // Refresh frames list
    frames = Array.from(document.querySelectorAll('.frame'));
    showFrame(0);
  }

  function backToMenu() {
    stopAudio();
    if (episodeViewer) episodeViewer.classList.remove('active');
    if (mainMenu) mainMenu.classList.remove('hidden');
  }

  // ─── INIT ───
  function init() {
    // Chapter cards
    document.querySelectorAll('.chapter-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('locked')) return;
        const episode = card.dataset.episode;
        if (episode) startEpisode(episode);
      });
    });

    // Audio buttons
    document.querySelectorAll('.audio-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const frame = btn.closest('.frame');
        const narrText = frame ? frame.querySelector('.narration-text') : null;
        if (isPlayingAudio) {
          stopAudio();
        } else if (narrText) {
          speakText(narrText.textContent, () => {
            const playBtn = frame.querySelector('.play-clip-btn');
            if (playBtn && currentPhase === 'narration') playBtn.classList.add('visible');
          });
        }
      });
    });

    // Play clip buttons
    document.querySelectorAll('.play-clip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        startVideoPhase();
      });
    });

    // Next frame buttons
    document.querySelectorAll('.next-frame-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        nextFrame();
      });
    });

    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        backToMenu();
      });
    });

    // Keyboard nav
    document.addEventListener('keydown', (e) => {
      if (!episodeViewer || !episodeViewer.classList.contains('active')) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        const frame = frames[currentFrameIdx];
        const playBtn = frame.querySelector('.play-clip-btn');
        const nextPanel = frame.querySelector('.next-frame-panel');
        if (playBtn && playBtn.classList.contains('visible')) {
          startVideoPhase();
        } else if (nextPanel && nextPanel.classList.contains('visible')) {
          nextFrame();
        }
      }
      if (e.key === 'ArrowLeft') prevFrame();
      if (e.key === 'Escape') backToMenu();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { startEpisode, backToMenu, nextFrame, prevFrame };
})();
