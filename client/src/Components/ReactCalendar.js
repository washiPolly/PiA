import React from 'react';
import { render } from 'react-dom';
import Calendar from 'react-calendar';
import DayPicker from 'react-day-picker';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import 'react-day-picker/lib/style.css';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    }

    return (
        <div className="reactCalendar">
            <DayPicker onChange={onChange} value={date} numberOfMonths={2} todayButton="Go to Today"
                modifiers={{
                    foo: new Date(),
                }}
                onTodayButtonClick={(day, modifiers) => console.log(day, modifiers)} />
            {/* {console.log(date)} */}
            {/* {date.toString()} */}
        </div>
    )
}

export default ReactCalendar
