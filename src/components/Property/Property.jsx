import React from "react";
import scss from "../../components/Popularity/Popularity.module.scss";
import next from "../../assets/Popularity/next.svg";
import { property } from "../../constants/Property";
import { Link } from "react-router-dom";

function Property() {
  const cards = property.map(({ img, title, desc, time }, index) => (
    <div key={index}>
      <Link to="/property">
        {" "}
        <img src={img} alt="img" />
      </Link>

      <p>НЕДВИЖИМОСТЬ</p>
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
      <section className={scss.popularity}>
        <header>
          <h1>НЕДВИЖИМОСТЬ</h1>
          <Link to="/property">
            <img src={next} alt="next" />
          </Link>
        </header>
        <hr />
        <main>{cards}</main>
      </section>
    </div>
  );
}

export default Property;
