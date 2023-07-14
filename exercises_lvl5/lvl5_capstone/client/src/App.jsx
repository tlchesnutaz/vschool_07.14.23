import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import AddPetForm from "./components/AddPetForm"
import PetCard from "./components/PetCard"
import { FaGithub, FaFacebookF, FaInstagram, FaTwitter, FaRegCopyright } from "react-icons/fa"
// install react-icons, info on https://www.npmjs.com/package/react-icons


export default function App() {

  return (

    <Router>

      <header>
        <Link className="header-logo" to="/" style={{padding: 10 }}> CareCoordinator </Link>
        <nav style={{ margin: 10 }}>
          <Link to="/addpetform" style={{padding: 5 }}> Add a Pet </Link>
          <Link to="/petcard" style={{padding: 5 }}> Your Pets </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addpetform" element={<AddPetForm />} />
        <Route path="/petcard" element={<PetCard />} />
      </Routes>

      <footer>
          <span className="copyright"> Copyright 2023 < FaRegCopyright /> <Link className="footer-logo" to="/" > CareCoordinator </Link> </span>
          <span className="social">< FaFacebookF className="face"/>< FaGithub className="git"/>< FaInstagram className="insta" />< FaTwitter className="twit"/></span>
          <p className="disclaimer"> Disclaimer: </p>
      </footer>

    </Router>
      
  )
}

