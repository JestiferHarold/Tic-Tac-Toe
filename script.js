let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let plays = 0;
const p1 = "O";
const p2 = "X";
let p1Move = true;

const containerDiv = document.getElementById("container");

function setup() {
  createCanvas(400, 400);
}

function draw() {}

function mouseClicked() {
  if (mouseX < 200) {
    if (mouseY < 200) {
      modifyBoard(1, 1);
    }

    if (mouseY > 200) {
      modifyBoard();
    }
  }
}

function modifyBoard(row, column) {
  if (row <= 3 && row > 0 && column <= 3 && column > 0) {
    if (board[row - 1][column - 1] === "") {
      if (p1Move) {
        board[row - 1][column - 1] = p1;
      } else {
        board[row - 1][column - 1] = p2;
      }

      p1Move = !p1Move;
      chances++;
    }
  }
}

function won() {
  if ((board[0][0] === board[1][1]) === board[2][2]) {
    if (board[1][1] === p1) {
      return {
        player: p1,
      };
    } else if (board[1][1] === p2) {
      return {
        player: p2,
      };
    }
  }

  if ((board[2][0] === board[1][1]) === board[0][2]) {
    if (board[1][1] === p1) {
      return {
        player: p1,
      };
    } else if (board[1][1] === p2) {
      return {
        player: p2,
      };
    }
  }

  for (let i = 0; i < 3; i++) {
    if (((board[i][0] === board[i][1]) === board[i][2]) === p1) {
      return {
        player: p1,
      };
    }

    if (((board[i][0] === board[i][1]) === board[i][2]) === p2) {
      return {
        player: p2,
      };
    }

    if (((board[0][i] === board[1][i]) === board[2][i]) === p1) {
      return {
        player: p1,
      };
    }

    if (((board[0][i] === board[1][i]) === board[0][i]) === p2) {
      return {
        player: p2,
      };
    }
  }

  return {
    player: undefined,
  };
}
