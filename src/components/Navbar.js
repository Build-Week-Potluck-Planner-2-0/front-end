import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar({loggedIn, setLoggedIn}) {
   

    return(
        <StyledNav>
            <a href='/'><h4>POTLUCK PLANNER</h4></a>
            <nav id='navLinks'>
                <Link to='/'>HOME</Link>
                {!loggedIn && <Link to='/login'>LOGIN</Link>}
                {!loggedIn && <Link to='/register'>REGISTER</Link>}
                {loggedIn && <Link to='/dashboard'>DASHBOARD</Link>}
                {loggedIn && <Link to='/' onClick={() => {
                    setLoggedIn(false);
                    localStorage.clear();
                }}>LOGOUT</Link>}
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

    h4 {
        color: white;
        font-weight: bold;
        font-size: 2.2rem;
    }

    h4, a {
        text-shadow: 2px 2px red;
        &:hover {
            text-shadow: 5px 5px red;
        }
    }

    #navLinks {
    padding-right: .5rem;
    & a {
      margin: .8rem;
      color: white;
      font-weight: bold;
    }

`