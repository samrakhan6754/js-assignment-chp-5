
// // Step 1: Set the max value
// const maxValue = 5;

// // Step 2: Generate a random number
// const solution = Math.floor(Math.random() * maxValue) + 1;
// // Uncomment the line below for development to see the solution value
// // console.log("Solution:", solution);

// // Step 3: Variable for tracking correctness
// let isCorrect = false;

// // Step 4: Use a while loop to ask the user for input
// while (!isCorrect) {
//   // Step 5: Ask the user to enter a number and convert the response to a number
//   let userGuess = parseInt(prompt(`Enter a number between 1 and ${maxValue}:`));

//   // Check if the user's guess is equal to the solution
//   if (userGuess === solution) {
//     // Set status to true and break out of the loop
//     isCorrect = true;
//     alert("Congratulations! Your guess is correct!");
//   } else {
//     // Provide feedback and prompt for another guess
//     if (userGuess > solution) {
//       alert("Too high! Try again.");
//     } else {
//       alert("Too low! Try again.");
//     }
//   }
// }

// // Game is complete
// console.log("Game Over. The correct number was:", solution);


// // Practice 5.2

// // Step 1: Set the starting counter to 0
// let counter = 0;

// // Step 2: Create a variable, step, to increase your counter by
// const step = 5; // You can change this to any desired step value

// // Step 3 and 4: Add a do while loop, printing the counter and incrementing it until the counter is equal to or more than 100
// do {
//     console.log("Counter:", counter);
//     counter += step;
// } while (counter < 100);

// // Additional log when the loop exits
// console.log("Loop finished. Final counter value:", counter);

// Practice 5.3

// // Step 1: Setup a blank array, myWork
// let myWork = [];

// // Step 2-6: Using a for loop, create a list of 10 objects and push them into the array
// for (let i = 1; i <= 10; i++) {
//     // Step 3: Use a ternary operator to set the status alternating true/false
//     const status = i % 2 === 0 ? false : true;

//     // Step 4: Create a lesson using a temporary object variable
//     const lesson = {
//         name: `Lesson ${i}`,
//         status: status
//     };

//     // Step 5: Push the object to the myWork array
//     myWork.push(lesson);
// }

// // Step 6: Output the array to the console
// console.log(myWork);

// Step 1: Create an empty array, myTable, to hold the table data
// let myTable = [];

// // Step 2: Set variable values for the number of rows and columns
// const numRows = 4; // You can change this to the desired number of rows
// const numCols = 3; // You can change this to the desired number of columns

// // Step 3: Set up a counter variable with an initial value of 0
// let counter = 0;

// // Step 4-9: Create nested loops to generate rows and columns
// for (let i = 0; i < numRows; i++) {
//     // Step 4: Set up a new temporary array (tempTable) to hold each row of data
//     let tempTable = [];

//     for (let j = 0; j < numCols; j++) {
//         // Step 5: Increment the main counter each iteration of the inner loop
//         counter++;

//         // Step 6-7: Push the counter values to the temporary array, tempTable
//         tempTable.push(counter);
//     }

//     // Step 8: Push the temporary array to the main table
//     myTable.push(tempTable);
// }

// // Step 9: Output the generated table to the console with console.table
// console.table(myTable);

// Practice 5.5


// Step 1: Create a grid array variable
let grid = [];

// Step 2: Set a value of 64 for the number of cells
const numCells = 64;

// Step 3: Set a counter to 0
let counter = 0;

// Step 4: Create a global variable to be used for the row array
let row = [];

// Step 5-13: Create a loop to generate the grid
for (let i = 0; i <= numCells; i++) {
    // Step 6: Add an outer if statement using modulo to check if the counter is divisible by 8
    if (counter % 8 === 0) {
        // Step 7: Inside the outer if statement, add another if statement to check if the row is undefined
        if (row !== undefined) {
            // If the row has been defined, add the row to the main grid array
            grid.push(row);
        }
        // If the counter is divisible by 8, clear the row array
        row = [];
    }

    // Step 9: Increment the main counter by 1
    counter++;

    // Step 10: Set up a temporary variable to hold the value of the counter and push it to the row array
    let tempValue = counter;
    row.push(tempValue);

    // Step 11: Check if the value of the counter is equal to the total number of columns
    if (counter === 8) {
        // If it is, add the current row to the grid
        grid.push(row);
    }
}

// Step 13: Output the grid into the console
console.log(grid);




