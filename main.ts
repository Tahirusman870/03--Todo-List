#! /usr/bin/env node

import inquirer from "inquirer";

let todos = ["GoDown", "Shop"];
let condition = true;

while (condition) {
  let todoQuestions = await inquirer.prompt([
    {
      name: "firstQuestion",
      type: "input",
      message: "What Would You Like to Add in Your Todo?:",
    },
    {
      name: "secondQuestion",
      type: "confirm", // when type is confirm answer is in yes or no
      message: "Would You Like to Add More in Your Todos?",
      default: "true",
    },
  ]);
  todos.push(todoQuestions.firstQuestion);
  console.log(todos);
  // The loop is running on the based of this variable condition
  condition = todoQuestions.secondQuestion;
}

// Read, Update, Delete, Add
