import React from "react";
import { useEffect } from "react";
import scss from "./PropertyInside.module.scss";
import { propertyInside } from "../../constants/PropertyInside";

function PropertyInside() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const cards = propertyInside.map(({ img, title, desc, time }, index) => (
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
  return (
    <div className="container">
      <section className={scss.propertyInside}>
        <header>
          <h1>НЕДВИЖИМОСТЬ</h1>
          <hr />
        </header>
        <main>{cards}</main>
      </section>
    </div>
  );
}

export default PropertyInside;
