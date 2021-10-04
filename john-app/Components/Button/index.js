import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const ButtonCont = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: #FF7A00;
    color: #ffffff;
    border-radius: 1rem;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.35))
`;

const ButtonText = styled.div`
    display: flex;
    color: #ffffff;
    font-size: 3rem;
`;

const Button = ({
    width = "20rem",
    height = "5rem",
    text = "Begin"
}) =>{
    return <ButtonCont
        width = {width}
        height = {height}
        text = {text}
    >
        <ButtonText>{text}</ButtonText>
    </ButtonCont>
}

export default Button;