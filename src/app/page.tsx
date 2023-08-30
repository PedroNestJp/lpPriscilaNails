import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div className={styles.nav}>
          <Image
            src='/logo.png'
            className={styles.logo}
            alt='logo'
            width={250}
            height={200}
          />
          <div className={styles.navLinks}>
            <span className={styles.navLink}>
              <a href="#services">Serviços</a>
            </span>
            <span className={styles.navLink}>
              <a href="#aboutStudio">O Studio</a>
            </span>
            <span className={styles.navLink}>
              <a href="#contact">Contato</a>
            </span>
            <span className={styles.navLink}>
              <a href="#trajectory">Trajetória</a>
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <Image
            src='/imgHeader.png'
            className={styles.imgHeader}
            alt='Priscila Pontes'
            width={775}
            height={775}

          />
          <div className={styles.aboutMe}>
            <h1 className={styles.contentTitle}>PRISCILA PONTES</h1>
            <p>Olá! Sou Priscila Pontes, apaixonada por unhas e trabalho nessa área desde 2019. Meu objetivo é oferecer serviços de qualidade e cuidado personalizado para cada cliente. Busco aprimorar minhas habilidades constantemente, e já concluí 4 cursos presenciais e 3 online, incluindo o renomado curso &quot;Instrutor de Sucesso &quot; ministrado por Katiane Brito. Estou sempre em busca de novas técnicas e tendências para garantir que minhas clientes tenham uma experiência única e resultados deslumbrantes. Conte comigo para cuidar das suas unhas e realçar sua beleza. Estou ansiosa para recebê-lo(a) em meu espaço e proporcionar um serviço excepcional!</p>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.section1}>
          <h1 className={styles.title2}>Unhas em Gel</h1>
          <div className={styles.section1Content}>
            <Image
              src='/fourHands.jpg'
              className={styles.imgSection1}
              alt='imgUnhas'
              width={550}
              height={400}
            >
            </Image>
            <div className={styles.circle}></div>
            <div className={styles.subTitle}>
            <h2 className={styles.subTitleText}>Aplicação de unha em gel</h2>
            </div>
            <p className={styles.section1P}>
            Se você deseja unhas mais longas, duráveis e com aspecto natural, nossas técnicas de unhas em gel são perfeitas para você. Utilizamos produtos de alta qualidade para aplicar o gel sobre as unhas naturais ou utilizando tips, proporcionando um resultado deslumbrante e personalizado.
            </p>
            <a href="http://">
              <button className={styles.btn}>
                ENTRE EM CONTTATO
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
