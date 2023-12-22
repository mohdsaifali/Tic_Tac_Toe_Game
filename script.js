let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const resetgame = () =>{
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide")
}

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = ()=>{
  for(let box of boxs){
    box.disabled = true;
  }
}

const enableBoxes = ()=>{
  for(let box of boxs){
    box.disabled = false;
    box.innerText = ""
  }
}
// Show Winner Function
 
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Check Winner Function
 
const checkWinner = () => {
  for (let pattern of winPattern) {

    let pos1val = boxs[pattern[0]].innerText;
    let pos2val = boxs[pattern[1]].innerText;
    let pos3val = boxs[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

newGameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
