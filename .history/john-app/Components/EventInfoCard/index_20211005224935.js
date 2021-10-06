import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const EventInfoCardCont = styled.div`
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    max-width: 20rem;
    max-height: 35rem;
    justify-content: space-evenly;
`;

const EventInfoTop = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 20rem;
    height: 26rem;
    border-radius: 1rem 1rem 0 0;
    border: ${props=>props.topborder};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props=>props.topbgcolor};
`;

const EventInfoBottom = styled.div`
    width: 20rem;
    height: 13rem;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-wrap;
    background-color: #141414;
    color: #fff;
    padding: 0.5rem;
`;

const H1 = styled.h1`
    color: ${props=>props.h1color};
    font-family: ${props=>props.h1font};
    font-weight: ${props=>props.h1fontweight};
`;

const H2 = styled.h2`
    color: ${props=>props.h2color};
    font-family: ${props=>props.h2font};
`;


const EventInfoCard = ({
    topborder = "none", /* prop we change */
    topbgcolor = "linear-gradient(195.27deg, #3FC284 8.37%, #59AB84 86.66%)", /* prop we change */
    h1_color = "#fff",
    h1_day = "29", /* prop we change */
    h1_ubuntu = "'Ubuntu', sans-serif",
    toph2_day = "Thursday", /* prop we change */
    h2top_color = "#fff",
    h1_time = "12:30pm", /* prop we change */
    h1_light = "300",
    h2_eventname = "Binge Squid Game", /* prop we change */
    h2_eventcolor = "#FF7A00",
    location = "Building of Density", /* prop we change */
    number_of_people = "5+ People Involved" /* prop we change */
}) => {
    return <EventInfoCardCont>
        <EventInfoTop topbgcolor={topbgcolor} topborder={topborder}>
            <H1 h1color={h1_color}>{h1_day}</H1>
            <H2 h2color={h2top_color}>
                {toph2_day}
            </H2>
            <H1 
            h1font={h1_ubuntu} 
            h1fontweight={h1_light}
            h1color={h1_color}
            >
                {h1_time}
            </H1>
        </EventInfoTop>
        <EventInfoBottom>
            <H2 h2color={h2_eventcolor}>{h2_eventname}</H2>
            <Cont>
                <p>{location}</p>
                <p>{number_of_people}</p>
            </Cont>
        </EventInfoBottom>
    </EventInfoCardCont>
}

export default EventInfoCard;