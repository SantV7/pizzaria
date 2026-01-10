import React from 'react'
import '../styles/main.css'
import ScrollReveal from 'scrollreveal'


const Main = () => {


  ScrollReveal().reveal('#main-content', {
    reset: true ,
    delay: 135 ,
    distance: '65px',
    duration: 100
  })


  return (
     <>
        <main id='main-content'>
            <section id='promotion-section'>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempora sapiente alias, quidem repellendus minus voluptas vitae eaque? Enim, ab odit reprehenderit esse error impedit vel nobis eveniet nihil. Voluptates.
            </section>

            <section id='plans-section'>
             



            </section>
        </main>
     </>
  )
}

export default Main