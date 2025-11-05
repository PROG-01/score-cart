
let homeDisplay = document.getElementById("home-display");
let guestDisplay = document.getElementById("guest-display");
let homeScore = 0;
let guestScore = 0;

function homeScoreOne() {
  homeScore += 1
  homeDisplay.textContent = homeScore;
  console.log(homeDisplay.textContent);
}

function homeScoreTwo() {
  homeScore += 2
  homeDisplay.textContent = homeScore;
  console.log(homeDisplay.textContent);
}

function homeScoreThree() {
  homeScore += 3
  homeDisplay.textContent = homeScore;
  console.log(homeDisplay.textContent);
}

function guestScoreOne() {
  guestScore += 1;
  guestDisplay.textContent = guestScore;
  console.log(guestDisplay.textContent);
}

function guestScoreTwo() {
  guestScore += 2
  guestDisplay.textContent = guestScore;
  console.log(guestDisplay.textContent);
}

function guestScoreThree() {
  guestScore += 3
  guestDisplay.textContent = guestScore;
  console.log(guestDisplay.textContent);
}