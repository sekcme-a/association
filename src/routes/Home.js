import React from "react";
import Header from "components/Header";
import About from "components/About";
import Shop from "components/Shop";
import Menu from "components/Menu";
import Clients from "components/Clients";
import Prices from "components/Prices";
import Navbar from "components/Navbar/Navbar";
import "css/Home.css"
import NavbarMobile from "components/Navbar/NavbarMobile"

const Home = () => {
    const mobileMode = () => {
    if (window.innerWidth <= 960)
      return true;
    else
      return false;
  }
  return (
    <div>
      {mobileMode() ? <NavbarMobile /> : <Navbar />}
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
    </div>
  )
}

export default Home