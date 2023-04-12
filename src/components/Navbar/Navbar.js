import React from "react";
import "../../../src/App.css"
import Logo from "../../Ganges.png"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Cart from "../src/components/CartItems/CartItems";
const Navbar = () => {
 

  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid"style={{marginTop:"34px",backgroundColor:"transparent"}}>
  <img src={Logo} style={{width:"50px"}} />
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      
      <a class="navbar-nav me-auto mb-0 mb-lg-0"style={{marginLeft:"10px",textDecoration:"none"}}>
        <li class="nav-item">
          <a class="bttn" aria-current="page" href="#" style={{marginLeft:"10px",textDecoration:"none"}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="bttn" href="#">Goals</a>
        </li>
        <li class="nav-item">
          <a class="bttn" href="#" >Donate for a Cause</a>
        </li>
        <li class="nav-item">
          <a class="bttn" href="#" >Contribute</a>
        </li>
      </a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
}

export default Navbar;


