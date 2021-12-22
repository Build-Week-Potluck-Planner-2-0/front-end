import React from 'react';
import styled from 'styled-components';

export default function LoginForm(props){

    const { values, change, submit, disabled, errors } = props;

    const handleChange = evt => {
        const { name, value } = evt.target;
        change(name, value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return(
        <StyledLoginForm>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>{errors.username}</h3>
                    <h3>{errors.password}</h3>
                </div>
                <label>Username
                    <input
                        value={values.username}
                        onChange={handleChange}
                        name='username'
                        type='text'
                        id='usernameInput'
                    />
                </label>
                <label>Password
                    <input
                        value={values.password}
                        onChange={handleChange}
                        name='password'
                        type='password'
                        id='passwordInput'
                    />
                </label>
                <button disabled={disabled}>Login</button>
            </form>
        </StyledLoginForm>

    )
}

const StyledLoginForm = styled.div`
    margin-top: 4%;
    label{
        margin: 1%;
    }
    input{
        margin: 0.5%;
    }
`