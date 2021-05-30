import React, { useContext, useState } from 'react';
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
        // console.log(e.target.value)
        setSymbol(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.getStockName(symbol)
            .then(res => {
                SetSymbolName(res.data.companyName)
  
            })

        //if the ticker exists will be added to the watch list
        if(symbolName){
            SetSymbolName("Stock not found try another one") 
        }

                        // console.log(list, '1list', symbol, ':simp')
        setStocksList(curr => [...curr, symbol])
        // console.log(stocksList, 'final list')
    }

    return (
            <div>
                <p>You made it to the Search form</p>

                <form onSubmit={handleSubmit} className="search-for-Watch-List">
                    <input type='text' onChange={recordValue}/>
                    <button>Add</button>
                </form>

                <div>{symbol}: {symbolName}: {stocksList}</div>
            </div>
    );
}

export default AddFormWatchList;