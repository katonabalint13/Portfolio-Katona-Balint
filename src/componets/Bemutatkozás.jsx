import React, { useEffect } from "react";
import Me from "../assets/me.jpg";
import ScrollAnimation from "./ScrollAnimation";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import "./bemutatkozas.css";
import { useTranslation } from "react-i18next";
import { FaGithubSquare, FaLinkedin, FaCode } from "react-icons/fa";

function Bemutatkozas() {
  const { t } = useTranslation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      gsap.set(".html, .css, .js, .react, .tailwindcss ", {
        y: "-50px",
        opacity: 0,
      });
      gsap.set(".figma, .git, .mysql,   .nodejs", {
        y: "50px",
        opacity: 0,
      });

      gsap.to(".html", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0,
      });
      gsap.to(".css", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.1,
      });

      gsap.to(".js", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.3,
      });
      gsap.to(".react", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.5,
      });

      gsap.to(".figma", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0,
      });
      gsap.to(".git", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.1,
      });
      gsap.to(".mysql", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.2,
      });

      gsap.to(".nodejs", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.5,
      });

      gsap.to(".tailwindcss", {
        duration: 0.8,
        y: "0px",
        opacity: 1,
        ease: "power2.inOut",
        delay: 0.4,
      });
    } else {
      gsap.set(".html, .css, .js, .react,  .git, .tailwindcss", {
        y: "-50px",
        opacity: 0,
      });
      gsap.set(".figma,.git, .mysql, .nodejs ", {
        y: "50px",
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <div className="rolam-container">
      <ScrollAnimation result="rolam-content">
        <div className="rolam-text">
          <p> {t("Bemutatkozom")}</p>
          <h2>{t("Rólam")}</h2>
          <p>{t("SzövegRólam")}</p>
          <div className="socials">
            <a
              href="https://github.com/katonabalint13"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/b%C3%A1lint-katona-8505312b4/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
          </div>
        </div>
        <div className="rolam-image">
          <img src={Me} alt="Katona Balint" className="rounded-lg" />
        </div>
      </ScrollAnimation>

      <div className="kepessegek-content">
        <div className="rolam-text">
          <p> {t("Technológiák")}</p>
          <h2>{t("Képességeim")}</h2>
        </div>
        <div className="rolam-skills">
          <div className="rolam-skills-wrapper" ref={ref}>
            <div className="skills-box html">
              <div className="skills-content">
                <h3>HTML</h3>
              </div>
            </div>
            <div className="skills-box css">
              <div className="skills-content">
                <h3>CSS</h3>
              </div>
            </div>

            <div className="skills-box js">
              <div className="skills-content">
                <h3>JavaScript</h3>
              </div>
            </div>
            <div className="skills-box tailwindcss">
              <div className="skills-content">
                <h3>TailwindCSS</h3>
              </div>
            </div>
            <div className="skills-box react">
              <div className="skills-content">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="rolam-skills-wrapper">
            <div className="skills-box figma">
              <div className="skills-content">
                <h3>Figma</h3>
              </div>
            </div>
            <div className="skills-box git">
              <div className="skills-content">
                <h3>GitHub</h3>
              </div>
            </div>
            <div className="skills-box mysql">
              <div className="skills-content">
                <h3>MySQL</h3>
              </div>
            </div>

            <div className="skills-box nodejs">
              <div className="skills-content">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bemutatkozas;
