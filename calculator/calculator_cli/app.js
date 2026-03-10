const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Enter your Name: ", function(name){
//     console.log("Hello "+ name);
//     rl.close();
// });

// menu display
function ShowMenu() {
  console.log("\n==== Calculator CLI ====");
  console.log("1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("5. Show History");
  console.log("6. Exit");
  console.log("7. Clear History");
  console.log("8. Last Result");
  console.log("9. First Result");
}

// ສ້າງ ຕົວແປເປົ່າ ມາເພື່ອເກັບ History My Calculator

let history = []; // ຄັ້ງນີ້ເຮົາຈະໃຊ້ array ແບບ string ເພາະເກັບເປັນລາຍການເປັນຊຸດ

function askQuestion() {
  ShowMenu();

  rl.question("Choose Option: ", function (option) {
    if (option === "1") {
      add();
    } else if (option === "2") {
      subtrict();
    } else if (option === "3") {
      multiply();
    } else if (option === "4") {
      divide();
    } else if (option === "5") {
      showHistory();
    } else if (option === "6") {
      console.log("Good bye!");
      rl.close();
      //exit();
    } else if (option === "7") {
      clearHistory();
    } else if (option === "8") {
      showLastResult();
    } else if (option === "9") {
      showFirstResult();
    } else {
      console.log("Invalid Option");
      askQuestion();
    }
  });
}

// user input number
function getNumbers(callback) {
  rl.question("Enter first number: ", function (a) {
    rl.question("Enter second number: ", function (b) {
      callback(Number(a), Number(b));
    });
  });
}

// function plus

function add() {
  getNumbers(function (a, b) {
    let result = a + b;
    console.log("Result:", result);

    history.push(`${a} + ${b} = ${result}`);
    askQuestion();
  });
}

// function subtract

function subtrict() {
  getNumbers(function (a, b) {
    let result = a - b;
    console.log("Result", result);

    history.push(`${a} - ${b} = ${result}`);
    askQuestion();
  });
}

// function multiply

function multiply() {
  getNumbers(function (a, b) {
    let result = a * b;
    console.log("Result", result);

    history.push(`${a} * ${b} = ${result}`);
    askQuestion();
  });
}

// divide
function divide() {
  getNumbers(function (a, b) {

    if (b === 0) {
      console.log("Error! Division by zero.");
    } else {
      let result = a / b;

      console.log("Result:", result);
      history.push(`${a} / ${b} = ${result}`);
    }

    askOption();
  });
}

// show history
function showHistory() {
  console.log("\nHistory:");
  history.forEach(function (item) {
    console.log(item);
  });
  askQuestion();
}

// clear history

function clearHistory() {
  history = [];
  console.log("History Cleared");
  askQuestion();
}
askQuestion();

// show last result

function showLastResult() {
  if (history.length === 0) {
    console.log("History not yet");
  } else {
    let last = history[history.length - 1];
    console.log(`Last Result: ${last}`);
  }
  askQuestion();
}

function showFirstResult() {
  if (history.length === 0) {
    console.log("History not yet");
  } else {
    let first = history[0];
    console.log(`First Result: ${first}`);
  }
  askQuestion();
}
