import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { UserContext } from './context/UserProvider.js'


export default function App(){
  const { token, logout } = useContext(UserContext)
  // if token is empty string it will be falsey value

  return (
    <div className="app">
     <Navbar logout={ logout } token={ token }/>
      <Routes>

        <Route 
          path="/" 
          element={ token ? <Navigate to="/profile"/> : <Auth /> }
        />

        {/* <Route 
          path="/profile"
          element={<Profile />}
        /> */}

        <Route
          path="/profile"
          element={<ProtectedRoute token={token}> 
              <Profile/>
            </ProtectedRoute>}
        />

        <Route 
          path="/public"
          element={<Public />}
        />

      </Routes>
    </div>
  )
}

// can do the same for public if you only want logged in users to access