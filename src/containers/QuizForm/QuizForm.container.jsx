import React from "react";
import "./Quizform.style.scss";

export default function QuizForm() {
  return (
    <section className="main_section">
      <div className="form">
        <h2>Skorunuzu kaydetmek için birkaç bilgiye ihtiyacımız var</h2>
        <input type={"text"} placeholder="Adınız" />
        <input type={"email"} placeholder="E-Mailiniz" />
        <a href="/question">Başla</a>
      </div>
    </section>
  );
}
