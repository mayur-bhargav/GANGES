import React from "react";
import "../../../src/App.css"
import Image from "../../images/image.webp"
import image2 from "../../images/image2.jpg"
import image3 from "../../images/NGO-1.webp"
// import Cart from "../src/components/CartItems/CartItems";
const Imagecontainer = () => {
    return(
       
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel" style={{ height: "400px",width: "100%"}}>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={Image} class="d-block w-100" alt="..."style={{ height: "400px",width: "100%"}}/>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={image2} class="d-block w-100" alt="..."style={{ height: "400px",width: "100%"}}/>
        </div>
        <div class="carousel-item">
          <img src={image3} class="d-block w-100" alt="..."style={{ height: "400px",width: "100%"}}/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    
    </div>
)
}
export default Imagecontainer