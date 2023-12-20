const pcChoices = ["rock", "paper", "scissor"];

function comPlay() {
  return pcChoices[Math.floor(Math.random() * pcChoices.length)];
}

const togBtn = document.querySelector(".btn");
const togDiv = document.getElementById("ruleList");
const cross = document.getElementById("cross");

togBtn.addEventListener("click", () => {
  togDiv.classList.remove("hidden");
  cross.classList.remove("hidden");
});

cross.addEventListener("click", () => {
  togDiv.classList.add("hidden");
  cross.classList.add("hidden");
});

const iconWrapper = document.getElementById("wrapIcon");
const youPicked = document.querySelector(".left");
const ansText1 = document.getElementById("text1");
const ansText2 = document.getElementById("text2");
const pcPicked = document.querySelector(".right");
const right = document.querySelector(".right");
const winLoseText = document.querySelector(".ansText");

const userRock = document.querySelector(".rockWinUser");
const userPaper = document.querySelector(".paperWinUser");
const userScissor = document.querySelector(".scissorWinUser");

const pcRock = document.querySelector(".rockWinPc");
const pcPaper = document.querySelector(".paperWinPc");
const pcScissor = document.querySelector(".scissorWinPc");

const userGradient = document.querySelector('.userEclipse');
const pcGradient = document.querySelector('.pcEclipse');

const playBtn = document.getElementById("playbtn");
const nextBtn = document.querySelector(".next-btn");

let userScore = parseInt(localStorage.getItem('userScore')) || 0;
document.getElementById("myScore").innerHTML = localStorage.getItem("userScore");

let pcScore = parseInt(localStorage.getItem('pcScore')) || 0;
document.getElementById("pcScore").innerHTML = localStorage.getItem("pcScore");


localStorage.setItem("userScore" ,userScore.toString())
localStorage.setItem("pcScore",pcScore.toString())

function updateUserScore(updatedScore) {
  userScore = updatedScore;
  localStorage.setItem('userScore', userScore.toString());
  document.getElementById("myScore").innerHTML = localStorage.getItem("userScore");
}

function updatePcScore(updatedScore) {
  pcScore = updatedScore;
  localStorage.setItem('pcScore', pcScore.toString());
  document.getElementById("pcScore").innerHTML = localStorage.getItem("pcScore");
}

const rock = document.querySelector(".rockImg");
const scissor = document.querySelector(".scrImg");
const paper = document.querySelector(".paperImg");
let pc;

rock.addEventListener("click", () => {
  pc = comPlay();
  afterClick();
  userRock.classList.remove("hidden");

  if (pc === "rock") {
    pcRock.classList.remove("hidden");
    tie();
  } else if (pc === "scissor") {
    pcScissor.classList.remove("hidden");
    userScore = userScore + 1;
    updateUserScore(userScore);
    userGradient.classList.remove("hidden");
    win();
  } else {
    pcPaper.classList.remove("hidden");
    pcScore = pcScore + 1;
    updatePcScore(pcScore);
    pcGradient.classList.remove("hidden");
    lose();
  }
});

scissor.addEventListener("click", () => {
  pc = comPlay();
  afterClick();
  userScissor.classList.remove("hidden");

  if (pc === "scissor") {
    pcScissor.classList.remove("hidden");
    tie();
  } else if (pc === "paper") {
    pcPaper.classList.remove("hidden");
    userScore = parseInt(localStorage.getItem('userScore')) + 1;
    updateUserScore(userScore);
    userGradient.classList.remove("hidden");
    win();
  } else {
    pcRock.classList.remove("hidden");
    pcScore = parseInt(localStorage.getItem('pcScore')) + 1;
    updatePcScore(pcScore);
    pcGradient.classList.remove("hidden");
    lose();
  }
});

paper.addEventListener("click", () => {
  pc = comPlay();
  afterClick();
  userPaper.classList.remove("hidden");

  if (pc === "paper") {
    pcPaper.classList.remove("hidden");
    tie();
  } else if (pc === "rock") {
    pcRock.classList.remove("hidden");
    userScore = parseInt(localStorage.getItem('userScore')) + 1;
    updateUserScore(userScore);
    userGradient.classList.remove("hidden");
    win();
  } else {
    pcScissor.classList.remove("hidden");
    pcScore = parseInt(localStorage.getItem('pcScore')) + 1;
    updatePcScore(pcScore);
    pcGradient.classList.remove("hidden");
    lose();
  }
});

playBtn.addEventListener("click", () => {
  iconWrapper.classList.remove("hidden");
  youPicked.classList.add("hidden");
  ansText1.classList.add("hidden");
  ansText2.classList.add("hidden");
  pcPicked.classList.add("hidden");
  playBtn.classList.add("hidden");
  right.classList.add("hidden");
  winLoseText.classList.add("hidden");

  ansText1.classList.add("hidden");
  ansText2.classList.add("hidden");

  userPaper.classList.add("hidden");

  userRock.classList.add("hidden");
  userScissor.classList.add("hidden");

  pcRock.classList.add("hidden");
  pcPaper.classList.add("hidden");
  pcScissor.classList.add("hidden");

  userGradient.classList.add("hidden");
  pcGradient.classList.add("hidden");
});
function win() {
  document.getElementById("text1").innerHTML = "YOU WIN";
  ansText1.style.left = "705px";
  ansText2.style.left = "715px";
  document.getElementById("playBtnText").innerHTML = "PLAY AGAIN";

  if (userScore > pcScore) {
    nextBtn.classList.remove("hidden");
    togBtn.style.left = "1210px";
  } else {
    nextBtn.classList.add("hidden");
  }
}

function lose() {
  document.getElementById("text1").innerHTML = "YOU LOSE";
  ansText1.style.left = "710px";
  ansText2.style.left = "725px";
  playBtn.style.left = "715px";
  document.getElementById("playBtnText").innerHTML = "PLAY AGAIN";
  if (userScore > pcScore) {
    nextBtn.classList.remove("hidden");
    togBtn.style.left = "1210px";
  } else {
    nextBtn.classList.add("hidden");
  }
}

function tie() {
  document.getElementById("text1").innerHTML = "TIE UP";
  ansText1.style.left = "700px";
  ansText2.classList.add("hidden");
  document.getElementById("playBtnText").innerHTML = "REPLAY";
  if (userScore > pcScore) {
    nextBtn.classList.remove("hidden");
    togBtn.style.left = "1210px";
  } else {
    nextBtn.classList.add("hidden");
  }
}

function afterClick() {
  iconWrapper.classList.add("hidden");
  youPicked.classList.remove("hidden");
  ansText1.classList.remove("hidden");
  ansText2.classList.remove("hidden");
  pcPicked.classList.remove("hidden");
  playBtn.classList.remove("hidden");
  right.classList.remove("hidden");
  winLoseText.classList.remove("hidden");
}
