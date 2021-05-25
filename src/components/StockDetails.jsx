import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {getStockDetails, getStockChartData, handleChange, getData} from './utils';
import Chart from './Chart.js'
function StockDetails(props) {

    let[stockSearched, setStockSearched] = useState('')
    let[stock, setStock] = useState({})
    let[chartData, setCharData] = useState([])
    let[chartInterval, setChartInterval] = useState('intraday-prices') 

    const token = 'pk_695271cfa88a4f01969c642eb1576b3f';
    const interval = 'intraday-prices'

    const chartOptions = {day:'intraday-prices', week:'5d', month:'1m', year:'1y', twoYears:'2y', fiveYears:'5y', yearToDate:'ytd'}

    // const changeChart =(param)=>{
    //     e.preventDefault()
    //     setChartInterval(param)
    // }

    const getStockDetails = (stockSymbol) => {
        axios.get(`https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote?token=${token}`)
            .then(res => {
                console.log(res.data)
                setStock(res.data)
                // console.log(stock, typeof(stock), 'stock')
            })
            
    }


    const getStockChartData =(symbol)=>{
        axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/${chartInterval}?token=${token}`)
            .then(res => 
                {   
                    // console.log(res.data)
                    setCharData(res.data)
                })
    }

    const getChartData =(symbol)=>{
        axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/chart/${chartInterval}?token=${token}`)
            .then(res => 
                {
                    setCharData(res.data)
                })}

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

    // Function that iterates throug the Quote Array and prints every key
  const displayData = () => {
    return Object.keys(stock).map((eachItem) => {
      // console.log(eachItem)
      return (
        <div>
          <li>
            {eachItem} : {stock[eachItem]}
          </li>
        </div>
      );
    });
  };

     useEffect(() => {
        getStockChartData('SPY')

        // setChartInterval(chartOptions.fiveYears)
        // console.log(chartInterval, 'hh')    
     }, []);



    //  console.log(chartData, '888')
    return (
        <div className='StockDetails'>
                                                        {/* /Chart Section */}
            <section className='ChartSection'>
                <div className='SearchForm'>
                    <form onSubmit={SearchTicker}>
                        <p>Search your stock here</p>  
                        <input type='text' onChange={handleChange} name='value' placeholder='Type...' className="shadow"></input>
                        <button type="submit" className="shadow">Go</button>
                    </form>
                </div>
                <div className='Chart'>
                    <Chart data={chartData} name={`${stock.companyName}`}/>
                </div>
                
                                                    {/* /Fundamentals Section */}
            </section>
            <section className="Fundamentals">
               
            </section>
            <section className="News">

            </section>

        </div>
    );
}

export default StockDetails;