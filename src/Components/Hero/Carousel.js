import React from "react";
import './Carousel.css'



const images = [
    "https://cocco.qodeinteractive.com/wp-content/uploads/2018/06/h2-img-3.jpg",
    "https://cocco.qodeinteractive.com/wp-content/uploads/2018/06/h2-img-6.jpg",
    "https://cocco.qodeinteractive.com/wp-content/uploads/2018/06/h2-img-4.jpg",
    "https://cocco.qodeinteractive.com/wp-content/uploads/2018/06/h2-img-5.jpg",
  ];

      
      function Carousel(){
        const [currentImage, setCurrentImage] = React.useState(0);
        const refs = images.reduce((acc, val, i) => {
          acc[i] = React.createRef();
          return acc;
        }, {});
      
        const scrollToImage = (i) => {
          setCurrentImage(i);
          refs[i].current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          });
        };
      
        const totalImages = images.length;
      
        const nextImage = () => {
          if (currentImage >= totalImages - 1) {
            scrollToImage(0);
          } else {
            scrollToImage(currentImage + 1);
          }
        };
      
        const previousImage = () => {
          if (currentImage === 0) {
            scrollToImage(totalImages - 1);
          } else {
            scrollToImage(currentImage - 1);
          }
        };
      
        const arrowStyle =
          "absolute text-pink-500 text-2xl z-10 h-10 w-10 rounded-full opacity-75 flex items-center justify-center";
      
        const sliderControl = (isLeft) => (
          <button
            type="button"
            onClick={isLeft ? previousImage : nextImage}
            className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
            style={{ top: "40%" }}
          >
            <span className="arrows" role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
              {isLeft ? "◀" : "▶"}
            </span>
          </button>
        );
      
        return (
          <div className="w-screen flex justify-center">
              <div className="p-12 flex justify-center w-screen md:w-1/2 items-center">
            <div className="relative w-full">
              <div className="carousel ">
                {sliderControl(true)}
                {images.map((img, i) => (
                  <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
                    <img src={img} className="w-full object-contain " />
                  </div>
                ))}
                {sliderControl()}
              </div>
            </div>
          </div>
          </div>
        );
      };            
      


export default Carousel;
