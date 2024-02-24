import Lottie from "lottie-react";
import footer from "../assets/footer.json";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-text">
        <h1 className="">Katona Bálint</h1>
        <h3 className="">Junior Fullstack Developer</h3>
      </div>
      <div className="footer-animation">
        <Lottie animationData={footer} />
      </div>
    </div>
  );
}
export default Footer;
