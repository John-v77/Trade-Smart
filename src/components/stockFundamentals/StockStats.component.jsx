import React from 'react';
import './stockStats.style.css'
import chartPicture from "../../images/chart.jpg";

function StockStats(props) {
    const {
        companyName,
        previousClose,
        iexOpen,
        avgTotalVolume,
        previousVolume,
        changePercent,
        ytdChange,
        change,
        week52High,
        week52Low,
        marketCap,
        iexBidPrice,
        iexBidSize,
        iexAskPrice,
        iexAskSize,
    } = props.stock
    return (
        // fist column
        <div className='fundamentals'>
            <h3>Fundamentals</h3>
            <p className='companyName-fundamentals'>{companyName}</p>
            <div className='columsContainer'>
                <div className='fundamentals-data'>
                <p>
            PreviousClose : <span>${previousClose}</span>
          </p>
          <p>
            Open Price : <span>${iexOpen}</span>
          </p>
          <p>
            Average volume :{' '}
            <span>${(avgTotalVolume / 1000000).toFixed(2)} mil</span>
          </p>
          <p>
            Previous Volume :{' '}
            <span>${(previousVolume / 1000000).toFixed(2)} mil</span>
          </p>
                </div>
                {/* second column */}
                <div className='fundamentals-data'>
                <p>
            Day Change:{' '}
            <span>
              ${change} {'\u00A0'}
              {'\u00A0'}:{'\u00A0'}
              {'\u00A0'} {(changePercent * 100).toFixed(2)}%
            </span>
          </p>
          <p>
            Year to date : <span>${(ytdChange * 100).toFixed(2)}%</span>
          </p>
          <p>
            52 Weeks Range :{' '}
            <span>${(week52High - week52Low).toFixed(2)}</span>
          </p>
          <p>
            Market Cap :{' '}
            <span>${(marketCap / 1000000000).toFixed(2)} bil</span>
          </p>
                </div>
                {/* 3rd Column */}
                <div className='fundamentals-data'>
                <p>
            Bid Price : <span>${iexBidPrice}</span>
          </p>
          <p>
            Bid Size : <span>x{iexBidSize}</span>
          </p>
          <p>
            Ask Size : <span>x{iexAskSize}</span>
          </p>
          <p>
            Ask Price : <span>${iexAskPrice}</span>
          </p>
                </div>
                <div className='fundamentals-img'>
                    <img src={chartPicture} alt='chart'/>
                </div>
            </div>
        </div>
    );
}

export default StockStats;