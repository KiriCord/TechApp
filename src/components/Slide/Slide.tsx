import React from "react";
import * as img from "../import";

const images = [img.image1, img.image2, img.image3, img.image4, img.image5, img.image6];
const delay = 2500;

const Slide = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow-container">
      <div className="slide-column">
        <div className="slideshow">
          <div className="slide-arrow-container">
            <div className="slidefull slidefull-left"
              onClick={() => {
                setIndex(index < 1 ? images.length - 1 : index - 1);
              }}>
              <div
                className="arrow arrow-left"
                style={{ backgroundImage: `url(${img.arrow})` }}></div>
            </div>
            <div className="slidefull slidefull-right"
              onClick={() => {
                setIndex(index < images.length - 1 ? index + 1 : 0);
              }}>
              <div
                className="arrow arrow-right"
                style={{ backgroundImage: `url(${img.arrow})` }}>
              </div>
            </div>
          </div>
          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >


            {images.map((backgroundColor, index) => (
              <img className="slide" key={index} style={{ backgroundColor }} src={backgroundColor} alt="" />
            ))}

          </div>
        </div>
        <div className="slideshowDots">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide;
