#!/usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "fisrtNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perfom action",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (asnwer.operator === "Addition") {
    console.log(asnwer.fisrtNumber + asnwer.secondNumber);
}
else if (asnwer.operator === "subtraction") {
    console.log(asnwer.fisrtNumber - asnwer.secondNumber);
}
else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.fisrtNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "Division") {
    console.log(asnwer.fisrtNumber / asnwer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
