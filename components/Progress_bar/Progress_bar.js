const progressBar = document.querySelector('[data-js="progress-bar"]');

export function progressBarChange() {
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
