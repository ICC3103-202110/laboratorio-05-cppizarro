const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.cyanBright(
        figlet.textSync(
            'Tip Calculator App',
            {
                horizontalLayout: 'full',
                font: 'roman'/*'Nancyj-Underlined'*/,
                width: 120
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

function inputForm(){
    return
}


// Get actual console view
function view(model){
    return {
        title: getTitle()
        //table: getTable(model)
    }
}



module.exports = {
    getTitle,
    getTable
    //inputForm,
    //listForm
}
