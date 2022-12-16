import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';
import { SubmitButton } from 'components';
import Timer from 'components/base/CountDownTimmer';
import { InputFieldV2 } from 'components/base/InputFieldV2';
import { useForm } from 'react-hook-form';
import { ContactSchema } from './validate';

export const StartGrowingForm = () => {
    const {
        formState: { isValid, isSubmitting, isSubmitSuccessful, errors },
        reset,
        register,
        handleSubmit,
    } = useForm({
        mode: 'onChange',
        defaultValues: {},
        resolver: yupResolver(ContactSchema),
    });

    const handleFormSubmit = (values) => {
        console.log('values---', values);
    };

    const timeUpCallBack = () => {
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container columnSpacing={6} rowSpacing={4}>
                <Grid item xs={12} sm={6}>
                    <InputFieldV2
                        error={errors.email}
                        placeholder="Email Address"
                        {...register('email')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputFieldV2
                        error={errors.description_project}
                        placeholder="Description Project"
                        {...register('description_project')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputFieldV2
                        error={errors.company_name}
                        placeholder="Company Name"
                        {...register('company_name')}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubmitButton
                        loading={isSubmitting}
                        disabled={!isValid || isSubmitting}
                    >
                        {isSubmitSuccessful ? (
                            <Timer duration={1} callback={timeUpCallBack} />
                        ) : (
                            'SUBMIT'
                        )}
                    </SubmitButton>
                </Grid>
            </Grid>
        </form>
    );
};
