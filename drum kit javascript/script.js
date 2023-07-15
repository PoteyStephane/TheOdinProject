// const audio = document.querySelector("audio");

// window.addEventListener("keydown", function (e) {
//   //   const audio = document.querySelector(`audio[data-key="${e.code}"]`);
//   //   const key = document.querySelector(`audio[data-key="${e.code}"]`);
//   //   if (!audio) return;
//   //   audio.play();
//   //   console.log(audio);
// });

// OR

// window.addEventListener("keydown", (e) => {
//   console.log(e.code);
//   console.log(audio1);
// });

window.addEventListener("keydown", handleKeyPress);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function handleKeyPress(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}
