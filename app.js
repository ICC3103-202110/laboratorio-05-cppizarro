const {initModel} = require('./model')
const {update} = require('./update')
const {getTitle, getTable, getInput} = require('./view')
const {printTable} = require('console-table-printer')
const { up } = require('inquirer/lib/utils/readline')

async function app(model){
    while(true){
       const title = getTitle()
        const table = getTable(model)

        console.clear()
        console.log(title)
        printTable(table)

        const {billAmount, percentage} = await getInput(model)
        const updateModel = update(model, percentage, billAmount)

        model = updateModel
    }
}


app(initModel)