import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function InviteOpen({event, handleInviteAccept}) {

    return(
        <div className="hostedEvent" >
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <button onClick={() => {
                handleInviteAccept(event);
            }} >ACCEPT</button>
            <button>DECLINE</button>
        </div>
    )
}

export default InviteOpen;