import React from "react";
import scss from "./RestInside.module.scss";
import hotel from "../../assets/Rest/hotel.jpg";
import { Link } from "react-router-dom";
import { RestInsideNews, imgs, restCards } from "../../constants/RestInside";

function RestInside() {
  const cards = RestInsideNews.map(
    ({ img, name, title, desc, time }, index) => (
      <div key={index}>
        <img src={img} alt="" />
        <p className={scss.name}>{name}</p>
        <h1>{title}</h1>
        <span>
          {desc}
          <p className={scss.dot}></p>
          {time}
        </span>
      </div>
    )
  );
  const seeImgs = imgs.map((el, index) => (
    <img key={index} src={el} alt="img" />
  ));
  const cards2 = restCards.map(({ img, name, title, desc, time }, index) => (
    <div key={index}>
      <img src={img} alt="" />
      <p className={scss.name}>{name}</p>
      <h1>{title}</h1>
      <span>
        {desc}
        <p className={scss.dot}></p>
        {time}
      </span>
    </div>
  ));
  return (
    <div className="container">
      <section className={scss.restInside}>
        <header>
          <h1>РОСКОШНЫЙ ОТДЫХ</h1>
          <hr />
        </header>
        <article>
          <div className={scss.hotel}>
            <Link to="/rest/article"><img src={hotel} alt="" /></Link>
            <aside>
              <p className={scss.resting}>РОСКОШНЫЙ ОТДЫХ</p>
              <h1>
                Отель Орион - не только место для <br /> отдыха
              </h1>
              <span>
                1 февраля 2024 <p className={scss.dot}></p> 5 мин
              </span>
            </aside>
          </div>
          <div className={scss.about}>
            {cards}
            {seeImgs}
          </div>
        </article>
        <footer>{cards2}</footer>
      </section>
    </div>
  );
}

export default RestInside;
