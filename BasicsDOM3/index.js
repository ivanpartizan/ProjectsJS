// eventListener = listen for specific events to create interactive web pages
// mouse events: click, mouseover, mouseout
// .addEventListener(event, callback)

// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// function changeColor(event) {
//   // console.log(event); // event object
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "Ouch! 😟";
// }

// myBox.addEventListener("click", changeColor);

// myButton.addEventListener("click", (event) => {
//   myBox.style.backgroundColor = "tomato";
//   myBox.textContent = "Ouch! 😟";
// });

// myButton.addEventListener("mouseover", (event) => {
//   myBox.style.backgroundColor = "yellow";
//   myBox.textContent = "Don't do it! 🤨";
// });

// myButton.addEventListener("mouseout", (event) => {
//   myBox.style.backgroundColor = "lightgreen";
//   myBox.textContent = "Click me! 😁";
// });

// eventListener = listen for specific events to create interactive web pages
// key events: keydown, keyup
// .addEventListener(event, callback)

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", (event) => {
  // console.log(`Key down = ${event.key}`);
  myBox.textContent = "😎";
  myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", (event) => {
  // console.log(`Key up = ${event.key}`);
  myBox.textContent = "😁";
  myBox.style.backgroundColor = "lightblue";
});

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
