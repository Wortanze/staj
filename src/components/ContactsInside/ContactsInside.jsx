import React from "react";
import { useEffect } from "react";
import scss from "./ContactsInside.module.scss";
import photo from "../../assets/ContactsInside/interview.svg";
import { Link } from "react-router-dom";
import facebook from "../../assets/Footer/facebookk.svg";
import instagram from "../../assets/Footer/instagramm.svg";
import tiktok from "../../assets/Footer/tiktok.svg";
import twiter from "../../assets/Footer/twitterr.svg";

function ContactsInside() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const gmails = [
    "journal.resident.kg@gmail.com",
    "pr.resident.kg@gmail.com",
    "hr.resident.kg@gmail.com",
  ];
  const seeGmails = gmails.map((el, index) => <Link className={scss.gmail}key={index}>{el}</Link>);

  const datas = [
    {
      title: "Почтовый индекс:",
      name: "720049",
    },
    {
      title: "Владелец и издатель:",
      name: "ОсОО «Trust house C.A. real estate»",
    },
    {
      title: "Регистрационный номер:",
      name: "10308",
    },
    {
      title: "Свидетельство:",
      name: "#000758",
    },
  ];
  const seeDatas = datas.map(({ title, name }, index) => (
    <p key={index}>
      {title}
      <span>{name}</span>
    </p>
  ));

  const socials = [facebook, twiter, instagram, tiktok];
  const seeSocials = socials.map((el, index) => (
    <img key={index} src={el} alt="" />
  ));
  return (
    <div className="container">
      <section className={scss.contactsInside}>
        <img src={photo} alt="photo" />
        <main>
          <div className={scss.address}>
            <button>КОНТАКТЫ</button>
            <h1>г. Бишкек, ул. Нуркамала 29</h1>
            <p>График работы: с 9:00 до 20:00</p>
          </div>
          <div className={scss.gmails}>{seeGmails}</div>
          <div className={scss.data}>{seeDatas}</div>
          <div className={scss.socials}>
            <nav>{seeSocials}</nav>{" "}
            <p>Журнал зарегистрирован в Министерстве юстиции КР</p>
          </div>
        </main>
      </section>
    </div>
  );
}

export default ContactsInside;
