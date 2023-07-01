const playerTurn = document.getElementById('player-turn');
const resetBtn = document.getElementById('reset-btn')
const boxes = document.querySelectorAll('.box')
const winningModal = document.getElementById("modal-id")
let modalText = document.getElementById("modal-text")


let winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"
let gameActive = true;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn!!`
const winningPlayer = () => `Player ${currentPlayer} wins!!`

//  cellClicked will handle the current cell being clicked, where the current players mark will be added, and that
//  mark will also be pused to the array at the cellindex of the current box. the "cellindex" is labeled in the html,
// and we will take that number assigned to that div's cell index and push current players mark to the matching 
// index in the gameState array

document.querySelector('game-area').addEventListener('click', cellClicked)

function cellClicked(cellClickedAction) {
    if (gameActive) {
        const clickedCell = clickedCellAction.target
        const clickedCellIndex = parseInt(cellClickedAction.target.getAttribute('cellIndex'));
        if (gameState[clickedCellIndex] !== "") {
            return;
        }
    }
}


