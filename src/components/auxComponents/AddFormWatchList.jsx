import React, { useState } from 'react';
import {actions} from './APi'
function AddFormWatchList(props) {
    //search the api for data on the symbol
    // if null is return - promt the user to choose a diferent one - current is incorrect
    // 
    // if data is return the stock is added to the local storage

    let [symbol, setSymbol] = useState('')
    let [symbolName, SetSymbolName] = useState('')

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
        if(symbolName){SetSymbolName("Stock not found try another one") }
    }

    return (
        <div>
            <p>You made it to the Search form</p>

            <form onSubmit={handleSubmit} className="search-for-Watch-List">
                <input type='text' onChange={recordValue}/>
                <button>Add</button>
            </form>

            <div>{symbolName}</div>
        </div>
    );
}

export default AddFormWatchList;