import React, { useEffect, useState } from 'react';
import { actions } from "./APi";
function News(props) {
    
    let[news, setNews] = useState([])
    let symbol ='SPY'

    useEffect(() => {
        let isMounted = true
        
        // fetch news about the stock
        actions.getStockNews(symbol)
            .then(res => {  
                setNews(res.data.slice(0, 3))})
        
        return(()=> isMounted = false)        
    },[])

    // console.log(news, 'news')

    const displayNews = () =>{
        let image
        // console.log('news', newArr);
       return news.map((element, index) => {
           image = element.image
           return(

                <div key={index}>
                    <img src={image} alt='news image'/>
                    <h5>{element.headline}</h5>
                    <p>{element.summary}</p>
                    <p>{element.source}</p>
                </div>

            )})
    }

    return(
        <div className='news'>
            {displayNews()}
        </div>
    )
}

export default News;