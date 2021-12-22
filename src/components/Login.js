import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import axios from 'axios';
import * as yup from 'yup';
import loginSchema from './loginSchema';
import { StyledFormWrapper } from './StyledForm';

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
  
const initialUser = [];
const initialDisabled = true;

function Login(){

    const [users, setUser] = useState(initialUser);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const navigate = useNavigate();

    // email: test@gmail.com
    // username: test
    // password: test

    const loginUser = newUser => {
        axios.post(`https://bw-potluck-planner-2.herokuapp.com/api/auth/login`, newUser)
        .then(res => {
            console.log("Just logged in: ", res.data)
            setUser(res.data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.user_id);
            navigate("/dashboard");
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
        username: formValues.username.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        }
        loginUser(newUser);
    }

    useEffect(() => {
        loginSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    return(
        <StyledFormWrapper>
            <div>
                <h1>Login below</h1>
                <LoginForm values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} errors={formErrors}/>
            </div>
        </StyledFormWrapper>
    )
}


export default Login;