import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import HostedEvent from './HostedEvent';
import InviteOpen from './InviteOpen';
import InviteAccepted from './InviteAccepted';

export default function Dashboard() {

    // const [state, setState ] = useState({
    //     hostedEvents: [],
    //     receivedInvites: [],
    //     userId: localStorage.getItem("userId"),
    // })

    const [hostedEvents, setHostedEvents] = useState([])
    const [receivedInvites, setReceivedInvites] = useState([])
    const [userId] = useState(localStorage.getItem("userId"))

    const pendingInvites = getPendingInvites(receivedInvites);
    const attendingInvites = getAttendingInvites(receivedInvites);

    useEffect(() => {
        axiosWithAuth()
        .get(`potlucks/${userId}/potlucks`)
        .then(res => {
                setHostedEvents(res.data.hosted);

                setReceivedInvites(res.data.invitedTo);
        })
        .catch(err => {
            console.error(err);
        })
     }, [])

     function getPendingInvites (receivedInvites)  {
        let pendingInvites = [];
         for(const event of receivedInvites ){
            const pending = event.invites.filter(invite => (invite.status === "pending" && invite.to === +userId));

            if(pending.length > 0){
                pendingInvites.push(event);
            }
         }

         return pendingInvites;
     }

     function getAttendingInvites (receivedInvites)  {
        let attendingInvites = [];
         for(const event of receivedInvites ){
            const attending = event.invites.filter(invite => (invite.status === "attending" && invite.to === +userId));

            if(attending.length > 0){
                attendingInvites.push(event);
            }
         }
         return attendingInvites;
     }

    return(
        <StyledDash>

                <header>
                    <h1>DASHBOARD</h1>
                </header>
                
                <div>
                    <h2>You are Hosting</h2>
                    <div className="dashSection" >
                        {hostedEvents.length !== 0 ? hostedEvents.map(event => {
                            return(<HostedEvent className="card" setHostedEvents={setHostedEvents} event={event} key={event.potluck_id} />)
                        }) : <p>You have not created any events.</p> }
                    </div>
                    <div className="buttonContainer">
                        <Link to="/create" id="createEventButton" >Create New Event</Link>
                    </div>
                </div>

                <div>
                    <h2>Your Open Invitations</h2>
                    <div className="dashSection" >

                        {pendingInvites.length > 0 ? 

                        pendingInvites.map(invite => <InviteOpen className="card" setReceivedInvites={setReceivedInvites} event={invite} key={invite.potluck_id} potluckId={invite.potluck_id} />)

                        : <h3>You have no pending invitations</h3>}
                    </div>
                </div>
                
                <div>
                    <h2>Your Accepted Events</h2>
                    <div className="dashSection" >


                        {attendingInvites.length > 0 ? 

                        attendingInvites.map(invite => <InviteAccepted className="card" event={invite} key={invite.potluck_id} />)

                        : <h3>You have accepted no accepted invitations</h3>}


                    </div>
                </div>
            </StyledDash>
        )
}

const StyledDash = styled.div`

background: skyblue;

#createEventButton {
    background-color: green;
    padding: .6rem;
    color: white;
    border-radius: 5px;
    &:hover {
        background-color: darkgreen;
    }
}
.dashSection {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    /* margin: 0 5%; */
}
.dashSection h3 {
    margin: auto;
}
.hostedEvent {
    border: solid grey 1px;
}
.buttonContainer{
    margin: 2% 0;
}
div.h3{
    text-align: center;
}
`


// const StyledStatusContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   align-items: center;
//   border-radius: 0.375rem;

//   &.Paid {
//     background-color: var(--clr-success-faded);
//     color: var(--clr-success);
//   }
//   .invoice-status-circle.Paid {
//     background-color: var(--clr-success);
//   }
//   .invoice-state-text.Paid {
//     color: var(--clr-success);
//   }

//   &.Pending {
//     background-color: var(--clr-pending-opac-orange);
//   }
//   .invoice-status-circle.Pending {
//     background-color: var(--clr-pending-orage);
//   }
//   .invoice-state-text.Pending {
//     color: var(--clr-pending-orage);
//   }

//   &.Draft {
//     background-color: var(--clr-nav-purple-gray-faded);
//     /* goback */
//   }
//   .invoice-status-circle.Draft {
//     background-color: var(--clr-nav-purple-gray);
//   }
//   .invoice-state-text.Draft {
//     color: var(--clr-nav-purple-gray);
//   }

//   @media (max-width: 600px) {
//     grid-area: invoice-status-visual-container;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-wrap: nowrap;
//   }
// `;

// export default function InvoiceStatus({ invoiceStatus }) {
//   return (
//     <StyledStatusContainer
//       className={invoiceStatus[0].toUpperCase() + invoiceStatus.slice(1)}
//     >
//       <div
//         className={`invoice-status-circle ${
//           invoiceStatus[0].toUpperCase() + invoiceStatus.slice(1)
//         }`}
//       />
//       <h4
//         className={`invoice-state-text ${
//           invoiceStatus[0].toUpperCase() + invoiceStatus.slice(1)
//         }`}
//       >
//         {invoiceStatus[0].toUpperCase() + invoiceStatus.slice(1)}
//       </h4>
//     </StyledStatusContainer>
//   );
// }