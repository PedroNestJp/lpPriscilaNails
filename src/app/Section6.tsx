import React from 'react'
import Styles from './styles/Section6.module.css'
import Image from 'next/image'
import { FaInstagram, FaGoogle } from 'react-icons/fa'

export default function Section6() {
    return (
        <section>
            <div className={Styles.container}>
                <div className={Styles.content}>
                    <div className={Styles.content1}>
                        <h2> Endereço </h2>
                        <p> R. Epitácio Pessoa, 156 - Planalto Nossa Sra.
                            da Conceição, Conde - PB,
                            58322-000
                        </p>
                    </div>
                    <div className={Styles.content2}>
                        <h2>SIGA-NOS</h2>
                        <div className={Styles.social}>
                            <a href="">
                                <FaInstagram />
                            </a>
                            <a href="">
                                <FaGoogle />
                            </a>
                        </div>
                        <p>©2023 Privacy policy</p>
                    </div>
                </div>
                <Image
                    src='/twoHandsCircle.jpg'
                    alt='twoHandsCircleImg'
                    className={Styles.imgSection6}
                    width={400}
                    height={500} />


            </div>
        </section>
    )
}
