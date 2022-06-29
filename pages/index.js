import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'


export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Hello and welcome to the home page. </p>
      <Link href="/campaigns">
        <a className={styles.btn}>Campaigns</a>
      </Link>
    </div>
  )
}
