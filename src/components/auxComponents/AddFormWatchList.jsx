import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {actions} from './APi'
import {StocksContext} from './StockContext';
function AddFormWatchList(props) {
    //search the api for data on the symbol
    // if null is return - promt the user to choose a diferent one - current is incorrect
    // 
    // if data is return the stock is added to the local storage

    let [symbol, setSymbol] = useState([''])
    let [symbolName, SetSymbolName] = useState('')
    const [stocksList, setStocksList] = useContext(StocksContext);
    console.log(stocksList, '####')
    const recordValue = (e) =>{
        setSymbol(e.target.value)
    }

    const searchStock = (e) => {
        e.preventDefault()
        actions.getStockName(symbol)
            .then(res => {
                SetSymbolName(res.data.companyName)
  
            })

        //if the ticker exists will be added to the watch list
        if(symbolName){
            SetSymbolName("Stock not found try another one") 
        }
    }

    const addStockToWatchList =(e)=> {
        setStocksList(curr => [...curr, symbol])
        localStorage.setItem('watchList', JSON.stringify(stocksList))
    }



    return (
            <div className='search-form-addStock'>
                <form onSubmit={searchStock} className="search-for-Watch-List">
                    <input type='text' onChange={recordValue}/>
                    <button>search</button>
                </form>
                <br/><br/><br/>
                <div className="result-add-watchList">
                    <div>{symbolName}</div>
                    <br/>
                    <button onClick={addStockToWatchList}>add</button>
                </div>
                <br/><br/><br/>
                <Link to='/WatchList'>go back</Link>
            </div>
    );
}

export default AddFormWatchList;