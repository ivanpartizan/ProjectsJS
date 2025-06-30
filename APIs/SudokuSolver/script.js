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

const solve = () => {
  const options = {
    method: "POST",
    url: "https://solve-sudoku.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": "dd246daf8emsh5c56367f132b388p1c9a77jsnb0b04a526d60",
      "x-rapidapi-host": "solve-sudoku.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    "Content-Type": {
      0: "{",
      1: '"',
      2: "p",
      3: "u",
      4: "z",
      5: "z",
      6: "l",
      7: "e",
      8: '"',
      9: ":",
      10: " ",
      11: '"',
      12: "2",
      13: ".",
      14: ".",
      15: ".",
      16: ".",
      17: ".",
      18: ".",
      19: ".",
      20: ".",
      21: ".",
      22: ".",
      23: ".",
      24: ".",
      25: ".",
      26: "6",
      27: "2",
      28: ".",
      29: ".",
      30: ".",
      31: ".",
      32: "1",
      33: ".",
      34: ".",
      35: ".",
      36: ".",
      37: "7",
      38: ".",
      39: ".",
      40: ".",
      41: "6",
      42: ".",
      43: ".",
      44: "8",
      45: ".",
      46: ".",
      47: ".",
      48: "3",
      49: ".",
      50: ".",
      51: ".",
      52: "9",
      53: ".",
      54: ".",
      55: ".",
      56: "7",
      57: ".",
      58: ".",
      59: ".",
      60: "6",
      61: ".",
      62: ".",
      63: "4",
      64: ".",
      65: ".",
      66: ".",
      67: "4",
      68: ".",
      69: ".",
      70: ".",
      71: ".",
      72: "8",
      73: ".",
      74: ".",
      75: ".",
      76: ".",
      77: "5",
      78: "2",
      79: ".",
      80: ".",
      81: ".",
      82: ".",
      83: ".",
      84: ".",
      85: ".",
      86: ".",
      87: ".",
      88: ".",
      89: ".",
      90: ".",
      91: ".",
      92: "3",
      93: '"',
      94: "}",
    },
  };

  async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
};

solveButton.addEventListener("click", solve);
