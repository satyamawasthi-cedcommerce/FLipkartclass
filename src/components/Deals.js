import React, { Component } from "react";

export default class Deals extends Component {
  render() {
    return (
      <>
        <div className="container-fluid" id="dealsContainer">
          <div id="dealsLeft">
            <div className="timer">
              <h2>
                <b>Deals of the day</b>{" "}
                <img
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
                  alt="..."
                  style={{ height: "100%", width: "10%" }}
                />{" "}
                20:10:00 Left{" "}
              </h2>
              <button className="viewbtn">View All</button>
            </div>
            <hr />
            <div className="container-fluid" id="imgSlide2">
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/150/150/l1xwqkw0/watch/q/b/e/1-1729sl06-titan-men-original-imagde9grrchs5zz.jpeg?q=70 "
                  alt="..."
                />
                <p style={{ fontSize: "15px" }}>Watches </p>
              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/150/150/kubk70w0/accessories-combo/z/g/d/beteiuy-yrjs3-sun-shopping-original-imag7gwqncvtzxmn.jpeg?q=70 "
                  alt="..."
                />
                <p style={{ fontSize: "15px" }}>Fashion </p>
              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/150/150/ktuewsw0/electric-ride-on/b/n/e/ero-5552-miss-chief-original-imag73juggtjy3qv.jpeg?q=70"
                  alt="..."
                ></img>{" "}
                <p style={{ fontSize: "15px" }}>Travellers </p>
              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/150/150/kyeqjrk0/sandal/d/n/r/5-aqua-38-shoetopia-green-original-imaganfzezhcwpam.jpeg?q=70"
                  alt="..."
                ></img>
                                 <p style={{fontSize:"15px"}}>Foootwear </p>         

              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/150/150/ktn9pjk0/t-shirt/o/w/n/xl-3520-the-dry-state-original-imag6y43ssx5adkc.jpeg?q=70"
                  alt="..."
                ></img>
                                 <p style={{fontSize:"15px"}}>Clothing </p>         

              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/150/150/kqttg280/necklace-chain/t/m/a/heartbeat-chain-brado-jewellery-original-imag4qwqsnnq92hh.jpeg?q=70"
                  alt="..."
                ></img>
                                 <p style={{fontSize:"15px"}}>Accessories </p>         

              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/150/150/k4a7c7k0/diary-notebook/g/2/t/luxor-9000028338-original-imafn7shn78emytt.jpeg?q=70"
                  alt="..."
                ></img>
                                 <p style={{fontSize:"15px"}}>Studies </p>         

              </div>
              <div>
                <img
                  src="https://rukminim1.flixcart.com/image/150/150/k4a7c7k0/diary-notebook/g/2/t/luxor-9000028338-original-imafn7shn78emytt.jpeg?q=70"
                  alt="..."
                ></img>
                                 <p style={{fontSize:"15px"}}>Stationary </p>         

              </div>
              <div
                style={{
                  background: "white",
                  margin: "3%",
                  padding: "1%",
                  borderRadius: "2px",
                }}
              >
                {" "}
                <i class="fa-solid fa-angle-right"></i>{" "}
              </div>
            </div>
          </div>
          <div id="dealsRight">
            <img
              src="https://rukminim1.flixcart.com/flap/464/708/image/24779041c6e3ebf7.jpg?q=70"
              alt="..."
              id="img2"
            />
          </div>
        </div>
      </>
    );
  }
}
