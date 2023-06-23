const playerTurn = document.getElementById('player-turn');
const resetBtn = document.getElementById('reset-btn')
const boxes = document.querySelectorAll('.box')
const winningModal = document.getElementById("modal-id")
let modalText = document.getElementById("modal-text")


let winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"
let gameplay = false;

startGame()


function startGame() {
    boxes.forEach(box => box.addEventListener("click", boxClicked));
    resetBtn.addEventListener("click", resetGame);
    playerTurn.textContent = `It is ${currentPlayer}'s turn!`
    gameplay = true;
}

function boxClicked() {
    const boxIndex = this.getAttribute("cellIndex");

    if (options[boxIndex] != "" || !gameplay) {
        return;
    }
    fillInBox(this, boxIndex);
    checkWinner();
}

function fillInBox(box, index) {
    options[index] = currentPlayer;
    box.textContent = currentPlayer;
}

function switchPlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    playerTurn.textContent = `It Is ${currentPlayer}'s turn!`
}

function resetGame() {

}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winningCombos.length; i++) {
        const condition = winningCombos[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
        if (roundWon) {
            modalText.textContent = `${currentPlayer} wins the game!!!!!`;
            winningModal.addEventListener('show.bs.modal', () => modalText.focus())
            gameplay = false;
            console.log(`${currentPlayer} wins!`)
        } else if (!options.includes("")) {
            console.log("DRAW!");
            gameplay = false;
        } else {
            switchPlayer()
        }

    }
}