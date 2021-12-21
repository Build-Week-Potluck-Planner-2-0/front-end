import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';

class Dashboard extends React.Component {
    state = {
        hostedEvents: ''
    };
    
    componentDidMount() {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        axiosWithAuth()
            .get(`/${this.userId}/potlucks`)
            .then(res => {
                console.log("Getting User Data:", res);
                this.setState({
                    hostedEvents: res.data
                });
            })
            .catch(err => {
                console.log(err);
            })

        axiosWithAuth()
            .get(`/${this.userId}/potlucks`)
            .then(res => {
                console.log("Getting User Data:", res);
                this.setState({
                    hostedEvents: res.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return(
            <StyledDash>
                <header>
                    <h1>DASHBOARD</h1>
                </header>
                
                <div>
                    <h2>You are Hosting</h2>
                    <Link to="/" className="dashButton" >Create Event</Link>
                    {this.state.userInfo}
                </div>
                
                <div>
                    <h2>Your Open Invitations</h2>
                    {/* Need to get back:
                    - Event Name
                    - Event Date
                    - Event Time
                    - Event Location */}
                </div>
                
                <div>
                    <h2>Your Accepted Events</h2>
                    {/* Need to get back:
                    - Event Name
                    - Event Date
                    - Event Time
                    - Event Location 
                    - WHAT YOU are bringing */}
                </div>
            </StyledDash>
        )
    }
}

export default Dashboard;

const StyledDash = styled.div`
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