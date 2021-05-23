import React from 'react';
import MainPicture from '../images/mainPic.jpg'

function Home(props) {
    return (
        <div className="home">
            <div>
                <img src={MainPicture} alt="chart"/>
            </div>
        </div>
    );
}

export default Home;