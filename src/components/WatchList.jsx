import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function WatchList(props) {

    //list mock list
let listStock =[
        
  { symbol:'spy',
          companyName: 'SNP 500', 
          iexAskPrice:380.36,
          change:-1.97,
          changePercent:-0.0052},   
  { symbol:'tsla',
          companyName: 'Tesla',  
          iexAskPrice:781.30,
          change:-6.08,
          changePercent:-0.0077},
  {  symbol:'bac',
          companyName: 'Bank of America',  
          iexAskPrice:34.54,
          change:0.35,
          changePercent:0.0102},
  {  symbol:'nio', 
          companyName: 'Nio INC', 
          iexAskPrice:55.04,
          change:0.61,
          changePercent:0.0112},
  { symbol:'pton', 
          companyName: 'Peloton Inc', 
          iexAskPrice:139.71,
          change:+1.26,
          changePercent:0.0091},
  ]


    const displayStocks = () =>{
        return listStock.map((eachItem, keyOfRow) => {
            return(
                <div className="each-row-watchList">
                    <div>
                        <p>M</p>
                    </div>
                    <div>
                        <p>Macy's</p>
                    </div>
                    <div>
                        <p>Price</p>
                    </div>
                    <div> 
                        <p>Change in Price</p>
                    </div>
                    <div>
                        <p>52 Weeks low</p>
                    </div>
                    <div>
                        <p>52 Weeks high</p>
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
                {displayStocks()}

            
        </div>
        
    );
}

export default WatchList;