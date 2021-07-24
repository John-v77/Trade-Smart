import axios from 'axios';


// const token = 'pk_695271cfa88a4f01969c642eb1576b3f';
const token = 'pk_c7b814fba9a24e41968fa5eb41f9a1d3';
const interval = 'intraday-prices'

export const actions = {
    getStockName: async (stockSymbol) => {
        return await axios.get(`https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote?token=${token}`)
    },

    getStockChartData: async (stockSymbol)=>{
        return await axios.get(`https://cloud.iexapis.com/stable/stock/${stockSymbol}/${interval}?token=${token}`)
    },

    
}
