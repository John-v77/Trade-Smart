import React from "react";
import MainPicture from "../images/mainPic.jpg";


function Home(props) {
  return (
    <div className="home">
      <div className="home-hero">
        <img src={MainPicture} alt="chart" />
      </div>
      <section id="banner_mobile">
        {" "}
        This aplication is optimized for a desktop experience
      </section>
      <div className="home-content">
        <p>
          <b>Trade-Smart</b> is an application that tracks the changes on
          different companies listed on the Stock Market. Is meant to help with
          spotting unusual activity on the list of stock of your choosing.
        </p>
        <br />
        <p>
          To achieve this it combines few APIs:
          <ul>One for displaying the Charts,</ul>
          <ul>One for displaying the news,</ul>
          <ul>And a Third one for Displaying the stock Details</ul>
        </p>
      </div>
    </div>
  );
}

export default Home;
