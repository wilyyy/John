// import * as React from 'react';
// import isWeekend from 'date-fns/isWeekend';
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import StaticDatePicker from '@mui/lab/StaticDatePicker';

// const Calendar = () => {
//     const [value, setValue] = React.useState(new Date());

//     return <LocalizationProvider dateAdapter={AdapterDateFns}>
//     <StaticDatePicker
//       orientation="landscape"
//       openTo="day"
//       value={value}
//       shouldDisableDate={isWeekend}
//       onChange={(newValue) => {
//         setValue(newValue);
//       }}
//       renderInput={(params) => <TextField {...params} />}
//     />
//   </LocalizationProvider>
// }

// export default Calendar;

import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
    return <FullCalendar
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth"
    />
}
