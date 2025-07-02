const puzzleBoard = document.querySelector("#puzzle");
const solveButton = document.querySelector("#solve-button");

const squares = 81;
const submission = [];

for (let i = 0; i < squares; i++) {
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "number");
  inputElement.setAttribute("min", "1");
  inputElement.setAttribute("max", "9");
  puzzleBoard.appendChild(inputElement);
}

const joinValues = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.value) {
      submission.push(input.value);
    } else {
      submission.push(".");
    }
  });
  console.log(submission);
};

const populateValues = (isSolvable, solution) => {
  const inputs = document.querySelectorAll("input");
  if (isSolvable && solution) {
    inputs.forEach((input, i) => {
      input.value = solution[i];
    });
  }
};

const solve = () => {
  joinValues(); // This should fill in your 'submission' array
  const data = submission.join("");

  console.log("data", data);

  const payload = {
    puzzle: data,
  };

  fetch("https://solve-sudoku.p.rapidapi.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-key": "dd246daf8emsh5c56367f132b388p1c9a77jsnb0b04a526d60",
      "x-rapidapi-host": "solve-sudoku.p.rapidapi.com",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Solved Puzzle:", data);
      populateValues(data.solvable, data.solution);
    })
    .catch((error) => {
      console.error("Error solving puzzle:", error);
    });
};

solveButton.addEventListener("click", solve);
