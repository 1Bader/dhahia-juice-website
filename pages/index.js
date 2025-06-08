
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dhahia Juice KSA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <header className={styles.header}>
        <button onClick={() => window.location.href='https://amrk-cloud.vercel.app/?brnid=5DPT0Z1ahax00bcGOm1p'}>Order Now</button>
        <button onClick={() => document.getElementById('offers').scrollIntoView({ behavior: 'smooth' })}>Special Offers</button>
        <button onClick={() => document.getElementById('branches').scrollIntoView({ behavior: 'smooth' })}>Find a Branch</button>
      </header>

      <section className={styles.hero}>
        <Image src="/logo.png" alt="Dhahia Juice Logo" width={300} height={120} />
        <h1>Fresh Since 1977</h1>
      </section>

      <section className={styles.section}>
        <h2>Our Legacy</h2>
        <p>From the streets of Kuwait to the hearts of 15 neighborhoods in KSA — 47 years of juice mastery and pure fruit freshness.</p>
      </section>

      <section className={styles.section}>
        <h2>Signature Juices</h2>
        <div className={styles.grid}>
          <Image src="/juices/juice1.jpg" alt="Juice 1" width={300} height={400} />
          <Image src="/juices/juice2.jpg" alt="Juice 2" width={300} height={400} />
        </div>
      </section>

      <section className={styles.section} id="offers">
        <h2>Special Offers</h2>
        <p>Limited-time blends and seasonal savings — check back often for what’s fresh!</p>
      </section>

      <section className={styles.section} id="branches">
        <h2>Our Branches</h2>
        <div className={styles.branchGrid}>
          <div className={styles.branchCard}>
            <Image src="/branches/branch1.jpg" alt="Al Malqa Branch" width={400} height={250} />
            <h3>Al Malqa</h3>
            <p><a href="https://maps.google.com">Google Maps</a></p>
            <p>📞 +966 55 123 4567</p>
            <button onClick={() => window.location.href='https://amrk-cloud.vercel.app/?brnid=Malqa123'}>Order from this Branch</button>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 Dhahia Juice KSA — Freshness Bottled Daily.</p>
      </footer>
    </div>
  );
}
