import styled from 'styled-components';

const Table = styled.table`
width: 50%;
margin: 0 auto;
margin-top: 30px;
border: 4px dashed #9DB2BF;
border-spacing: 1px 0;
`

const Th = styled.th`
height: 50px;
text-align: center;
background-color: #526D82;
color: #DDE6ED;
`

const Tbody = styled.tbody`
tr:nth-child(even) {
  background-color: #DDE6ED;
}

tr:nth-child(odd) {
  background-color: #9DB2BF;
}
`

const Tr = styled.tr`
height: 50px;
`

const Td = styled.td`
text-align: center;

`

export {Table, Th, Tr, Td, Tbody}