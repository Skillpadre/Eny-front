import { useState, useCallback, useEffect } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Navbar from '../components/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Roadmap from '../components/sections/Roadmap'
import News from '../components/sections/News'
import Whitepaper from '../components/sections/Whitepaper'
import Footer from '../components/Footer'



export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>ENY Token</title>
        <meta name="description" content="En Y Token - Official web site" />
        <link rel="icon" href="/wheelie1.svg" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Hero />
       <About/>
       <Roadmap />
       <News />
       <Whitepaper />  
      </main>
      <Footer />
    </div>
  )
}
