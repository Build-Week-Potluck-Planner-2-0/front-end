import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

function Register(){
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    const navigate = useNavigate();

    const registerUser = newUser => {
        axios.post(`https://bw-potluck-planner-2.herokuapp.com/api/auth/register`, newUser)
        .then(res => {
            console.log("Just registered: ", res.data)
            setUsers(res.data);
            const { token, id } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", id);
            navigate("/dashboard");
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
        username: formValues.username.trim(),
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