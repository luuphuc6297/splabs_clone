import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Error } from 'components';
import theme from 'configs/theme';
import { useController } from 'react-hook-form';

const CustomInput = styled(TextField)(({ theme }) => ({
    marginTop: 0,
    borderRadius: 16,
    backgroundColor: 'white',
    border: 0,
    outline: 0,
    '& .MuiOutlinedInput-root:hover': {
        '& > fieldset': {
            // borderColor: `${theme.palette.primary}`,
        },
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
        '& > fieldset': {
            // borderColor: `${theme.palette.primary}`,
        },
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: 24,
        // borderColor: `${theme.palette.primary}`,
    },
}));

export function InputField({
    name,
    control,
    apiError,
    InputProps,
    passwordCriteria,
    onKeyUp,
    ...props
}) {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <>
            <CustomInput
                fullWidth
                size="small"
                margin="normal"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onKeyUp={onKeyUp}
                variant="outlined"
                inputRef={ref}
                error={invalid}
                helperText={false}
                InputProps={InputProps}
                sx={{
                    '& .MuiOutlinedInput-root:hover': {
                        '& > fieldset': {
                            borderColor: `${theme.palette.primary}`,
                        },
                    },
                    '& .MuiOutlinedInput-root.Mui-focused': {
                        '& > fieldset': {
                            borderColor: `${theme.palette.primary}`,
                        },
                    },
                    '& .MuiOutlinedInput-root': {
                        borderColor: `${theme.palette.primary}`,
                    },
                }}
                {...props}
            />
            <Error error={true}>{error?.message}</Error>
        </>
    );
}
