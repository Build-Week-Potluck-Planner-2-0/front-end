import React from 'react';

export default function RegisterForm(props){

    const { values, change, submit } = props;

    const handleChange = evt => {
        const { name, value } = evt.target;
        change(name, value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return(
        console.log(values),
        <div>
            <form onSubmit={handleSubmit}>
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
                        type='text'
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
                <button>Login</button>
            </form>
        </div>

    )
}