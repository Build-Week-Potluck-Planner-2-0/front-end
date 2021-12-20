import React from 'react';
import RegisterForm from './RegisterForm';

function Register(props){

    const { values, change, submit } = props;

    return(
        <>
            <h1>Register below</h1>
            <RegisterForm values={values} change={change} submit={submit}/>
        </>
    )
}


export default Register;