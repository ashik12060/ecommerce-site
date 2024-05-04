import React from "react";
import cover2 from "../../../assets/cover2.jpg";
import cover3 from "../../../assets/cover3.jpg";
import cover1 from "../../../assets/cover1.jpg";
import "./HomeCarousel.css";
import SideNav from "../SideNav";
const HomeCarousel = () => {
  return (
    <div className=" border border-3">
     

      <div
        id="carouselExampleInterval"
        class="carousel slide w-100"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active cover-size" data-bs-interval="10000">
            <img src={cover3} class="w-100 cover-size" alt="..." />
          </div>
          <div class="carousel-item cover-size" data-bs-interval="2000">
            <img src={cover2} class="w-100 cover-size" alt="..." />
          </div>
          <div class="carousel-item cover-size">
            <img src={cover1} class="w-100 cover-size" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
