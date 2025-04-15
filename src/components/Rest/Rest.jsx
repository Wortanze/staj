import React from "react";
import scss from "./Rest.module.scss";
import next from "../../assets/Popularity/next.svg";
import hotel from "../../assets/Rest/hotel.jpg";
import { property, news } from "../../constants/Rest";
import { Link } from "react-router-dom";

function Rest() {
  const cards = property.map(({ img, title, desc, time }, index) => (
    <div key={index}>
      <img src={img} alt="img" />
      <p>НЕДВИЖИМОСТЬ</p>
      <h1>{title}</h1>
      <span>
        {desc}
        <p className={scss.dot}></p>
        {time}
      </span>
    </div>
  ));

  const cards2 = news.map(({ name, title, desc, time }, index) => (
    <div key={index}>
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
      <section className={scss.rest}>
        <header>
          <h1>РОСКОШНЫЙ ОТДЫХ</h1>
          <Link to="/rest/article"><img src={next} alt="next" /></Link>
        </header>
        <hr />
        <article>
          <div className={scss.hotel}>
            <Link to="/rest/article"><img src={hotel} alt="" /></Link>
            <aside>
              <p className={scss.resting}>РОСКОШНЫЙ ОТДЫХ</p>
              <h1>Отель Орион - не только место для <br /> отдыха</h1>
              <span>
                1 февраля 2024 <p className={scss.dot}></p> 5 мин
              </span>
            </aside>
          </div>
          <div className={scss.about}>{cards2}</div>
        </article>
        <main>{cards}</main>
        
      </section>
    </div>
  );
}

export default Rest;
