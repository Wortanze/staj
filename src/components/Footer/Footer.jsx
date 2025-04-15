import React from "react";
import scss from "./Footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/Header/resident.svg";
import facebook from "../../assets/Footer/facebookk.svg";
import instagram from "../../assets/Footer/instagramm.svg";
import tiktok from "../../assets/Footer/tiktok.svg";
import twiter from "../../assets/Footer/twitterr.svg";
import { categories, companies } from "../../constants/Footer";

function Footer() {
  const socials = [facebook, twiter, instagram, tiktok];
  const seeSocials = socials.map((el, index) => (
    <img key={index} src={el} alt="" />
  ));

  const navs = categories.map(({ link, title }, index) => (
    <Link key={index} className={scss.links} to={link}>
      {title}
    </Link>
  ));

  const navs2 = companies.map(({ title, link }, index) => (
    <Link key={index} className={scss.links} to={link}>
      {title}
    </Link>
  ));
  return (
    <section className={scss.footer}>
      <div className="container">
        <header>
          <main>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <div>{seeSocials}</div>
          </main>
          <hr />
          <article>
            <p>
              - ваш гид в мире строительства, <br /> объединяющий всех, кто
              стремится <br />
              создавать надежные и удобные дома, а <br /> также поможет
              читателям расширить свой <br />
              кругозор и узнать что-то новое
            </p>
            <div className={scss.navs}>
              <nav>
                <h3>Категории:</h3>
                <aside>{navs}</aside>
              </nav>
              <nav>
                <h3>Компания:</h3>
               <aside> {navs2}</aside>
              </nav>
            </div>
            <div className={scss.address}>
              <h1>
                г. Бишкек, ул. <br /> Нуркамала 29
              </h1>
              <span>График работы: с 9:00 до 20:00</span>
              <Link className={scss.gmail}>journal.resident.kg@gmail.com</Link>
            </div>
          </article>
          <footer>
          Все права защищены
          </footer>
        </header>
      </div>
    </section>
  );
}

export default Footer;
