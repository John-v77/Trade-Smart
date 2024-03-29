import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {getStockDetails, getStockChartData, handleChange, getData} from './utils';
import Chart from './Chart.js';
import News from './auxComponents/News.jsx';
import StockStats from './stockFundamentals/StockStats.component.jsx';

function StockDetails(props) {

  let currentStock = props.location.stockQueried ? props.location.stockQueried  : 'V'

  let [stockSearched, setStockSearched] = useState('');
  let [stock, setStock] = useState({});
  let [chartData, setCharData] = useState([]);
  let [chartInterval, setChartInterval] = useState('intraday-prices');

  const token = process.env.REACT_APP_TOKEN1;
  const link = process.env.REACT_APP_LINK;

  const interval = 'intraday-prices';

  const chartOptions = {
    day: 'intraday-prices',
    week: '5d',
    month: '1m',
    year: '1y',
    twoYears: '2y',
    fiveYears: '5y',
    yearToDate: 'ytd',
  };



  const getStockDetails = (stockSymbol) => {
    axios.get(link + `${stockSymbol}/quote?token=${token}`)
      .then((res) => {
      setStock(res.data);
    });
  };

  const getStockChartData = (symbol) => {
    axios
      .get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/${chartInterval}?token=${token}`
      )
      .then((res) => {
        setCharData(res.data);
      });
  };

  const getChartData = (symbol) => {
    axios
      .get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${chartInterval}?token=${token}`
      )
      .then((res) => {
        setCharData(res.data);
      });
  };

  const handleChange = (e) => {
    let val = e.target.value;
    setStockSearched(val);
  };

  const SearchTicker = (e) => {
    e.preventDefault();
    getStockChartData(stockSearched);
    getStockDetails(stockSearched);
    setStock(stockSearched)
  };

  useEffect(() => {
    let isMounted = true;
    //defauld value
    
    getStockChartData(currentStock);
    getStockDetails(currentStock);
  

    return () => (isMounted = false);
  }, []);

  return (
    <div className='StockDetails'>
      {/* /Chart Section */}
      
      <section className='ChartSection'>
        <div className='SearchForm'>
          <form onSubmit={SearchTicker}>
            <p>Search your stock here</p>
            <input
              type='text'
              onChange={handleChange}
              name='value'
              placeholder='Type...'
              className='shadow'
            ></input>
            <button type='submit' className='shadow'>
              Go
            </button>
            <p>Stock tickers can be searched here.</p>
            <p>
              If not familiar with them, every public company is represented by
              a unique set of characters.
            </p>
            <p>
              This are tickers for some popular companies: BAC, SPY, TSLA, V,
              Uber{' '}
            </p>
          </form>
        </div>
        <div className='Chart'>
          <Chart
            data={chartData}
            name={`${stock.companyName}`}
            symbol={`${stock.symbol}`}
          />
        </div>
      </section>
        {/* Fundamentals */}
        <StockStats stock={stock}/>

        
        {/*  News */}
      <h2 >News</h2>
      <News stock={stock.symbol}/>
      <div></div>
    </div>
  );
}

export default StockDetails;
