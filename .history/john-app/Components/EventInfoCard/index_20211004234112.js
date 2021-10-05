import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const EventInfoCardCont = styled.div`
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const EventInfoTop = styled.div`
    width: 15rem;
    height: 21rem;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(195.27deg, #3FC284 8.37%, #59AB84 86.66%);
`;

const EventInfoBottom = styled.div`
    width: 15rem;
    height: 7rem;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    background-color: #141414;
`;

const H1 = styled.h1`
    color: #fff;
    font-family: 'Roboto', sans-serif;
`;

const H2 = styled.h2`
    color: ${props=>props.h1color};
    font-family: ${props=>props.h2font};
`;

const EventInfoCard = ({
    h1_text = "29",
    toph2 = ""
}) => {
    return <EventInfoCardCont>
        <EventInfoTop>
            <H1>{h1_text}</H1>
            <H2></H2>
        </EventInfoTop>
        <EventInfoBottom>

        </EventInfoBottom>
    </EventInfoCardCont>
}

export default EventInfoCard;