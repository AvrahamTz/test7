import { stockMarket } from "./data.js";
import readline from 'readline-sync'

export function searchStock(identifier){

 const results = stockMarket.stocks.filter(search => (search.name === identifier) || (search.id === identifier))
 if (results == false){
    console.log('not found')
 }

return results
}


export function filterStocksByPrice(givenPrice, above){
    
    if (above){
        return stockMarket.stocks.filter(price => price.currentPrice > givenPrice)
    }else{
        return stockMarket.stocks.filter(price => price.currentPrice < givenPrice)}
}

export function OperateOnStock(operation, identifier){
    if (operation === "buy" || operation === "sell"){
        const currentIndex = stockMarket.stocks.findIndex(search => (search.name === identifier) || (search.id === identifier))
        if (currentIndex !== -1){
            const show = stockMarket.stocks[currentIndex] 
            console.log(show)
        
            if (operation === "buy"){
                const buy = Number(readline.question("how many units you wanna buy? "))
                show.availableStocks -= buy
                show.previousPrices.push(show.currentPrice)
                show.currentPrice *=  1.05
                stockMarket.stocks.splice(currentIndex,1,show)
                for (let stock=0; stock<stockMarket.stocks.length;stock++){
                    if (stockMarket.stocks[stock].category === show.category &&  stock!== currentIndex ){
                        stockMarket.stocks[stock].previousPrices.push(stockMarket.stocks[stock].currentPrice)
                        stockMarket.stocks[stock].currentPrice *= 1.01
                        stockMarket.lastUpdated = new Date()

                    }
                } 
            }else if (operation === "sell"){
                const buy = Number(readline.question("how many units you wanna sell? "))
                show.availableStocks += sell
                show.previousPrices.push(show.currentPrice)
                show.currentPrice *=  0.95
                stockMarket.stocks.splice(currentIndex,1,show)
                for (let stock=0; stock<stockMarket.stocks.length;stock++){
                    if (stockMarket.stocks[stock].category === show.category &&  stock!== currentIndex ){
                        stockMarket.stocks[stock].previousPrices.push(tockMarket.stocks[stock].currentPrice)
                        stockMarket.stocks[stock].currentPrice *= 0.99
                        stockMarket.lastUpdated = new Date()
            }
        
        }
    }}
    }
}

        




