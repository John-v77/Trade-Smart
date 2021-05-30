import React, { useState } from 'react'



export const StocksContext = React.createContext([])

export const ContextProvider = (props) => {

    const [stocksList, setStocksList] = useState([]);
    return(
        <StocksContext.Provider value={[stocksList, setStocksList]}>
            {props.children}
        </StocksContext.Provider>
        )
}