const choices = ['✊', '✋', '✌️']; // Rock, Paper, Scissors emojis

// Function to randomly select a choice for a player
function chooseRandom(player) {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById(`${player}Choice`).innerHTML = randomChoice;
}

// Function to determine the winner
function determineWinner() {
    const player1Choice = document.getElementById('player1Choice').innerHTML;
    const player2Choice = document.getElementById('player2Choice').innerHTML;

    if (player1Choice === '❓' || player2Choice === '❓') {
        document.getElementById('result').innerHTML = 'Both players must choose!';
        return;
    }

    if (player1Choice === player2Choice) {
        document.getElementById('result').innerHTML = "It's a Tie!";
    } else if (
        (player1Choice === '✊' && player2Choice === '✌️') ||
        (player1Choice === '✋' && player2Choice === '✊') ||
        (player1Choice === '✌️' && player2Choice === '✋')
    ) {
        document.getElementById('result').innerHTML = 'Player 1 Wins!';
    } else {
        document.getElementById('result').innerHTML = 'Player 2 Wins!';
    }
}
