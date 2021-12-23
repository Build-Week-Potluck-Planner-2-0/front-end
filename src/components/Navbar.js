import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {
    const initialState = localStorage.getItem("token");
    const [ loggedIn, setLoggedIn ] = useState(initialState);

    useEffect(() => {
        setLoggedIn()
    })

    return(
        <StyledNav>
            <a href='/'><div>POTLUCK PLANNER</div></a>
            <nav id='navLinks'>
                <Link to='/'>HOME</Link>
                <Link to='/login'>LOGIN</Link>
                <Link to='/register'>REGISTER</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
                <Link to='/logout'>LOGOUT</Link>
                {/* {!loggedIn && <Link to='/login'>LOGIN</Link>}
                {!loggedIn && <Link to='/register'>REGISTER</Link>}
                {loggedIn && <Link to='/dashboard'>DASHBOARD</Link>}
                {loggedIn && <Link to='/logout'>LOGOUT</Link>} */}
            </nav>
        </StyledNav>
    )
}

export default Navbar;

const StyledNav = styled.div`
    display: flex;
    background-color: orange;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;

    #navLinks {
    padding-right: .5rem;
    & a {
      margin: .8rem;
    }
`