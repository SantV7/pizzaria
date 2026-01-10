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
               <h2>Promoções</h2>
               <div className="area_info_promotion">
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
            </section>

            <section id='plans-section'>
            

            </section>
        </main>
     </>
  )
}

export default Main