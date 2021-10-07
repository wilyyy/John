import React, {useState} from 'react';
import { render } from "react-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const CalendarCont = styled.div`
    width: 1000px;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    background-color: #000;
`;


const JohnCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    }

    return <CalendarCont>
        <Calendar
        onChange={onChange}
        value={date}
        />
    </CalendarCont>
}

export default JohnCalendar