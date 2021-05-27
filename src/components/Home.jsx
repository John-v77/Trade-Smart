import React from 'react';
import MainPicture from '../images/mainPic.jpg'
import Footer from './auxComponents/Footer';

function Home(props) {
    return (
        <div className="home">
            <div>
                <img src={MainPicture} alt="chart"/>
            </div>
            {/* <div>
                <Footer/>
            </div> */}
        </div>
    );
}

export default Home;