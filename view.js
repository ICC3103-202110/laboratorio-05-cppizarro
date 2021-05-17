const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.cyanBright(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined',
                width: 80
            }
        )
    )
}

function getTable(model){
    
    const {billAmount} = model
    const {percentage} = model
    const {tip} = model
    const {totalAmount} = model
    
    return [
        {
            'Bill Amount': billAmount,
            'Tip (%)': percentage,
            'Tip': tip,
            'Total':totalAmount
        }
    ]
}

function getInput(model){
    const {billAmount} = model
    const {percentage} = model
    return inquirer.prompt([
        {
            name: 'billAmount',
            type: 'input',
            message: 'Bill Amount?',
            default: billAmount
        },

        {
            name: 'percentage',
            type: 'input',
            message: 'Tip(%)?',
            default: percentage
        }
    ])
}

module.exports = {
    getTitle,
    getTable,
    getInput
}
