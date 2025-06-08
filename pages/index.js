
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
        <Image src="/assets/hero.jpg" alt="Hero Image" width={1000} height={600} />
        <h1>Fresh Since 1977</h1>
      </section>

      <section className={styles.section}>
        <h2>Signature Juices</h2>
        <div className={styles.grid}>
          <Image src="/assets/juice1.jpg" alt="Juice 1" width={300} height={400} />
          <Image src="/assets/juice2.jpg" alt="Juice 2" width={300} height={400} />
        </div>
      </section>

      <section className={styles.section} id="offers">
        <h2>Special Offers</h2>
        <Image src="/assets/offer.jpg" alt="Special Offer" width={700} height={400} />
      </section>

      <section className={styles.section}>
        <h2>Brand Highlight</h2>
        <Image src="/assets/highlight.jpg" alt="Highlight" width={700} height={400} />
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 Dhahia Juice KSA — Freshness Bottled Daily.</p>
      </footer>
    </div>
  );
}
