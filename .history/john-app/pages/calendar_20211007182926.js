import Head from 'next/head'
import Nav from '@/Components/Nav'
import {useRouter} from 'next/router';
import styled from 'styled-components';
import TaskCard from '@/Components/TaskCard';
import JohnCalendar from '@/Components/Calendar';
import Button from '@/Components/Button';

const CalendarCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
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
    width: 75rem;
    height: 35rem;
    justify-content: space-between;
    align-items: center;
`;

const Divider = styled.div`
    border-left: 2px black solid;
    height: 40rem;
    width: 2px;
    height: 35rem;
`;

const CalendarWithHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 40rem;

`;

export default function Calendar(){
    const router = useRouter();
    return (
        <CalendarCont>
            <Nav />
            <CalendarPageCont>
                <h1>Today</h1>
                <CalendarPageRow>
                    <TaskCard />
                    <Divider />
                    <CalendarWithHeader>
                        <h1>Calendar</h1>
                        <JohnCalendar />
                        <Button text="Create Event"/>
                    </CalendarWithHeader>
                </CalendarPageRow>
            </CalendarPageCont>
        </CalendarCont>
    )
}
