import React from "react";
import scss from "../../components/Popularity/Popularity.module.scss";
import next from "../../assets/Popularity/next.svg";
import { interview } from "../../constants/Interview";
import { Link } from "react-router-dom";

function Interview() {
  const cards = interview.map(({ img, title, desc, time }, index) => (
    <div key={index}>
      <Link to="/interview">
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
          <h1>ИНТЕРВЬЮ</h1>
          <Link to="/interview">
            <img src={next} alt="next" />
          </Link>
        </header>
        <hr />
        <main>{cards}</main>
      </section>
    </div>
  );
}

export default Interview;
