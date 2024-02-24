import "./elerhetosegek.css";
import Lottie from "lottie-react";
import Send from "../assets/send.json";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import { useTranslation } from "react-i18next";

function Elerhetosegek() {
  const { t } = useTranslation();

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xtu6p7t", "template_z3zl1zk", form.current, {
        publicKey: "nVJScNA1YCpcIZHxB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="kapcsolat-container" id="kapcsolat">
      <div className="kapcsolat-content">
        <div className="kapcsolat-text">
          <p>{t("Kapcsolat")}</p>
          <h2>{t("ÍrjonNekem")}</h2>
        </div>
        <ScrollAnimation result="kapcsolat-box">
          <div className="kapcsolat-left">
            <div className="kapcsolat-elerhetoseg">
              <h3>{t("Elérhetőségek")}</h3>
            </div>
            <div className="email">
              <p>Email</p>
              <p>katonabalint13@gmail.com</p>
            </div>
            <div className="email-anim-container">
              <div className="email-anim">
                <Lottie animationData={Send} />
              </div>
            </div>
          </div>
          <div className="kapcsolat-right">
            <form ref={form} onSubmit={sendEmail}>
              <div className="kapcsolat-message">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <label htmlFor="teljes_nev">{t("TeljesNeve")}</label>
              </div>
              <div className="kapcsolat-message">
                <input
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="kapcsolat-message">
                <textarea
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                ></textarea>
                <label htmlFor="uzenet">{t("Üzenet")}</label>
              </div>
              <div className="kapcsolat-button">
                <button type="submit">{t("Küldés")}</button>
              </div>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
export default Elerhetosegek;
