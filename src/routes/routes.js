import axios from 'axios'

// let symbol ='SPY'
// const token ='pk_695271cfa88a4f01969c642eb1576b3f'

export const getNews = () =>{
    const token ='pk_695271cfa88a4f01969c642eb1576b3f'
    const symbol = 'bac'
    return axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/news/last/{last}?token=${token}`)
}