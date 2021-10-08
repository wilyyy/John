import Button from "@/Components/Button";
import styled from 'styled-components';
import Image from 'next/image'
import SocialMediaIcon from "@/Components/SocialMediaIcon";
import { TextField } from "@mui/material";
import styles from '@/styles/Home.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const LoginContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #141414;
    height: 100vh;
    width: 40%;
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
    padding: 5px;
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

export default function Login()
{
    return (
        <LoginContainer>
            <BackButtCont>
                <ArrowBackIosIcon className={styles.icon} />
            </BackButtCont>
            <LoginHeaderContainer>
                <LoginHeader>Sign Up</LoginHeader>
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
                <TextField fullWidth label="Username" id="fullWidth" variant="filled" className={styles.ImBlacked}/>
                <Spacer />
                <TextField fullWidth label="Email" id="fullWidth" variant="filled" className={styles.ImBlacked}/>
                <Spacer />
                <TextField fullWidth label="Password" type="password" id="fullWidth" variant="filled" className={styles.ImBlacked}/>
                <Spacer />
                <TextField fullWidth label="Confirm Password" type="password" id="fullWidth" variant="filled" className={styles.ImBlacked}/>
            </LogInFormCont>
                <Spacer />
                <Spacer />
                <Spacer />
            <Button text="Continue"/>
        </LoginContainer>
    )
}