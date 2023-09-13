import Image from 'next/image'
import styles from './page.module.scss'
import { FaClone } from 'react-icons/fa';



export default function Home() {
  return (
    <main className={styles.bodyBackground}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Maeman</h1>
          <h4 className={styles.contentSubTitle}>what's include</h4>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <FaClone className={styles.icon} />
              <h4 className={styles.cardTitle}>100% Vector</h4>
              <p className={styles.cardText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, harum?</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
