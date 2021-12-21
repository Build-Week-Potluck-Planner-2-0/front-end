import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';
import * as yup from 'yup';
import loginSchema from './loginSchema';

const initialFormValues = {
    username: '',
    password: '',
}

const initialFormErrors = {
    username: '',
    password: '',
}
  
const initialUsers = [];
const initialDisabled = true;

function Login(){

    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const loginUser = newUser => {
        axios.post('http://localhost:3000/api/login', newUser)
        .then(res => {
            console.log(res)
            setUsers(res.data)
        }).catch(err => console.error(err))
        .finally(() => setFormValues(initialFormValues))
    }

    const validate = (name, value) => {
        yup.reach(loginSchema, name)
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
        password: formValues.password.trim(),
        }
        loginUser(newUser);
    }

    useEffect(() => {
        loginSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    return(
        <>
            <h1>Login below</h1>
            <LoginForm values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
        </>
    )
}


export default Login;