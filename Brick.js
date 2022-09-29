/* Gach */
class Brick {
    colorId;
    shape;
    statusId;
    colBrick;
    rowBrick;
    gameOver;
    constructor(colorId) {
        this.colorId = colorId;
        this.shape = BRICK_SHAPE[colorId];  // Bien hinh dang
        this.statusId = 0;                  // Bien trang thai 0-3
        this.colBrick = Math.floor(Math.random()*2+3);                  // Toa do y cua brick 0-9
        this.rowBrick = 0;                  // Toa do x cua brick 0-19
        this.gameOver = false;
    }
    // Ve 1 brick
    drawBrick() {
        for(let row=0; row<this.shape[this.statusId].length; row++) {
            for(let col=0; col<this.shape[this.statusId][0].length; col++) {
                if(this.shape[this.statusId][row][col] !== WHITE_COLOR_ID) {
                    board.drawBlock(col+this.colBrick, row+this.rowBrick, this.colorId);
                }
            }
        }
    }
    // Xoa 1 brick
    clearBrick() {
        for(let row=0; row<this.shape[this.statusId].length; row++) {
            for(let col=0; col<this.shape[this.statusId][0].length; col++) {
                if(this.shape[this.statusId][row][col] !== WHITE_COLOR_ID) {
                    board.drawBlock(col+this.colBrick, row+this.rowBrick, WHITE_COLOR_ID);
                }
            }
        }
    }
    // Di chuyen 1 brick
    moveLeft() {
        if (!this.checkLocation(this.rowBrick, this.colBrick-1, this.shape[this.statusId])) {
            this.clearBrick();
            this.colBrick -= 1;
            this.drawBrick();
        }
    }
    moveRight() {
        if (!this.checkLocation(this.rowBrick, this.colBrick + 1, this.shape[this.statusId])) {
            this.clearBrick();
            this.colBrick += 1;
            this.drawBrick();
        }
    }
    moveDown() {
        if (!this.checkLocation(this.rowBrick + 1, this.colBrick, this.shape[this.statusId])) {
            this.clearBrick();
            this.rowBrick += 1;
            this.drawBrick();
            return;
        }
        this.impact();
        moreBrick();
    }
    // Xoay hinh
    rotate() {
        if (!this.checkLocation(this.rowBrick, this.colBrick, this.shape[(this.statusId + 1) % 4])) {
            this.clearBrick();
            this.statusId = (this.statusId + 1) % 4;    // New statusID = 0-3
            this.drawBrick()
        }
    }
    // Kiem tra vi tri brick
    checkLocation(nextRow, nextCol, nextShape) {
        if (nextCol < 0)
            return true;

        for(let row=0; row<nextShape.length; row++) {
            for(let col=0; col<nextShape[0].length; col++) {
                if(nextShape[row][col] !== WHITE_COLOR_ID) {
                    if (col + nextCol < 0 ||
                        col + nextCol >= COLS ||
                        row + nextRow >= ROWS ||
                        board.grid[row+nextRow][col+nextCol] !== WHITE_COLOR_ID
                    )
                        return true;
                }
            }
        }
        return false;
    }
    // Kiem tra va cham
    impact() {
        if (this.rowBrick <= 0) {
            this.endGame();
            return;
        }
        for(let row=0; row<this.shape[this.statusId].length; row++) {
            for(let col=0; col<this.shape[this.statusId][0].length; col++) {
                if(this.shape[this.statusId][row][col] !== WHITE_COLOR_ID) {
                    board.grid[row + this.rowBrick][col + this.colBrick] = this.colorId;
                }
            }
        }
        board.removeRow();
        board.drawBoard();
    }
    // Ket thuc game
    endGame() {
        this.gameOver = true;
        let resetGame = confirm("Reset Game");
        if (resetGame) {
            location.reload();
        }
    }
}