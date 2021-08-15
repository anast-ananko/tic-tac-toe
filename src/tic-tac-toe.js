class TicTacToe {

    constructor() {
      this.currentPlayerSymbol = 'x';
      this.winner = null;
      this.gameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
       if (this.gameBoard[rowIndex][columnIndex] === null) {
         this.gameBoard[rowIndex][columnIndex] = this.currentPlayerSymbol;
         this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
       }
    }

    isFinished() {
      return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
      const win = () => {
        if (
          this.gameBoard[0][0] === this.gameBoard[1][1] &&
          this.gameBoard[0][0] === this.gameBoard[2][2]
        ) {
          return this.gameBoard[0][0];
        }
    
        if (
          this.gameBoard[0][2] === this.gameBoard[1][1] &&
          this.gameBoard[0][2] === this.gameBoard[2][0]
        ) {
          return this.gameBoard[0][2];
        }
    
        for (let i = 0; i < 3; i++) {
          if (
            this.gameBoard[i][0] === this.gameBoard[i][1] &&
            this.gameBoard[i][0] === this.gameBoard[i][2]
          ) {
            return this.gameBoard[i][0];
          }
        }
    
        for (let i = 0; i < 3; i++) {
          if (
            this.gameBoard[0][i] === this.gameBoard[1][i] &&
            this.gameBoard[0][i] === this.gameBoard[2][i]
          ) {
            return this.gameBoard[0][i];
          }
        }
        return null;
      };
      if (!this.winner) {
        this.winner = win();
      }
        return this.winner;
    }

    noMoreTurns() {
      return !this.gameBoard.some(el => el.some(sym => sym === null));
    }

    isDraw() {
      return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
      return this.gameBoard[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
