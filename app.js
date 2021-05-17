const {initModel} = require('./model')
//const {update} = require('./update')
const {getTitle, getTable} = require('./view')
const {printTable} = require('console-table-printer')


console.log(getTitle())
printTable(getTable(initModel))

