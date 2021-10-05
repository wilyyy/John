import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const EventInfoCardCont = styled.div`
    display: flex;
    flex-direction: column;
`;

const EventInfoTop = styled.div`
    width: 14.063rem;
    height: 21.875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(195.27deg, #3FC284 8.37%, #59AB84 86.66%);
`;

const EventInfoBottom = styled.div`
    width: 14.063rem;
    height: 7.813rem;
    display: flex;
    flex-direction: column;
    background-color: #141414;
`;


const EventInfoCard = ({
    toph1 = "29",
    toph3 = "Thursday",
    toph2 = "12:30pm",
    bottomh2 = "Binge Squid Game",
    bottomh3_top = "Location w/ Map",
    bottomh3_bot = "5+ People Involved"
}) => {
    return <EventInfoCardCont>
        <EventInfoTop>

        </EventInfoTop>
        <EventInfoBottom>

        </EventInfoBottom>
    </EventInfoCardCont>
}

export default EventInfoCard;