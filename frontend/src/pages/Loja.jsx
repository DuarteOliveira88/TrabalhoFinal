import React from "react";
import { Link } from "react-router-dom";
import produtos from '../data/produtos.json';
import '../style.css';

export function Loja() {
  return (
    <>
      <h1 style={styles.pageTitle}>Loja</h1>

      <div>
        <h2>API</h2>
        <p><Link to="../API" style={styles.apiLink}>API</Link></p>
      </div>

      <div style={styles.productsContainer}>
        <h2>Produtos</h2>
        <div style={styles.productGrid}>
          {produtos.map((produto, index) => (
            <div key={index} style={styles.productCard}>
              <img src={produto.imagem} alt={produto.nome} style={styles.productImage} />
              <div style={styles.productInfo}>
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p style={styles.productPrice}>Preço: R$ {produto.preco}</p>
                <Link to={`/produto/${produto.id}`} style={styles.productLink}>Ver mais</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  pageTitle: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2.5em",
    color: "#333"
  },
  apiLink: {
    color: "#3498db",
    textDecoration: "none",
  },
  productsContainer: {
    marginTop: "40px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    padding: "0 10px",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "center",
    padding: "10px",
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  productInfo: {
    padding: "10px",
  },
  productPrice: {
    fontWeight: "bold",
    color: "#2ecc71",
    marginBottom: "10px",
  },
  productLink: {
    color: "#3498db",
    textDecoration: "none",
    fontSize: "1.1em",
    fontWeight: "bold",
  },
};





