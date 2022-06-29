import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { SliderData } from "../../../const/const";
import "./Slider.css";

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  arrows: true,
  indicators: true,
};

const Slider = () => {
  return (
    <>
      <div className="containerSlide">
        <Slide {...properties}>
          {SliderData.map((person, index) => {
            const newimg = person.img;

            return (
              <article className="each-slide" key={index}>
                {/*<div style={{background: `url(${newimg})`, backgroundSize: 'auto' }}></div>*/}
                <div className="image">
                  <img
                    src={person.img}
                    alt={person.alt}
                    className="person-img"
                  />
                </div>
                <div className="text">
                  <h4 style={{ position: "absolute", top: 50 }}>
                    {person.title}
                  </h4>
                  <p
                    style={{ position: "absolute", top: 230 }}
                    className="title_p"
                  >
                    {person.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </Slide>
      </div>
    </>
  );
};

export default Slider;
