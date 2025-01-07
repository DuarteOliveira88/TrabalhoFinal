import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../images/Banner.jpg";
import { Link } from "react-router-dom";

import Banner6 from "../images/Banner6.png";
import consola from "../images/consola.png"; 
import jogos from "../images/jogos.png";
import monitor from "../images/monitor.png";
import computadores from "../images/computadores.png";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <h3>Hello</h3>
      
      <div style={styles.bannerContainer}>
        <img src={Banner} alt="Banner" style={styles.banner} />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}> 
        {[
          { src: consola, alt: "Image 1" },
          { src: jogos, alt: "Image 2" },
          { src: monitor, alt: "Image 3" },
          { src: computadores, alt: "Image 4" },
        ].map((item, index) => (
          <Link 
            key={index} 
            to="/loja"
            style={{ textDecoration: "none" }}
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              style={styles.img} 
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            />
          </Link>
        ))}
      </div>
      
      <div>
        <img src={Banner6} alt="Banner4" style={styles.banner} />
      </div>
    </>
  );
}

const styles = {
  bannerContainer: {
    maxWidth: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "0px",
    backgroundColor: "#D8D8D8",
    padding: "20px 0",
  },
  banner: {
    maxWidth: "100%",
    height: "auto",
    backgroundColor: "#D8D8D8",
  },
  img: {
    maxWidth: "100%",
    transition: "transform 0.3s ease", // Suavidade para o efeito de zoom
  },
};




