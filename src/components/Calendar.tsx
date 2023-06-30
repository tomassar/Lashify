import { type FC, useState } from 'react';
import ReactCalendar from 'react-calendar'
import {add, format} from "date-fns"
import { INTERVAL, SERVICE_CLOSING_TIME, SERVICE_OPENING_TIME } from '~/constants/config';

interface indexProps {}

interface DateType{
    justDate: Date | null
    dateTime: Date | null
}

const CalendarComponent: FC<indexProps> = ({}) => {
    const [date, setDate] = useState<DateType>({
        justDate: null,
        dateTime: null
    })

    const getTimes = () => {
        if (!date.justDate) return
    
        const {justDate} = date
    
        const beginning = add(justDate, {hours: SERVICE_OPENING_TIME})
        const end = add(justDate, {hours: SERVICE_CLOSING_TIME})
        const interval = INTERVAL
    
        const times = []
    
        for (let i = beginning; i < end; i = add(i, {minutes: interval})) {
            times.push(i)
        }
    
        return times
    }

    return <div className="h-[92vh] flex flex-col justify-center items-center">
        {date.justDate ? (
            <div className="flex gap-4">
                {getTimes()?.map((time, index) => (
                    <div key={`time-${index}`} className="rounded-sm bg-gray-100 p-2">
                        <button type="button" onClick={() => setDate((prev) => ({...prev, dateTime: time}))}>
                            {format(time, 'kk:mm')}
                        </button>
                    </div>
                ))}
            </div>
        ) : (
        <ReactCalendar 
            minDate={new Date()} 
            className="REACT-CALENDAR p-2" 
            view="month" 
            onClickDay={(value) => setDate( (prev) => ({...prev, justDate: value}))} 
            locale="es-CL"
        />)}
    </div>;
}

export default CalendarComponent;
