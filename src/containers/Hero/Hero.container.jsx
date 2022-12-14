import React from "react";
import "./Hero.style.scss";
import { Link } from "react-router-dom";
import yusibuyuk from "./../../assets/yusiberbuyuk.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero_text">
        <p>YUSIBER PHISHING QUIZ</p>
        <p>
          "Ben öyle hemen kanmam! " diye düşünüyor olabilirsin. Peki bir
          Phishing Saldırısına karşı ne kadar hazırlıklısın?
        </p>
        <p>
          Bu test, Phishing Saldırılarına karşı sizi bilinçlendirme amaçlı
          yapılmış bir testtir.
        </p>
        <Link to="/quizform" className="baslayalim">
          Başlayalım &rarr;
        </Link>
      </div>
      <div>
        <img className="buyuk_logo" src={yusibuyuk} alt="logo" />
      </div>
    </section>
  );
}
