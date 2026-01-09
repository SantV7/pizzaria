import React from 'react'
import Navbar from './Navbar'
import Account from './Account'
import '../styles/header.css'

const Header = () => {
  return (
    <>
        <header>
            <div id="area_navegation">
              <div className="logo"></div>
              <Navbar />
              <Account />
            </div>
        </header>    
    </>
  )
}

export default Header
