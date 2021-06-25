import React, { useState } from "react";
import { ArrayImages } from "../ArrayImages";

const Main = () => {
  const [current, setCurrent] = useState(0);
  const length = ArrayImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    for (let i = length - 2; i > 0; i--) {
      const rand = Math.floor(Math.random() * i);
      const temp = ArrayImages[i];
      ArrayImages[i] = ArrayImages[rand];
      ArrayImages[rand] = temp;
    }
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // document.addEventListener("keydown", (event) => console.log(event.key));

  return (
    <React.Fragment>
      <div className="content-holder">
        <div onClick={prevSlide}>
          <i className="fas fa-angle-left left-arrow"></i>
        </div>
        {ArrayImages.map((imgs, index) => {
          return (
            <div
              key={index}
              className={index === current ? "slide active" : ""}
            >
              {index === current && <img src={imgs.image} alt={imgs.alt} />}
              {index === current ? (
                <div className="content">
                  <p>{imgs.content}</p>
                  {imgs.author && imgs.place ? (
                    <p className="fs24">
                      - {imgs.author}{" "}
                      <span className="italic">({imgs.place})</span>
                    </p>
                  ) : null}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
        <div onClick={nextSlide}>
          <i className="fas fa-angle-right right-arrow"></i>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
