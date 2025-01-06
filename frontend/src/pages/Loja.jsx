import React, { useState } from "react";
import Botao_verde from "../components/Botao_verde";
import {Link, useRouteLoaderData} from "react-router-dom";
import  produtos  from '../data/produtos.json'


export function Loja() {
  console.log({produtos})
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <h1>Loja</h1>
      

      <div>
      <h2>API</h2>
      div
      <p><Link to="../API">API</Link></p>
      </div>
      <div style={styles.tabsContainer}>
        <Botao_verde
          onSelect={() => handleTabSelect("Tab1")}
          isActive={activeTab === "Tab1"}
        >
          Tab 1
        </Botao_verde>
        <Botao_verde
          onSelect={() => handleTabSelect("Tab2")}
          isActive={activeTab === "Tab2"}
        >
          Tab 2
        </Botao_verde>
      </div>
    </>
  );
}

const styles = {
  tabsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "20px",
  },
};
