import React from "react";
import { useState, useEffect } from "react";
import scss from "./Article.module.scss";
import back from "../../assets/Article/back.svg";
import photo from "../../assets/Article/1 (1).svg";
import photo2 from "../../assets/Article/2 (1).svg";
import conference from "../../assets/Article/conference.svg";
import hotel from "../../assets/Rest/hotel.jpg";
import Rates from "../Rates/Rates";
import { cardsArticle } from "../../constants/Article";
import { useNavigate } from "react-router-dom";

function Article() {
  const [active, setActive] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = cardsArticle.map(({ img, name, title, desc, time }, index) => (
    <div className={scss.insideCard} key={index}>
      <img className={scss.imgscards} src={img} alt="" />
      <div className={scss.aboutCard}>
        <p className={scss.name}>{name}</p>
        <h1>{title}</h1>
        <span>
          {desc}
          <p className={scss.dot}></p>
          {time}
        </span>
      </div>
    </div>
  ));

  const tags = ["отель", "роскошный отдых", "отдых", "место встречи"];
  const seeTags = tags.map((el, index) => (
    <span
      key={index}
      onClick={() =>
        setActive((prev) => ({
          ...prev,
          [index]: !prev[index],
        }))
      }
      className={`${active[index] ? scss.active : scss.nonActive} ${
        scss[`tag${index}`]
      }`}
    >
      {el}
    </span>
  ));
  return (
    <div className="container">
      <section className={scss.article}>
        <header>
          <img
            onClick={() => navigate(-1)}
            className={scss.back}
            src={back}
            alt=""
          />
          <button>РОСКОШНЫЙ ОТДЫХ</button>
          <h1>
            Отель Орион - не только <br />
            место для отдыха
          </h1>
          <div>
            <p>АЛИНА ИРИСОВА</p>
            <span>
              1 февраля 2024<p className={scss.dot}></p>5 мин
            </span>
            <img className={scss.hotel} src={hotel} alt="hotel" />
          </div>
        </header>
        <main>
          <article>
            <div className={scss.mission}>
              <div className={scss.texts}>
                <h1>Миссия - За гранью обычного</h1>
                <p>
                  Мы видим свое предназначение в том, чтобы объединить мир через
                  истинное кыргызское гостеприимство и национальную культуру.
                  Через улучшение качества сервиса, обеспечивать процветание
                  компании и сотрудников. Главная цель - превзойти ожидания
                  наших гостей. Орион - больше, чем отель! Мы видим свое
                  предназначение в том, чтобы объединить мир через истинное
                  кыргызское гостеприимство и национальную культуру. Через
                  улучшение качества сервиса, обеспечивать процветание компании
                  и сотрудников.
                </p>
              </div>
              <div className={scss.imgs}>
                <img src={photo} alt="photo" />
                <img src={photo2} alt="photo" />
              </div>
            </div>
            <div className={scss.place}>
              <h1>Место для деловых встреч</h1>
              <p>
                В отеле «Орион» есть не только уютные номера и прекрасный
                ресторан, но и высококлассный конференц-зал, который поразит
                своей современной аудиовизуальной техникой и функциональностью.
                Он является идеальным местом для проведения деловых встреч,
                конференций и частных ужинов.
              </p>
              <div className={scss.texts2}>
                <p>
                  Конференц-зал «Ак-Сай» имеет площадь в 123 квадратных метра,
                  а его вместимость составляет от 35 до 100 человек
                  в зависимости от рассадки. П-образная рассадка вмещает
                  до 30 человек, а в театральной версии зала могут поместиться
                  до 100 гостей.
                </p>
                <img src={conference} alt="conference" />
                <p>
                  В отеле «Орион» - это не только место для отдыха и проживания,
                  но и идеальное место для проведения деловых и культурных
                  мероприятий в самом центре Бишкека. Конференц-зал - прекрасный
                  выбор для тех, кто ищет место для проведения важных
                  мероприятий в комфортном и уютном атмосферном. Современное
                  оборудование и внимательный персонал гарантируют, что каждое
                  мероприятие.
                </p>
              </div>
            </div>
            <div className={scss.tags}>
              <h1>ТЭГИ:</h1>
              <div className={scss.tag}>{seeTags}</div>
            </div>
          </article>
          <div className={scss.cards}>
            <h1>ЧИТАЙТЕ ТАКЖЕ:</h1>
            <div className={scss.card}>{cards}</div>
          </div>
        </main>
      </section>
      <Rates className={scss.Rates} />
    </div>
  );
}

export default Article;
