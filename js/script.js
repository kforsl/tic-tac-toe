var count = 1;
var countDisplay = document.getElementById("count");

/* Get roundCount from HTML */
function changeOne() {
    if (count % 2 == 1 && markOne.textContent === " " ) {
        markOne.textContent = "O";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "X";
    } else if (count % 2 == 0 && markOne.textContent === " ") {
        markOne.textContent = "X";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "O";
    }
}
function changeTwo() {
    if (count % 2 == 1 && markTwo.textContent === " " ) {
        markTwo.textContent = "O";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "X";
    } else if (count % 2 == 0 && markTwo.textContent === " ") {
        markTwo.textContent = "X";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "O";
    }
}
function changeThree() {
    if (count % 2 == 1 && markThree.textContent === " " ) {
        markThree.textContent = "O";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "X";
    }  else if (count % 2 == 0 && markThree.textContent === " ") {
        markThree.textContent = "X";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "O";
    }
}
function changeFour() {
    if (count % 2 == 1 && markFour.textContent === " " ) {
        markFour.textContent = "O";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "X";
    }  else if (count % 2 == 0 && markFour.textContent === " ") {
        markFour.textContent = "X";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "O";
    }
}
function changeFive() {
    if (count % 2 == 1 && markFive.textContent === " " ) {
        markFive.textContent = "O";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "X";
    }  else if (count % 2 == 0 && markFive.textContent === " ") {
        markFive.textContent = "X";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "O";
    }
}
function changeSix() {
    if (count % 2 == 1 && markSix.textContent === " " ) {
        markSix.textContent = "O";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "X";
    }  else if (count % 2 == 0 && markSix.textContent === " ") {
        markSix.textContent = "X";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "O";
    }
}
function changeSeven() {
    if (count % 2 == 1 && markSeven.textContent === " " ) {
        markSeven.textContent = "O";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "X";
    }  else if (count % 2 == 0 && markSeven.textContent === " ") {
        markSeven.textContent = "X";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "O";
    }
}
function changeEight() {
    if (count % 2 == 1 && markEight.textContent === " " ) {
        markEight.textContent = "O";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "X";
    }  else if (count % 2 == 0 && markEight.textContent === " ") {
        markEight.textContent = "X";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "O";
    }
}
function changeNine() {
    if (count % 2 == 1 && markNine.textContent === " " ) {
        markNine.textContent = "O";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "X";
    }  else if (count % 2 == 0 && markNine.textContent === " ") {
        markNine.textContent = "X";
        count++;
        countDisplay.innerHTML = count;
        player.textContent = "O";
    }
}

/* Function Reset the Board */

function resetGame() {
    markOne.textContent = " ";
    markTwo.textContent = " ";
    markThree.textContent = " ";
    markFour.textContent = " ";
    markFive.textContent = " ";
    markSix.textContent = " ";
    markSeven.textContent = " ";
    markEight.textContent = " ";
    markNine.textContent = " ";
    count = 1;
    countDisplay.innerHTML = "1";
    player.textContent = "O";

}

/* EventListener */

playBoxOne.addEventListener("click", changeOne);
playBoxTwo.addEventListener("click", changeTwo);
playBoxThree.addEventListener("click", changeThree);
playBoxFour.addEventListener("click", changeFour);
playBoxFive.addEventListener("click", changeFive);
playBoxSix.addEventListener("click", changeSix);
playBoxSeven.addEventListener("click", changeSeven);
playBoxEight.addEventListener("click", changeEight);
playBoxNine.addEventListener("click", changeNine);
resetBtn.addEventListener("click", resetGame);
