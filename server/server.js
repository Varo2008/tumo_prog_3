
// Express.static()
var express = require("express");
var app = express();

app.use(express.static("../client"));
app.get("/", function(req, res){
res.redirect("index.html");
});

app.listen(3000, function(){
console.log("Example is running on port 3000");
});
var Predator = require("./my_moduls/predator")
// var Lazor = require("./my_modulse/lazor")
// var GrassEater = require("./my_modulse/grassEater")
// var Grass = require("./my_modulse/class")
// var Boob = require("./my_modulse/bomb")
var matrix =[]

function generateMatrix(matLength, gr, grEa, pred, boob,lazor) {
    let matrix = [];
    for (let i = 0; i < matLength; i++) {
        matrix.push([])
        for (let j = 0; j < matLength; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEa; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < boob; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < lazor; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 5;
        }
    }
    return matrix;
}

generateMatrix(30, 600, 35, 12, 20,20)
console.log(matrix)