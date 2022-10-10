import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
        
                <h3>LINKS:</h3>
            <div className="footer-details">
                <a href='https://github.com/John-v77'>Github</a><br/>
                <a href='https://www.hackerrank.com/John_Vasile'>Hackerrank</a><br/>
            </div>
                <h3>OTHER PROJECTS:</h3>
            <div className="footer-details">
                <a href='https://john-v77.github.io/Portfolio-Lab/about.html'>Portfolio Website</a><br/>
                <a href='https://whynew.herokuapp.com/'>E-commerce</a><br/>
            </div>

        </div>
    );
}

export default Footer;