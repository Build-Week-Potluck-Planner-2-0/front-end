import styled from 'styled-components';

export default function Footer() {
    return (
        <StyledFooter className="footerBar">
            <p>© 2021&nbsp;</p>
            <p className='bold'>POTLUCK PLANNER</p>
        </StyledFooter>
    );
}

const StyledFooter = styled.div`
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
`