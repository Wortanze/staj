import React, { useRef } from "react";
import scss from "./Offer.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from "../../assets/Offer/banner.svg";
import img2 from "../../assets/Offer/banner (1).svg";
import img3 from "../../assets/Offer//banner (2).svg";

const slideImgs = [img, img2,img3, img];

function Offer() {

  const sliderRef = useRef(null)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false, 
    autoplaySpeed: 2500, 
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 3,
          variableWidth: false, 
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          variableWidth: false, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const slides = slideImgs.map((el, index) => (
    <img src={el} key={index} style={{padding : '0 20px'}} alt="slider pics" />
  ));

  return (
   <div className={scss.parent}>
    <div className="container">
    <div className={scss.offer}>
      <aside>
        <span className={scss.title}>Предложения от компании</span>
        <section className={scss.bottom}>
          <svg
          onClick={() => prevSlide()}
            className={scss.prevArrow}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 14.25L28.75 14.25L28.75 15.75L28 15.75L28 14.25ZM3 15.75C2.58579 15.75 2.25 15.4142 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25L3 15.75ZM28 15.75L3 15.75L3 14.25L28 14.25L28 15.75Z"
              fill="#979797"
            />
            <path d="M10 8L3 15L10 22.5" stroke="#979797" strokeWidth="1.5" />
          </svg>

          <svg
          onClick={() => nextSlide()}
            className={scss.nextArrow}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 14.25L28.75 14.25L28.75 15.75L28 15.75L28 14.25ZM3 15.75C2.58579 15.75 2.25 15.4142 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25L3 15.75ZM28 15.75L3 15.75L3 14.25L28 14.25L28 15.75Z"
              fill="#979797"
            />
            <path d="M10 8L3 15L10 22.5" stroke="#979797" strokeWidth="1.5" />
          </svg>
        </section>
      </aside>
      <section className={scss.bottom2}>
          <svg
          onClick={() => prevSlide()}
            className={scss.prevArrow}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 14.25L28.75 14.25L28.75 15.75L28 15.75L28 14.25ZM3 15.75C2.58579 15.75 2.25 15.4142 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25L3 15.75ZM28 15.75L3 15.75L3 14.25L28 14.25L28 15.75Z"
              fill="#979797"
            />
            <path d="M10 8L3 15L10 22.5" stroke="#979797" strokeWidth="1.5" />
          </svg>

          <svg
          onClick={() => nextSlide()}
            className={scss.nextArrow}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 14.25L28.75 14.25L28.75 15.75L28 15.75L28 14.25ZM3 15.75C2.58579 15.75 2.25 15.4142 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25L3 15.75ZM28 15.75L3 15.75L3 14.25L28 14.25L28 15.75Z"
              fill="#979797"
            />
            <path d="M10 8L3 15L10 22.5" stroke="#979797" strokeWidth="1.5" />
          </svg>
        </section>
      <Slider {...settings} ref={sliderRef} className={scss.slider}>
      {slides}
      </Slider>
    </div>
    </div>
   </div>
  );
}

export default Offer;