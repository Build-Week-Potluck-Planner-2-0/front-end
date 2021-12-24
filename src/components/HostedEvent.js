import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { StyledEvent } from './StyledEvent'

function HostedEvent(props) {
    const { event, setHostedEvents } = props;
    const userId = localStorage.getItem("userId");

    const handleDelete = () => {
        axiosWithAuth()
            .delete(`/potlucks/${event.potluck_id}/${userId}`)
            .then(res => {
                setHostedEvents(res.data.hosted);
            })
            .catch(err => console.error(err));
    }

    return(
        <StyledEvent className="hostedEvent" >
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <button onClick={handleDelete} >DELETE EVENT</button>
            {/* <button onClick={handleEdit} >EDIT EVENT</button> */}
        </StyledEvent>
    )
}

export default HostedEvent;

