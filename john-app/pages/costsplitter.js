import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@/Components/Button'
import EventInfoCard from '@/Components/EventInfoCard'
import Nav from '@/Components/Nav'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { Input } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react'
import { useState } from 'react';


const HomeCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentCont = styled.div
`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RoundedCont = styled.div
`
    width: 400px;
    border: 3px solid #3FC284;
    border-radius: 32px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Header = styled.h1
`
    font-family: Ubuntu, sans-serif;
    font-size: 3rem;
    font-weight: 600;
    width: 400px;
    text-align: left;
`

const SubHeader = styled.h2
`
    font-family: Ubuntu, sans-serif;
    font-size: 2rem;
    font-weight: 400;
`

const Spacer = styled.div
`
    padding: 20px;
`

const ButtonCont = styled.div
`
    width: 100%;
    display: flex;
    justify-content: center;
`

export default function Home() {
    const [values, setValues] = React.useState({
        amount: ''
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
      <HomeCont>
        <Head>
          <title>John</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <ContentCont>
            <Header>Cost Splitter</Header>
            <RoundedCont>
                <TextField id="standard-basic" label="How many people?" variant="standard" color="primary" type="number" />
                <Spacer />
                <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
                <Spacer />
                <ButtonCont>
                    <Button text="Calculate" fontsize="24pt" width="200px" height="50px" />
                </ButtonCont>
                <Spacer />
                <SubHeader>Cost Per Attendee</SubHeader>
                <TextField></TextField>
            </RoundedCont>
            </ContentCont>
      </HomeCont>
    )
  }
