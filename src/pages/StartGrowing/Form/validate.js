import * as yup from 'yup';

export const ContactSchema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required.')
        .email('Must be an email'),
    description_project: yup
        .string()
        .required('Description project is required.'),
    company_name: yup.string().required('Description project is required.'),
});
