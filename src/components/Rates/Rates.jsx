import React, { useState } from "react";
import scss from "./Rates.module.scss";
import { comments as initialComments } from "../../constants/Rates";
import profile from "../../assets/Rates/profile.svg";

function Rates() {
  const [comments, setComments] = useState(initialComments);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() && comment.trim()) {
      const newComment = {
        name: name,
        comment: comment,
        time: new Date().toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };

      setComments([newComment, ...comments]);
      setName("");
      setComment("");
    }
  };

  const seeComments = comments.map(({ name, comment, time }, index) => (
    <div key={index} className={scss.comments}>
      <img src={profile} alt="profilePhoto" />
      <article>
        <aside>
          <h3>{name}</h3>
          <span>{time}</span>
        </aside>
        <p>{comment}</p>
      </article>
    </div>
  ));

  return (
    <section className={scss.rates}>
      <h1>ОТЗЫВЫ</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Имя и фамилия"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          name="Напишите отзыв о статье"
          placeholder="Напишите отзыв о статье"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">ДОБАВИТЬ</button>
      </form>
      <footer>{seeComments}</footer>
    </section>
  );
}

export default Rates;
