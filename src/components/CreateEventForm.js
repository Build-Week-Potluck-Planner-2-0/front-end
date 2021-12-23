import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialState = {
    activeItem: {
        name: "",
        quantity: 1,
        description: ""
    },
    activeGuest: {
        status: "pending",
        to_username: "",
        from_username: "", 
        from: "",
        to: ""
    }
}

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]

export default function CreateEventForm(props){
    const { values, change, submit } = props;
    const [ currentItem, setCurrentItem ] = useState(initialState.activeItem);
    const [ currentGuest, setCurrentGuest ] = useState(initialState.activeGuest);
    const [ options, setOptions ] = useState(null);
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");

    useEffect(() => {
        axiosWithAuth().get("/users").then(res => {
            const users = res.data;

            const newOptions = users.map(user => {
                return {
                    label: user.username,
                    value: user.username,
                    user_id: user.user_id
                }
            })

            setOptions(newOptions);

        }).catch(err => console.error(err))
        
    }, [])

    const handleChange = evt => {
        const { name, value } = evt.target;
        change(name, value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        console.log("clicked submit");
        submit()
    }

    const handleItemChange = evt => {
        evt.preventDefault();
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        setCurrentItem({ ...currentItem, [inputName]: inputValue});
    }

    const handleGuestChange = evt => {
        setCurrentGuest({ 
            ...currentGuest, 
            to_username: evt.value, 
            from_username: username, 
            from: +userId,
            to: evt.user_id
        });
    }

    const handleAddItem = evt => {
        evt.preventDefault();
        values.items.push(currentItem);
        handleChange(evt);
    }

    const handleAddGuest = evt => {
        evt.preventDefault();
        values.invites.push(currentGuest);
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

                <div>Item
                    <label>Name:
                        <input 
                            value={currentItem.name}
                            onChange={handleItemChange}
                            name='name'
                            type='text'
                        />
                    </label>
                    <label>Quantity:
                        <input 
                            value={currentItem.quantity}
                            onChange={handleItemChange}
                            name='quantity'
                            type='number'
                        />
                    </label>
                    <label>Description:
                        <input 
                            value={currentItem.description}
                            onChange={handleItemChange}
                            name='description'
                            type='text'
                        />  
                    </label>
                </div>
                <div id="items">
                    {/* {values.items.map(item => (
                        <li key={Date.now() + Math.random()}>{item.quantity} {item.name} </li>
                    ))} */}
                    {values.items.map(item => (
                        <li key={Date.now() + Math.random()}>{item.quantity} {item.name} {item.description.length > 0 ? `- ${item.description}`: null }</li>
                    ))}
                </div>
                <button onClick={handleAddItem}>Add Item</button>

                <label>Invite Guests
                    <p>Please enter the username of the guest you would like to invite.</p>
                    {options && <Select 
                        options={options} 
                        // value={currentGuest.to_username}
                        onChange={handleGuestChange} 
                    />}
                </label>
                <div id="invites">
                    {values.invites.map(guest => (
                        <li key={Date.now() + Math.random()} className="test">{guest.to_username}</li>
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