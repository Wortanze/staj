import React from "react";
import scss from "./AboutCompany.module.scss";
import people from "../../assets/AboutUs/1.svg";
import photo from "../../assets/AboutUs/2.svg";
import photo2 from "../../assets/AboutUs/3.svg";
import photo3 from "../../assets/AboutUs/4.svg";

function AboutCompany() {
    const imgs = [photo,photo2,photo3]
    const seeImgs = imgs.map((el,index) => (
        <img key={index} src={el} alt="photo" />
    ))
  return (
    <div className="container">
      <section className={scss.aboutCompany}>
        <header>
          <h1>О КОМПАНИИ</h1>
          <hr />
        </header>
        <main>
          <img src={people} alt="people" />
         <div>
         <p>
            Мы видим свое предназначение в том, чтобы объединить мир 
            через истинное кыргызское гостеприимство и национальную
            культуру. Через улучшение качества сервиса, обеспечивать
            процветание компании и сотрудников.
          </p>
          <p>
            Главная цель - превзойти ожидания наших гостей. Орион -
            больше, чем отель! Мы видим свое предназначение в том,  чтобы
            объединить мир через истинное кыргызское 
            гостеприимство и национальную культуру. Через улучшение 
            качества сервиса, обеспечивать процветание компании и
            сотрудников.
          </p>
         </div>
        </main>
        <footer>
            {seeImgs}
        </footer>
      </section>
    </div>
  );
}

export default AboutCompany;
