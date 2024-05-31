let player1st, player2nd;
let player1Wins = 0;
let player2Wins = 0;
let i = 0;
const mybox = document.querySelectorAll(".boxs");

function resetGame() {
    mybox.forEach(box => {
        box.classList.remove("bx", "bx-circle", "bx-x", "mycircle");
        box.removeAttribute("id");
        box.addEventListener("click", handleClick);
    });
    i = 0;
}

function handleClick(e) {
    i++;
    let boxx = e.target;
    if (i % 2 == 0) {
        boxx.classList.add("bx", "bx-circle", "mycircle");
        boxx.setAttribute("id", "circle");
    } else {
        boxx.classList.add("bx", "bx-x", "mycircle");
        boxx.setAttribute("id", "cross");
    }

    boxx.removeEventListener("click", handleClick);

    if (checkWin('circle')) {
        document.getElementById('winnerMessage').innerText = `2nd Player has won!`;
        player2Wins++;
        logWins();
        showModal();
    } else if (checkWin('cross')) {
        document.getElementById('winnerMessage').innerText = `1st Player has won!`;
        player1Wins++;
        logWins();
        showModal();
    }else if (i === 9) { // All boxes filled, no winner
        document.getElementById('winnerMessage').innerText = `Match Draw!`;
        showModal();
    }
}

function checkWin(symbol) {
    return (
        (mybox[0].getAttribute('id') === symbol && mybox[1].getAttribute('id') === symbol && mybox[2].getAttribute('id') === symbol) ||
        (mybox[3].getAttribute('id') === symbol && mybox[4].getAttribute('id') === symbol && mybox[5].getAttribute('id') === symbol) ||
        (mybox[6].getAttribute('id') === symbol && mybox[7].getAttribute('id') === symbol && mybox[8].getAttribute('id') === symbol) ||
        (mybox[0].getAttribute('id') === symbol && mybox[3].getAttribute('id') === symbol && mybox[6].getAttribute('id') === symbol) ||
        (mybox[1].getAttribute('id') === symbol && mybox[4].getAttribute('id') === symbol && mybox[7].getAttribute('id') === symbol) ||
        (mybox[2].getAttribute('id') === symbol && mybox[5].getAttribute('id') === symbol && mybox[8].getAttribute('id') === symbol) ||
        (mybox[0].getAttribute('id') === symbol && mybox[4].getAttribute('id') === symbol && mybox[8].getAttribute('id') === symbol) ||
        (mybox[2].getAttribute('id') === symbol && mybox[4].getAttribute('id') === symbol && mybox[6].getAttribute('id') === symbol)
    );
}

function logWins() {
    // console.log(`1st Player Wins: ${player1Wins}`);
    // console.log(`2nd Player Wins: ${player2Wins}`);
    document.getElementById("win1").innerHTML = player1Wins
    document.getElementById("win2").innerHTML = player2Wins
}

function showModal() {
    var winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'));
    winnerModal.show();
}

// function playernaming() {
//     player1st = document.getElementById("1stplayername").value;
//     player2nd = document.getElementById("2ndplayername").value;

//     document.getElementById("player1").innerHTML = `<h3>${player1st}- X</h3>`;
//     document.getElementById("player2").innerHTML = `<h3>${player2nd}- O</h3>`;
// }

document.getElementById('playAgainBtn').addEventListener('click', resetGame);
mybox.forEach(box => {
    box.addEventListener("click", handleClick);
});
// document.addEventListener("DOMContentLoaded", function() {
//     var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
//     myModal.show();
    
// });
