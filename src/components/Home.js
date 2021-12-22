import React from 'react';
import { Link } from 'react-router-dom';
// //import Styled from 'styled-components';
function Home(){

    return(
        <div className="container">
        
            <div className="header">
                <h1>Potluck Planner</h1>
            </div>
            <div>
                <p> Place holder Text </p>
            </div>
            <div className="register"  >
                <Link className="" to='/register' >Register Here!</Link>
            </div>
            <div className="login" >
                <Link className ="" to='/login' >Login Here!</Link>
                </div>
        </div>
    )
}
// //const StyledButton = Styled.button`


// //`
// //console.log(StyledButton)
// // register button - links to Register.js (find className)

// // login button - links to Login.js (find className)

// // Img - large img to display on homepage




export default Home;