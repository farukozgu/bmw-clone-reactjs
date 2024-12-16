import "./Footer.css";
import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 footerLineFirst">
          <p className="lineFirstText">BMW Modelleri'ni Keşfedin</p>
          <a href="/" className="lnkFirstLine">
            Modeller
          </a>
        </div>
      </div>
      <div className="row secondBlock">
        <div className="col-md-4 footerBlock">
          <p className="blockTitle">İLETİŞİM & DESTEK</p>
          <a className="lnkBlock" href="/">
            BMW Canlı Destek
          </a>
          <a className="lnkBlock" href="/">
            BMW Acil Yol Yardım Hattı
          </a>
          <a className="lnkBlock" href="/">
            İletişim
          </a>
          <a className="lnkBlock" href="/">
            Geri Dönüşüm
          </a>
          <a className="lnkBlock" href="/">
            Gönüllü Geri Çağırma
          </a>
          <a className="lnkBlock" href="/">
            BMW E-Bülteni
          </a>
        </div>
        <div className="col-md-4 footerBlock">
          <p className="blockTitle">HIZLI ERİŞİM</p>
          <a className="lnkBlock" href="/">
            Fiyat Listesi
          </a>
          <a className="lnkBlock" href="/">
            Ayın Özel Teklifleri
          </a>
          <a className="lnkBlock" href="/">
            BMW’nizi Online Rezerve Edin
          </a>
          <a className="lnkBlock" href="/">
            BMW Türkiye Mobil Uygulaması
          </a>
          <a className="lnkBlock" href="/">
            Test Sürüşü
          </a>
          <a className="lnkBlock" href="/">
            Kataloglar
          </a>
          <a className="lnkBlock" href="/">
            Site Haritası
          </a>
        </div>
        <div className="col-md-4 footerBlock">
          <p className="blockTitle">BMW DÜNYASI</p>
          <a className="lnkBlock" href="/">
            BMW Türkiye Mobil Uygulaması
          </a>
          <a className="lnkBlock" href="/">
            BMW Dilediğiniz Yerde
          </a>
          <a className="lnkBlock" href="/">
            BMW Lifestyle Shop
          </a>
          <a className="lnkBlock" href="/">
            İkinci El BMW modelleri Borusan Next’te
          </a>
          <a className="lnkBlock" href="/">
            BMW Motorrad Türkiye
          </a>
          <a className="lnkBlock" href="/">
            BOM Akademi
          </a>
          <a className="lnkBlock" href="/">
            Borusan Otomotiv
          </a>
        </div>
      </div>
    </div>
  );
}
