import React from 'react'
import { useEffect } from 'react';
import scss from "./InterviewInside.module.scss"
import { interviewInside } from '../../constants/InterviewInside';

function InterviewInside() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

     const cards = interviewInside.map(({ img, title, desc, time }, index) => (
        <div key={index}>
          <img src={img} alt="img" />
          <p>ИНТЕРВЬЮ</p>
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
        <section className={scss.interviewInside}>
        <header>
          <h1>ИНТЕРВЬЮ</h1>
          <hr />
        </header>
        <main>{cards}</main>
        </section>
    </div>
  )
}

export default InterviewInside