import React, {useState} from 'react';
import { render } from "react-dom";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'antd';

const JohnCalendar = () => {
    // const [date, setDate] = useState(new Date());

    // const onChange = (date) => {
    //     setDate(date);
    // }
    return <div>
        <Calendar
        onChange={onChange}
        value={date}
        />
    </div>
}

export default JohnCalendar