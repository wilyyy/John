import Head from 'next/head'
import Nav from '@/Components/Nav'
import styled from 'styled-components';
import TaskCard from '@/Components/TaskCard';
import JohnCalendar from '@/Components/Calendar';

const CalendarCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const CalendarPageCont = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Ubuntu', sans-serif;
    width: 75rem;
    height: 40rem; 
`;

const CalendarPageRow = styled.div`
    display: flex;
    width: 100rem;
    height: 35rem;
    justify-contet: space-between;
`;

export default function Calendar(){
    return (
        <CalendarCont>
            <Nav />
            <CalendarPageCont>
                <h1>Today</h1>
                <CalendarPageRow>
                    <TaskCard />
                    <JohnCalendar />
                </CalendarPageRow>
            </CalendarPageCont>
        </CalendarCont>
    )
}
