import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { actions } from "./APi";
import { StocksContext } from "./StockContext";
function AddFormWatchList(props) {
  //search the api for data on the symbol
  // if null is return - promt the user to choose a diferent one - current is incorrect
  //
  // if data is return the stock is added to the local storage
  let message = "";
  let [symbol, setSymbol] = useState([""]);
  let [symbolName, SetSymbolName] = useState("");
  const [stocksList, setStocksList] = useContext(StocksContext);

  localStorage.setItem("watchList", JSON.stringify(stocksList));

  const recordValue = (e) => {
    setSymbol(e.target.value);
  };

  const searchStock = async (e) => {
    e.preventDefault();
    try {
      await actions.getStockName(symbol).then((res) => {
        SetSymbolName(res.data.companyName);
      });
    } catch (error) {
      SetSymbolName("Stock not found try another one");
    }
    //if the ticker exists will be added to the watch list
  };

  const addStockToWatchList = async (e) => {
    e.preventDefault();
    setStocksList((curr) => [...curr, symbol]);
    await localStorage.setItem("watchList", JSON.stringify(stocksList));
    message = "Stock was added to the list";
  };

  return (
    <div className="search-form-addStock">
      <p>
        Stock can be searched and added here based on their ticker, for example:
        tsla, appl, v
        <br />
        are to stock tickers for Tesla, Apple and Visa
      </p>
      <form onSubmit={searchStock} className="search-for-Watch-List">
        <input type="text" onChange={recordValue} />
        <button>search</button>
      </form>
      <br />
      <br />
      <br />
      <div className="result-add-watchList">
        <div>
          {symbolName}
          {message}
        </div>
        <br />
        <button onClick={addStockToWatchList}>add</button>
      </div>
      <br />
      <br />
      <br />
      <Link to="/WatchList">go back</Link>
    </div>
  );
}

export default AddFormWatchList;
