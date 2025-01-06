import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../images/Banner.jpg";
import Banner2 from "../images/Banner2.png";
import Banner3 from "../images/Banner3.png";
import Banner4 from "../images/Banner4.png";
import Banner5 from "../images/Banner5.png";
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
        <img src={consola} alt="Image 1" style={{ width: '25%' }} /> 
        <img src={jogos} alt="Image 2" style={{ width: '25%' }} /> 
        <img src={monitor} alt="Image 3" style={{ width: '25%' }} /> 
        <img src={computadores} alt="Image 4" style={{ width: '25%' }} /> </div>
      
      
      <div>
        <img src={Banner4} alt="Banner4" style={styles.banner}  />
        <img src={Banner5} alt="Banner4" style={styles.banner}  />
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
    backgroundColor:"#D8D8D8"
  },
  img: {
    maxWidth: "100%"
  }
};


