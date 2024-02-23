// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");
//
// myButton.addEventListener("click", (event) => {
//   if (myImg.style.display === "none") {
//     myImg.style.display = "block";
//     myButton.textContent = "Hide";
//   } else {
//     myImg.style.display = "none";
//     myButton.textContent = "Show";
//   }
// });

// OR
// myButton.addEventListener("click", (event) => {
//   if (myImg.style.visibility === "hidden") {
//     myImg.style.visibility = "visible";
//     myButton.textContent = "Hide";
//   } else {
//     myImg.style.visibility = "hidden";
//     myButton.textContent = "Show";
//   }
// });

// NodeList = static collection of HTML elements by id, class, element
// can be created by using querySelectorAll()
// similar to an Array, but no map, filter, reduce, only forEach
// NodeList won't update automatically to reflect changes

// let buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);

// ADD HTML/CSS PROPERTIES
// buttons.forEach((button) => {
//   button.style.backgroundColor = "green";
//   button.textContent += "😁";
// });

// CLICK event listener
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });

// MOUSEOVER + MOUSEOUT event listener
// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//   });
// });

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);

// Remove an element
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     event.target.remove();
//     buttons = document.querySelectorAll(".myButtons");
//   });
// });

// classList = element property in JavaScript used to interact with an element's list of classes (CSS classes)
// allows you to make reusable classes for many elements across your webpage
// add(), remove(), toggle(remove if present, add if not), replace(oldClass, newClass), contains()

// const myButton = document.getElementById("myButton");
// const myH1 = document.getElementById("myH1");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.add("hover");
// });
// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.remove("hover");
// });

// myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.toggle("hover");
// });
// myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.toggle("hover");
// });

// myButton.classList.add("enabled");
// myH1.classList.add("enabled");

// myButton.addEventListener("click", (event) => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "😎";
//   } else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// });

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled");
});
// buttons.forEach((button) => {
//   button.classList.remove("enabled");
// });

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});
buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      event.target.textContent += "😎";
    } else {
      event.target.classList.replace("enabled", "disabled");
    }
  });
});
