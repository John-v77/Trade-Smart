import React, { useEffect, useState } from 'react';
import axios from 'axios'
import getNews from './APi.js'
function News(props) {
    
    let[news, setNews] = useState([])
    let symbol ='SPY'
    // const token ='pk_695271cfa88a4f01969c642eb1576b3f'
    const token = 'pk_c7b814fba9a24e41968fa5eb41f9a1d3';
    
    
    // let arr = getNews()
    // console.log(arr, 'arr')

    useEffect(() => {
        axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/news/last/{last}?token=${token}`)
            .then(res => {  
                console.log('data',res.data.slice(0, 3));
                setNews(res.data.slice(0, 3))})
    },[])

    // console.log(news, 'news')

    const displayNews = () =>{
        let image
        // console.log('news', newArr);
       return news.map(element => {
           image = element.image
           return(

                <div>
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