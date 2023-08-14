import React, { useContext } from "react"
import { BrowserRouter as Router, Routes, Route, Link, Navigate, NavLink } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Auth from "./components/Auth"
import AddPetForm from "./components/AddPetForm"
import PetList from "./components/PetList"
import Navbar from "./components/Navbar.jsx"
import { AxiosContext } from "./context/AxiosContext.jsx"
import { FaGithub, FaFacebookF, FaInstagram, FaTwitter, FaRegCopyright } from "react-icons/fa"
// install react-icons, info on https://www.npmjs.com/package/react-icons


export default function App() {
  const { token, logout } = useContext(AxiosContext)
  // if token is empty string it will be falsey value
  
  return (

    <Router>
      { token && <Navbar /> }
      <Routes>
        <Route 
          path="/" 
          element={token ? <Navigate to="/petcard"/> : <Auth />}
        />
        <Route 
          path="/addpetform"
          element={<ProtectedRoute token={token} redirectTo="/">
            <AddPetForm />
          </ProtectedRoute>}
        />
        <Route 
          path="/petCard"
          element={<ProtectedRoute token={token} redirectTo="/">
            < PetList/>
          </ProtectedRoute>}
        />
        </Routes>

      <footer>
          <span className="copyright"> Copyright 2023 < FaRegCopyright /> <Link className="footer-logo" to="/" > CareCoordinator </Link> </span>
          <span className="social">< FaFacebookF className="face"/>< FaGithub className="git"/>< FaInstagram className="insta" />< FaTwitter className="twit"/></span>
          <p className="disclaimer"> Disclaimer: </p>
      </footer>
    </Router>
      
  )
}
