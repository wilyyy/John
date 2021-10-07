import React, {useState} from 'react';
import { render } from "react-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarCont = style.div`
    width: 800px;
    height: 400px;
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