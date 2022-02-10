function solution(board, moves) {
    var answer = 0;
    var array = [];
    var j = 0;
    for (let i of moves) {
        j = i - 1;
        if (board[board.length - 1][j] != 0) {
            for (let L in board) {
                if (board[L][j] != 0) {
                    if (array.length > 0) {
                        if (board[L][j] == array[array.length - 1]) {
                            board[L][j] = 0;
                            answer += 2
                            array.pop();
                        }
                        else {
                            array.push(board[L][j]);
                            board[L][j] = 0;
                        }
                    }
                    else {
                        array.push(board[L][j]);
                        board[L][j] = 0;
                    }
                    break;
                }
            }
        }
    }
    return answer;
}