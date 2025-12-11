import readline from 'readline-sync'
import { filterStocksByPrice, OperateOnStock, searchStock } from './service.js'


function app(){
    while (true){
        const choice = readline.question(`
        1 Search for a stock by name or id
        2 Show all stocks above or below a given price
        3 buy or see a stock
        press any other key to exit...
        `)
        switch(choice){
            case '1':
                const search = readline.question("enter a name or id ")
                console.log(searchStock(search))
                continue
            case '2':
                const stocks = Number(readline.question("enter the range of number you wanna check "))
                const aboveOrUnder = readline.question("choose any key for above or press enter for under ")
                const filter = filterStocksByPrice(stocks,aboveOrUnder)
                if (filter == false){
                    console.log("no valid stock")
                }console.log(filter)
                continue
            case '3':
                const operation = readline.question("do you wanna buy or sell stocks? ")
                const find = readline.question("enter a name or id ")
                OperateOnStock(operation,find)
            
        }


}}
app()