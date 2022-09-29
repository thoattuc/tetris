/* Bang */
class Board {
    ctx;
    grid;
    score;
    constructor(ctx) {
        this.ctx = ctx;
        this.grid = this.whiteBoard();
        this.score = 0;
    }
    // Tao 1 bang mau trang
    whiteBoard() {
        return Array.from({length: ROWS},() => Array(COLS).fill(WHITE_COLOR_ID));
    }
    // Tao Block, va mau trang mac dinh cho tat ca cac block
    drawBlock(x, y, colorId) {
        this.ctx.fillStyle = COLOR_PROPERTY[colorId] || COLOR_PROPERTY[WHITE_COLOR_ID];
        this.ctx.fillRect(x * BLOCK, y * BLOCK, BLOCK, BLOCK);
        this.ctx.fillStyle = 'black';
        this.ctx.strokeRect(x * BLOCK, y * BLOCK, BLOCK, BLOCK);
    }
    // Tao ra 1 mang chua so luong grid = whiteBoard (Khai bao)
    drawBoard() {
        for(let row=0; row<this.grid.length; row++) {
            for(let col=0; col<this.grid[0].length; col++) {
                this.drawBlock(col, row, this.grid[row][col]);
            }
        }
    }
    // Xoa/them 1 hang
    removeRow() {
        let lastGrid = board.grid.filter((row) => {
            return row.some(col => col === WHITE_COLOR_ID);
        });

        let newScore = ROWS - lastGrid.length;   // Diem bang so hang da hoan thanh
        let newRow = Array.from({length: newScore}, () => Array(COLS).fill(WHITE_COLOR_ID));

        board.grid = [...newRow, ...lastGrid];
        this.addScore(newScore * 100);

    }
    // Tinh diem
    addScore(newScore) {
        this.score += newScore;
        document.getElementById('scoreSpan').innerHTML = this.score;
    }
}