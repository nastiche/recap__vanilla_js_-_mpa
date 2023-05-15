const answerButtons = document.querySelectorAll(`[data-js="button-answer"]`);
console.log(answerButtons);
const answers = document.querySelectorAll(`[data-js="question-card__answer"]`);
const buttons = document.querySelectorAll('[data-js="button-answer"]');

export function answerButtonToggle() {
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", createToggleFunction(i));
  }
}

function createToggleFunction(index) {
  return function () {
    toggleButtonContent(index);
  };
}

function toggleButtonContent(index) {
  const answer = answers[index];
  const button = buttons[index];

  answer.classList.toggle("question-card__answer--active");
  button.classList.toggle("question-card__button-answer--active");

  if (button.textContent.trim() === "Show Answer") {
    button.textContent = "Hide Answer";
  } else {
    button.textContent = "Show Answer";
  }
}
export function bookmarkButtonToggle() {
  const bookmarkButtons = document.querySelectorAll(`[data-js="bookmark"]`);
  console.log(bookmarkButtons);

  // iterate all answer buttons, add toggle function on click

  for (let j = 0; j < bookmarkButtons.length; j++) {
    bookmarkButtons[j].addEventListener("click", () => {
      bookmarkButtons[j].classList.toggle("bookmark--active");
    });
  }
}
