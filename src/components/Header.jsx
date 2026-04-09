import { useEffect, useState } from 'react';
import Navbar from './Navbar'
import { FaBars } from "react-icons/fa";
import ScrollReveal from 'scrollreveal'
import '../styles/header.css'
import LogoImg from '../assets/img/secao08-background-capa.jpg'

const Header = () => {
    useEffect(() => {
       const img = new Image();
       img.src = LogoImg;

       ScrollReveal().reveal('.area_text', {
          reset: true ,
          delay: 15 ,
          distance: '35px',
          duration: 945
       })
    }, [])

   const [menuMobileState, setMenuMobileState] = useState(false)

  return (
    <>
        <header id='header' style={{ backgroundImage: `linear-gradient(rgba(51, 48, 87, 0.649), rgba(0, 0, 0, 0)), url(${LogoImg})` }}>
            <div id="area_navegation">
              <div className="logo"></div>
              
              <Navbar />
              {
               menuMobileState
               ? (
                  <ul id='ul-mobile'>
                     <li><a href="#header">Inicio</a></li>
                     <li><a href="#promotion-section">Promoções</a></li>
                     <li><a href="#planSection">Pizza</a></li>
                  </ul>
               )
               : ''
              }
              
              <FaBars onClick={() => setMenuMobileState(!menuMobileState)} id='icon_menubar' size={32}/>
            </div>

            <div className="area_text">
                <div id="text-wellcome">
                   <h3>Sunday Pizza Sunday</h3>
                </div>
                <div className="paragraph_text">
                   <p id='p-color-orange'>Sua pizza do jeito, sem atrasos</p>
                </div>

                <div className="btnSelectPlan">
                   <a href="#">Venha comer as melhores Pizzas da cidade</a>
                </div>
            </div>
        </header>    
    </>
  )
}

export default Header