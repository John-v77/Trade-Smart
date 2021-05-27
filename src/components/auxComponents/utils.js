// import axios from 'axios';
// import React, { useState }  from 'react';

// export const getStockDetails = (stockSymbol)=>{
//     const token = 'pk_695271cfa88a4f01969c642eb1576b3f';
//     axios.get(`https://cloud.iexapis.com/stable/stock/${stockSymbol}/quote?token=${token}`)
//             .then(res => res.data)}


// export const getStockChartData = (symbol) => {
//     const token = "pk_695271cfa88a4f01969c642eb1576b3f";
//     const interval = "intraday-prices";
//     axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/${interval}?token=${token}`)
//         .then(res => res.data)}



// const getData =(e)=>{

//     e.preventDefault();
//     getStockDetails('bac');
//     getStockChartData('bac');
// }