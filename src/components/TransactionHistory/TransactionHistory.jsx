import { Table, Th, Tr, Tbody, Td} from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
    return (
        <Table>
            <thead>
                <Tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </Tr>
            </thead>
            <Tbody>
              { items.map(({id, type, amount, currency}) =>
            <Tr key={id}>
                <Td>{type}</Td>
                <Td>{amount}</Td>
                <Td>{currency}</Td>
            </Tr>) }
            </Tbody>
        </Table>
    )
}