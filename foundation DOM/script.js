const container = document.querySelector("#container");

console.dir(container.firstElementChild);
// selects the first child of #container => .display

const controls = document.querySelector(".controls");
// selects the .controls div

console.dir(controls.previousElementSibling);
// selects the prior sibling => .display

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
