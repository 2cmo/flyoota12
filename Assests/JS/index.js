var says = [
  "Levi and Grant don't know math 🤣",
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
