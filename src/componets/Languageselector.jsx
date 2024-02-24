import { useTranslation } from "react-i18next";
import "./languageselect.css";

const languages = [
  { code: "en", lang: "EN" },
  { code: "hu", lang: "HUN" },
];
function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="buttons">
      {languages.map((lng) => {
        return (
          <button
            className={lng.code === i18n.languages ? "selected" : ""}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
}
export default LanguageSelector;
