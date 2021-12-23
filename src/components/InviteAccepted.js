import React from 'react';

function InviteAccepted(props) {
    const { event } = props;
    const userId = localStorage.getItem("userId");

    let [yourItem] = event.items.filter(item => item.providedBy === Number(userId));

    return(
        <div className="hostedEvent" >
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <p>You're Bringing: {yourItem?.name}</p>
            <button>EDIT</button>
        </div>
    )
}

export default InviteAccepted;