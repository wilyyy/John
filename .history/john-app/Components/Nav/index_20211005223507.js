import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const NavCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 6rem;
    font-family: 'Lora', serif;
    background: linear-gradient(180deg, #E8F5E6 90.62%, rgba(208, 227, 205, 0) 100%);
    border-bottom: #726767 1px solid;
`;

const NavRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`;

const NavLinkRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 600px;
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

const Divider = styled.div`
    border-left: 2px #726767 solid;
    height: 3rem;
`;

const Nav = () => {
    return <NavCont>
        <NavRow>
            <JohnLogo>John</JohnLogo>
            <NavLinkRow>
                <NavItem>calendar</NavItem>
                <Divider />
                <NavItem>cost splitter</NavItem>
                <Divider />
                <NavItem>friends</NavItem>
            </NavLinkRow>
        </NavRow>
    </NavCont>
}

export default Nav;