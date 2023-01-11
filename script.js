let boxes = document.getElementsByClassName("col");

let turn = "X";
let count = 0;

const changeTurn = () => {
  if (turn === "X") {
    return "0";
  } else {
    return "X";
  }
};
const checkWin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];
  wins.forEach((e) => {
    if (
      boxes[e[0]].innerText === boxes[e[1]].innerText &&
      boxes[e[1]].innerText === boxes[e[2]].innerText &&
      boxes[e[0]].innerText !== ""
    ) {
      document.getElementById("gamecontainer").style.display = "none";
      document.getElementById("header").style.display="none";
      document.getElementById("gameover").style.display = "block";
      document.getElementById("newgame").style.display = "block";
      document.getElementById("gameover").innerText =
      boxes[e[0]].innerText + " won";
      // let button = document.createElement("button");
      // button.innerText="New Game";

      document.getElementById("gameover").style.fontSize="40px";
      document.getElementById("gameover").style.fontWeight="bold";
     

    }
  });
};

Array.from(boxes).forEach((element) => {
  element.addEventListener("click", () => {
    if ((element.innerText = " ")) {
      element.innerText = turn;
      turn = changeTurn();
      document.getElementById("header").innerText = "Turn for  " + turn;
      element.id = "alreadyPlayed";
      checkWin();
      count++;
    }
    if (count === 9) {
      document.getElementById("header").style.display="none";
      document.getElementById("gamecontainer").style.display = "none";
      document.getElementById("gameovercontainer").style.display = "flex";
      document.getElementById("gameovercontainer").style.flexDirection="column";
      document.getElementById("gameover").style.display = "block";
      document.getElementById("newgame").style.display = "block";
      
    }
  });
});

document.getElementById("newgame").addEventListener("click",()=>{
  location.reload();
})
