import React from 'react'
import '../styles/pizzacarrossel.css'

const PizzaCarrossel = () => {
    return(
        <>
            <section id='pizzacarrossel'>

                <div className='introduction-text'>
                    <div className="intro-text-info">
                        <h3>Confira Nossas Pizzas</h3>
                    </div>

                    <div className='intro-text-p'>
                        <p>Confira como são nossas pizzas, antes de pedir o que você vai amar!!! </p>
                    </div>

                    

                    <div className="carrossel-pizza">
                        <div className="area-products">
                            <div id='pizza-calabresa' className="carrossel-pizzas-cards">d</div>

                            <div id='pizza-peperoni' className="carrossel-pizzas-cards">d</div>

                            <div id='pizza-doce' className="carrossel-pizzas-cards">d</div>

                            <div id='pizza-queijo-bolonhesa' className="carrossel-pizzas-cards"></div>

                            <div id='drink-strawberry' className="carrossel-pizzas-cards"></div>

                            <div id='drink-orange' className="carrossel-pizzas-cards"></div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default PizzaCarrossel
