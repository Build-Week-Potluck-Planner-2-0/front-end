import React from 'react';

export default function CreateEvent(){



    return(
        // <div>
        //     <h1>Create an event</h1>
        //     <form id="createEventForm">
        //         <label>Event title
        //             <input 
        //                 name='title'
        //                 type='text'
        //             />    
        //         </label>
        //         <label>Event Date
        //             <input
        //                 name='date'
        //                 type='date'
        //             />
        //         </label>
        //         <label>Event Time
        //             <input
        //                 name='time'
        //                 type='time'
        //             />
        //         </label>
        //         <label>Item
        //             <input
        //                 name='item'
        //                 type='text'
        //             />
        //         </label>
        //     </form>
        // </div>
        <div>
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
                     <label>Event title
                    <input 
                        name='item'
                        type='text'
                    />    
                    </label>`;

                    form.insertAdjacentHTML("beforeend", html)

                }}>Add Item</button>
        </div>
    )
}