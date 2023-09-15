import React from 'react'
import Styles from './styles/Section4.module.css'
import Btn from './Btn'

export default function Section4() {
    return (
        <section>
            <div className="content">
                <div className="container1">
                    <h1> DO QUE VOCÊ PRECISA? </h1>
                </div>
                <div className="container2">
                    <ul>
                        <li>Alongamento</li>
                        <li>Manutenção</li>
                        <li>Pedicure</li>
                        <li>Manicure</li>
                    </ul>
                </div>
                <div className="container3">
                    <p>
                        .O que você precisa para ter unhas perfeitas está aqui.
                        Estamos prontos para lhe proporcionar uma experiência de
                        cuidado excepcional. Entre em contato conosco e agende seu
                        horário hoje mesmo!
                    </p>
                    <Btn/>
                </div>
            </div>
        </section>
    )
}
