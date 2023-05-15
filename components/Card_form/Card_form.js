const form = document.querySelector('[data-js="card-form"]');
const cardList = document.querySelector('[data-js="new-question-card-list"]');
const yourQuestionField = document.querySelector('[data-js="your-question"]');
const yourAnswerField = document.querySelector('[data-js="your-answer"]');
const questionAmountLeft = document.querySelector(
  '[data-js="amount-left-question"]'
);
const answerAmountLeft = document.querySelector(
  '[data-js="amount-left-answer"]'
);
const maxlengthQuestion = yourQuestionField.getAttribute("maxlength");
const maxlengthAnswer = yourAnswerField.getAttribute("maxlength");
const progressBar = document.querySelector('[data-js="progress-bar"]');

function progressBarChange() {
  function calculateScrollPercentage() {
    let windowYPosition = window.scrollY;
    console.log(windowYPosition);
    let windowHeight = window.innerHeight;
    console.log(windowHeight);
    let webpageHeight = document.body.clientHeight;
    console.log(webpageHeight);
    let progressBarWidth =
      (windowYPosition / (webpageHeight - windowHeight)) * 100;
    return progressBarWidth + "%";
  }

  document.addEventListener("scroll", (event) => {
    progressBar.classList.add("header__progress-bar--active");
    progressBar.style.width = calculateScrollPercentage();
  });
}
progressBarChange();

//
const updateAmountLeft = (field, amountLeftElement, maxLength) => {
  const updateAmount = () => {
    const length = maxLength - field.value.length;
    amountLeftElement.innerText = length;
  };

  updateAmount();
  field.addEventListener("input", updateAmount);
};

updateAmountLeft(yourQuestionField, questionAmountLeft, maxlengthQuestion);
updateAmountLeft(yourAnswerField, answerAmountLeft, maxlengthAnswer);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // get data out of form submit

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  // create question card elements

  const questionCardListItem = document.createElement("li");
  const questionCard = document.createElement("article");
  const question = document.createElement("h2");
  const answerButton = document.createElement("button");
  const answer = document.createElement("p");
  const tagList = document.createElement("ul");
  const tag = document.createElement("li");
  const bookmarkDiv = document.createElement("div");
  const bookmarkButton = document.createElement("button");
  const bookmarkIcon = document.createElement("svg");
  const bookmarkIconPath = document.createElement("path");

  // add style classes to question card elements

  cardList.classList.add("new-question-card-list");
  questionCardListItem.classList.add("question-card-list__item");
  questionCard.classList.add("question-card");
  question.classList.add("question-card__question");
  answerButton.classList.add("question-card__button-answer");
  answer.classList.add("question-card__answer");
  tagList.classList.add("question-card__tag-list");
  tag.classList.add("question-card__tag-list-item");
  bookmarkDiv.classList.add("question-card__button-bookmark");
  bookmarkButton.classList.add("bookmark");
  bookmarkIcon.classList.add("bookmark__icon");

  // add attributes to question card elements

  answerButton.setAttribute("type", "button");
  answerButton.setAttribute("data-js", "button-answer");
  answer.setAttribute("data-js", "question-card__answer");
  bookmarkButton.setAttribute("type", "button");
  bookmarkButton.setAttribute("data-js", "bookmark");
  bookmarkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  bookmarkIcon.setAttribute("viewbox", "0 0 24 24");

  // Add text content to question card elements
  question.textContent = data["your-question"];
  answerButton.textContent = "Show answer";
  tag.textContent = data.tag;
  bookmarkButton.innerHTML =
    '<svg class="bookmark__icon" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24"> <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>';

  // Append question card elements to the card list

  cardList.append(questionCardListItem);
  questionCardListItem.append(questionCard);
  questionCard.append(question);
  questionCard.append(answerButton);
  questionCard.append(answer);
  questionCard.append(tagList);
  tagList.append(tag);
  questionCard.append(bookmarkDiv);
  bookmarkDiv.append(bookmarkButton);
});
