import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Reserved from "./components/Reserved";
import carIcon from "./assets/icon-1.png";
import listIcon from "./assets/icon-2.png";
import offerIcon from "./assets/icon-3.png";
import chatIcon from "./assets/icon-4.png";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <>
        <h1 className="reservedTitle">BMW'nizi Rezerve Edin.</h1>
        <div className="cards">
          <Reserved
            title="Online rezerve edin"
            button="BMW'ni Bul'a Gidin"
            image={carIcon}
          />
          <Reserved title="Fiyat Listesi" button="İnceleyin" image={listIcon} />
          <Reserved
            title="Ayın Özel Teklifleri"
            button="Keşfedin"
            image={offerIcon}
          />
          <Reserved
            title="BMW Canlı Destek"
            button="Görüşmeyi başlatın"
            image={chatIcon}
          />
        </div>
      </>
    </>
  );
}

export default App;
