import React from 'react';

function InviteOpen(props) {
    const { event } = props;

    return(
        <div className="hostedEvent" >
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <button>ACCEPT</button>
            <button>DECLINE</button>
        </div>
    )
}

export default InviteOpen;