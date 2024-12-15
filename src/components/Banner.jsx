import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row bannerRow">
          <div className="col-md-12 bannerTexts">
            <h1 className="bannerTitle">
              BMW RUHU: HER RUHA
              <br />
              BİR RUH EŞİ.
            </h1>
            <p className="bannerDsc">
              BMW modellerinde özel yıl sonu fırsatları.
            </p>
            <button className="inceleBtn">İnceleyin</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
