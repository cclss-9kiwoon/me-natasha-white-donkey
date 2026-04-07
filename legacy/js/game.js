/* ═══════════════════════════════════════
   GAME CONTROLLER
   나와 나타샤와 흰 당나귀 — POEM GAME
   ═══════════════════════════════════════ */

const STAGE_NAMES = {
  1: '눈 내리는 밤',
  2: '나타샤를 기다리며',
  3: '세상을 버리고',
  4: '흰 눈길과 초인',
  5: '나타샤와 흰 당나귀'
};

let currentStage = null;
let gameStarted = false;

const GameController = {
  // ─── Show menu ───
  showMenu() {
    document.getElementById('settings-screen').classList.remove('active');
    document.getElementById('poem-screen').classList.remove('active');
    document.getElementById('menu-screen').classList.remove('out');
    document.getElementById('menu-screen').style.display = '';
  },

  // ─── Show settings ───
  showSettings() {
    document.getElementById('menu-screen').classList.add('out');
    setTimeout(() => {
      document.getElementById('settings-screen').classList.add('active');
    }, 300);
  },

  // ─── Show poem info ───
  showPoemInfo() {
    document.getElementById('menu-screen').classList.add('out');
    setTimeout(() => {
      document.getElementById('poem-screen').classList.add('active');
    }, 300);
  },

  // ─── Start game from menu ───
  startGame() {
    document.getElementById('menu-screen').classList.add('out');
    setTimeout(() => {
      document.getElementById('menu-screen').style.display = 'none';
      launchStage(1);
    }, 800);
  }
};

// ─── Launch a stage ───
function launchStage(n) {
  currentStage = n;

  // Show transition
  const trans = document.getElementById('screen-transition');
  trans.classList.add('black');

  setTimeout(() => {
    // Hide all stages
    document.querySelectorAll('.sw').forEach(s => s.classList.remove('active'));

    // Show the target stage
    const sw = document.getElementById('sw' + n);
    sw.classList.add('active');

    // Show title screen for this stage
    const ts = sw.querySelector('[id$="title_screen"]');
    if (ts) {
      ts.classList.remove('out', 'fade-out');
      ts.style.display = '';
      ts.style.opacity = '';
    }

    // Show interlude
    const siLabel = document.getElementById('si-label');
    const siTitle = document.getElementById('si-title');
    siLabel.textContent = 'Stage 0' + n;
    siTitle.textContent = STAGE_NAMES[n];
    document.getElementById('stage-interlude').classList.add('show');

    // Fade in
    setTimeout(() => {
      trans.classList.remove('black');
      setTimeout(() => {
        document.getElementById('stage-interlude').classList.remove('show');
      }, 1800);
    }, 400);
  }, 700);
}

// ─── Global startGame (called by stage title screens) ───
function startGame() {
  if (!currentStage) return;

  // Hide title screen
  const sw = document.getElementById('sw' + currentStage);
  const ts = sw.querySelector('[id$="title_screen"]');
  if (ts) {
    if (!ts.classList.contains('fade-out') && !ts.classList.contains('out')) {
      ts.classList.add(ts.id === 's1title_screen' ? 'fade-out' : 'out');
    }
    setTimeout(() => { ts.style.display = 'none'; }, 1500);
  }

  // Set gameStarted and call stage-specific start
  gameStarted = true;
  setTimeout(() => {
    if (window['gameStartS' + currentStage]) {
      window['gameStartS' + currentStage]();
    }
  }, 100);
}

// ─── Stage clear handler (auto-advance) ───
window.onStageClear = function(stageNum) {
  if (stageNum < 5) {
    // Auto-advance to next stage
    const trans = document.getElementById('screen-transition');
    trans.classList.add('black');

    setTimeout(() => {
      // Clean up current stage
      document.querySelectorAll('.sw').forEach(s => s.classList.remove('active'));

      // Launch next
      const next = stageNum + 1;
      currentStage = next;

      const sw = document.getElementById('sw' + next);
      sw.classList.add('active');

      // Show title screen for next stage
      const ts = sw.querySelector('[id$="title_screen"]');
      if (ts) {
        ts.classList.remove('out', 'fade-out');
        ts.style.display = '';
        ts.style.opacity = '';
      }

      // Show interlude
      const siLabel = document.getElementById('si-label');
      const siTitle = document.getElementById('si-title');
      siLabel.textContent = 'Stage 0' + next;
      siTitle.textContent = STAGE_NAMES[next];
      document.getElementById('stage-interlude').classList.add('show');

      setTimeout(() => {
        trans.classList.remove('black');
        setTimeout(() => {
          document.getElementById('stage-interlude').classList.remove('show');
        }, 1800);
      }, 400);
    }, 1200);
  }
  // Stage 5 handled by onGameComplete
};

// ─── Game complete handler ───
window.onGameComplete = function() {
  // Stage 5 ending screen handles itself
};

// Expose controller globally
window.GameController = GameController;
