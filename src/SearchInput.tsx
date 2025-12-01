import { TextField } from '@mui/material';
import { useCallback } from 'react';

let queryDebounce: number;

type TSearchInputProps = {
    onChange: (value: string) => void;
};

export const SearchInput = ({ onChange }: TSearchInputProps) => {
    const handleChange = useCallback((event: any) => {
        const newValue = event.target.value;
        clearInterval(queryDebounce);
        queryDebounce = setTimeout(() => {
            onChange(newValue);
        }, 500);
    }, [onChange]);

    return (
        <>
            <TextField
                id="outlined-basic"
                variant="outlined"
                onKeyUp={handleChange}
            />
        </>
    );
};