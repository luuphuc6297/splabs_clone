import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { InputField, SubmitButton } from 'components';
import { useForm } from 'react-hook-form';
import { ContactSchema } from './validate';
import { styled } from '@mui/system';
const StyledForm = styled('form')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    gap: 16,
    justifyContent: 'center',
}));
export const StartGrowingForm = () => {
    const initialValues = {};
    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = useForm({
        mode: 'onChange',
        defaultValues: initialValues,
        resolver: yupResolver(ContactSchema),
    });

    const handleFormSubmit = async (formValues) => {
        console.log(formValues);
    };

    return (
        <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
            <Box sx={{ width: '100%' }}>
                <InputField
                    id="email-address"
                    name="email"
                    control={control}
                    label="Email address"
                />
                <InputField
                    id="description_project"
                    name="description_project"
                    control={control}
                    label="Description Project"
                />
            </Box>
            <Box sx={{ width: '100%' }}>
                <InputField
                    id="company_name"
                    name="company_name"
                    control={control}
                    label="Company Name"
                />
                <SubmitButton
                    disabled={!isValid || isSubmitting}
                    loading={isSubmitting}
                >
                    &nbsp;SUBMIT
                </SubmitButton>
            </Box>
        </StyledForm>
    );
};
