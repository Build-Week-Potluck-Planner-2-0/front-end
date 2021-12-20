import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import axios from 'axios';

const initialFormValues = {
    username: '',
    email: '',
    password: '',
}
  
const initialUsers = [];


function Register(){
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);

    const registerUser = newUser => {
        axios.post('http://localhost:3000/api/login', newUser)
        .then(res => {
            console.log(res)
            //setOrders([res.data, ...users])
        }).catch(err => console.error(err))
        .finally(() => setFormValues(initialFormValues))
    }

    const inputChange = (name, value) => {
        setFormValues({
        ...formValues,
        [name]: value
        })
    }

    const formSubmit = () => {
        const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        }
        registerUser(newUser);
    }

    

    return(
        <>
            <h1>Register below</h1>
            <RegisterForm  values={formValues} change={inputChange} submit={formSubmit}/>
        </>
    )
}


export default Register;