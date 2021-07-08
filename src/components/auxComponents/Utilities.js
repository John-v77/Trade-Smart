import Chart from "../Chart"
import { actions } from "./APi"

export const utilities = {

    // Changes color of number to green or red, based on positive or negative numbers
    changeColors : (changeInPrice) => {
        return((changeInPrice < 0) ? "red" : "green")
    },

    // Displays chart based on company ticker
    displayChart : (stockSymbol) => {
        console.log(stockSymbol, 'stockSymbol')
        if(!stockSymbol) return null  //if now data is requested the chart wont be displayed
        const chartData = actions.getStockChartData

        console.log(chartData, 'chartData')
        return(  <Chart data={chartData} name={`${stockSymbol.companyName}`} symbol={`${stockSymbol.symbol}`}/> )
    }


}