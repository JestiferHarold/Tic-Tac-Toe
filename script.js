let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let plays = 0;
const p1 = "O";
const p2 = "X";
let p1Move = true;
let cns;

const containerDiv = document.getElementById("container");

function setup() {
  cns = createCanvas(600, 600);

  background(200);
  line(200, 0, 200, 600);
  line(400, 0, 400, 600);
  line(0, 200, 600, 200);
  line(0, 400, 600, 400);

  cns.position((windowWidth - 600) / 2, (windowHeight - 600) / 2);

  describe("Tic tac toe box");
}

function draw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") continue;

      let row = 200 * (i + 1);
      let column = 200 * (j + 1);

      textSize(30);
      text(board[i][j], row / 2, column / 2);
    }
  }
}

function mouseClicked() {
  console.log(mouseX);
  console.log(mouseY);
  if (mouseX < 200) {
    if (mouseY < 200) {
      modifyBoard(1, 1);
    }

    if (mouseY < 400) {
      modifyBoard(2, 1);
    }

    if (mouseY < 600) {
      modifyBoard(3, 1);
    }
  }

  if (mouseX < 400) {
    if (mouseY < 200) {
      modifyBoard(1, 2);
    }

    if (mouseY < 400) {
      modifyBoard(2, 2);
    }

    if (mouseY < 600) {
      modifyBoard(3, 2);
    }
  }

  if (mouseX < 600) {
    if (mouseY < 200) {
      modifyBoard(3, 1);
    }

    if (mouseY < 400) {
      modifyBoard(2, 3);
    }

    if (mouseY < 600) {
      modifyBoard(3, 3);
    }
  }

  let gameOver = won();

  if (gameOver.player === undefined) {
  }

  if (gameOver.player === p1) {
  }

  if (gameOver.player === p2) {
  }

  console.log(board);
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
