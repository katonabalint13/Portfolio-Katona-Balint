import React from "react";
import ScrollAnimation from "./ScrollAnimation";
import rk from "../assets/rk.png";
import bimg from "../assets/bimg.png";
import "./projectek.css";
import { useTranslation } from "react-i18next";

function Projectek() {
  const { t } = useTranslation();

  return (
    <div className="projects-container">
      <div className="project-content">
        <div className="rolam-text">
          <p>{t("Projektek")}</p>
          <h2>{t("Munkáim")}</h2>
        </div>
        <div className="rolam-works">
          <ScrollAnimation result="works-box">
            <div className="works-content">
              <div className="works-image">
                <div className="work">
                  <img src={rk} alt="Recipe-King" />
                </div>
              </div>
              <div className="works-text">
                <p>{t("Csapatmunka")}</p>
                <h3>Recipe King</h3>
                <p>{t("RecipeKingText1")}</p>
                <p className="italic-text">{t("RecipeKingText2")}</p>
                <div className="technologia">
                  <p>{t("Technológia")}</p>
                  <p>HTML, TailwindCSS, React, NodeJs, MySQL</p>
                </div>
                <div className="demo">
                  <a href="https://" target="_blank" rel="noreferrer">
                    <button>Demo</button>
                  </a>
                  <a
                    href="https://github.com/katonabalint13"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>GitHub</button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation result="works-box">
            <div className="works-content">
              <div className="works-image">
                <div className="work">
                  <img src={bimg} />
                </div>
              </div>
              <div className="works-text">
                <p>Egyéni munka</p>
                <h3>Balazs Csada Photography</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis voluptas, quaerat sunt ducimus nostrum iste illum
                  consequatur id laudantium quia?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam perspiciatis facere cumque dignissimos esse aut enim
                  consectetur totam ducimus. Ipsam?
                </p>
                <div className="technologia">
                  <p>Technológia:</p>
                  <p>HTML, CSS, React,</p>
                </div>
                <div className="demo">
                  <a href="https://" target="_blank" rel="noreferrer">
                    <button>Demo</button>
                  </a>
                  <a
                    href="https://github.com/katonabalint13"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>GitHub</button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default Projectek;
