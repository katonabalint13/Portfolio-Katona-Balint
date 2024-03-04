import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./hero.css";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div ref={ref} className="hero-container">
      <motion.h1 style={{ y: textY }} className="name-container">
        <h2 className="name-kb">Katona Bálint</h2>
        <p className="name-jfd">Junior Fullstack Developer</p>
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(../src/assets/image-full.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(../src/assets/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
export default Hero;
