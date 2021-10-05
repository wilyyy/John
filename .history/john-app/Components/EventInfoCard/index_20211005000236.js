import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const EventInfoCardCont = styled.div`
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const EventInfoTop = styled.div`
    font-family: 'Roboto', sans-serif;
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
    color: #fff;
`;

const H1 = styled.h1`
    color: #fff;
    font-family: ${props=>props.h1font};
    font-weight: ${props=>props.h1fontweight};
`;

const H2 = styled.h2`
    color: ${props=>props.h2color};
    font-family: ${props=>props.h2font};
`;

const EventInfoCard = ({
    h1_day = "29",
    h1_ubuntu = "'Ubuntu', sans-serif",
    toph2_day = "Thursday",
    h2top_color = "#fff",
    h1_time = "12:30pm",
    h1_light = "300"
}) => {
    return <EventInfoCardCont>
        <EventInfoTop>
            <H1>{h1_day}</H1>
            <H2 h2color={h2top_color}>
                {toph2_day}
            </H2>
            <H1 h1font={h1_ubuntu} h1fontweight={h1_light}>
                {h1_time}
            </H1>
        </EventInfoTop>
        <EventInfoBottom>
            <H1></H1>
        </EventInfoBottom>
    </EventInfoCardCont>
}

export default EventInfoCard;