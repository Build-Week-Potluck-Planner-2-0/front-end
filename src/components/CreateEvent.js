import React, { useState, useEffect } from 'react';
import CreateEventForm from './CreateEventForm';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useNavigate } from 'react-router-dom';

const initialFormValues = {
    title: '',
    location:'',
    description:'',
    date: '',
    time: '',
    item: '',
    items: [],
    guest: '',
    invites: []
}

// const initialFormErrors = {
//     username: '',
//     email: '',
//     password: '',
// }


const initialEvent = [];

function CreateEvent(){

    const [event, setEvent] = useState(initialEvent);
    const [formValues, setFormValues] = useState(initialFormValues);
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();
    // const [formErrors, setFormErrors] = useState(initialFormErrors);
    // const [disabled, setDisabled] = useState(initialDisabled);
    // const navigate = useNavigate();

    //https://bw-potluck-planner-2.herokuapp.com/api/${userId}/potluck`

    const postEvent = newEvent => {
        axiosWithAuth()
        .post(`/potlucks/${userId}`, newEvent)
        .then().catch(err => console.error(err))
        .finally(() => {
            setFormValues(initialFormValues);
            navigate('/dashboard');
        })
    }

    // const validate = (name, value) => {
    //     yup.reach(loginSchema, name)
    //         .validate(value)
    //         .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    //         .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    // }

    const inputChange = (name, value) => {
        // validate(name, value);
        setFormValues({
        ...formValues,
        [name]: value
        })
    }

    const formSubmit = () => {
        const newEvent = {
        title: formValues.title.trim(),
        location: formValues.location.trim(),
        description: formValues.description.trim(),
        date: formValues.date,
        time: formValues.time,
        item: formValues.item.trim(),
        items: formValues.items,
        invites: formValues.invites,
        }
        postEvent(newEvent);
    }

    // useEffect(() => {
    //     loginSchema.isValid(formValues).then(valid => setDisabled(!valid))
    // }, [formValues])

    return(
        <>
            <h1>Create a potluck below!</h1>
            <CreateEventForm values={formValues} change={inputChange} submit={formSubmit} />
        </>
    )
}

export default CreateEvent;