import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import axios from 'axios';
import * as yup from 'yup';
import registrationSchema from './registrationSchema';

const initialFormValues = {
    username: '',
    email: '',
    password: '',
}

const initialFormErrors = {
    username: '',
    email: '',
    password: '',
}
  
const initialUsers = [];
const initialDisabled = true;


function Register() {
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const registerUser = newUser => {
        axios.post('https://reqres.in/api/orders', newUser)
        .then(res => {
            console.log(res)
            setUsers(res.data)
        }).catch(err => console.error(err))
        .finally(() => setFormValues(initialFormValues))
    }

    const validate = (name, value) => {
        yup.reach(registrationSchema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: ''}))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({
        ...formValues,
        [name]: value
        })
    }

    const formSubmit = () => {
        const newUser = {
        name: formValues.username.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        }
        registerUser(newUser);
    }

    useEffect(() => {
        registrationSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])
    

    return(
        <>
            <h1>Register below</h1>
            <RegisterForm values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
        </>
    )
}


export default Register;