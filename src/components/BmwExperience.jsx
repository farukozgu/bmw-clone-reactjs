import React from "react";
import "./BmwExperience.css";
import experienceImg from "../assets/bmw-connected-drive-main-teaser.jpeg";

export default function BmwExperience() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-7">
          <img src={experienceImg} className="experienceImg" />
        </div>
        <div className="col-sm-12 col-md-5">
          <h1 className="experienceTitle">
            Yepyeni Bir Müşteri Deneyimi: BMW’ni Bul Yenilendi.
          </h1>
          <p className="experienceDetail">
            BMW’ni Bul web sitesi yeni bir BMW satın almak isteyen kullanıcılara
            ve satış sonrası işlemlerini çözümlemek isteyen BMW sahiplerine de
            kişiselleştirilmiş içerikler sunmak için tamamen yenilendi.
            Aklınızdaki BMW otomobilini bulun, test sürüş randevusu alın ya da
            servis randevunuzu hızlıca oluşturun.
          </p>
          <button className="experienceBtn">Şimdi Keşfedin</button>
        </div>
      </div>
    </div>
  );
}
