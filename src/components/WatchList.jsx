import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { actions } from './auxComponents/APi';

function WatchList(props) {

    //list mock list
    let mockList = [
        {companyName:'Tesla Inc', symbol:'tsla', change:-4.17, changePercent:-0.55, week52High:900.40, week52Low:351.40, ytdChange:21.95, latestPrice:751.90},
        {companyName:'Apple Inc', symbol:'aapl', change:-1.24, changePercent:-0.85, week52High:157.10, week52Low:103.10, ytdChange:18.35, latestPrice:147.79},
        {companyName:'Macys Inc', symbol:'m', change:-4.17, changePercent:-0.55, week52High:900.40, week52Low:351.40, ytdChange:21.95, latestPrice:751.90},
        {companyName:'United Steel Inc', symbol:'x', change:-4.17, changePercent:-0.55, week52High:900.40, week52Low:351.40, ytdChange:21.95, latestPrice:751.90},
        {companyName:'Zillow', symbol:'z', change:-4.17, changePercent:-0.55, week52High:900.40, week52Low:351.40, ytdChange:21.95, latestPrice:751.90},
    ]
    const storageList = JSON.parse(localStorage.getItem('watchList')) ? JSON.parse(localStorage.getItem('watchList')) : ['appl']
    let [displayList, SetDisplayList] = useState(mockList)
    let [sortBtn, setSortBtn] = useState(false);

    // const buildList =()=>{
    //     let newStock 
    //     [...storageList].map((eachItem) => {
    //             actions.getStockName(eachItem)
    //             .then(res =>{
    //                 console.log(res.data)
    //                 const {companyName, symbol, change, changePercent, week52High, week52Low, ytdChange, latestPrice} = res.data
    //                 newStock = {companyName, symbol, change, changePercent, week52High, week52Low, ytdChange, latestPrice}
    //                 SetDisplayList(curr => [...curr, {newStock}])
    //                 console.log('test', displayList)
    //             })
    //     })
    // }

    // useEffect(() => {
    //     buildList()
    // },[])


    const sortList =()=>{
        
        let newArr = [...displayList]
        if(sortBtn === false){

        newArr.sort((a,b) => a.changePercent - b.changePercent)
        SetDisplayList(newArr)
        setSortBtn(true)
        }else if(sortBtn === true){
        newArr.sort((a,b) => b.changePercent - a.changePercent)
        SetDisplayList(newArr)
        setSortBtn(false) 
        }  

    }

    const deleteRow=(keyOfRow)=>{
        let newArr = [...displayList]
        newArr.splice(keyOfRow,1)
        SetDisplayList(newArr)
    }

    const displayStocks = () =>{
        return displayList.map((eachItem, keyOfRow) => {
            // console.log(eachItem)
            return(
                <div className="each-row-watchList"  key={keyOfRow}>
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
                    <div class="del-btn-myList">
                        <button onClick={() => deleteRow(keyOfRow)} class="delete-Btn">
                            delete
                        </button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="watch-list-component">
            <h3>My List</h3>

            <div class="top-bts-MyList">
                <Link to='/Search-WatchList'>
                    <button>Add Stock</button>
                </Link>
                
                <button onClick={sortList}>Sort</button>
            </div>
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
            </div>
                {displayStocks()}

            
        </div>
        
    );
}

export default WatchList;