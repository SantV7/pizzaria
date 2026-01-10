import React, { useEffect } from 'react'
import '../styles/main.css'
import ScrollReveal from 'scrollreveal'

const Main = () => {


useEffect(() => {
  ScrollReveal().reveal('#promotion-section', {
    reset: true ,
    delay: 135 ,
    distance: '65px',
    duration: 1000
  })
},[])



  return (
     <>
        <main id='main-content'>
            <section id='promotion-section'>
               <div id='background-left'>
                  
               </div>

               <div id='center-background' className='area_info_promotion'>
                  <h3>Promoções</h3>
                  <div className="all-cards">
                     <div className='cards-days'>
                        <span className='name-days'>Domingo</span>
                     </div>

                     <div className='cards-days'>
                        <span className='name-days'>Terça</span>
                     </div>

                     <div className='cards-days'>
                        <span className='name-days'>Quinta</span>
                     </div>
                  </div>
               </div>
               
               <div id='background-right'>
                  
               </div>
            </section>
        </main>
     </>
  )
}

export default Main