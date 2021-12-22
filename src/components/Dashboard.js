import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';
import HostedEvent from './HostedEvent';
import InviteOpen from './InviteOpen';
import InviteAccepted from './InviteAccepted';

class Dashboard extends React.Component {
    state = {
        hostedEvents: [],
        receivedInvites: []        
    };
    
    componentDidMount() {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        
        // Pulling initial userData (all events, your hosted, and invites)
        axiosWithAuth()
            .get(`potlucks/${userId}/potlucks`)
            .then(res => {
                console.log("Getting User Data:", res.data);
                this.setState({
                    hostedEvents: res.data.hosted,
                    receivedInvites: res.data.invitedTo
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const userId = localStorage.getItem("userId");

        return(
            <StyledDash>
                <header>
                    <h1>DASHBOARD</h1>
                </header>
                
                <div>
                    <h2>You are Hosting</h2>
                    {this.state.hostedEvents.length !== 0 ? this.state.hostedEvents.map(event => {
                        return(<HostedEvent event={event} key={event.potluck_id} />)
                    }) : <p>You have not created any events.</p> }
                    <Link to="/create" id="createEventButton" >Create New Event</Link>
                </div>


                <div>
                    <h2>Your Open Invitations</h2>
                    {this.state.receivedInvites.map(event => {
                        event.invites.map(invite => {
                            if(invite.to.toString() === userId) {
                                console.log("userId ", userId);
                                console.log("Invite to: ", invite.to);
                                return(console.log("It was equal"));
                                
                            } else {
                                return(console.log("something wrong"))
                            }
                        });
                        

                        if((event.invites.filter(invite => invite.to.toString() === userId && invite.status === "pending"))){
                            return(<InviteOpen event={event} key={event.potluck_id} />)
                        }
                    })}
                </div>
                
                <div>
                    <h2>Your Accepted Events</h2>
                    {this.state.receivedInvites.map(event => {
                        if((event.invites.filter(invite => invite.to === userId && invite.status === "attending"))){
                            return(<InviteAccepted event={event} key={event.potluck_id} />)
                        }
                    })}
                </div>
            </StyledDash>
        )
    }
}

export default Dashboard;

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