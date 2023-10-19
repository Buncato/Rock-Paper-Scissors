let hum = document.getElementById("hum");
let com = document.getElementById("com");
let compChoice = document.getElementById("compChoice");
let results = document.getElementById("results");
humm = 0;
comm = 0;
hum.innerHTML = humm;
com.innerHTML = comm;
function computerPlay() {
  let c = Math.floor(Math.random() * 3);
  if (c === 1) {
    return "rock";
  } else if (c === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function select(human, computer) {
  if (human === "rock") {
    if (computer === "rock") {
      compChoice.innerHTML = "Rock";
      results.innerHTML = "Tie!";
    } else if (computer === "paper") {
      compChoice.innerHTML = "Paper";
      comm += 1;
      com.innerHTML = comm;
      results.innerHTML = "Lost :(";
    } else {
      compChoice.innerHTML = "Scissors";
      humm += 1;
      hum.innerHTML = humm;
      results.innerHTML = "Win! whooooooooo!";
    }
  } else if (human === "paper") {
    if (computer === "paper") {
      compChoice.innerHTML = "Paper";
      results.innerHTML = "Tie!";
    } else if (computer === "scissors") {
      compChoice.innerHTML = "Scissors";
      comm += 1;
      com.innerHTML = comm;
      results.innerHTML = "Lost :(";
    } else {
      compChoice.innerHTML = "Rock";
      humm += 1;
      hum.innerHTML = humm;
      results.innerHTML = "Win! whooooooooo!";
    }
  } else if (human === "scissors") {
    if (computer === "scissors") {
      compChoice.innerHTML = "Scissors";
      results.innerHTML = "Tie!";
    } else if (computer === "rock") {
      compChoice.innerHTML = "Rock";
      comm += 1;
      com.innerHTML = comm;
      results.innerHTML = "Lost :(";
    } else {
      compChoice.innerHTML = "Paper";
      humm += 1;
      hum.innerHTML = humm;
      results.innerHTML = "Win! whooooooooo!";
    }
  }
}

function Play(x) {
  let h = 0;
  let c = 0;
  let y = computerPlay();
  x = x.toLowerCase();
  select(x, y);
}
