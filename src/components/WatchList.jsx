import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { actions } from './auxComponents/APi';
import { utilities } from './auxComponents/Utilities';
import { StocksContext } from './auxComponents/StockContext';
import './watchList/watchList.style.css'

function WatchList(props) {
  const storageList = async () => {
    let res = await localStorage.getItem('watchList');
    if (!res) {
      res = ['x', 'tsla', 'm'];
    } else {
      res = JSON.parse(res);
    }
    return res;
  };

  const [stocksList, setStocksList] = useContext(StocksContext);
  let [displayList, setDisplayList] = useState([]);
  let [sortBtn, setSortBtn] = useState(false);

  const buildList = async () => {
    let stocks = await storageList();
    setStocksList(stocks);

    stocks.map((eachItem) => {
      //check if there are duplicates
      if (displayList.some((company) => company.symbol === eachItem)) {
        return;
      }

      actions.getStockName(eachItem).then((res) => {
        // let newArr = [...displayList];
        //It gets the information from res.data
        const {
          companyName,
          symbol,
          change,
          changePercent,
          week52High,
          week52Low,
          ytdChange,
          latestPrice,
        } = res.data;

        setDisplayList((curr) => [
          ...curr,
          {
            companyName,
            symbol,
            change,
            changePercent,
            week52High,
            week52Low,
            ytdChange,
            latestPrice,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    let isMounted = true;
    buildList();
    return () => (isMounted = false);
  }, []);

  // this works as expected

  const sortList = () => {
    let newArr = [...displayList];
    if (sortBtn === false) {
      newArr.sort((a, b) => a.changePercent - b.changePercent);
      setDisplayList(newArr);
      setSortBtn(true);
    } else if (sortBtn === true) {
      newArr.sort((a, b) => b.changePercent - a.changePercent);
      setDisplayList(newArr);
      setSortBtn(false);
    }
  };

  const deleteRow = (keyOfRow) => {
    let newArr = [...displayList];
    newArr.splice(keyOfRow, 1);
    setDisplayList(newArr);

    let contexList = newArr.map((each) => each.symbol);
    setStocksList(contexList);
  };

  const displayStocks = () => {
    return displayList.map((eachItem, keyOfRow) => {
      let numbersColor = utilities.changeColors(eachItem.change);
      return (
        <div className='watchList-table' key={keyOfRow}>
          <div className='watchList-table-cell'>
            <p>{eachItem.companyName}</p>
          </div>
          <div className='watchList-table-cell'>
            <p>{eachItem.symbol}</p>
          </div>
          <div className='watchList-table-cell'>
            <p style={{ color: `${numbersColor}` }}>{eachItem.latestPrice}$</p>
          </div>
          <div className='watchList-table-cell'>
            <p style={{ color: `${numbersColor}` }}>
              {utilities.addPlusSign(eachItem.change)}
              {eachItem.change.toFixed(2)}$
            </p>
          </div>
          <div className='watchList-table-cell'>
            <p style={{ color: `${numbersColor}` }}>
              {utilities.addPlusSign(eachItem.changePercent)}
              {eachItem.changePercent.toFixed(2)}%
            </p>
          </div>
          <div className='watchList-table-cell'>
            <p>{eachItem.week52Low}$</p>
          </div>
          <div className='watchList-table-cell'>
            <p>{eachItem.week52High}$</p>
          </div>
          <div className='watchList-table-cell'>
            <p
              style={{ color: `${utilities.changeColors(eachItem.ytdChange)}` }}
            >
              {utilities.addPlusSign(eachItem.ytdChange)}
              {(eachItem.ytdChange * 100).toFixed(2)}%
            </p>
          </div>
          <div className='watchList-table-cell'>
            <button className='chart-btn-myList' onClick={() => utilities.displayChart(eachItem)}>
              chart
            </button>
          </div>
          <div className='watchList-table-cell'>
            <button className='del-btn-myList' onClick={() => deleteRow(keyOfRow)} >
              delete
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='watch-list-component'>
      <h3>My List</h3>


      <div className='watchList-table-head'>
        <div className='watchList-table-cell'>
            Company
        </div>
        <div className='watchList-table-cell'>
            Symbol
        </div>
        <div className='watchList-table-cell'>
          Change
        </div>
        <div className='watchList-table-cell'>
          Change %
        </div>

        <div className='watchList-table-cell'>
        52-weeks-low
        </div>

        <div className='watchList-table-cell'>
        52-weeks-high
        </div>

        <div className='watchList-table-cell'>
        Year-to-date change %
        </div>

        <div className='watchList-table-cell'>
        Year-to-date change %
        </div>

        <div className='watchList-table-cell'>
        Chart
        </div>

        <div className='watchList-table-cell'>
        Delete
        </div>

      </div>



      {/* <div className="top-bts-MyList">
                
            </div> */}
      {/* <div className='watchList-table'>
        <div className='each-row-watchList-header'>
          <div></div>
          <div>
            <p>symbol</p>
          </div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>change</p>
          </div>
          <div>
            <p>change %</p>
          </div>
          <div>
            <p>
              52weeks
              <br />
              Low
            </p>
          </div>
          <div>
            <p>
              52weeks
              <br />
              High
            </p>
          </div>
          <div>
            <p>
              year-to-date
              <br />
              Change
            </p>
          </div> */}
          {/* <div>
          <p>chart</p>
        </div> */}
          {/* <div className='top-bts-MyList'>
            <Link to='/Search-WatchList'>
              <button className='top-bts-MyList_buttons'>Add Stock</button>
            </Link>
          </div>
        </div>
        <div>{displayStocks()}</div>
        <div className='bot-bts-MyList'>
          <button className='bot-btn-MyList' onClick={sortList}>
            Sort by change
          </button>
        </div>
      </div> */}
      {/* <div>{utilities.displayChart()}</div> */}
      {displayStocks()}
    </div>
  );
}

export default WatchList;
