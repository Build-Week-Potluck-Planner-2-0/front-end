import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({component:Component, ...rest  }) => {
    return <Route {...rest} render={()=> {
        if (localStorage.getItem("token")) {
            return(<Component/>)
        } else {
            return <Navigate to="/login"/>
        }
    }}/>
}

export default PrivateRoute;