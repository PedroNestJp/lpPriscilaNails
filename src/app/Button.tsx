import React from 'react'
import styles from './styles/Button.module.css'

export default function Btn() {
    return (
        <a href="http://">
            <button className={styles.btn}>
                ENTRE EM CONTATO
            </button>
        </a>
    )
}
