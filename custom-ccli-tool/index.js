#!/usr/bin/env node

// command line arguments (Process.argv)

// const args = process.argv.slice(2)
//console.log("Arguments: ", args)

// if(args.length === 0) {
//     console.log("User this command: custom-cli-tool <name>");
// }else{
//     console.log(`Hello ${args[0]}. Welcome to custom CLI !`);
// }

// interactive ccli using readline module

// import readline from 'readline'

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

//  ask question to user

// rl.question("Enter your name: ", (name) => {
//     console.log(`Hello ${name}. Welcome to custom CLI !`);
//     rl.close();
// })

import readline from "readline";
import chalk from "chalk";

// create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Questions array
const questions = [
  {
    type: "input",
    name: "name",
    message: chalk.blue("What is your name?"),
  },
  {
    type: "input",
    name: "age",
    message: chalk.green("What is your age?"),
    validate: (value) => {
      if (!isNaN(parseInt(value)) && parseInt(value) > 0) {
        return true;
      } else {
        return "Please enter a valid age.";
      }
    },
  },
  {
    type: "input",
    name: "city",
    message: chalk.yellow("What is your city?"),
  },
  {
    type: "input",
    name: "agree",
    message: chalk.red("Do you agree? (Yes/No)"),
    default: true,
  },
];

// Function to ask questions
const askQuestion = (index = 0, onanswer = {}) => {
  // If all questions are answered
  if (index >= questions.length) {
    console.log(chalk.green("\nHere are your answers:"));
    console.log(`Name: ${chalk.yellow(onanswer.name)}`);
    console.log(`Age: ${chalk.yellow(onanswer.age)}`);
    console.log(`City: ${chalk.yellow(onanswer.city)}`);
    console.log(
      `Agree: ${
        onanswer.agree === "Yes" ? chalk.green("Yes") : chalk.red("No")
      }`
    );
    rl.close();
    return;
  }

  const question = questions[index];

  rl.question(question.message + " ", (answer) => {
    // Validate the input if validation exists
    if (question.validate) {
      const validation = question.validate(answer);

      if (validation !== true) {
        console.log(validation);
        return askQuestion(index, onanswer);
      }
    }

    // Store the answer
    onanswer[question.name] = answer || (question.default ? "Yes" : "No");

    askQuestion(index + 1, onanswer);
  });
};

askQuestion();
