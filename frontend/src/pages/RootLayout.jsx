import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function RootLayout() {
  const styles = {
    layout: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh", // Garante que o layout ocupe toda a altura da janela
    },
    content: {
      flex: 1, // O conteúdo principal cresce para preencher o espaço disponível
    },
  };

  return (
    <div style={styles.layout}>
      <Navbar />
      <main style={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
