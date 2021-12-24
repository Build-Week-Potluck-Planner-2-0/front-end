import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { StyledEvent } from './StyledEvent';
import ChooseItem from './ChooseItem';
import { useNavigate } from 'react-router-dom';
import App from '../App';

function InviteOpen({event, setReceivedInvites, potluckId}) {
    const userId = localStorage.getItem("userId");
    const navigate = useNavigate();

    const handleInviteAccept = (event) => {
        const [invitedToEvent] = event.invites.filter(invite => invite.to === +userId);
 
        const allOtherInvites = event.invites.filter(invite => invite.invite_id !== invitedToEvent.invite_id)
 
 
        invitedToEvent.status = "attending";
         event.invites = [...allOtherInvites, invitedToEvent];

         let response;
 
        axiosWithAuth()
        .put(`potlucks/${invitedToEvent.potluck_id}/${invitedToEvent.from}`, event)
        .then(res => {
            response = res.data.invitedTo
            
            })
        .catch(err => {
            console.log(err);
        })
        .finally(() =>
            {setReceivedInvites(response)
            navigate(`/acceptedInvite/chooseItem/${potluckId}`)}
        )
    }

    return(
        <StyledEvent className="hostedEvent" >
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <button onClick={() => {
                handleInviteAccept(event);
            }} >ACCEPT</button>
            <button>DECLINE</button>
        </StyledEvent>
    )
}

export default InviteOpen;