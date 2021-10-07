import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const tasks = {
    task1: "Team meeting at 5:00pm",
    task2: "Play Volleyball at 6:00pm",
    task3: "Finish Squid Game at 7:00pm",
    task4: "Sleep Hard"
}

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
    flex-direction: column;
    justify-content: space-evenly;
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
    text-decoration: underline;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: center;
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
        <TaskBotCont>       
            <ul>
                <H3>Current Tasks</H3>
                <li>{tasks.task1}</li>
                <li>{tasks.task2}</li>
                <li>{tasks.task3}</li>
                <li>{tasks.task4}</li>
            </ul>
        </TaskBotCont>
    </TaskCont>
}

export default TaskCard;
