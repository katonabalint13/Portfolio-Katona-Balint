import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Projectek from "./componets/Projectek";
import Elerhetosegek from "./componets/Elérhetőségek";
import Bemutatkozas from "./componets/Bemutatkozás";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import "./App.css";
import LanguageSelector from "./componets/Languageselector";

function App() {
  const { t } = useTranslation();

  const rolam = useRef(null);
  const munkaim = useRef(null);
  const kapcsolat = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({ top: elementRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <div className="header-container-top ">
        <div className="header-container">
          <button
            onClick={() => scrollToSection(rolam)}
            className="header-button"
          >
            {t("Rólam")}
          </button>
          <button
            onClick={() => scrollToSection(munkaim)}
            className="header-button"
          >
            {t("Munkáim")}
          </button>
          <button
            onClick={() => scrollToSection(kapcsolat)}
            className="header-button"
          >
            {t("Kapcsolat")}
          </button>
        </div>
        <div className="language-buttons-container">
          <LanguageSelector />
        </div>
      </div>

      <div>
        <Hero />
      </div>
      <div ref={rolam}>
        <Bemutatkozas />
      </div>
      <div ref={munkaim}>
        <Projectek />
      </div>
      <div ref={kapcsolat}>
        <Elerhetosegek />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
