
import styles from './page.module.css'
import Header from './Header'
import { Section1 } from './Section1'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import Footer from './Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      {/* <Section1 />
      <Section2 />
      <Section3 />
      <Footer /> */}
    </main>
  )
}
