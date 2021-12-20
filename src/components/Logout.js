import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = (props) => {
    // const { push } = props.history;
    const { push } = useNavigate();

    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(resp => {
                localStorage.removeItem('token');
                push('/login');
            });
    }, []);

    return(<div></div>);
}

export default Logout;