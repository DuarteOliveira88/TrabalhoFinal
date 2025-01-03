
import Logo from '../images/Logo.png';

import all from '../images/logos/all.png';
import pay from '../images/pay.png';




const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px", 
    backgroundColor: "#333333",
    color: "#fff",
    width: "100%", 
    boxSizing: "border-box", 
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    cursor: "pointer",
    width: "auto",
    height: "80px", 
    objectFit: "contain",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 10px",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
};





const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.leftSection}>
        <img src= {Logo} alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="/about" style={styles.link}>Links Uteis</a>
        </li>
        <li style={styles.navItem}>
          <a href="/contact" style={styles.link}>Apoio ao Cliente</a>
        </li>
        <li style={styles.navItem}>
          <a href="/privacy" style={styles.link}>Informação Legal</a>
        </li>
        <li style={styles.navItem}>
          <a href="/privacy" style={styles.link}>Politica de Privacidade</a>
        </li>
      </ul>
      <div>
        <div></div>
      <img src= {all} style={{ width: '150px', height: '150px',  borderRadius: '50%', marginRight:'30px' }} alt="Facebook Logo" />
      <img src={pay} style={{ width: '200px', height: '100px'}} alt="pay" />
      
      

      

      



      </div>
      
     
      
    </footer>
  );
};

export default Footer;
