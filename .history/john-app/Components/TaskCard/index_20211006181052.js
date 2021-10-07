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
    flex-direction: column;
    justify-content: center;
    align-items: centerl
`;

const Li = styled.li`
    font-size: 1.25rem;
`;

const Divider = styled.div`
    border-bottom: 2px #000 solid;
    width: 15rem;
    height: 2px;
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
            <H3>Current Tasks</H3>    
            <Ul>
                <Li>{tasks.task1}</Li>
                <Li>{tasks.task2}</Li>
                <Li>{tasks.task3}</Li>
                <Li>{tasks.task4}</Li>
            </Ul>
            <Divider />
        </TaskBotCont>
    </TaskCont>
}

export default TaskCard;
