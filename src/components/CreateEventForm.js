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
        console.log("clicked submit");
        submit()
    }

    const handleAddItem = evt => {
        evt.preventDefault();
        values.items.push(values.item);
        handleChange(evt);
    }

    const handleAddGuest = evt => {
        evt.preventDefault();
        values.invites.push(values.guest);
        handleChange(evt);
    }

    return(
        <StyledEvent>
            <h1>Event Form!!!</h1>
            <form onSubmit={handleSubmit}>

                <label>Event title
                    <input 
                        value={values.title}
                        onChange={handleChange}
                        name='title'
                        type='text'
                    />    
                </label>
                <label>Event location
                    <input 
                        value={values.location}
                        onChange={handleChange}
                        name='location'
                        type='text'
                    />    
                </label>
                <label>Event description
                    <input 
                        value={values.description}
                        onChange={handleChange}
                        name='description'
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
                <div id="items">
                    {values.items.map(item => (
                        <li key={Date.now() + Math.random()}>{item}</li>
                    )
                    )}
                </div>
                <button onClick={handleAddItem}>Add Item</button>

                <label>Invite Guests
                    <input 
                        value={values.guest}
                        onChange={handleChange}
                        name='guest'
                        type='text'
                    />    
                </label>
                <div id="invites">
                    {values.invites.map(guest => (
                        <li key={Date.now() + Math.random()} className="test">{guest}</li>
                    )
                    )}
                </div>
                <button onClick={handleAddGuest}>Add Guest</button>

                <button >submit</button>
               

            </form>

                

                
        </StyledEvent>
    )



    // return(
    //     <StyledEvent>
    //         <h1>Event Form!!!</h1>
    //         <form ref={formRef} >

    //             <label>Event title
    //                 <input 
    //                     value={values.title}
    //                     onChange={handleChange}
    //                     name='title'
    //                     type='text'
    //                 />    
    //             </label>
    //             <label>Event Date
    //                 <input 
    //                     value={values.date}
    //                     onChange={handleChange}
    //                     name='date'
    //                     type='date'
    //                 />    
    //             </label>
    //             <label>Event Time
    //                 <input 
    //                     value={values.time}
    //                     onChange={handleChange}
    //                     name='time'
    //                     type='time'
    //                 />    
    //             </label>
    //             <label>Item
    //                 <input 
    //                     value={values.item}
    //                     onChange={handleChange}
    //                     name='item'
    //                     type='text'
    //                 />    
    //             </label>

    //             <button onSubmit={handleSubmit}>submit</button>
               

    //         </form>

    //             <button onClick={(e) => {
    //                 e.preventDefault();

    //                 // const form = document.body.querySelector("#createEventForm");

    //                 const itemHtml = `
    //                  <label>Item
    //                 <input 
    //                     name='item'
    //                     type='text'
    //                 />    
    //                 </label>`;

                    
    //                 const formElement = formRef.current;
    //                 console.log(formElement);
    //                 // formElement.push(itemHtml)
    //                 formElement.insertAdjacentHTML("beforeend", itemHtml)

    //             }}>Add Item</button>

                
    //     </StyledEvent>
    // )
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