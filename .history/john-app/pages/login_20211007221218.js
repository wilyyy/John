import Button from "@/Components/Button";
import styled from 'styled-components';
import Image from 'next/image'
import SocialMediaIcon from "@/Components/SocialMediaIcon";
import { TextField } from "@mui/material";
import styles from '@/styles/Home.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useRouter} from 'next/router';
import BackButton from "@/Components/BackButton";

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

const LoginContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #141414;
    height: 90%;
    width: 40%;
    border-radius: 32px;
`;

const LoginHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    padding-left: 25px;
`;

const LoginHeader = styled.h1`
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

const LogInFormCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
`

const Spacer = styled.div`
    padding: 10px;
`

const FatWhiteLine = styled.div`
display: flex;
height: 5px;
width: 13rem;
background-color: #FFFFFF;
justify-content: row;
`

const ForgotPass = styled.h4`
color: blue;
`;

const Dorito = styled.img
`
    width: 1600px;
    height: 1300px;
    bottom: -400px;
    right: -200px;
    position: absolute;
    z-index: -1;

`

export default function Login()
{
    const router = useRouter();
    return (
        <MainCont>
            <Dorito src="/dorito.png"/>
        <LoginContainer>
            <BackButton />
            <LoginHeaderContainer>
                <LoginHeader>Log In</LoginHeader>
            </LoginHeaderContainer>
            <SocialMediaIcon />
            <Spacer/>
            <Spacer/>
            <BreakLineCont>
            <FatWhiteLine />
                <TheWordOR>OR</TheWordOR>
            <FatWhiteLine />
            </BreakLineCont>
            <Spacer />
            <Spacer />
            <LogInFormCont>
                <TextField fullWidth label="Email" id="fullWidth" variant="filled" className={styles.ImBlacked}/>
                <Spacer />
                <TextField fullWidth label="Password" type="password" id="fullWidth" variant="filled" className={styles.ImBlacked}/>
            </LogInFormCont>
            <ForgotPass>Forgot Password?</ForgotPass>
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Button text="Continue"/>
        </LoginContainer>
        </MainCont>
    )
}