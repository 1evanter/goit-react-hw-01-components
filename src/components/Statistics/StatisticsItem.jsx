import { Item, Span } from './Statistic.styled'

export const StatisticsItem = ({ stats }) => {
    return (
        stats.map(({id, label, percentage}) => <Item key={id}>
            <span>{label}</span>
            <Span>{percentage}%</Span>
        </Item>) 
    )
}