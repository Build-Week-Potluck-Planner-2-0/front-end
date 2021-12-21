import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateEventForm from './CreateEventForm';

const initialFormValues = {
    title: '',
    date: '',
    time: '',
    item: '',
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
    // const [formErrors, setFormErrors] = useState(initialFormErrors);
    // const [disabled, setDisabled] = useState(initialDisabled);
    // const navigate = useNavigate();

    //https://bw-potluck-planner-2.herokuapp.com/api/${userId}/potluck`

    const postEvent = newEvent => {
        axios.post(`https://reqres.in/api/orders`, newEvent)
        .then(res => {
            console.log("Just made an event: ", res.data)
            setEvent(res.data);
            
        }).catch(err => console.error(err))
        .finally(() => setFormValues(initialFormValues))
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
        date: formValues.date,
        time: formValues.time,
        item: formValues.item.trim(),
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