import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@/Components/Button'
import EventInfoCard from '@/Components/EventInfoCard'
import Nav from '@/Components/Nav'
import styled from 'styled-components';


const ExampleCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <ExampleCont>
      <Head>
        <title>John</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Nav />


      <EventInfoCard />
      <EventInfoCard 
        topborder="#3FC284 5px solid" 
        topbgcolor="#fff"
        h1_color = "#387C5C"
        h2top_color="#387C5C"
      />
      <Button />
      <Button text="Create Event"/>

      <Button width="10rem" height="2.5rem" bgcolor="#111F1C" borderradius="3rem" fontsize="1.5rem" text="Login"/>

      
    </ExampleCont>
  )
}
