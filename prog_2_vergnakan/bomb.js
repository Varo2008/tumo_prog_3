class Boob {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
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

    // mul() {
    //     var emptyCells = this.chooseCell(0);
    //     var newCell = random(emptyCells);

    //     if (newCell) {
    //         var newX = newCell[0];
    //         var newY = newCell[1];
    //         matrix[newY][newX] = 4;

    //         var newGrass = new Boob(newX, newY);
    //         boobArr.push(newGrass);

    //     }
    // }

    eat() {
        // var emptyCells = this.chooseCell(2)
        // var newCell = random(emptyCells);
        // if (newCell) {

        //     var newX = newCell[0];
        //     var newY = newCell[1];

        //     this.x = newX
        //     this.y = newY

        //     for (var i in grassEaterArr) {
        //         if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
        //             grassEaterArr.splice(i, 1);

        //             break;
        //         }

        //         // if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
        //         //     found.splice(i, 1);
        //         //    die()
        //         //     break;
        //         // }
        //     }

        // }


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
        for (var i in boobArr) {
            if (this.x == boobArr[i].x && this.y == boobArr[i].y) {
                boobArr.splice(i, 1);
                break;
            }

        }
    }

}