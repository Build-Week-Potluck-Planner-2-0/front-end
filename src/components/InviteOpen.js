import React from 'react';

function InviteOpen(props) {
    const { event } = props;

    return(
        <div className="hostedEvent" >
            <h3>{event.title}</h3>
        </div>
    )
}

export default InviteOpen;