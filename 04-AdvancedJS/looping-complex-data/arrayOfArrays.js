// const table = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let row = 0; row < table.length; row++) {
//     for (let col = 0; col < table.length; col++) {
//         console.log(table[row][col])
//         console.log(table[col][row])
//     }
// }

const grid = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["O", "X", "X"]
];

for (let row = 0; row < grid.length; row++) {
    const rowString = grid[row].join(""); // "XOX"
    let columString = "";

    for(let column = 0; column < grid.length; column++) {
        columString += grid[column][row] // "XXO"
    }

    console.log(row, rowString, columString);

    if (rowSTring === "XXX" || columString === "XXX") {
        console.log("X wins");
        break;
    }
}