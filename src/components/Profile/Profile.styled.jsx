import styled from 'styled-components';

const Section = styled.section`
max-width: 240px;
margin: 0 auto;
margin-top: 100px;
background-color: #DDE6ED;
padding: 15px;
border: 3px dotted #9DB2BF;
border-radius: 6px;
`
const Text = styled.span`
font-size: 14px`

const List = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
justify-content: space-between;
align-items: center;
`

const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 4px;
`
const Name = styled.p`
font-size: 22px;
font-weight: 600;
`

const Image = styled.img`
display: block;
margin: 0 auto;
width: 140px;
margin-bottom: 16px;`;

const Descr = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
margin-bottom: 20px;
`;

export {List, Section, Image, Descr, Item, Text, Name }
