import React from "react";
import bannerVideo from "../assets/banner-video.m3u8";
<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>;

const video = document.getElementById("bannerVideo");
const videoSrc = "banner-video.m3u8";

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = videoSrc;
}

function Banner() {
  return (
    <section className="banner">
      <video autoplay muted loop id="bannerVideo">
        <div className="container">
          <div className="row bannerRow">
            <div className="col-md-12 bannerTexts">
              <h1 className="bannerTitle">
                BMW RUHU: HER RUHA
                <br />
                BİR RUH EŞİ.
              </h1>
              <p className="bannerDsc">
                BMW modellerinde öze yıl sonu fırsatları.
              </p>
              <button className="inceleBtn">İnceleyin</button>
            </div>
          </div>
        </div>
      </video>
    </section>
  );
}

export default Banner;
