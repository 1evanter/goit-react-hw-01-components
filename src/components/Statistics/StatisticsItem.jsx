import { Item, Span } from './Statistic.styled'

export const StatisticsItem = ({ data }) => {
    return (
        data.map(data => <Item key={data.id}>
            <span>{ data.label}</span>
            <Span>{data.percentage}%</Span>
        </Item>) 
    )
}