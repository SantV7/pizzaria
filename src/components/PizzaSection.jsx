
import gsap from 'gsap'
import '../styles/pizzasection.css'
import { useEffect } from 'react'
const PizzaSection = () => {

  useEffect(() => {
    gsap.fromTo('#pizza-options-1', {
      x: -200,
      opacity: 0
    }, {
      x: 0,
      duration: 1,
      opacity: 1,
      ease: 'power2',
      delay: 0.1
    })

    gsap.fromTo('#pizza-options-2', {
      x: 200,
      opacity: 0
    }, {
      x: 0,
      duration: 1,
      delay: 0.25,
      opacity: 1,
      ease: 'power2'
    })   
    
    gsap.fromTo('#pizza-options-3', {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      duration: 1,
      delay: 0.25,
      opacity: 1,
      ease: 'power2'
    })      
  }, [])



  
  return (
    <>
        <section id='planSection'>

          <div className="intro-text">
              <div className="pizza-section-intro">
                 <h2 id='pizza-font-rubik'>SUA PIZZA DO SEU JEITO</h2>
              </div>

              <div className="text-p">
                  <p>Massa alta, massa fina, massa com fermento, sem fermento, integral ou sem gluten. 
                    Ninguém sabe fazer a sua pizza como nós. Temos mais de 100 combinações para você escolher 
                    como chegará sua pizza.</p>
              </div>
          </div>


          <article id='sabores-area'>
              <div className='area-options'>
                  <div  className="pizza-options">
                      <h3>Sabores Tradicionais</h3>
                    <ul id='pizza-options-1'>
                        <li>Portuguesa</li>
                        <li>Mussarela</li>
                        <li>Calabresa</li>
                        <li>Napolitana</li>
                    </ul>
                  </div>


                  <div className="pizza-options">
                      <h3>Bordas</h3>
                    <ul id='pizza-options-2'>
                        <li>Cheedar</li>
                        <li>Catupiry</li>
                        <li>Chocolate amargo</li>
                        <li>Chocolate Branco</li>
                    </ul>
                  </div>                                                   

                  <div className="pizza-options">
                      <h3>Sabores Especiais</h3>
                    <ul id='pizza-options-3'>
                        <li>Camarão</li>
                        <li>Romeu e julieta</li>
                        <li>Chocolate</li>
                        <li>Napolitana</li>
                    </ul>
                  </div>
              </div>
          </article>

        </section>
    </>
  )
}

export default PizzaSection
