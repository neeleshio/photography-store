import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import './styles.scss'

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const DatePicker = (props) => {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={MomentUtils} >
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label={props.label}
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider >
    );
}

export default DatePicker
