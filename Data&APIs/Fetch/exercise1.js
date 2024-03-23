let images = ["peta1.jpg", "peta2.jpg", "peta3.jpg"];

async function displayPeta() {
  for (let image of images) {
    const response = await fetch(image);
    console.log(response);
    const blob = await response.blob();
    console.log(blob);

    const pic = document.createElement("img");
    pic.src = URL.createObjectURL(blob);
    document.body.appendChild(pic);
    console.log(pic);
  }
}

displayPeta();
