class Lazor {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x, this.y - 1],
            [this.x, this.y - 2],
            [this.x, this.y - 3],
            [this.x, this.y - 4],
            [this.x, this.y - 5],
            [this.x, this.y - 6],
            [this.x, this.y + 1],
            [this.x, this.y + 2],
            [this.x, this.y + 3],
            [this.x, this.y + 4],
            [this.x, this.y + 5],
            [this.x, this.y + 6]
  
        ];
    }
    chooseCell(character, character1) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }


            }
        }
        return found;
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newGrass = new Lazor(newX, newY);
            LazorArr.push(newGrass);

        }
    }

    eat() {


        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == 1) {
                    console.log('aloooo');

                    matrix[y][x] = 0
                    for (var i in grassArr) {
                        if (x == grassArr[i].x && y == grassArr[i].y) {
                            grassArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }

                if (matrix[y][x] == 2) {
                    console.log('aloooo');

                    matrix[y][x] = 0
                    for (var i in grassEaterArr) {
                        if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                            grassEaterArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }

                if (matrix[y][x] == 3) {
                    console.log('aloooo');
                    
                    matrix[y][x] = 0
                    for (var i in predatorArr) {
                        if (x == predatorArr[i].x && y == predatorArr[i].y) {
                            predatorArr.splice(i, 1);
                            this.die()
                            break;
                        }
                    }
                }
            }
        }




    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in LazorArr) {
            if (this.x == LazorArr[i].x && this.y == LazorArr[i].y) {
                LazorArr.splice(i, 1);
                break;
            }

        }
    }

}