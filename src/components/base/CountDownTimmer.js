import { styled } from '@mui/material';
import { useEffect, useState } from 'react';
const StyledTimerDiv = styled('div')(({ theme }) => ({
    color: 'red',
}));

export default function Timer(props) {
    const [time, setTime] = useState();
    useEffect(() => {
        let duration = props.duration;
        let endTime = new Date();
        endTime.setMinutes(endTime.getMinutes() + duration);
        let min = duration;
        let sec = 0;

        let interval = setInterval(() => {
            sec--;
            if (sec === -1) {
                sec = 59;
                min--;
            }
            let newValue = (
                <>
                    <span className="minutes">{formatNumber(min)}</span>
                    <span className="divider">:</span>
                    <span className="seconds">{formatNumber(sec)}</span>
                </>
            );
            if (min === 0 && sec === 0) {
                props.callback();
                clearInterval(interval);
            }
            setTime(newValue);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    let formatNumber = (num) => {
        return num.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
        });
    };
    return <StyledTimerDiv>{time}</StyledTimerDiv>;
}
