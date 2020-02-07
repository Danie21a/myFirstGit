var mat = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

var turn = false;
var x = "/madie/x.jpg",
  o = "/madie/o.jpg",
  empty = "/madie/empty.jpg";
var tab;
var trSize = "180px";
var fisMsg = "First player ";
var secMsg = "Second player ";
var show = document.getElementById("display");
var whoTurn = document.getElementById("WhosTurn");
var showEmpty =
  "<img src=" + empty + " width =" + trSize + "height =" + trSize + ">";
var xImg = "<img src=" + x + " width =" + trSize + "height =" + trSize + ">";
var oImg = "<img src=" + o + " width =" + trSize + "height =" + trSize + ">";
var stepCount = 0;
const drawSteps = 8;
const boardSize = 3;
function init() {
  for (let r = 0; r < boardSize; r++) {
    for (let c = 0; c < boardSize; c++) {
      mat[r][c] = showEmpty;
    }
  }
  whoTurn.innerHTML = fisMsg;
  draw();
}
function play() {
  var row = document.getElementById("rows").value;
  var col = document.getElementById("cols").value;
  if (mat[row - 1][col - 1] == showEmpty) {
    stepCount++;
    turn = !turn;
    whoTurn.innerHTML = turn ? secMsg : fisMsg;
    mat[row - 1][col - 1] = turn ? xImg : oImg;
    draw();
    wincheckForX();
    wincheckForO();
  } else {
    //not empty....
    whoTurn.innerHTML =
      "<h1><span style='color: red;''>Please use empty</span> </h1>";
  } // 8 tr already full
  if (stepCount == drawSteps) {
    whoTurn.innerHTML =
      "<h1><span>draw , play again? pls press F5 </span> </h1>";
  }
}

function draw() {
  tab = "<table  style='padding: 30px 0px 0px 500px ;'>";
  for (let r = 0; r < 3; r++) {
    tab += "<tr>";
    for (let c = 0; c < 3; c++) {
      tab += "<td>" + mat[r][c];
    }
  }
  tab += "</table>";
  show.innerHTML = tab;
}
//// the chack for x
function wincheckForX() {
  let win = false;
  let chkVal = xImg;
  let countRows = 0,
    countCols = 0;

  //rows and cols
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      mat[r][c] == chkVal ? countRows++ : countRows;
      mat[c][r] == chkVal ? countCols++ : countCols;
    }

    if (countRows == 3 || countCols == 3) {
      win = chkVal;
    }
    countRows = 0;
    countCols = 0;
  }

  if (mat[0][0] == mat[0][1] && mat[0][1] == mat[0][2] && mat[0][0] == chkVal) {
    win = chkVal; /// first row
  }

  if (mat[1][0] == mat[1][1] && mat[1][1] == mat[1][2] && mat[1][0] == chkVal) {
    win = chkVal; // sec row
  }
  if (mat[2][0] == mat[2][1] && mat[2][1] == mat[2][2] && mat[2][0] == chkVal) {
    win = chkVal; // thrd row
  }
  if (mat[0][0] == mat[1][1] && mat[1][1] == mat[2][2] && mat[0][0] == chkVal) {
    win = chkVal; // //diagonal
  }
  if (mat[0][2] == mat[1][1] && mat[1][1] == mat[2][0] && mat[0][2] == chkVal) {
    win = chkVal; //  //diagonal
  }
  // daclaring the winner after the test
  if (win) {
    whoTurn.innerHTML = `THE WINNER IS ${fisMsg}`;
  }
}
//// the chack for x
function wincheckForO() {
  let win = false;
  let chkVal = oImg;
  let countRows = 0,
    countCols = 0;

  //rows and cols
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      mat[r][c] == chkVal ? countRows++ : countRows;
      mat[c][r] == chkVal ? countCols++ : countCols;
    }

    if (countRows == 3 || countCols == 3) {
      win = chkVal;
    }
    countRows = 0;
    countCols = 0;
  }

  if (mat[0][0] == mat[0][1] && mat[0][1] == mat[0][2] && mat[0][0] == chkVal) {
    win = chkVal; /// first row
  }

  if (mat[1][0] == mat[1][1] && mat[1][1] == mat[1][2] && mat[1][0] == chkVal) {
    win = chkVal; // sec row
  }
  if (mat[2][0] == mat[2][1] && mat[2][1] == mat[2][2] && mat[2][0] == chkVal) {
    win = chkVal; // thrd row
  }
  if (mat[0][0] == mat[1][1] && mat[1][1] == mat[2][2] && mat[0][0] == chkVal) {
    win = chkVal; // //diagonal
  }
  if (mat[0][2] == mat[1][1] && mat[1][1] == mat[2][0] && mat[0][2] == chkVal) {
    win = chkVal; //  //diagonal
  }
  // daclaring the winner after the test
  if (win) {
    whoTurn.innerHTML = `THE WINNER IS ${secMsg}`;
  }
}
function restartGame() {
  cleanValues();
  init();
  //draw();
}

function cleanValues() {
  var row = document.getElementById("rows");
  var col = document.getElementById("cols");
  row.value = "";
  col.value = "";
}

//init game
init();
draw();
