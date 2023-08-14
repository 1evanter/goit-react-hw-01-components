import { TransactionHistoryItem } from "./TransactionHistoryItem"
import { Table, Th, Tr, Tbody} from "./TransactionHistory.styled";

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
                <TransactionHistoryItem items={items} />
            </Tbody>
        </Table>
    )
}