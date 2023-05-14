export function answerButtonToggle () {
const answerButtons = document.querySelectorAll(`[data-js="button-answer"]`);
console.log(answerButtons);
const answers = document.querySelectorAll(`[data-js="question-card__answer"]`);
for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", () => {
    answers[i].classList.toggle("queation-card__answer--active");
  });
}
}

export function bookmarkButtonToggle () {

const bookmarkButtons = document.querySelectorAll(`[data-js="bookmark"]`);
console.log(bookmarkButtons);
for (let j = 0; j < bookmarkButtons.length; j++) {
  bookmarkButtons[j].addEventListener("click", () => {
    bookmarkButtons[j].classList.toggle("bookmark--active");
  });
}
}