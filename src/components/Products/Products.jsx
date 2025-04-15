import React from "react";
import { products, news } from "../../constants/Products";
import scss from "../Rest/Rest.module.scss";
import next from "../../assets/Popularity/next.svg";
import certain from "../../assets/Products/certain.jpg";
import { Link } from "react-router-dom";

function Products() {
  const cards = products.map(({ img, title, desc, time }, index) => (
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
          <h1>ПРОДУКТЫ</h1>
          <Link to="/rest/article">
            <img src={next} alt="next" />
          </Link>
        </header>
        <hr />
        <article>
          <div className={scss.hotel}>
            <Link to="/rest/article"> 
              <img className={scss.hotel} src={certain} alt="" />
            </Link>
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
          <div className={scss.about}>{cards2}</div>
        </article>
        <main>{cards}</main>
      </section>
    </div>
  );
}

export default Products;
