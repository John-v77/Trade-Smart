import React from 'react';
import { useState } from 'react/cjs/react.development';
import { utilities } from './auxComponents/Utilities';

function Portfolio(props) {
    //list mock list
    let mockList = [
       {companyName:'Tesla Inc', symbol:'tsla', change:-4.17, changePercent:-0.55, shares:200, aquisitionPrice:900, ytdChange:21.95, latestPrice:751.90},
       {companyName:'Apple Inc', symbol:'aapl', change:-1.24, changePercent:-0.85, shares:100, aquisitionPrice:103.10, ytdChange:18.35, latestPrice:147.79},
       {companyName:'Macys Inc', symbol:'m', change:-4.17, changePercent:-0.55, shares:10, aquisitionPrice:351.40, ytdChange:21.95, latestPrice:751.90},
       {companyName:'United Steel Inc', symbol:'x', change:-4.17, changePercent:-0.55, shares:50, aquisitionPrice:500.40, ytdChange:21.95, latestPrice:751.90},
       {companyName:'Zillow', symbol:'z', change:-4.17, changePercent:-0.55, shares:20, aquisitionPrice:800.40, ytdChange:21.95, latestPrice:751.90},
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
           let numbersColor = utilities.changeColors(eachItem.change)
            return (
                <div className="each-row-watchList" key={keyOfRow}>
                    <div>
                        <p>{eachItem.companyName}</p>
                    </div>
                    <div>
                        <p>{eachItem.symbol}</p>
                    </div>
                    <div>
                        <p style={{color:`${numbersColor}`}}>${eachItem.latestPrice}</p>
                    </div>
                    <div>
                        <p style={{color:`${numbersColor}`}}>${(eachItem.change).toFixed(2)}</p>
                    </div>
                    <div> 
                        <p style={{color:`${numbersColor}`}}>{(eachItem.changePercent).toFixed(2)}%</p>
                    </div>
                    <div>
                        <p>{eachItem.shares} shares</p>
                    </div>
                    <div>
                        <p>${(eachItem.aquisitionPrice).toFixed(2)}</p>
                    </div>
                    <div>
                        <p style={{color:`${utilities.changeColors((eachItem.ytdChange))}`}}>{utilities.addPlusSign(eachItem.ytdChange)}
                                                                                                {(eachItem.ytdChange).toFixed(2)}%
                                                                                                </p>
                    </div>

                    <div>
                        <p style={{color:`${utilities.changeColors((eachItem.latestPrice-eachItem.aquisitionPrice))}`, textAlign:'left', marginLeft:'20%'}}>${((eachItem.latestPrice-eachItem.aquisitionPrice)*eachItem.shares).toFixed(2)}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='portfolio-page'>
            <h3>Work in progress</h3>
            
            <div className="each-row-watchList-header">
                <div>
                    
                </div>
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
                    <p>Shares</p>
                </div>
                <div>
                    <p>Aquisition Price</p>
                </div>
                <div>
                    <p>Year to date change</p>
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