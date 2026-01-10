import React, { useEffect } from 'react'
import '../styles/main.css'
import ScrollReveal from 'scrollreveal'
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { MdMoneyOff } from "react-icons/md";

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
    delay: 135 ,
    distance: '65px',
    duration: 1000
  })
}, [])



  return (
     <>
        <main id='main-content'>
            <section id='promotion-section'>
               <div id='background-left'>
                  
               </div>

               <div id='center-background' className='area_info_promotion'>
                  <h3 id='promotional'>Promoções aos domingos</h3>

                  <div className="all-cards">
                     <div className='cards-days'>
                        <FaPeopleGroup size={41}/>
                        <span className='name-days'>Família</span>
                        <p>Domingo a noite é dia da família se reunir, conversar, rir e saborear uma maravilhosa pizza. Mas agora, você não precisa mais ligar para pedir, nós enviaremos todos os domingos para você.</p>
                     </div>


                     <div className='cards-days'>
                        <MdOutlineTimer size={41}/>
                        <span className='name-days'>Horário</span>
                        <p>Sabe aquela sensação de ficar aguardando a pizza chegar e ela nunca chega? Pois é, aqui sua pizza chegará sempre no horário programado por você. Nosso intervalo de espera nunca supera 15 minutos.</p>
                     </div>


                     <div className='cards-days'>
                        <MdMoneyOff size={41}/>
                        <span className='name-days'>Preço</span>
                        <p>Quando o entregador chegar na sua casa, você só recebe, nem precisa pagar. Por um preço justo, você pagará apenas pela frequência que você deseja receber sua pizza.</p>
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