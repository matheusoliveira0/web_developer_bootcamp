const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const resetBtn = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let winningScore = 3;
let p2Score = 0;
let isGameOver = false;

p1Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});
p2Btn.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      p1Btn.disabled = true;
      p2Btn.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(winningScoreSelect.value);
  reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-danger", "has-text-success");
        p1Btn.disabled = false;
      p2Btn.disabled = false;

}
