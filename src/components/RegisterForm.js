import React from 'react';
import { StyledForm } from './StyledForm'
export default function RegisterForm(props){

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
        <StyledForm>
            <form onSubmit={handleSubmit}>
                <div className="errors">
                    <h3>{errors.username}</h3>
                    <h3>{errors.email}</h3>
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
                <label>Email
                    <input
                        value={values.email}
                        onChange={handleChange}
                        name='email'
                        type='email'
                        id='emailInput'
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
                <button disabled={disabled}>Register</button>
            </form>
        </StyledForm>

    )
}

