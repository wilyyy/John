import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const ButtonCont = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgcolor};
    color: #ffffff;
    border-radius: ${props=>props.borderradius};
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35));
    font-size: ${props=>props.fontsize};
`;

const ButtonText = styled.div`
    display: flex;
    color: #ffffff;
    font-family: 'Roboto', sans-serif;
`;

const Button = ({
    width = "20rem",
    height = "5rem",
    text = "Begin",
    borderradius = "1rem",
    bgcolor = "#FF7A00",
    fontsize = "3rem",
    routeTo="/"
}) =>{
    const router = useRouter();
    return <ButtonCont
        width = {width}
        height = {height}
        text = {text}
        borderradius = {borderradius}
        bgcolor = {bgcolor}
        fontsize = {fontsize}
        onClick={()=>router.push(routeTo)}
    >
        <ButtonText>{text}</ButtonText>
    </ButtonCont>
}

export default Button;