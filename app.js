
var turnCounter = 0;
var sumX , sumY = 0;
var xMarks = [];
var oMarks = [];
var winningCombos = [["1","2","3"],["4","5","6"],["7","8","9"],
                    ["1","4","7"],["2","5","8"],["3","6","9"],
                    ["1","5","9"], ["3","5","7"]];

var boxes = document.getElementsByClassName('box');

for(let i =0;i<boxes.length; i++){
    boxes[i].addEventListener('click',addPlayerMark)
};

function addPlayerMark(event){
console.log(event.target)
console.log("square clicked")
    if(event.target.innerHTML.length===0){
        if(turnCounter % 2 ===0){
            xMarks.push(event.target.id);
            console.log("X " + xMarks);
            event.target.innerHTML="X";
            event.target.style.background = "red";

        }
        else{
            oMarks.push(event.target.id);
            console.log("O " + oMarks);
            event.target.innerHTML = "O";
            event.target.style.background = "blue";

        }

    }
    else{
        alert("Click a different square")
    }
    turnCounter++;
    getWinner();

    
    
}

function getWinner(){
    var box1 = document.getElementById("1"),
        box2 = document.getElementById("2"),
        box3 = document.getElementById("3"),
        box4 = document.getElementById("4"),
        box5 = document.getElementById("5"),
        box6 = document.getElementById("6"),
        box7 = document.getElementById("7"),
        box8 = document.getElementById("8"),
        box9 = document.getElementById("9");

    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
        alert(box1.innerHTML + " wins, click reset");
    }
    else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        alert(box4.innerHTML + " wins, click reset");
    }
    else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        alert(box7.innerHTML + " wins, click reset");
    }
    else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        alert(box4.innerHTML + " wins, click reset");
    }
    else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        alert(box2.innerHTML + " wins, click reset");
    }
    else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        alert(box3.innerHTML + " wins, click reset");
    }
    else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        alert(box1.innerHTML + " wins, click reset");
    }
    else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        alert(box3.innerHTML + " wins, click reset");
    }
    else if (turnCounter ===9){
        alert("Cats got the game! Click Reset!")
    }
    
}



    






   
    


