const {initModel} = require('./model')
const {update} = require('./update')
const {getTitle, getTable, getInput} = require('./view')
const {printTable} = require('console-table-printer')

console.log(getTitle())
//printTable(getTable(initModel))

//console.clear()

update(initModel, 10, 100)
printTable(getTable(update(initModel, 10, 200)))

getInput(initModel)

