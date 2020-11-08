import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./style.css";
import Navigation from "../../components/navigation";
import Card from "./cards";

class Carousel extends React.Component {
  content = [
    {
      title: "Finding love & Happiness has never been easier",
      // image: 'https://st.depositphotos.com/1017039/4272/i/950/depositphotos_42721459-stock-photo-boy-and-girl-teens-lying.jpg',
      image: "/assets/images/banner/1.png",

      className: "img1 slider-content",
    },
    {
      title: "Finding love & Happiness has never been easier",
      // image: 'https://st.depositphotos.com/1017039/4272/i/950/depositphotos_42721459-stock-photo-boy-and-girl-teens-lying.jpg',
      image: "/assets/images/banner/2.png",

      className: "img2 slider-content",
    },
    {
      title: "Finding love & Happiness has never been easier",
      image: "/assets/images/banner/3.png",

      className: "img3 slider-content",
    },
    {
      title: "Finding love & Happiness has never been easier",
      image: "../assets/images/banner/4.png",

      className: "img4 slider-content",
    },
    {
      title: "Finding love & Happiness has never been easier",
      image: "../assets/images/banner/5.png",

      className: "img5 slider-content",
    },
  ];
  content2 = [1,2,3,4,5,6 ];
  render() {
    return (
      <div>
        <Navigation />
        <Slider
          className="slider-wrapper"
          style={{
            slider: "slider",
            previousButton: "previousButton",
            nextButton: "nextButton",
            buttonDisabled: "disabled",
            track: "track",
            slide: "slide",
            hidden: "hidden",
            previous: "previous",
            current: "current",
            next: "next",
            animateIn: "animateIn",
          }}
          autoplay="3000"
          infinite="true"
        >
          {this.content.map((item, index) => (
            <div
              key={index}
              className={item.className}
            //   style={{ background: `url('${item.image}') no-repeat center center` }}
            ></div>
          ))}
        </Slider>
        {/* <div className="card_wrapper">
          {this.content2.map((item, index) => {
            return <Card />;
          })}
        </div> */}
      </div>
    );
  }
}
export default Carousel;
