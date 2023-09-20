import React from 'react'
import Styles from './styles/Section6.module.css'
import Image from 'next/image'
import { FaInstagram, FaGoogle } from 'react-icons/fa'

export default function Section6() {
    return (
        <section>
            <div className={Styles.container}>
                <div className="content">
                    <h2> Endereço </h2>
                    <p> R. Epitácio Pessoa, 156 - Planalto Nossa Sra.
                        da Conceição, Conde - PB,
                        58322-000
                    </p>
                    <h2>SIGA-NOS</h2>
                    <FaInstagram />
                    <FaGoogle />
                </div>
                <Image
                    src='/twoHandsCircle.jpg'
                    alt='twoHandsCircleImg'
                    width={400}
                    height={500} />


            </div>
        </section>
    )
}
