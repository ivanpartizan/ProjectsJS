const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key=621edc97957127f7c125a85d13d6cc225cf800cd"
  );

  let data = await response.json();

  for (let i = 0; i <= 1858; i++) {
    emoji.push({
      emojiCharacter: data[i].character,
      emojiName: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiCharacter;
  emojiNameEl.innerText = emoji[randomNum].emojiName;
});
