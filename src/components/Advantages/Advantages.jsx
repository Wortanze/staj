import React from "react";
import scss from "./Advantages.module.scss";
import { cards } from "../../constants/Advantages";
import { cards2 } from "../../constants/Advantages";

function Advantages() {
  const seeCards = cards.map(({ title, desc }, index) => (
    <div key={index}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  ));
  const seeCards2 = cards2.map(({ title, desc }, index) => (
    <div key={index}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  ));
  return (
    <div className="container">
      <section className={scss.advantages}>
        <header>
          <h1>ПРЕИМУЩЕСТВА</h1>
          <hr />
        </header>
        <main>{seeCards}</main>
        <footer>
            {seeCards2}
        </footer>
      </section>
    </div>
  );
}

export default Advantages;
