import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

function HostedEvent(props) {
    const { event } = props;
    const userId = localStorage.getItem("userId");

    const handleDelete = () => {
        axiosWithAuth()
            .delete(`/potlucks/${event.potluck_id}/${userId}`)
            .then(res => {
                console.log("Returned after deleting a hosted event: ", res);
            })
            .catch(err => console.error(err));
    }

    return(
        <div className="hostedEvent" >
            <h3>{event.title}</h3>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
            <button onClick={handleDelete} >DELETE EVENT</button>
        </div>
    )
}

export default HostedEvent;