import Button from "@/Components/Button";
import Head from 'next/head'
import styled from 'styled-components';
import Image from 'next/image'
import SocialMediaIcon from "@/Components/SocialMediaIcon";
import { TextField } from "@mui/material";
import styles from '@/styles/Home.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useRouter} from 'next/router';


const MainCont = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(225deg, #067A53, #3FC284);
    padding: 20px;
    overflow: hidden;
    position: relative;
    z-index: -2;
    `
    
    const SignUpContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #141414;
    height: 100vh;
    width: 40%;
    border-radius: 32px;
`;

const SignUpHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    padding-left: 25px;
`;

const SignUpHeader = styled.h1`
    font-size: 4rem;
    color: white;
    padding: 25px;
`

const BreakLineCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TheWordOR = styled.h2`
    color: #FFFFFF;
    padding-left: 20px;
    padding-right: 20px;
`

const SignUpFormCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 70%;
    height: 16rem;
`
const FatWhiteLine = styled.div`
    display: flex;
    height: 5px;
    width: 13rem;
    background-color: #FFFFFF;
    justify-content: row;
`

const BackButtCont = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    padding-top: 25px;
    padding-left: 25px;
`

const Dorito = styled.img
`
    width: 1600px;
    height: 1300px;
    bottom: -400px;
    right: -200px;
    position: absolute;
    z-index: -1;

`

export default function Login() {
    const router = useRouter();
    return (
        <MainCont>
            <Dorito src="/dorito.png"/>
        <SignUpContainer>
            <BackButtCont>
                <ArrowBackIosIcon className={styles.icon} />
            </BackButtCont>
            <SignUpHeaderContainer>
                <SignUpHeader>Sign Up</SignUpHeader>
            </SignUpHeaderContainer>
            <SocialMediaIcon />
            <BreakLineCont>
            <FatWhiteLine />
                <TheWordOR>OR</TheWordOR>
            <FatWhiteLine />
            </BreakLineCont>
            <SignUpFormCont>
                <TextField fullWidth label="Username" id="fullWidth" variant="filled" className={styles.ImBlacked}/>

                <TextField fullWidth label="Email" id="fullWidth" variant="filled" className={styles.ImBlacked}/>

                <TextField fullWidth label="Password" type="password" id="fullWidth" variant="filled" className={styles.ImBlacked}/>

                <TextField fullWidth label="Confirm Password" type="password" id="fullWidth" variant="filled" className={styles.ImBlacked}/>
            </SignUpFormCont>
            <Button text="Sign Up!" routeTo="/calendar" />
        </SignUpContainer>
        </MainCont>
    )
}