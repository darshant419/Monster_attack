const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 18;
const HEAL_BTN=20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let bonusLife = true;

adjustHealthBars(chosenMaxLife);



function endround(){

  const initialPlayerHealth = currentPlayerHealth;
  const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamge;

  if (currentPlayerHealth <= 0 && bonusLife){

    bonusLife =false;
    removeBonusLife();
  
  }
  
  if (currentMonsterHealth <= 0) {
    console.log("currentMonsterHealth: " + currentMonsterHealth);
    alert("you won!");``
  } else if (currentPlayerHealth <= 0) {
    alert("you lost");
  }
  else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("draw")
  }
}


function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamge;
endround();
}

function StrongAttackHandler() {
  const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamge = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamge;
  if (currentMonsterHealth <= 0) {
    alert("you won!");

  } else if (currentPlayerHealth <= 0) {
    alert("you lost");
  }
  else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("draw")
  }
}

function healplayerHandler(){

let healvalue;
if (currentPlayerHealth >= chosenMaxLife - HEAL_BTN){
  alert("you cannt heal to more than your max initial health.");
  healvalue = chosenMaxLife - currentPlayerHealth;
  
}else{
  healvalue=HEAL_BTN;
}
  increasePlayerHealth(HEAL_BTN);
  currentPlayerHealth += HEAL_BTN;
  endround();
}

attackBtn.addEventListener('click', attackHandler);

strongAttackBtn.addEventListener('click', StrongAttackHandler);

healBtn.addEventListener('click', healplayerHandler);