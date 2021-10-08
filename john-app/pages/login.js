import Button from "@/Components/Button";
import styled from 'styled-components';
import Image from 'next/image'
import SocialMediaIcon from "@/Components/SocialMediaIcon";
import { TextField } from "@mui/material";


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
    width: 800px;
    justify-content: flex-start;
    padding-left: 25px;
`;

const LoginHeader = styled.h1`
    font-size: 4rem;
    color: white;
    padding: 25px;
`

const BreakLineCont = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const TheWordOR = styled.h2`
color: #FFFFFF;
`

const LogInFormCont = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
`

export default function Login()
{
    return (
        <LoginContainer>
            <LoginHeaderContainer>
                <LoginHeader>Log In</LoginHeader>
            </LoginHeaderContainer>
            <SocialMediaIcon />
            <BreakLineCont>
                <TheWordOR>OR</TheWordOR>
            </BreakLineCont>
            <LogInFormCont>
                <TextField fullWidth label="Email" id="fullWidth" sx={{color:'primary.main'}}/>
            </LogInFormCont>
        </LoginContainer>
    )
}