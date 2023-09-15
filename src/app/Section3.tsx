import Image from 'next/image'
import styles from './styles/Section3.module.css'
import React from 'react'
import Btn from './btn'

export const Section3 = () => {
  return (
    <section>
      <div className={styles.section3}>
        <div className={styles.content3}>
          <Image
            src='/imgStudio.jpg'
            className={styles.imgStudio}
            alt='imgCard'
            width={300}
            height={600}
          >
          </Image>
          <div className={styles.aboutStudio}>
            <div className={styles.aboutStudio2}>
              <h1>
                Sobre o Stúdio
              </h1>
              <p>
                Somos um estúdio especializado em cuidados com as unhas e estamos aqui para oferecer a você uma experiência única e excepcional. Nosso objetivo é proporcionar um ambiente acolhedor, relaxante e luxuoso, onde você possa se sentir mimada e sair com unhas deslumbrantes.
              </p>
            </div>
            <div className={styles.aboutStudio2}>
              <p>
                Nosso estúdio está equipado com instalações modernas e confortáveis, criando um ambiente relaxante e sofisticado. Cada detalhe foi pensado para proporcionar uma experiência agradável, desde a música suave até o atendimento personalizado de nossa equipe.
              </p>
              <Btn />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

