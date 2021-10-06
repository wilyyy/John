import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const NavCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
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
    font-weight: bold;
    color: #000;
`;

const NavItem = styled.a`
    font-size: 2rem;
    color: #726767;
`;

const Nav = () => {
    return <NavCont>
        <NavRow>
            <JohnLogo>John</JohnLogo>
            <NavItem>calendar</NavItem>
            <NavItem>cost splitter</NavItem>
            <NavItem>friends</NavItem>
        </NavRow>
    </NavCont>
}

export default Nav;