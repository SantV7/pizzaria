import React, { useEffect } from 'react'
import '../styles/main.css'
import ScrollReveal from 'scrollreveal'
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { MdMoneyOff } from "react-icons/md";
import PizzaSection from './PizzaSection';


const Main = () => {


useEffect(() => {
  ScrollReveal().reveal('#promotion-section', {
    reset: true ,
    delay: 135 ,
    distance: '65px',
    duration: 1000
  })
}, [])

useEffect(() => {
  ScrollReveal().reveal('#main-content', {
    reset: true ,
    delay: 135 ,
    distance: '35px',
    duration: 1000
  })
}, [])

useEffect(() => {
  ScrollReveal().reveal('.all-cards', {
    reset: true ,
    delay: 135 ,
    distance: '65px',
    duration: 1000
  })
}, [])

useEffect(() => {
  ScrollReveal().reveal('#promotional', {
    reset: true ,
    distance: '60px',
    delay: 200 ,
    duration: 1000
  })
}, [])



  return (
     <>
        <main id='main-content'>

            <section id='promotion-section'>
               <div id='background-left'>
                  <div className='tomate-folhas'></div>
                  <div className="queijo"></div>
                  <div className="folhabottom"></div>
               </div>



               <div id='center-background' className='area_info_promotion'>
                  <h3 id='promotional'>Promoções aos domingos</h3>

                  <p id='promotional-paragraph'>Você adora comer pizza aos domingos a noite? 
                     Reunir a família, brindar e saborear a pizza do jeito que você gosta. Nós
                      oferecemos a melhor maneira desta pizza chegar quentinha, na hora certa, 
                      sem atrasos e do jeito que você gosta. </p>


                  <div className="all-cards">
                     <div className='cards-days'>
                        <FaPeopleGroup size={41}/>
                        <span className='name-days'>Família Reunida</span>
                        <p>Domingo a noite é dia da família se reunir, conversar, rir e saborear
                            uma maravilhosa pizza. Mas agora, você não precisa mais ligar para pedir,
                             nós enviaremos todos os domingos para você.</p>
                     </div>


                     <div className='cards-days'>
                        <MdOutlineTimer size={41}/>
                        <span className='name-days'>Sem demora</span>
                        <p>Sabe aquela sensação de ficar aguardando a pizza chegar e ela nunca chega?
                            Pois é, aqui sua pizza chegará sempre no horário programado por você. Nosso 
                            intervalo de espera nunca supera 15 minutos.</p>
                     </div>


                     <div className='cards-days'>
                        <MdMoneyOff size={41}/>
                        <span className='name-days'>Baixo preco</span>
                        <p>Quando o entregador chegar na sua casa, você só recebe, nem precisa pagar.
                            Por um preço justo, você pagará apenas pela frequência que você deseja receber sua pizza.</p>
                     </div>
                  </div>
               </div>
            
            
               <div id='background-right'>
                  <div className="azeite"></div>
                  <div className="camarao"></div>
               </div>
            </section>

            <PizzaSection />

        </main>
     </>
  )
}

export default Main