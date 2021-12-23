import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function InviteOpen({event, state, setState}) {

    const handleInviteAccept = (event) => {
        const [invitedToEvent] = event.invites.filter(invite => invite.to === +state.userId);
 
        const allOtherInvites = event.invites.filter(invite => invite.invite_id !== invitedToEvent.invite_id)
 
 
        invitedToEvent.status = "attending";
 
         event.invites = [...allOtherInvites, invitedToEvent];
 
        axiosWithAuth()
        .put(`potlucks/${invitedToEvent.potluck_id}/${invitedToEvent.from}`, event)
        .then(res => {
 
            setState({
                userId: localStorage.getItem("userId"),
                hostedEvents: res.data.hosted,
                receivedInvites: res.data.invitedTo
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

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