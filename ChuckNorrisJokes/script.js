async function getData() {
  const url = "https://api.chucknorris.io/jokes/random";

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.value);
}

getData();
