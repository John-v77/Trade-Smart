import React from 'react';
import { useState } from 'react/cjs/react.development';

function Portfolio(props) {
    //list mock list
    let mockList = [
       {companyName:'Tesla Inc', symbol:'tsla', change:-4.17, changePercent:-0.55, week52High:900.40, week52Low:351.40, ytdChange:21.95, latestPrice:751.90},
       {companyName:'Apple Inc', symbol:'aapl', change:-1.24, changePercent:-0.85, week52High:157.10, week52Low:103.10, ytdChange:18.35, latestPrice:147.79},
       {companyName:'Macys Inc', symbol:'m', change:-4.17, changePercent:-0.55, week52High:900.40, week52Low:351.40, ytdChange:21.95, latestPrice:751.90},
       {companyName:'United Steel Inc', symbol:'x', change:-4.17, changePercent:-0.55, week52High:900.40, week52Low:351.40, ytdChange:21.95, latestPrice:751.90},
       {companyName:'Zillow', symbol:'z', change:-4.17, changePercent:-0.55, week52High:900.40, week52Low:351.40, ytdChange:21.95, latestPrice:751.90},
    ]

     let [sortedList, setSortedList] = useState(mockList)
     let [toggle, setToggle] = useState(false)


    
    const sortList =()=>{
        let newArr = [...mockList]
            if(toggle === false){

            newArr.sort((a,b) => a.changePercent - b.changePercent)
            setSortedList(newArr)
            setToggle(true)
            }else if(toggle === true){
            newArr.sort((a,b) => b.changePercent - a.changePercent)
            setSortedList(newArr)
            setToggle(false) 
            }

    }


    const displayStockz =()=>{
       return sortedList.map((eachItem,keyOfRow) => {
            return (
                <div className="each-row-watchList" key={keyOfRow}>
                    <div>
                        <p>{eachItem.companyName}</p>
                    </div>
                    <div>
                        <p>{eachItem.symbol}</p>
                    </div>
                    <div>
                        <p>{eachItem.latestPrice}$</p>
                    </div>
                    <div>
                        <p>{(eachItem.change).toFixed(2)}$</p>
                    </div>
                    <div> 
                        <p>{(eachItem.changePercent*100).toFixed(2)}%</p>
                    </div>
                    <div>
                        <p>{eachItem.week52Low}$</p>
                    </div>
                    <div>
                        <p>{eachItem.week52High}$</p>
                    </div>
                    <div>
                        <p>{(eachItem.ytdChange*100).toFixed(2)}%</p>
                    </div>
                    <div>
                        <button>chart</button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <h3>Work in progress</h3>
            <button onClick={sortList}>Sort</button>
            <div className="each-row-watchList">
                <div>
                    <p>symbol</p>
                </div>
                <div>
                    <p>companyName</p>
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
                    <p>Shares</p>
                </div>
                <div>
                    <p>Aquisition Price</p>
                </div>
                <div>
                    <p>Today's Profit</p>
                </div>
                <div>
                    <p>Total Profit</p>
                </div>
            </div>
            {displayStockz()}
        </div>
    );
}

export default Portfolio;