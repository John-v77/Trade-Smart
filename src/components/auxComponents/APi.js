import axios from 'axios';


const token = 'pk_695271cfa88a4f01969c642eb1576b3f';

export const actions = {
    getStockName: async (stockSymbol) => {
        return await axios.get(`https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote?token=${token}`)
    },
    
}
