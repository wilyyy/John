import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@/Components/Button'
import EventInfoCard from '@/Components/EventInfoCard'


const ExampleCont = styled.div``;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <EventInfoCard />
      {/* <Button />
      <Button text="Create Event"/>

      <Button width="10rem" height="2.5rem" bgcolor="#111F1C" borderradius="3rem" fontsize="1.5rem" text="Login"/> */}

      
    </div>
  )
}
