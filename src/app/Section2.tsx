import Image from 'next/image'
import styles from './styles/Section2.module.css'
import React from 'react'

export const Section2 = () => {
    return (
        <section>
        <div className={styles.section2}>
          <h1 > Nossos Serviços </h1>
          <div className={styles.line}></div>
          <p>
            Oferecemos serviços especializados para cuidar das suas unhas e realçar sua beleza.
            Com alto padrão, estamos prontas para proporcionar uma experiência excepcional e garantir resultados incríveis. Confira abaixo os serviços que oferecemos:
          </p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image
                src='/twoHands.jpg'
                className={styles.imgCard}
                alt='imgCard'
                width={700}
                height={700}
              >
              </Image>
              <p>
                ALONGAMENTO EM GEL SOBRE A TIP
              </p>
            </div>
            <div className={styles.card}>
              <Image
                src='/femaleFeet.jpg'
                className={styles.imgCard}
                alt='imgCard'
                width={700}
                height={700}
              >
              </Image>
              <p>
              MANUTENÇÃO
              </p>
            </div>
            <div className={styles.card}>
              <Image
                src='/twoHandsFlower.jpg'
                className={styles.imgCard}
                alt='imgCard'
                width={700}
                height={700}
              >
              </Image>
              <p>
              PEDICURE
              </p>
            </div>
            <div className={styles.card}>
              <Image
                src='/fourHands.jpg'
                className={styles.imgCard}
                alt='imgCard'
                width={700}
                height={700}
              >
              </Image>
              <p>
              MANICURE
              </p>
            </div>
          </div>

        </div>
      </section>
    )
}

