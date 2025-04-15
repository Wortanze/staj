import React from 'react'
import { useEffect } from 'react';
import scss from "./AboutUsInside.module.scss"
import people from "../../assets/AboutUs/chely.svg"

function AboutUsInside() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className="container">
        <section className={scss.aboutUs}>
            <button>О НАС</button>
            <h1>Resident - первый журнал <br /> о строительстве в кыргызстане</h1>
            <img src={people} alt="people" />
        </section>
    </div>
  )
}

export default AboutUsInside