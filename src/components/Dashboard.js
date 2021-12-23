import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import HostedEvent from './HostedEvent';
import InviteOpen from './InviteOpen';
import InviteAccepted from './InviteAccepted';

export default function Dashboard() {

    const [state, setState ] = useState({
        hostedEvents: [],
        receivedInvites: [],
        userId: localStorage.getItem("userId")
    })

    useEffect(() => {
        axiosWithAuth()
        .get(`potlucks/${state.userId}/potlucks`)
        .then(res => {
            setState({
                ...state,
                hostedEvents: res.data.hosted,
                receivedInvites: res.data.invitedTo
            });
        })
        .catch(err => {
            console.error(err);
        })
     }, [])

     const handleInviteAccept = (event) => {
       const [invitedToEvent] = event.invites.filter(invite => invite.to === +state.userId);

       const allOtherInvites = event.invites.filter(invite => invite.invite_id !== invitedToEvent.invite_id)


       invitedToEvent.status = "attending";

        event.invites = [...allOtherInvites, invitedToEvent];

       axiosWithAuth()
       .put(`potlucks/${invitedToEvent.potluck_id}/${invitedToEvent.from}`, event)
       .then(res => {

           setState({
               ...state,
               hostedEvents: res.data.hosted,
               receivedInvites: res.data.invitedTo
           });
       })
       .catch(err => {
           console.log(err);
       })


     }
    

    return(
        <StyledDash>
              {  console.log(state)}
                <header>
                    <h1>DASHBOARD</h1>
                </header>
                
                <div>
                    <h2>You are Hosting</h2>
                    {state.hostedEvents.length !== 0 ? state.hostedEvents.map(event => {
                        return(<HostedEvent state={state} setHostedState={setState} event={event} key={event.potluck_id} />)
                    }) : <p>You have not created any events.</p> }
                    <Link to="/create" id="createEventButton" >Create New Event</Link>
                </div>

                <div>
                    <h2>Your Open Invitations</h2>
                    {state.receivedInvites.map(event => {
                        const pending = event.invites.filter(invite => (invite.status === "pending" && invite.to === Number(state.userId)));
                        if(pending.length > 0) {
                            return(<InviteOpen event={event} handleInviteAccept={handleInviteAccept} key={event.potluck_id} />)
                        } else {
                            return(<h3 key="noInvitations" >You have no pending invitations</h3>)
                        }
                    })}
                </div>
                
                <div>
                    <h2>Your Accepted Events</h2>
                    {state.receivedInvites.map(event => {
                        const attending = event.invites.filter(invite => (invite.status === "attending" && invite.to === Number(state.userId) ));
                        if(attending.length > 0) {
                            return(<InviteAccepted event={event} key={event.potluck_id} />)
                        } else {
                            return(<h3 key="noAcceptedInvitations" >You have accepted no invitations</h3>)
                        }
                    })}
                </div>
            </StyledDash>
        )
}

const StyledDash = styled.div`
#createEventButton {
    background-color: green;
    padding: .5rem;
    color: white;
    border-radius: 5px;
    &:hover {
        background-color: darkgreen;
    }
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