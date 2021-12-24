import React from 'react';
import { StyledEvent } from './StyledEvent';

function InviteAccepted(props) {
    const { event } = props;
    const userId = localStorage.getItem("userId");

    let [yourItem] = event.items.filter(item => item.providedBy === Number(userId));

    return(
        <StyledEvent className="hostedEvent" >
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <p>You're Bringing: {yourItem?.name}</p>
            {/* <button>EDIT</button> */}  {/* STRETCH */}
        </StyledEvent>
    )
}

export default InviteAccepted;