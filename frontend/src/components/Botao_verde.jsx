import React, { useState } from "react";

export default function TabButton({ children, onSelect, isActive }) {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    button: {
      backgroundColor: isActive
        ? "#6ba62b"
        : isHovered
        ? "#7cb635"
        : "#8ec73f",
      border: `1px solid ${isActive ? "#6ba62b" : "#8ec73f"}`,
      color: "#fff",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <button
      style={styles.button}
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}


