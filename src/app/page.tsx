
import styles from './styles/page.module.css'
import Header from './Header'
import { Section1 } from './Section1'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import Footer from './Footer'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer />
    </main>
  )
}
