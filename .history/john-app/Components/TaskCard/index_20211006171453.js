import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';


const TaskCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 35rem;
    
`;

const TaskTopCont = styled.div`
    border-radius: 1rem 1rem 0 0;
    border: 2px solid #000;
    width: 20rem;
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(195.27deg, #3FC284 8.37%, #59AB84 86.66%);
`;

const TaskBotCont = styled.div`
    border-radius: 0 0 1rem 1rem;
    border: 2px solid #000;
    width: 20rem;
    height: 26rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const H1 = styled.h1`
    color: #fff;
`;

const H2 = styled.h2`
    color: #fff;
`;

const H3 = styled.h3`
    color: #000;
`;


const TaskCard = ({
    day_number = "29",
    day = "Thursday"
}) => {
    return <TaskCont>
        <TaskTopCont>
            <H1>{day_number}</H1>
            <H2>{day}</H2>
        </TaskTopCont>
        <TaskBotCont></TaskBotCont>
    </TaskCont>
}

export default TaskCard;
