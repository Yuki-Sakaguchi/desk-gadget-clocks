import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);

  const zeroPadding = (num: number) => ('00' + num ).slice(-2);
  
  const format = (date: Date) => {
    const h = date.getHours();
    const m = date.getMinutes();
    return `${zeroPadding(h)}:${zeroPadding(m)}`;
  };

  const onClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={ "w-full h-screen flex justify-center items-center " + (isDark ? "bg-gray-900" : "bg-white") } onClick={onClick}>
      <Head>
        <title>Desk Clock</title>
        <meta name="description" content="Desktop clock" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <h1 className={styles.title}>
        <span className={ isDark ? "text-white" : "text-gray-900" }>{format(time)}</span>
      </h1>
    </div>
  )
}

export default Home
