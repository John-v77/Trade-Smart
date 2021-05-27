import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div>
                <h3>CONTACT</h3>
                <a href="mailto:ionut_vasile85@hotmail.com">ionut_vasile85@hotmail.com</a><br/>
            </div>
            <div>
                <h3>LINKS</h3>
                <a href='https://github.com/John-v77'>github</a><br/>
                <a href='https://www.hackerrank.com/John_Vasile'>hackerrank</a><br/>
                <a href='https://www.codewars.com/users/Johnv77'>codewars</a><br/>
            </div>
            <div>
                <h3>OTHER PROJECTS</h3>
                <a href='https://john-v77.github.io/Portfolio-Lab/about.html'>Portfolio Website</a><br/>
                <a href='https://whynew.herokuapp.com/'>E-commerce</a><br/>
            </div>

        </div>
    );
}

export default Footer;