import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import produtos from '../data/produtos.json'; // Dados fictícios dos produtos

export default function Car() {
  const [cart, setCart] = useState([]);

  // Função para adicionar produto ao carrinho
  const addToCart = (produto) => {
    setCart([...cart, produto]);
  };

  // Função para remover produto do carrinho
  const removeFromCart = (produtoId) => {
    setCart(cart.filter(produto => produto.id !== produtoId));
  };

  // Calcular o preço total
  const getTotal = () => {
    return cart.reduce((total, produto) => total + parseFloat(produto.preco), 0).toFixed(2);
  };

  return (
    <div style={styles.container}>
      <h1>Carrinho de Compras</h1>

      {/* Se o carrinho estiver vazio */}
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul style={styles.productList}>
            {cart.map((produto, index) => (
              <li key={index} style={styles.productItem}>
                <img src={produto.imagem} alt={produto.nome} style={styles.productImage} />
                <div style={styles.productDetails}>
                  <h4>{produto.nome}</h4>
                  <p>Preço: R$ {produto.preco}</p>
                  <button onClick={() => removeFromCart(produto.id)} style={styles.removeButton}>Remover</button>
                </div>
              </li>
            ))}
          </ul>

          {/* Exibição do total */}
          <div style={styles.totalContainer}>
            <h3>Total: R$ {getTotal()}</h3>
            <Link to="/checkout" style={styles.checkoutButton}>Finalizar Compra</Link>
          </div>
        </>
      )}

      <div style={styles.productsContainer}>
        <h2>Produtos Disponíveis</h2>
        <div style={styles.productGrid}>
          {produtos.map((produto) => (
            <div key={produto.id} style={styles.productCard}>
              <img src={produto.imagem} alt={produto.nome} style={styles.productImage} />
              <h3>{produto.nome}</h3>
              <p>Preço: R$ {produto.preco}</p>
              <button onClick={() => addToCart(produto)} style={styles.addButton}>Adicionar ao Carrinho</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  productList: {
    listStyle: 'none',
    padding: 0,
  },
  productItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    borderBottom: '1px solid #ccc',
    paddingBottom: '10px',
  },
  productImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '20px',
  },
  productDetails: {
    flex: 1,
  },
  removeButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  totalContainer: {
    marginTop: '20px',
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#2ecc71',
    color: 'white',
    padding: '10px 20px',
    textDecoration: 'none',
    borderRadius: '5px',
  },
  productsContainer: {
    marginTop: '40px',
  },
  productGrid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  productCard: {
    width: '200px',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
  },
  addButton: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

  
  