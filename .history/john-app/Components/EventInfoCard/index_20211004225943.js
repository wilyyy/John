import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const EventInfoCardCont = styled.div`
    display: flex;
`;

const EventInfoTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(195.27deg, #3FC284 8.37%, #59AB84 86.66%);
`;

const EventInfoBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #141414;
`;

const TopH1 = styled.h1`
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`;

const TopH3 = styled.h3`
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`;

const TopH2 = styled.h2`
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`;

const EventInfoCard = ({
    toph1 = "29",
    toph3 = "Thursday",
    toph2 = "12:30pm"
}) => {
    return <EventInfoCardCont>
        <EventInfoTop>
            <TopH1>{toph1}</TopH1>
            <TopH3></TopH3>
        </EventInfoTop>
    </EventInfoCardCont>
}