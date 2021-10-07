import Head from 'next/head'
import Nav from '@/Components/Nav'
import styled from 'styled-components';

const CalendarCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
`;

const CalendarPageCont = styled.div`
    display: flex;
    flex-direction: column
`;

export default function Calendar(){
    return (
        <CalendarCont>
            <Nav />
        </CalendarCont>
    )
}
