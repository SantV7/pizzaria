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

            <div className="area_text">
                <div id="text-wellcome">
                   <h3>Sunday Pizza Sunday</h3>
                </div>
                <div className="paragraph_text">
                   <p id='p-color-orange'>Sua pizza do jeito, sem atrasos</p>
                </div>

                <div className="btnSelectPlan">
                   <a href="#">Escolha agora mesmo seu plano</a>
                </div>
            </div>
        </header>    
    </>
  )
}

export default Header
