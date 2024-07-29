#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const exchangeRates: {[currency: string]: number} = {
    "USD": 1,
    "PKR": 277.91,
    "AED": 75.82,
    "INR": 3.32,
};

const currencyChoices = Object.keys(exchangeRates);

let isContinue = true

    const userAnswer = await inquirer.prompt([
        {
            type: "list",
            name: "fromCurrency",
            message:"/nSelect the currency you're converting from:",
            choices: currencyChoices
        },
        {
            type: "list",
            name: "toCurrency",
            message: "/nSelect the currency you're converting to:",
            choices: currencyChoices
        },
        {
            type: "number",
            name: "amount",
            message: "/nEnter the amount you want to convert:"
        }
    ]);

    
    const convertedAmount = Number((exchangeRates[userAnswer.toCurrency] / exchangeRates[userAnswer.fromCurrency] * userAnswer.amount).toFixed(2));

    console.log(chalk.green.bold(`/n/tConverted amount: ${convertedAmount} ${userAnswer.toCurrency}💱`));


const reserveConvertedAmount = Number((exchangeRates[userAnswer.fromCurrency] / exchangeRates[userAnswer.toCurrency] * convertedAmount).toFixed(2));
console.log(chalk.yellow(`\tReverse converted amount: ${reserveConvertedAmount} ${userAnswer.fromCurrency}💱`));

const exchangeRate = exchangeRates[userAnswer.toCurrency] / exchangeRates[userAnswer.fromCurrency];
console.log(chalk.blue(`\tExchange rate: 1 ${userAnswer.fromCurrency} = ${exchangeRate.toFixed(4)} ${userAnswer.toCurrency}`));

const userContinue = await inquirer.prompt([{
    type: "confirm",
    name: "continueAns",
    message: "\nDo you want to continue:"
}]);

if (userContinue.continueAns === false){
    isContinue = false
}


while(isContinue === true)

    
    console.log(chalk.magenta("\n\t Have a great day ahead."));