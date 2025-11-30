import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';

let timer: number | null = null;
const debounce = (callee: (...args: any[]) => void, timeoutMs: number) => {


    return (...args: any[]) => {
        if (timer !== null) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            callee(...args);
            timer = null;
        }, timeoutMs);
    };
};

type Props = {
    onChange: (value: string) => void;
};

export const SearchInput = ({ onChange }: Props) => {
    const [value, setValue] = useState('');

    const handleChangeDebounced = debounce((newValue: string) => {
        console.log('Debounced value:', newValue);
        console.log('New value:', newValue);
        onChange(newValue);
    }, 500);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        handleChangeDebounced(newValue);
    };

    useEffect(() => {
        return () => {
            if (timer !== null) {
                clearTimeout(timer);
            }
        };
    });

    return (
        <>
            <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={handleChange}
                value={value}
            />
        </>
    );
};