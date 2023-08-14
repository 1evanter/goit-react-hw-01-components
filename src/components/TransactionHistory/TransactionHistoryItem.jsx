import { Tr, Td} from "./TransactionHistory.styled";

export const TransactionHistoryItem = ({ items }) => {
    return (
        items.map(({id, type, amount, currency}) =>
            <Tr key={id}>
                <Td>{type}</Td>
                <Td>{amount}</Td>
                <Td>{currency}</Td>
            </Tr>)
       
    )
}