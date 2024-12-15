import React from "react";
import "./Banner.css";
// import bannerVideo from "../assets/bannerVideo.mp4";

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
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="../assets/bannerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default Banner;
