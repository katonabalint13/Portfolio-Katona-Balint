import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debugger: true,
    lng: "hu",
    resources: {
      hu: {
        translation: {
          //Header
          Rólam: "Rólam",
          Munkáim: "Munkáim",
          Kapcsolat: "Kapcsolat",
          //bemutatkozas
          Bemutatkozom: "Bemutatkozom",

          SzövegRólam:
            "Katona Bálint vagyok, Junior FullStack fejlesztő React keretrendszerben. Tapasztalatom van mind a frontend, mind a backend területén, és nagy lelkesedéssel tanulok és fejlődőm a programozás terén. A JavaScript mellett, szívesen tanulok új dolgokat és alkalmazom azokat a gyakorlatban. Számomra nagyon fontos a fejlődés, szabadidőmben nagyon sok időt fordítok az önfejlesztésre, valamint a gyakorlásra. A rám bízott feladatokat mindig a legjobb tudásom szerint valósítom meg, a legnagyobb pontossággal.",
          Technológiák: "Technológiák",
          Képességeim: "Képességeim",
          //elerhetosegek

          ÍrjonNekem: "Írj nekem",
          Elérhetőségek: "Elérhetőségek",
          TeljesNeve: "TeljesNeve",
          Üzenet: "Üzenet",
          Küldés: "Küldés",
          //projectek
          Projektek: "Projektek",

          Csapatmunka: "Csapatmunka",
          RecipeKingText1:
            "Egy korszerű, felhasználóbarát recept oldal Frontend és Backend használatával. Kialakításkor külön figyelmet fektettünk a felhasználói élményekre.",
          RecipeKingText2:
            "Az oldal tartalma felhasználói oldalt, ahol lehet képeket és hozzájuk recepteket feltölteni.",
          Technológia: "Technológia:",
        },
      },
      en: {
        translation: {
          //Header
          Rólam: "About Me",
          Munkáim: "My Works",
          Kapcsolat: "Contacts",
          //bemutatkozas
          Bemutatkozom: "Introduction",

          SzövegRólam:
            "My name is Balint Katona, Junior FullStack developer in the React framework. I have experience in both frontend and backend areas, and I am enthusiastically learning and improving in the field of programming. Besides JavaScript, I enjoy learning new things and applying them in practice. Development is very important to me; in my free time, I dedicate a lot of time to self-improvement and practice. I always carry out the tasks entrusted to me to the best of my knowledge and with the utmost accuracy.",
          Technológiák: "Technologies",
          Képességeim: "Skills",
          //elerhetosegek

          ÍrjonNekem: "Write to me",
          Elérhetőségek: "Contacts",
          TeljesNeve: "Full name",
          Üzenet: "Message",
          Küldés: "Send",
          //projectek
          Projektek: "Projects",

          Csapatmunka: "Teamwork",
          RecipeKingText1:
            "A modern, user-friendly recipe website utilizing Frontend and Backend. During the design process, we paid special attention to user experiences.",
          RecipeKingText2:
            "The content of the site includes a user page where users can upload images and accompanying recipes..",
          Technológia: "Technologies:",
        },
      },
    },
  });
