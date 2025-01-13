// Program to find perfect square numbers from the first 100 natural numbers
let perfectSquares = [];

for (let i = 1; i <= 100; i++) {
    let isPerfectSquare = false;
    for (let j = 1; j * j <= i; j++) {
        if (j * j === i) {
            isPerfectSquare = true;
            break;
        }
    }
    if (isPerfectSquare) {
        perfectSquares.push(i);
    }
}

console.log("Perfect square numbers from 1 to 100:", perfectSquares);
