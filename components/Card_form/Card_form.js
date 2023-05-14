export function handleFormSubmit() {
  const form = document.querySelector('[data-js="card-form"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event.target);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  });
}
