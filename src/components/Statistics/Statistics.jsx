import { List, Section, Title, Item, Span } from './Statistic.styled'

export const Statistics = ({ stats, title }) => {
    return (
        <Section>
            {title && <Title>{title}</Title>}     
              <List>
                {   stats.map(({id, label, percentage}) => <Item key={id}>
            <span>{label}</span>
            <Span>{percentage}%</Span>
        </Item>)  }
        </List>
        </Section>
      
    )
}