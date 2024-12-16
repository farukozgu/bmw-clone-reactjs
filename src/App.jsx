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
      <Reserved  />
      
      <div className="cards">
      <Reserved title="Online rezerve edin" onButtonClick={() => handleButtonClick('Muratcan Salih')} buttonText="Bilgileri Gör" image={carIcon} />
      <Reserved title="Fiyat Listesi" onButtonClick={() => handleButtonClick('Muratcan Salih')} buttonText="Bilgileri Gör" image={listIcon}/>
      <Reserved title="Ayın Özel Teklifleri" onButtonClick={() => handleButtonClick('Muratcan Salih')} buttonText="Bilgileri Gör" image={offerIcon}/>
      <Reserved title="BMW Canlı Destek" onButtonClick={() => handleButtonClick('Muratcan Salih')} buttonText="Bilgileri Gör" image={chatIcon}/>
      </div>
      
    </>
  );
}

export default App;
