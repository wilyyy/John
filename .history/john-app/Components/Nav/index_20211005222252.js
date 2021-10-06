import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const NavCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 5rem;
    font-family: 'Lora', serif;
    background: linear-gradient(180deg, #E8F5E6 90.62%, rgba(208, 227, 205, 0) 100%);
    border-bottom: #726767 1px solid;
`;

const NavRow = styled.div`
    display: flex;
`;

const JohnLogo = styled.a`
    font-size: 3rem;
    color: #000;
`;

const Nav = () => {
    return <NavCont>
        <JohnLogo>John</JohnLogo>
    </NavCont>
}

export default Nav;