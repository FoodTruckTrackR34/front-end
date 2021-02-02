import * as yup from 'yup';

export default yup.object().shape({
    dinerUsername: yup
        .string()
        .required('Name is required!')
        .min(3, 'Must be at least 3 characters long!'),
    dinerEmail: yup
        .string()
        .required('Valid email required!')
        .email('Email must be valid!'),
    dinerPassword: yup
        .string()
        .required('Password is required!')
        .min(6, 'Password must be at least 6 characters long!'),
    dinerConfirmPassword: yup
        .string()
        .oneOf([yup.ref('dinerPassword'), null], 'Passwords must match')
});