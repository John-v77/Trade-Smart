import React from 'react';

function Contact(props) {
    return (
        <div className="contact">
            <h3>Thank you for stopping by</h3>
            <br/>
            <div>
                <div>
                    <h4>Other Projects</h4>
                    <a href="https://whynew.herokuapp.com/"><p>Travelo</p></a>
                    <a href="https://john-v77.github.io/Portfolio-Lab/"><p>Ux designer Portfolio</p></a>
                </div>
                <div>
                    <h4>Profile Links</h4>
                    <a href="https://github.com/John-v77"><p>Git-hub</p></a>
                    <a href="https://www.codewars.com/users/Johnv77"><p>Code-Wars</p></a>
                    <a href="https://www.hackerrank.com/John_Vasile"><p>Hacker-Rank</p></a>
                    <a href="https://linkedin.com/in/johnvasile"><p>Linked-In</p></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;