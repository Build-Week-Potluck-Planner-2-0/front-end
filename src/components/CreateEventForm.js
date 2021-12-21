import React from 'react';
import styled from 'styled-components';

export default function CreateEvent(){

    return(
        <StyledEvent>
            <h1>Create an event</h1>
            <form id="createEventForm" onSubmit={(e) => {
                e.preventDefault()
                console.log(e)
            }}>

                <label>Event title
                    <input 
                        name='title'
                        type='text'
                    />    
                </label>
                <label>Event Date
                    <input 
                        name='date'
                        type='date'
                    />    
                </label>
                <label>Event Time
                    <input 
                        name='time'
                        type='time'
                    />    
                </label>
                <label>Item
                    <input 
                        name='item'
                        type='text'
                    />    
                </label>


                <button>submit</button>

            </form>

                <button onClick={(e) => {
                    e.preventDefault();

                    const form = document.body.querySelector("#createEventForm");

                    const html = `
                     <label>Item
                    <input 
                        name='item'
                        type='text'
                    />    
                    </label>`;

                    form.insertAdjacentHTML("beforeend", html)

                }}>Add Item</button>
        </StyledEvent>
    )
}
const StyledEvent = styled.div`
    
    margin-top: 4%;
    label{
        margin: 1%;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        
    }
    input{
        margin: 0.5%;
    }
`