import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Hello</h1>
      <p>lorem </p>
      <Link href="/campaigns">
        <a>Campaigns</a>
      </Link>
      <Footer />
    </div>
  )
}
