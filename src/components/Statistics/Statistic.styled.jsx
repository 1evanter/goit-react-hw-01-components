import styled from 'styled-components';


const Section = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
max-width: 360px;
margin: 0 auto;
margin-top: 30px;
background-color: #DDE6ED;
padding: 15px 10px;
border: 3px dotted #9DB2BF;
border-radius: 6px;
`

const Title = styled.h2`
margin-bottom: 15px;
`

const List = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;

:not(:last-child) {
   border-right: none; 
}

`

const Item = styled.li`
display: flex;
flex-direction: column;
gap: 8px;
max-width: calc(100% / 5);
justify-content: center;
align-items: center;
padding: 15px;

border: 3px solid #9DB2BF;
`

const Span = styled.span`
font-size: 20px;
`

export {List, Item, Section, Title, Span}