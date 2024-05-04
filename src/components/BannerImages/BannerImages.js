import React, { useEffect, useState } from "react";
import "./BannerImages.css";
import photo1 from "../../assets/medicine1.jpg";
import photo2 from "../../assets/medicine2.jpg";
import photo3 from "../../assets/medicine3.jpg";
import photo4 from "../../assets/medicine4.jpg";
const BannerImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="photo-container mb-5">
      <div className="photo-wrapper border-end border-danger border-5">
        <img
          src={photo1}
          alt="Photo 1"
          className={currentIndex === 0 ? "photo zoom-in" : "photo" }
        />
      </div>
      <div className="photo-wrapper ">
        <img
          src={photo2}
          alt="Photo 2"
          className={currentIndex === 1 ? "photo zoom-in" : "photo"}
        />
      </div>
      <div className="photo-wrapper  border-end border-danger border-5">
        <img
          src={photo3}
          alt="Photo 3"
          className={currentIndex === 2 ? "photo zoom-in" : "photo"}
        />
      </div>
      <div className="photo-wrapper ">
        <img
          src={photo4}
          alt="Photo 4"
          className={currentIndex === 3 ? "photo zoom-in" : "photo"}
        />
      </div>
    </div>
  );
};

export default BannerImages;
