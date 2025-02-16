import React, { useState, useEffect } from "react";

const images = [
  process.env.PUBLIC_URL + "/bag.png",
  process.env.PUBLIC_URL + "/bracelet.png",
  process.env.PUBLIC_URL + "/flower.png",
  process.env.PUBLIC_URL + "/pot.png",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentImage]);

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero-content">
        <h1>Shop Smart, Shop Easy.</h1>
        <h1>Your Favorites just at <br /> Your Fingertips!</h1>
        <p>
          With a personalized touch, your shopping experience is streamlined so you <br />
          can shop with confidence, knowing everything you need is right at your <br />
          fingertips. From new arrivals to exclusive discounts, we’re here to make your <br />
          shopping experience as simple and enjoyable as possible.
        </p>
        <button className="hero-button">EXPLORE MORE</button>
      </div>

      {/* Curved Box with Auto-Switching Image */}
      <div className="curved-box">
        <img 
          src={images[currentImage]} 
          alt="Shopping Item" 
          className="curved-img"
          style={{ objectFit: "contain", maxWidth: "90%", maxHeight: "90%" }} // Prevent cropping
        />

        {/* Image Indicators (Small Circles) */}
        <div className="image-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentImage === index ? "active" : ""}`}
              onClick={() => goToImage(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
