import styled from 'styled-components';


const CenteredContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#FFFFF'};
    width: 100%;
    overflow: hidden;
    margin-top: 8vh;
`; 


export default CenteredContainer;