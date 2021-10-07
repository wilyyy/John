import * as React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const Calendar = () => {
    return <LocalizationProvider dateAdapter={AdapterDateFns}>
    <StaticDatePicker
      orientation="landscape"
      openTo="day"
      value={value}
      shouldDisableDate={isWeekend}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
  </LocalizationProvider>
}

const [value, setValue] = React.useState(new Date());
