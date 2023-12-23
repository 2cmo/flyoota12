var says = [
  "Your one and only Unbl0cked Playground",
  "I hate working on flyoota",
  "Better than Bypass",
  "yes its open-source",
  "what do i add?",
  "BETA at the momment",
  "optimized by ChatGPT",
  "archiving piksulh soon",
  "LunarOS 🔛🔝",
  "i need ads on this site cuz i need money 💵",
  "Schools Pretty Boring",
  "This Websites Trash", 
  "i took too long making this :(", 
  "working on adding the undated 1v1.lol soon", 
  "the person who made this websites pretty cool", 
  "i made this on the weekend :(",
  "hi reed",
  "hey kitten",
];

function splashText() {
  document.querySelector(".Index-SplashText").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();

  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      ipAddress = data.YourFuckingISP;
      says.push(`umm your fucking ISP: ${ipAddress}`);
      splashText();
    });
});
