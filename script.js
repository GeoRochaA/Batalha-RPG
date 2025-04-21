let playerHP = 100;
let enemyHP = 100;

const playerHPBar = document.getElementById('playerHPBar');
const enemyHPBar = document.getElementById('enemyHPBar');
const attackBtn = document.getElementById('attackBtn');
const logDisplay = document.getElementById('log');

function updateBars() {
  playerHPBar.style.width = playerHP + '%';
  enemyHPBar.style.width = enemyHP + '%';
}

attackBtn.addEventListener('click', () => {
  if (playerHP <= 0 || enemyHP <= 0) return;

  let playerDamage = Math.floor(Math.random() * 16) + 5;
  let enemyDamage = Math.floor(Math.random() * 16) + 5;

  enemyHP -= playerDamage;
  if (enemyHP < 0) enemyHP = 0;

  if (enemyHP > 0) {
    playerHP -= enemyDamage;
    if (playerHP < 0) playerHP = 0;
  }

  updateBars();

  let logMsg = `Você causou ${playerDamage} de dano! `;
  if (enemyHP > 0) {
    logMsg += `O inimigo causou ${enemyDamage} de dano em você.`;
  } else {
    logMsg += `Você derrotou o monstro!`;
    attackBtn.disabled = true;
  }

  if (playerHP === 0) {
    logMsg = `Você foi derrotado pelo inimigo`;
    attackBtn.disabled = true;
  }

  logDisplay.textContent = logMsg;
});