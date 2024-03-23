// fetch("rainbow.jpg")
//   .then((response) => {
//     console.log(response);
//     return response.blob();
//   })
//   .then((blob) => {
//     console.log(blob);
//     document.getElementById("rainbow").src = URL.createObjectURL(blob);
//   })
//   .catch((error) => {
//     console.log("Error!");
//     console.error(error);
//   });

async function catchRainbow() {
  const response = await fetch("rainbow.jpg");
  const blob = await response.blob();
  document.getElementById("rainbow").src = URL.createObjectURL(blob);
}

catchRainbow();

// catchRainbow()
//   .then((response) => {
//     console.log("yay");
//   })
//   .catch((error) => {
//     console.log("Error!");
//     console.error(error);
//   });
