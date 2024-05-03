var says = [
  "Flyoota V2 is now costs $1 a month. (your progress saves.)",
];

function splashText() {
  document.querySelector(".Index-SplashText").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();

  fetch("")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.;
      says.push(`?: ${ipAddress}`);
      splashText();
    });
});
