// Add & Change HTML

// 1. Create the element
const newH1 = document.createElement("h1");

const newListItem = document.createElement("li");

// 2. Add attributes/properties
// newH1.textContent = "I am Ivan";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// 3. Append element to DOM
// document.body.append(newH1); // appends to the end
// document.body.prepend(newH1); // appends to the start
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]);

// document.body.append(newListItem);
// document.getElementById("fruits").append(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// Remove HTML element
// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);

// document.getElementById("fruits").removeChild(newListItem);
