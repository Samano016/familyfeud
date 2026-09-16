* {
  box-sizing: border-box;
}

:root {
  --burgundy: #7b1e2b;
  --dark-burgundy: #4a1019;
  --silver: #c8c8c8;
  --light-silver: #e9e9e9;
  --gray: #5b5b5b;
  --dark: #171717;
  --white: #ffffff;
  --green: #26734d;
  --red: #a51d2d;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--dark);
  color: var(--white);
}

button,
input {
  font-family: inherit;
}

button {
  cursor: pointer;
}

.screen {
  display: none;
  min-height: 100vh;
}

.screen.active {
  display: block;
}


/* =========================
   START SCREEN
========================= */

#startScreen {
  display: none;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at center, #8d2938 0%, #4a1019 55%, #171717 100%);
}

#startScreen.active {
  display: flex;
}

.start-box {
  width: min(90%, 700px);
  padding: 60px 40px;
  text-align: center;
  border: 3px solid var(--silver);
  border-radius: 20px;
  background: rgba(23, 23, 23, 0.75);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.school-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin-bottom: 25px;
  border: 5px solid var(--silver);
  border-radius: 50%;
  background: var(--burgundy);
  font-size: 28px;
  font-weight: 900;
}

.start-box h1 {
  margin: 0;
  font-size: clamp(42px, 7vw, 82px);
  line-height: 0.95;
  letter-spacing: 2px;
}

.start-box p {
  margin: 25px 0 35px;
  color: var(--light-silver);
  font-size: 20px;
}

.main-btn {
  border: none;
  border-radius: 10px;
  padding: 18px 45px;
  background: var(--burgundy);
  color: var(--white);
  font-size: 20px;
  font-weight: 900;
  transition: 0.2s;
}

.main-btn:hover {
  transform: scale(1.04);
  background: #942638;
}


/* =========================
   QUESTION SCREEN
========================= */

#questionScreen {
  padding: 30px;
  background: #f3f3f3;
  color: var(--dark);
}

.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 25px;
}

.top-header h2 {
  margin: 0;
  color: var(--dark-burgundy);
}

.small-btn {
  border: 2px solid var(--burgundy);
  border-radius: 8px;
  padding: 10px 18px;
  background: var(--white);
  color: var(--burgundy);
  font-weight: 800;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  margin-bottom: 25px;
}

.category-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.category-btn {
  border: 2px solid var(--silver);
  border-radius: 8px;
  padding: 10px 15px;
  background: var(--white);
  font-weight: 700;
}

.category-btn.active {
  border-color: var(--burgundy);
  background: var(--burgundy);
  color: var(--white);
}

#searchInput {
  min-width: 250px;
  flex: 1;
  border: 2px solid var(--silver);
  border-radius: 8px;
  padding: 12px 15px;
  font-size: 16px;
}

.question-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
}

.question-card {
  border: 2px solid var(--silver);
  border-radius: 12px;
  padding: 20px;
  background: var(--white);
  transition: 0.2s;
}

.question-card:hover {
  border-color: var(--burgundy);
  transform: translateY(-3px);
}

.question-number {
  color: var(--burgundy);
  font-weight: 900;
  margin-bottom: 10px;
}

.question-category {
  display: inline-block;
  margin-bottom: 12px;
  padding: 5px 9px;
  border-radius: 20px;
  background: var(--light-silver);
  color: var(--gray);
  font-size: 12px;
  font-weight: 800;
}

.question-card h3 {
  margin: 0 0 15px;
  font-size: 18px;
  line-height: 1.4;
}

.play-question-btn {
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 11px;
  background: var(--burgundy);
  color: var(--white);
  font-weight: 800;
}


/* =========================
   GAME SCREEN
========================= */

#gameScreen {
  background:
    radial-gradient(circle at top, #8c2737 0%, #4a1019 40%, #171717 100%);
}

.game-header {
  display: grid;
  grid-template-columns: 220px 1fr 220px;
  align-items: stretch;
  min-height: 115px;
  border-bottom: 3px solid var(--silver);
  background: rgba(0, 0, 0, 0.35);
}

.team-score {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  transition: 0.3s;
}

.team-score.team-b {
  border-right: none;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
}

.team-score span {
  font-size: 16px;
  font-weight: 900;
}

.team-score strong {
  margin-top: 5px;
  font-size: 45px;
}

.team-score.active-team {
  background: rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 -5px 0 var(--silver);
}

.game-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.game-title h1 {
  margin: 0;
  font-size: clamp(20px, 3vw, 34px);
  letter-spacing: 1px;
}

#roundPoints {
  margin-top: 7px;
  color: var(--silver);
  font-size: 20px;
  font-weight: 900;
}

.current-turn {
  margin-top: 6px;
  font-size: 14px;
  font-weight: 900;
  color: var(--white);
}


/* =========================
   GAME MAIN
========================= */

.game-main {
  width: min(1200px, 94%);
  margin: 0 auto;
  padding: 25px 0 40px;
}

.question-box {
  margin-bottom: 20px;
  border: 3px solid var(--silver);
  border-radius: 14px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.35);
  text-align: center;
}

.question-label {
  margin-bottom: 8px;
  color: var(--silver);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 2px;
}

.question-box h2 {
  margin: 0;
  font-size: clamp(22px, 3vw, 34px);
}


/* =========================
   TIMER
========================= */

.timer-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}

.timer-label {
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 1px;
}

.timer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  border: 4px solid var(--silver);
  border-radius: 50%;
  background: var(--dark);
  font-size: 27px;
  font-weight: 900;
  transition: 0.2s;
}

.timer.warning {
  border-color: #d89b00;
  transform: scale(1.05);
}

.timer.danger {
  border-color: var(--red);
  color: var(--red);
  animation: timerPulse 0.5s infinite alternate;
}

@keyframes timerPulse {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.12);
  }
}


/* =========================
   ANSWERS
========================= */

.answers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.answer-card {
  min-height: 82px;
  border: 3px solid var(--silver);
  border-radius: 12px;
  overflow: hidden;
  background: var(--white);
  color: var(--dark);
  transition: 0.25s;
}

.answer-card.hidden-answer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--burgundy);
  color: var(--white);
}

.answer-card.hidden-answer:hover {
  transform: scale(1.02);
}

.answer-card.revealed {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  border-color: var(--silver);
}

.answer-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: var(--burgundy);
  color: var(--white);
  font-weight: 900;
}

.answer-text {
  flex: 1;
  padding: 0 15px;
  font-size: 20px;
  font-weight: 900;
}

.answer-points {
  min-width: 55px;
  font-size: 24px;
  font-weight: 900;
  text-align: right;
}

.answer-hidden-text {
  font-size: 30px;
  font-weight: 900;
}


/* =========================
   GAME CONTROLS
========================= */

.game-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}

.strike-area {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 18px;
}

.strike {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  border: 3px solid var(--silver);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  color: transparent;
  font-size: 38px;
  font-weight: 900;
}

.strike.active {
  border-color: var(--red);
  background: var(--red);
  color: var(--white);
  animation: strikePop 0.25s ease-out;
}

@keyframes strikePop {
  0% {
    transform: scale(0.6);
  }

  70% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
}

.game-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.control-btn {
  border: 2px solid var(--silver);
  border-radius: 8px;
  padding: 12px 18px;
  background: var(--dark);
  color: var(--white);
  font-weight: 900;
}

.control-btn:hover {
  background: #303030;
}

.correct-btn {
  border-color: var(--green);
  background: var(--green);
}

.strike-btn {
  border-color: var(--red);
  background: var(--red);
}

.controls-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 20px;
  margin-top: 20px;
  color: var(--light-silver);
  font-size: 13px;
}

.controls-info p {
  margin: 0;
}

.controls-info strong {
  color: var(--white);
}


/* =========================
   MODALS
========================= */

.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.82);
}

.modal.hidden {
  display: none;
}

.modal-box {
  width: min(95%, 700px);
  max-height: 90vh;
  overflow-y: auto;
  border: 3px solid var(--silver);
  border-radius: 18px;
  padding: 35px;
  background:
    linear-gradient(145deg, #5a141f, #301016);
  text-align: center;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
}

.big-x {
  font-size: 95px;
  line-height: 1;
  color: var(--red);
  font-weight: 900;
  text-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
}

.modal-box h2 {
  margin: 10px 0;
  font-size: 38px;
}

.steal-message {
  margin: 15px 0 25px;
  font-size: 22px;
  font-weight: 900;
}

.steal-teams {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
}

.steal-team {
  border: 2px solid var(--silver);
  border-radius: 10px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.25);
}

.steal-team span {
  display: block;
  margin-bottom: 8px;
  color: var(--silver);
  font-size: 12px;
  font-weight: 800;
}

.steal-team strong {
  font-size: 21px;
}

.steal-arrow {
  font-size: 35px;
  font-weight: 900;
}

.steal-points {
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
  background: var(--white);
  color: var(--dark);
}

.steal-points span {
  display: block;
  font-size: 12px;
  font-weight: 900;
}

.steal-points strong {
  display: block;
  margin-top: 5px;
  color: var(--burgundy);
  font-size: 45px;
}

.steal-instruction {
  color: var(--light-silver);
}

.return-game-btn,
.give-points-btn,
.keep-points-btn {
  width: 100%;
  border: none;
  border-radius: 9px;
  padding: 14px;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 900;
}

.return-game-btn {
  background: var(--white);
  color: var(--dark-burgundy);
}

.give-points-btn {
  background: var(--green);
  color: var(--white);
}

.keep-points-btn {
  background: var(--dark);
  color: var(--white);
  border: 2px solid var(--silver);
}

.steal-decision-buttons {
  margin-top: 15px;
}

.round-result-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin: 0 auto 15px;
  border-radius: 50%;
  background: var(--green);
  font-size: 45px;
  font-weight: 900;
}

.round-final-score {
  margin: 20px auto;
}

.round-final-score strong {
  display: block;
  font-size: 60px;
  color: var(--silver);
}

.round-final-score span {
  font-weight: 900;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 800px) {

  .game-header {
    grid-template-columns: 1fr 1fr;
  }

  .game-title {
    grid-column: 1 / -1;
    grid-row: 1;
    padding: 15px;
  }

  .team-score {
    grid-row: 2;
    padding: 15px;
  }

  .team-score.team-b {
    grid-column: 2;
  }

  .team-score.team-a {
    grid-column: 1;
  }

  .answers-grid {
    grid-template-columns: 1fr;
  }

  .steal-teams {
    grid-template-columns: 1fr;
  }

  .steal-arrow {
    transform: rotate(90deg);
  }
}

@media (max-width: 500px) {

  #questionScreen {
    padding: 15px;
  }

  .start-box {
    padding: 40px 20px;
  }

  .start-box h1 {
    font-size: 40px;
  }

  .game-main {
    width: 94%;
  }

  .question-box {
    padding: 15px;
  }

  .answer-card.revealed {
    padding: 0 12px;
  }

  .answer-text {
    font-size: 16px;
  }

  .answer-points {
    font-size: 20px;
  }

  .strike {
    width: 55px;
    height: 55px;
  }

  .modal-box {
    padding: 25px 18px;
  }

  .modal-box h2 {
    font-size: 28px;
  }
}

.switch-team-btn {
  border-color: var(--silver);
  background: var(--dark-burgundy);
}

.switch-team-btn:hover {
  background: var(--burgundy);
  transform: scale(1.03);
}

.switch-team-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.multiplier-container {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.multiplier-container span {
  font-weight: 900;
  font-size: 14px;
  color: var(--silver);
}

.mult-btn {
  border: 2px solid var(--silver);
  border-radius: 6px;
  padding: 8px 14px;
  background: var(--dark);
  color: var(--white);
  font-weight: 900;
  transition: 0.2s;
}

.mult-btn.active {
  border-color: #f39c12;
  background: #f39c12;
  color: var(--dark);
}
