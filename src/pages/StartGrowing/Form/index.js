import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { InputField, SubmitButton } from 'components';
import Timer from 'components/base/CountDownTimmer';
import { useForm } from 'react-hook-form';
import { ContactSchema } from './validate';
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
        formState: { isSubmitting, isValid, isSubmitSuccessful },
        reset,
    } = useForm({
        mode: 'onChange',
        defaultValues: initialValues,
        resolver: yupResolver(ContactSchema),
    });

    const handleFormSubmit = (formValues) => {
        reset((formValues) => {
            const emptyForm = { ...formValues };
            Object.keys(emptyForm).map((item) => (emptyForm[item] = ''));
            return emptyForm;
        });
    };
    const timeUpCallBack = () => {
        reset();
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
                {isSubmitSuccessful ? (
                    <Timer duration={1} callback={timeUpCallBack} />
                ) : (
                    <SubmitButton
                        disabled={!isValid || isSubmitting}
                        loading={isSubmitting}
                    >
                        &nbsp;SUBMIT
                    </SubmitButton>
                )}
            </Box>
        </StyledForm>
    );
};
