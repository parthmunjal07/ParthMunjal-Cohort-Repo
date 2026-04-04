export default function movePawn(r, c, chessMatrix){
    let moves = [];
    if (r===1 && chessMatrix[r+1][c] === 0){
        moves.push(r+1, c)
    }
    if (r>1 && chessMatrix[r+1][c] === 0){
        moves.push(r+1, c)
    }
    if (r<7 && c>0 && chessMatrix[r+1][c-1] !== 0){
        moves.push(r+1, c-1)
    }
    if (r<7 && c<7 && chessMatrix[r+1][c+1] !== 0){
        moves.push(r+1, c+1)
    }
    return moves;
}