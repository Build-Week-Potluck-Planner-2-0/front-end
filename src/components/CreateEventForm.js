import React from 'react';
import styled from 'styled-components';

export default function CreateEvent(props){

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
        <StyledEvent>
            <h1>Event Form</h1>
            <form id="createEventForm" onSubmit={handleSubmit}>

                <label>Event title
                    <input 
                        value={values.title}
                        onChange={handleChange}
                        name='title'
                        type='text'
                    />    
                </label>
                <label>Event Date
                    <input 
                        value={values.date}
                        onChange={handleChange}
                        name='date'
                        type='date'
                    />    
                </label>
                <label>Event Time
                    <input 
                        value={values.time}
                        onChange={handleChange}
                        name='time'
                        type='time'
                    />    
                </label>
                <label>Item
                    <input 
                        value={values.item}
                        onChange={handleChange}
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