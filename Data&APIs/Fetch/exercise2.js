async function getText() {
  const response = await fetch("text.txt");
  console.log(response);
  const text = await response.text();
  console.log(text);
  document.getElementById("text").innerText = text;
}

getText();
