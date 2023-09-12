import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'

export const Section3 = () => {
    return (
        <section>
        <div className={styles.section3}>
          <div className={styles.content3}>
            <Image
              src='/fourHands.jpg'
              className={styles.imgCard}
              alt='imgCard'
              width={300}
              height={600}
            >
            </Image>
            <div className="aboutSudio">
              <h1>
                Sobre o Stúdio
              </h1>
              <p>
                Somos um estúdio especializado em cuidados com as unhas e estamos aqui para oferecer a você uma experiência única e excepcional. Nosso objetivo é proporcionar um ambiente acolhedor, relaxante e luxuoso, onde você possa se sentir mimada e sair com unhas deslumbrantes.
              </p>
            </div>
            <div className="aboutSudio2">
              <p>
                Nosso estúdio está equipado com instalações modernas e confortáveis, criando um ambiente relaxante e sofisticado. Cada detalhe foi pensado para proporcionar uma experiência agradável, desde a música suave até o atendimento personalizado de nossa equipe.
              </p>
              <a href="http://">
                <button className={styles.btn}>
                  ENTRE EM CONTTATO
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

