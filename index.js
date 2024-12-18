const fs = require("fs");
const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the text you want to save to the file: ", (input) => {
  
  fs.writeFile("output.txt", input, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("File saved successfully as 'output.txt'.");
    }
    
    rl.close();
  });
});
