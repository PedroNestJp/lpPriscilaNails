import Image from 'next/image'
import styles from './styles/Section1.module.css'
import React from 'react'
import Btn from './Button'

export const Section1 = () => {
    return (
        <section>
            <div className={styles.section1}>
                <h1>Unhas em Gel</h1>
                <div className={styles.content}>
                    <div className={styles.container1}>
                        <Image
                            src='/fourHands.jpg'
                            className={styles.imgSection1}
                            alt='imgUnhas'
                            width={550}
                            height={400}
                        >
                        </Image>
                        {/* <div className={styles.circle}></div> */}
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.subTitle}>
                            <h2 >Aplicação</h2>
                        </div>
                        <p>
                            Se você deseja unhas mais longas, duráveis e com aspecto
                            natural, nossas técnicas de unhas em gel são perfeitas para
                            você. Utilizamos produtos de alta qualidade para aplicar o gel
                            sobre as unhas naturais ou utilizando tips, proporcionando um
                            resultado deslumbrante e personalizado.
                        </p>
                        <Btn/>
                    </div>
                </div>
            </div>
        </section>
    )
}

