/* Bien Mac Dinh */
const COLS = 10;
const ROWS = 17;
const BLOCK = 30;   // 1 BLOCK co size = 30 px
const COLOR_PROPERTY = ['red', 'orange', 'green', 'purple', 'blue', 'cyan', '#ff0080', 'white'];
// Tham so colorID = index of COLOR_PROPERTY 0-7
const WHITE_COLOR_ID = 7;
const canvas = document.getElementById('boardCanvas');
const ctx = canvas.getContext('2d');
const BRICK_SHAPE = [
    // Hinh chu T
    [
        [
            [7, 1, 7],
            [1, 1, 1],
            [7, 7, 7]
        ],
        [
            [1, 7, 7],
            [1, 1, 7],
            [1, 7, 7]
        ],
        [
            [1, 1, 1],
            [7, 1, 7],
            [7, 7, 7]
        ],
        [
            [7, 1, 7],
            [1, 1, 7],
            [7, 1, 7]
        ]
    ],
    // Hinh chu Z
    [
        [
            [1, 1, 7],
            [7, 1, 1],
            [7, 7, 7]
        ],
        [
            [7, 1, 7],
            [1, 1, 7],
            [1, 7, 7]
        ],
        [
            [1, 1, 7],
            [7, 1, 1],
            [7, 7, 7]
        ],
        [
            [7, 1, 7],
            [1, 1, 7],
            [1, 7, 7]
        ]
    ],
    // Hinh chu L
    [
        [
            [1, 7, 7],
            [1, 1, 1],
            [7, 7, 7]
        ],
        [
            [1, 1, 7],
            [1, 7, 7],
            [1, 7, 7]
        ],
        [
            [1, 1, 1],
            [7, 7, 1],
            [7, 7, 7]
        ],
        [
            [7, 1, 7],
            [7, 1, 7],
            [1, 1, 7]
        ]
    ],
    // Hinh Vuong
    [
        [
            [1, 1, 7],
            [1, 1, 7],
            [7, 7, 7]
        ],
        [
            [1, 7, 1],
            [7, 7, 7],
            [1, 7, 1]
        ],
        [
            [7, 1, 7],
            [1, 7, 1],
            [7, 1, 7]
        ],
        [
            [1, 1, 7],
            [1, 1, 7],
            [7, 7, 7]
        ]
    ],
    // Hinh chu Z nguoc
    [
        [
            [7, 1, 1],
            [1, 1, 7],
            [7, 7, 7]
        ],
        [
            [1, 7, 7],
            [1, 1, 7],
            [7, 1, 7]
        ],
        [
            [7, 1, 1],
            [1, 1, 7],
            [7, 7, 7]
        ],
        [
            [1, 7, 7],
            [1, 1, 7],
            [7, 1, 7]
        ]
    ],
    //Hinh chu L nguoc
    [
        [
            [7, 7, 1],
            [1, 1, 1],
            [7, 7, 7]
        ],
        [
            [1, 7, 7],
            [1, 7 ,7],
            [1, 1, 7]
        ],
        [
            [1, 1, 1],
            [1, 7, 7],
            [7, 7, 7]
        ],
        [
            [1, 1, 7],
            [7, 1, 7],
            [7, 1, 7]
        ]
    ],
    // Hinh chu I
    [
        [
            [1, 1, 1, 1],
            [7, 7, 7, 7],
            [7, 7, 7, 7],
            [7, 7, 7, 7]
        ],
        [
            [1, 7, 7, 7],
            [1, 7, 7, 7],
            [1, 7, 7, 7],
            [1, 7, 7, 7]
        ],
        [
            [1, 1, 1, 1],
            [7, 7, 7, 7],
            [7, 7, 7, 7],
            [7, 7, 7, 7]
        ],
        [
            [1, 7, 7, 7],
            [1, 7, 7, 7],
            [1, 7, 7, 7],
            [1, 7, 7, 7]
        ]
    ]
];
const KEY_CODE = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    SHIFT: 'Shift', //Change color
    SPACE: ' '      //Pause game
};
// Ve canvas ^^
ctx.canvas.width = COLS * BLOCK;
ctx.canvas.height = ROWS * BLOCK;
// Ham tao them brick
function moreBrick() {
    brick = new Brick(Math.floor(Math.random()*10) % BRICK_SHAPE.length);   // colorId 0-6
}
// Khoi tao Bang
let board = new Board(ctx);
board.drawBoard();
// Tao brick dau tien
let brick = new Brick(4);
//brick.drawBrick();
// Brick tu dong roi xuong
setInterval(function (){
    brick.moveDown();
},700);
// Goi them brick
moreBrick();
// Nhan su kien ban phim
document.addEventListener('keydown', (evt) => {
    console.log({evt});
    switch (evt.code) {
        case KEY_CODE.LEFT:
            brick.moveLeft();
            break;
        case KEY_CODE.RIGHT:
            brick.moveRight();
            break;
        case KEY_CODE.DOWN:
            brick.moveDown();
            break;
        case KEY_CODE.UP:
            brick.rotate();
            break;
        case KEY_CODE.SHIFT:
            break;
        case KEY_CODE.SPACE:
            break;
    }
})

console.table(board.grid);