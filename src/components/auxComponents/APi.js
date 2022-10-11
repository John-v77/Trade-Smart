import axios from 'axios';


const token = process.env.REACT_APP_TOKEN2
const link = process.env.REACT_APP_LINK

const interval = 'intraday-prices'

export const actions = {
    getStockName: async (stockSymbol) => {
        return await axios.get(link + `${stockSymbol}/quote?token=${token}`)
    },

    getStockChartData: async (stockSymbol)=>{
        return await axios.get(link + `${stockSymbol}/${interval}?token=${token}`)
    },

    getStockNews: async (stockSymbol)=>{
        return await axios.get(link + `${stockSymbol}/news/last/{last}?token=${token}`)
    }
    

    
}
