import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'

export const Section2 = () => {
    return (
        <section>
        <div className={styles.section2}>
          <h1 className={styles.title2}> Nossos Serviços </h1>
          <p>
            Oferecemos serviços especializados para cuidar das suas unhas e realçar sua beleza.
            Com alto padrão, estamos prontas para proporcionar uma experiência excepcional e garantir resultados incríveis. Confira abaixo os serviços que oferecemos:
          </p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image
                src='/fourHands.jpg'
                className={styles.imgCard}
                alt='imgCard'
                width={50}
                height={50}
              >
              </Image>
              <p>
                ALONGAMENTO EM GEL SOBRE A TIP
              </p>
            </div>
            <div className={styles.card}>
              <Image
                src='/fourHands.jpg'
                className={styles.imgCard}
                alt='imgCard'
                width={50}
                height={50}
              >
              </Image>
              <p>
                ALONGAMENTO EM GEL SOBRE A TIP
              </p>
            </div>
            <div className={styles.card}>
              <Image
                src='/fourHands.jpg'
                className={styles.imgCard}
                alt='imgCard'
                width={50}
                height={50}
              >
              </Image>
              <p>
                ALONGAMENTO EM GEL SOBRE A TIP
              </p>
            </div>
            <div className={styles.card}>
              <Image
                src='/fourHands.jpg'
                className={styles.imgCard}
                alt='imgCard'
                width={50}
                height={50}
              >
              </Image>
              <p>
                ALONGAMENTO EM GEL SOBRE A TIP
              </p>
            </div>
          </div>

        </div>
      </section>
    )
}

