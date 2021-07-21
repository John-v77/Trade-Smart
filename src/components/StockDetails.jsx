import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {getStockDetails, getStockChartData, handleChange, getData} from './utils';
import Chart from './Chart.js'
import News from './auxComponents/News.jsx';
function StockDetails(props) {

    let[stockSearched, setStockSearched] = useState('')
    let[stock, setStock] = useState({})
    let[chartData, setCharData] = useState([])
    let[chartInterval, setChartInterval] = useState('intraday-prices') 

    // const token = 'pk_695271cfa88a4f01969c642eb1576b3f';
    const token = 'pk_c7b814fba9a24e41968fa5eb41f9a1d3';						
    const interval = 'intraday-prices'

    const chartOptions = {day:'intraday-prices', week:'5d', month:'1m', year:'1y', twoYears:'2y', fiveYears:'5y', yearToDate:'ytd'}

    // const changeChart =(param)=>{
    //     e.preventDefault()
    //     setChartInterval(param)
    // }

    const getStockDetails = (stockSymbol) => {
        axios.get(`https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote?token=${token}`)
            .then(res => {
                setStock(res.data)
            })
            
    }


    const getStockChartData =(symbol)=>{
        axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/${chartInterval}?token=${token}`)
            .then(res => 
                {   
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
         //defauld value
        getStockChartData('SPY')
        getStockDetails('SPY')
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
                        <p>Stock tickers can be searched here.</p>
                        <p>If not familiar with them, every public company is represented by a unique set of characters.</p>
                        <p>This are tickers for some popular companies: BAC, SPY, TSLA, V, Uber </p>
                    </form>
                </div>
                <div className='Chart'>
                    <Chart data={chartData} name={`${stock.companyName}`} symbol={`${stock.symbol}`}/>
                </div>
                
                                                    {/* /Fundamentals Section */}
            </section>
            <h2 id='companyName'>{stock.companyName}</h2>
            <section className="fundamentals">
                
                    <div>
                        <p>previousClose :      <span>${stock.previousClose}</span></p>
                        <p>Open Price :         <span>${stock.iexOpen}</span></p>
                        <p>Average volume :     <span>${(stock.avgTotalVolume/1000000).toFixed(2)} mil</span></p>
                        <p>Previous Volume :    <span>${(stock.previousVolume/1000000).toFixed(2)} mil</span></p>
                    </div>
                    <div>
                    {/* {stock} */}
                        <p>Day Change:          <span>${stock.change} {'\u00A0'}{'\u00A0'}:{'\u00A0'}{'\u00A0'} {(stock.changePercent*100).toFixed(2)}%</span></p>
                        <p>Year to date :       <span>${(stock.ytdChange*100).toFixed(2)}%</span></p>
                        <p>52 Weeks Range :     <span>${(stock.week52High - stock.week52Low).toFixed(2)}</span></p>
                        <p>Market Cap :         <span>${(stock.marketCap/1000000000).toFixed(2)} bil</span></p>
                        {/* <p>P/E : {stock.peRatio}</p> */}
                    </div>
                    <div>
                        <p>Bid Price :     <span>${stock.iexBidPrice}</span></p>
                        <p>Bid Size :      <span>x{stock.iexBidSize}</span></p>
                        <p>Ask Price :     <span>${stock.iexAskPrice}</span></p>
                        <p>Ask Size :      <span>x{stock.iexAskSize}</span></p>
                    </div>


                {/* <div>  buttons for chart
                    <button onClick={changeChart(chartOptions.day)}/>
                    <button onClick={changeChart(chartOptions.week)}/> 
                    <button onClick={changeChart(chartOptions.month)}/>
                    <button onClick={changeChart(chartOptions.year)}/>
                    <button onClick={changeChart(chartOptions.twoYears)}/>
                    <button onClick={changeChart(chartOptions.fiveYears)}/>
                    <button onClick={changeChart(chartOptions.yearToDate)}/>
                </div> */}
                                                    {/* /Fundamentals News */}
            </section>
            <h2 id='companyName'>News</h2>
            <News/>
            <div>
                
            </div>
        </div>
    );
}

export default StockDetails;