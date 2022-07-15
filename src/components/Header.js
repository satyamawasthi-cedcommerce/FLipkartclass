import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
      <div className="headerDiv">
        <div className="conatiner" id="navItems">
          <div className="container">
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="noflip" id="mainImg"/>
            {/* <a href="/" >Explore plus </a><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="noflip" id="plus"/> */}
            <input type="text" placeholder="Search for Products,brands and more " id="searchBar"/><button id="search"><i class="fa-solid fa-magnifying-glass" style={{ color:"#2874F0"}}></i></button>
            <button className="logBtn">Login</button>
            <b className="menutxt">Become a seller</b>
            <b className="menutxt">More <i className="fa-solid fa-angle-down"></i>  </b>
            <b className="menutxt"><i className="fa-solid fa-cart-shopping"></i> Cart</b>
          </div>
          
            
        
        </div>
      </div>
      
        
          
      </>
    );
  }
}
