import React from 'react';

function InviteAccepted(props) {
    const { event } = props;

    return(
        <div className="hostedEvent" >
            <h3>{event}</h3>
        </div>
    )
}

export default InviteAccepted;