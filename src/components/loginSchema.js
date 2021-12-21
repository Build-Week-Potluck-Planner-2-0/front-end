import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters'),
    password: yup
        .string()
        .trim()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
})

export default loginSchema