import React from 'react';

export default function LoginForm(){

    return(
        <div>
            <form>
                <label>Username
                    <input
                        name='name'
                        type='text'
                        id='nameInput'
                    />
                </label>
                <label>Password
                    <input
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