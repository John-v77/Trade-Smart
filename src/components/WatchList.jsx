import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { actions } from "./auxComponents/APi";
import { utilities } from "./auxComponents/Utilities";
import { StocksContext } from "./auxComponents/StockContext";

function WatchList(props) {
  
  const storageList = async () => {
    let res = await localStorage.getItem("watchList");
    if (!res) {
      res = ['x','tsla','x'];
    } else {
      res = JSON.parse(res);
    }
    return res;
  };

  const [stocksList, setStocksList] = useContext(StocksContext)
  let [displayList, setDisplayList] = useState([]);
  let [sortBtn, setSortBtn] = useState(false);



  const buildList = async () => {
    let stocks = await storageList();
    setStocksList(stocks)
 
    stocks.map((eachItem) => {


      //check if there are duplicates
      if(displayList.some(company => company.symbol === eachItem)){
        return
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

        setDisplayList((curr) => [...curr, {
          companyName,
          symbol,
          change,
          changePercent,
          week52High,
          week52Low,
          ytdChange,
          latestPrice,
        }]);
      });
    });
  };

  useEffect(() => {
    buildList();
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
    
    let contexList = newArr.map(each => each.symbol)
    setStocksList(contexList)
  };

  const changeColors = (changeInPrice) => {
      return((changeInPrice < 0) ? "red" : "green")
  }

  const displayStocks = () => {
    return displayList.map((eachItem, keyOfRow) => {
      let numbersColor = utilities.changeColors(eachItem.change);
      return (
        <div className="each-row-watchList" key={keyOfRow}>
          <div>
            <p>{eachItem.companyName}</p>
          </div>
          <div>
            <p>{eachItem.symbol}</p>
          </div>
          <div>
            <p style={{ color: `${numbersColor}` }}>{eachItem.latestPrice}$</p>
          </div>
          <div>
            <p style={{ color: `${numbersColor}` }}>
              {utilities.addPlusSign(eachItem.change)}
              {eachItem.change.toFixed(2)}$
            </p>
          </div>
          <div>
            <p style={{ color: `${numbersColor}` }}>
              {utilities.addPlusSign(eachItem.changePercent)}
              {eachItem.changePercent.toFixed(2)}%
            </p>
          </div>
          <div>
            <p>{eachItem.week52Low}$</p>
          </div>
          <div>
            <p>{eachItem.week52High}$</p>
          </div>
          <div>
            <p
              style={{ color: `${utilities.changeColors(eachItem.ytdChange)}` }}
            >
              {utilities.addPlusSign(eachItem.ytdChange)}
              {(eachItem.ytdChange * 100).toFixed(2)}%
            </p>
          </div>
          <div class="chart-btn-myList">
            <button onClick={() => utilities.displayChart(eachItem)}>
              chart
            </button>
          </div>
          <div class="del-btn-myList">
            <button onClick={() => deleteRow(keyOfRow)} class="delete-Btn">
              delete
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="watch-list-component">
      <h3>My List</h3>

      {/* <div class="top-bts-MyList">
                
            </div> */}
      <div className="each-row-watchList-header">
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
          <p>changePercent</p>
        </div>
        <div>
          <p>week52Low</p>
        </div>
        <div>
          <p>week52High</p>
        </div>
        <div>
          <p>ytdChange</p>
        </div>
        <div>
          <p>chart</p>
        </div>
        <div className="top-bts-MyList">
          <Link to="/Search-WatchList">
            <button>Add Stock</button>
          </Link>

          <button onClick={sortList}>Sort</button>
        </div>
      </div>
      <div>{displayStocks()}</div>
      <div>{utilities.displayChart()}</div>
    </div>
  );
}

export default WatchList;
