import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../images/Logo.png';

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333333',
    color: '#fff',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
  },
  icons: {
    display: 'flex',
    marginLeft: '20px',
  },
  icon: {
    fontSize: '18px',
    marginLeft: '15px',
    cursor: 'pointer',
    color: '#fff',
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
      <div style={styles.icons}>
        <FaFacebook style={styles.icon} />
        <FaTwitter style={styles.icon} />
        <FaInstagram style={styles.icon} />
      </div>
    </footer>
  );
};

export default Footer;
