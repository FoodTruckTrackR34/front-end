import * as yup from 'yup';

export default yup.object().shape({
    operatorUsername: yup
        .string()
        .required('Name is required!')
        .min(3, 'Must be at least 3 characters long!'),
    operatorEmail: yup
        .string()
        .required('Valid email required!')
        .email('Email must be valid!'),
    operatorPassword: yup
        .string()
        .required('Password is required!')
        .min(6, 'Password must be at least 6 characters long!'),
    operatorConfirmPassword: yup
        .string()
        .oneOf([yup.ref('operatorPassword'), null], 'Passwords must match')
});