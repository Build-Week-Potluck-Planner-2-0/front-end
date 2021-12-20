import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div>
            <div>POTLUCK PLANNER</div>
            <nav>
                <Link to='/'>HOME</Link>
                <Link to='/login'>LOGIN</Link>
                <Link to='/register'>REGISTER</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
            </nav>
        </div>
    )
}

export default Navbar;