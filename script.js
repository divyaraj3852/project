let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btn-reset");
let Newgame = document.querySelector(".btn-newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turnO =true;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetgame = () =>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach( (box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerHTML = "O";
            turnO = false;
        }else{
            box.innerHTML = "X"
            turnO = true;
        }
      box.disabled = true;

      checkwinner();
    })
})

const disableboxes = () => {
    for(let box of boxes){
    box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
    box.disabled = false;
    box.innerHTML = "";
    }
}

const Showwinner = (winner) => {
    msg.innerText = 'Congratulations, winner is $[winner] ' ; 
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () =>{
    for(pattern of winPattern){    
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos3val === pos1val){
            console.log("winner", pos1val);
            Showwinner(pos1val);
        }
    }  
  }
};

Newgame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);