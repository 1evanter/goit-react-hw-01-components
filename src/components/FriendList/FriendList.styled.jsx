import styled from 'styled-components';

const List = styled.ul`
max-width: 240px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 15px;
justify-content: center;
margin: 0 auto;
margin-top: 30px;
`

const Item = styled.li`
display: flex;
align-items: center;
width: 240px;
padding: 15px;
gap: 15px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Image = styled.img`
width: 80px;
`

const Span = styled.span`
width: 12px;
height: 12px;
border-radius: 50%;
background-color: 
${props => (props.status === true ? 'green' : 'red')};
`

const Name = styled.p`
font-weight: 500;
font-size: 20px;
`

export { List, Item, Image, Span, Name };