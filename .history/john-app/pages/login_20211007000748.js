import Button from "@/Components/Button";
import styled from 'styled-components';
import Image from 'next/image'
import SocialMediaIcon from "@/Components/SocialMediaIcon";

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
`

export default function Login()
{
    return (
        <LoginContainer>
            <LoginHeaderContainer>
                <LoginHeader>Log In</LoginHeader>
            </LoginHeaderContainer>
            <SocialMediaIcon />
        </LoginContainer>
    )
}