function getMouseLocationQuadrant(mouseX, mouseY) {
    // check if actually inside the grid
    if (mouseX < grid_x || mouseX > 2 * grid_x ||
        mouseY < grid_y || mouseY > grid_x + grid_y) {
        return -1;
    }
    var i = Math.floor(3 * (mouseX - grid_x) / grid_x);
    var j = Math.floor(3 * (mouseY - grid_y) / grid_x);
    return i + 3 * j;
}

function getQuadrantTopLeft(quadrant) {
    var xLoc = grid_x + (quadrant % 3) * (grid_x / 3);
    var yLoc = grid_y + Math.floor(quadrant / 3) * (grid_x / 3);
    return [xLoc, yLoc];
}


//
//
//  The actual game logic
//
//

function isQuadrantEmpty(quadrant) {
    return game[quadrant] == 0;
}

function handleGame() {
    if (playersTurn !== 1) {
        messageBox("Thinking...", [0, 0, 155]);
        if (timer > 5) {
            getNextMove();
            timer = 0;
        } else {
            timer++;
        }
    }

    if (isFinished()) {
        // if the game is in an end state, we should start a new game after some delay!
        setTimeout(resetGame, 100);
    }
}

function getNextMove() {
    // Here is the AI

    // First look at the game board
    var potentialGame = getGameState();
    // make the best move possible!
    game[getBestMove(potentialGame)] = choice * -1;
    playersTurn = 1;
}

function getGameState() {
    var board = {};
    for (var i = 0; i < 9; i++) {
        // copies the state of the board to a new variable so we can recurse
        board[i] = game[i];
    }
    // getGameState() is only ever for the AI, so it will be the AI's turn when getGameState is called.
    // Therefore set turn to be the opposite of what player is playing at.
    return {board: board, turn: choice * -1};
}

function scoreGame(potentialGame, depth) {
    // One of the most important functions of the Minimax algorithm.

    // So each of these arrays corresponds to either a row, col or diagonal.
    var winStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (var i = 0; i < winStates.length; i++) {
        // game.board[index] returns either 0 for currently empty, 1 for O and -1 for a X at location index, from the above board
        var score = potentialGame.board[winStates[i][0]] + potentialGame.board[winStates[i][1]] + potentialGame.board[winStates[i][2]];

        // Player can either be O's (+1) or X's (-1)
        if (choice == -1) {
            // Player is X
            if (score === -3) {
                // Player has won
                return depth - 10;
            } else if (score === 3) {
                // Computer has won
                return 10 - depth;
            }
        } else {
            // Player is O
            if (score === 3) {
                return depth - 10;
            } else if (score === -3) {
                return 10 - depth;
            }
        }
    }
    return 0;
}

var scores = [];
var moves = [];

function getBestMove(potentialGame) {
    // Returns what the computer should do next, given some potential game (not necessarily the one currently in play)
    var best = -1;
    var bestInd = -1;

    // Get all valid moves the computer can do right
    var availableMoves = getAvailableMoves(potentialGame);

    for (var i = 0; i < availableMoves.length; i++) {
        // For each possible move, create a new game board (possibleGame) to analyse.
        var possibleGame = makeMove(potentialGame, availableMoves[i]);
        // If this move leads to a game where the computer wins, immediately do it.
        if (scoreGame(possibleGame, 0) === 10) {
            print("We can win");
            return availableMoves[i];
        }
        // Otherwise, compute the "value" of this move, using Minimax (recursive)
        var reward = minimax(possibleGame, 0);
        if (reward > best) {
            best = reward;
            bestInd = i;
        }
        console.log(availableMoves[i]);
        console.log(reward);
    }
    return availableMoves[bestInd];

}

function minimax(potentialGame, depth) {
    // This algorithm returns the "value" of a given move, such that good moves are likely to lead to
    // game states that give a high score from scoreGame(potentialGame, depth)

    var scores = [];
    var moves = [];

    // First, get all the moves we can do currently.
    var availableMoves = getAvailableMoves(potentialGame);
    if (availableMoves.length === 0) {
        // If we can't do a move, the game must be in an end state and the value of this move is simply the
        // value of the end state (0, +10 or -10). Depth allows prioritising moves that lead to earlier wins.
        return scoreGame(potentialGame, depth);
    }

    // Otherwise, we need to loop through all potential moves and score them
    for (var i = 0; i < availableMoves.length; i++) {
        // Once again, construct a new game board, this board should be
        // what the board will look like once the move is made.
        var possibleGame = makeMove(potentialGame, availableMoves[i]);
        // Calculate the value of minimax for that move and store that so we can check later what to do

        // Note that since here we have the function minimax calling minimax, this is a recursive function.
        // A good way of thinking about how recursion works is the factorial function
        // n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
        // we can solve this as:
        // function factorial(n) {
        //  if (n == 2) return 2;
        //  return n * factorial(n - 1);
        // }
        // Lets consider what happens if we call factorial(5);
        // n = 5, not 2, so we don't return 2
        // instead, return n * factorial(4), but what is factorial(4)?
        // For that we need factorial(3), and for that we need factorial(2)...
        // When we get to factorial 2, we know that is 2, so it returns 2.
        // Now factorial(3) knows what factorial(2) is, so factorial(3) returns 3 * 2;
        // similarly factorial (4) now knows factorial(3) and itself can return 4 * 3 * 2;
        // Finally, factorial(5) returns 5 * 4 * 3 * 2 * 1.

        //In TicTacToe we take a similar approach, we construct a new game board from a possible move, and ask what
        // that move is scored according to minimax. Minimax only knows a move gets +0, +10 or -10 if the game is currently
        // in an end state, otherwise it needs to call minimax on this new board (which itself adds yet another move and recurses)
        scores.push(minimax(possibleGame, depth + 1));
        moves.push(availableMoves[i]);
    }

    // After all that recursion, we'll have figured out what each move is valued at by Minimax.

    var index = -1;
    //console.log(scores);
    if (choice === potentialGame.turn) {
        // If the move we just tested was for the human player, we want to minimise his score
        // MINI
        index = getMinIndex(scores);
    } else {
        // If the move to make was for the computer, we want to maximise that.
        // MAX
        index = getMaxIndex(scores);
    }

    // Finally return the score of this move.
    return scores[index];

}

function makeMove(potentialGame, quadrant) {
    // potential game is a {board: game, turn: +-1} object
    // quadrant is the quadrant you want to make the move in
    // returns a new potentialGame
    var newBoard = {};
    for (var i = 0; i < 9; i++) {
        if (i == quadrant) {
            newBoard[i] = potentialGame.turn
        } else {
            newBoard[i] = potentialGame.board[i];
        }
    }
    return {board: newBoard, turn: potentialGame.turn * -1};
}

function getAvailableMoves(potentialGame) {
    if (Math.abs(scoreGame(potentialGame, 0)) == 10) {
        return [];
    }
    var moves = [];
    for (var i = 0; i < 9; i++) {
        if (potentialGame.board[i] === 0) {
            moves.push(i);
        }
    }
    return moves;
}




function setupTicTacToeGrid() {
    strokeWeight(10);
    stroke(0);
    fill(55, 123, 152);
    rect(grid_x, grid_y, grid_x, grid_x, grid_x / 8);
    line(grid_x * (1 + 1. / 3.), grid_y, grid_x * (1 + 1. / 3.), grid_y + grid_x);
    line(grid_x * (1 + 2. / 3.), grid_y, grid_x * (1 + 2. / 3.), grid_y + grid_x);
    line(grid_x, grid_y + grid_x * (1. / 3.), 2 * grid_x, grid_y + grid_x * (1. / 3.));
    line(grid_x, grid_y + grid_x * (2. / 3.), 2 * grid_x, grid_y + grid_x * (2. / 3.));
}

function drawBoard() {
    var keys = Object.keys(game);
    for (var i = 0; i < keys.length; i++) {
        drawObject(keys[i], game[keys[i]], false);
      }
  }

}
