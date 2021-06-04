import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { actions } from './auxComponents/APi';

function WatchList(props) {

    //list mock list
    const storageList = JSON.parse(localStorage.getItem('watchList'))
    storageList.push('test')
    // console.log(storageList, 'list', typeof(storageList))

    let [displayList, SetDisplayList] = useState([])

    const buildList =()=>{
        
        let newStock 

        [...storageList].map((eachItem) => {

            // SetDisplayList(

                actions.getStockName(eachItem)
                .then(res =>{
                    // console.log(res.data)
                    const {companyName, symbol, change, changePercent, week52High, week52Low, ytdChange} = res.data
                    newStock = {companyName, symbol, change, changePercent, week52High, week52Low, ytdChange}
                    // console.log(SetDisplayList, 'test')
                    SetDisplayList(curr => [...curr, {newStock}])
                    console.log('test', displayList)
                    
                })

                
                
            // )
            // console.log(displayList, 'displayList')
        })
    }

        useEffect(() => {
            buildList()
        },[])

    const displayStocks = () =>{
        return displayList.map((eachItem, keyOfRow) => {
            // console.log(eachItem)
            return(
                <div className="each-row-watchList">
                    <div>
                        <p>{eachItem.newStock.symbol}</p>
                    </div>
                    <div>
                        <p>{eachItem.newStock.companyName}</p>
                    </div>
                    <div>
                        <p>{eachItem.newStock.change}$</p>
                    </div>
                    <div> 
                        <p>{(eachItem.newStock.changePercent*100).toFixed(2)}%</p>
                    </div>
                    <div>
                        <p>{eachItem.newStock.week52Low}$</p>
                    </div>
                    <div>
                        <p>{eachItem.newStock.week52High}$</p>
                    </div>
                    <div>
                        <p>{(eachItem.newStock.ytdChange*100).toFixed(2)}%</p>
                    </div>
                    <div>
                        <button>chart</button>
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
                
                <button>Sort</button>
            </div>
            <div className="each-row-watchList">
                <div>
                    <p>symbol</p>
                </div>
                <div>
                    <p>companyName</p>
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