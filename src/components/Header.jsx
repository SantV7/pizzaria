import { useEffect, useState } from 'react';
import Navbar from './Navbar'
import { FaBars } from "react-icons/fa";
import ScrollReveal from 'scrollreveal'
import '../styles/header.css'

const Header = () => {



    useEffect(() => {
       ScrollReveal().reveal('.area_text', {
          reset: true ,
          delay: 15 ,
          distance: '35px',
          duration: 945
       })
    }, [])





const [menuMobileState, setMenuMobileState] = useState(true)









  return (
    <>
        <header id='header'>
            <div id="area_navegation">
              <div className="logo"></div>

              <Navbar />

              <div className="area_menu">
                {!menuMobileState
                  ? <Navbar />
                  : ''
                }

              </div>

              <FaBars onClick={() => setMenuMobileState(!menuMobileState)} id='icon_menubar' size={31}/>
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
