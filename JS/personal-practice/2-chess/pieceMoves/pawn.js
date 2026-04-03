export default function movePawn(r, c) {
    let moves = [];
    if (r === 1 && chessMatrix[r + 1][c] === 0) {
        moves.push([r + 1, c]);
        if (chessMatrix[r + 2][c] === 0) {
            moves.push([r + 2, c]);
        }
    } else if (r > 1 && chessMatrix[r + 1][c] === 0) {
        moves.push([r + 1, c]);
    }
    if (c > 0 && chessMatrix[r + 1][c - 1] < 0) {
        moves.push([r + 1, c - 1]);
    }
    if (c < 7 && chessMatrix[r + 1][c + 1] < 0) {
        moves.push([r + 1, c + 1]);
    }
    return moves;
}