import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {getStockDetails, getStockChartData, handleChange, getData} from './utils';
import Chart from './Chart.js'
function StockDetails(props) {

    let[stockSearched, setStockSearched] = useState('')
    let[stock, setStock] = useState([])
    let[chartData, setCharData] = useState([])

    const token = 'pk_695271cfa88a4f01969c642eb1576b3f';
    const interval = 'intraday-prices'


    const getStockDetails = (stockSymbol) => {
        axios.get(`https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote?token=${token}`)
            .then(res => setStock(res))
    }


    const getStockChartData =(symbol)=>{
        axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/${interval}?token=${token}`)
            .then(res => 
                {
                    setCharData(res.data)
                })
                
    }

    const handleChange =(e)=> {
        let val = e.target.value
        console.log(e.target.value)
        setStockSearched(val)
    }

    const SearchTicker =(e)=>{
        e.preventDefault()
        getStockChartData(stockSearched)
        getStockDetails(stockSearched)
    }

     useEffect(() => {
        getStockChartData('SPY')
     }, []);



    //  console.log(chartData, '888')
    return (
        <div className='StockDetails'>
            <section className='ChartSection'>
                <div className='SearchForm'>
                    <form onSubmit={SearchTicker}>
                        <p>Search your stock here</p>  
                        <input type='text' onChange={handleChange} name='value' placeholder='Type...' className="shadow"></input>
                        <button type="submit" className="shadow">Go</button>
                    </form>
                </div>
                <div className='Chart'>
                    <Chart data={chartData} />
                </div>
            </section>
            
        </div>
    );
}

export default StockDetails;