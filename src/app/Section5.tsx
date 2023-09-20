import React from 'react'
import Image from 'next/image'
import Styles from './styles/Section5.module.css'

export default function Section5() {
  return (
    <section>
      <div className={Styles.container}>
        <Image className={Styles.imgQuemSou} src="/quemSou.png" alt="Priscila Pontes" width={762} height={500} ></Image>
        <div>
          <p>
            Sou Priscila Pontes, especialista em unhas em gel.
            Com mais de 10 anos de experiência na área de cuidados com as
            unhas, tenho me dedicado ao aprimoramento constante das minhas habilidades.
            Desde 2019, tenho me especializado no trabalho com unhas em gel,
            trazendo beleza e durabilidade para as mãos das minhas clientes.

            Ao longo da minha jornada profissional, concluí 4 cursos presenciais e 3 cursos online,
            buscando sempre me atualizar com as melhores técnicas e tendências do mercado. Entre esses cursos,
            destaco o renomado Curso <q>Instrutor de Sucesso</q> ministrado por <abbr title="Nails Designer Instrutora">Katiane Brito</abbr>, que me permitiu
            expandir meus conhecimentos e aprimorar minhas habilidades como profissional

            Meu compromisso é proporcionar um atendimento personalizado onde cada cliente se sinta valorizada e confiante com suas unhas.
            Utilizo produtos de alta qualidade e técnicas para garantir resultados excepcionais e duradouros. Seja bem-vindo(a) ao meu mundo de unhas!
            <em>Priscila Pontes</em>
          </p>
        </div>
      </div>
    </section>
  )
}
