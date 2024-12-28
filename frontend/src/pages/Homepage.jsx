import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../images/Banner.jpg";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div style={styles.bannerContainer}>
        <img src={Banner} alt="Banner" style={styles.banner} />
      </div>
    </>
  );
}

const styles = {
  bannerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    backgroundColor: "#333333",
    padding: "20px 0",
  },
  banner: {
    maxWidth: "100%",
    height: "auto",
  },
};


