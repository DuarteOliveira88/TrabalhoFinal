import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

export default function RootLayout() {
  return (
    <>
      <Navbar /> 
      
      <Outlet /> 

      <br />
      <br />
      <Footer />
    </>
  );
}