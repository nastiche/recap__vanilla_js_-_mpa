const darkModeButton = document.querySelector('[data-js="dark-mode"]');
const body = document.querySelector('[data-js="profile-body"]');

darkModeButton.addEventListener("click", () => {
  console.log("Button clicked");
  body.classList.toggle("dark-mode");
});
