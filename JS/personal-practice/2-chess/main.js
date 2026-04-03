let chessMatrix = [
    ['bR','bN','bB','bQ','bK','bB','bN','bR'],
    ['bP','bP','bP','bP','bP','bP','bP','bP'],
    [  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0],
    ['wP','wP','wP','wP','wP','wP','wP','wP'],
    ['wR','wN','wB','wQ','wK','wB','wN','wR']
]

const pieceSymbols = {
    'wK':'♔','wQ':'♕','wR':'♖','wB':'♗','wN':'♘','wP':'♙',
    'bK':'♚','bQ':'♛','bR':'♜','bB':'♝','bN':'♞','bP':'♟'
}

function renderChess() {
    let chessBoard = document.getElementById("board");
    for (let i = 0; i < chessMatrix.length; i++) {
        for (let j = 0; j < chessMatrix[i].length; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            if ((i + j) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");
            }
            chessBoard.appendChild(square);
        }
    }
}

function renderPieces() {
    document.querySelectorAll(".square").forEach((square, index) => {
        let row = Math.floor(index / 8);
        let col = index % 8;
        let cell = chessMatrix[row][col];

        if (cell !== 0) {
            let piece = document.createElement('div');
            piece.classList.add('piece');
            piece.dataset.row = row; 
            piece.dataset.col = col;
            piece.dataset.code = cell;
            piece.textContent = pieceSymbols[cell];
            piece.draggable = true;
            square.appendChild(piece);
        }
    });
}

function movePiece(r1, r2, c1, c2){
    // matrix update
    let piece = chessMatrix[r1][c1];
    chessMatrix[r2][c2] = piece
    chessMatrix[r1][c1] = 0;
    // html update
    document.querySelectorAll(".square").forEach((square, index) => {
        let row = Math.floor(index / 8);
        let col = index % 8;
        if ((row === r1 && col === c1) || (row === r2 && col === c2)) {
            square.innerHTML = '';
            let cell = chessMatrix[row][col];
            if (cell !== 0) {
                let piece = document.createElement('div');
                piece.classList.add('piece');
                piece.dataset.row = row; 
                piece.dataset.col = col;
                piece.dataset.code = cell;
                piece.textContent = pieceSymbols[cell];
                piece.draggable = true;
                square.appendChild(piece);
            }
        }
    })
}



renderChess();
renderPieces();