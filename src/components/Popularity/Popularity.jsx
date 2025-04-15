import React from "react";
import scss from "./Popularity.module.scss";
import next from "../../assets/Popularity/next.svg"
import { popularity } from "../../constants/Popularity";

function Popularity() {
    const cards = popularity.map(({img,title,desc,time},index) => (
        <div key={index}>
            <img src={img} alt="img" />
            <p>НЕДВИЖИМОСТЬ</p>
            <h1>{title}</h1>
            <span>{desc}<p className={scss.dot}></p>{time}</span>
        </div>
    ))
  return (
    <div className="container">
      <section className={scss.popularity}>
        <header>
          <h1>ПОПУЛЯРНЫЕ</h1>
          <img src={next} alt="next" />
        </header>
        <hr />
        <main>
            {cards}
        </main>
      </section>
    </div>
  );
}

export default Popularity;
