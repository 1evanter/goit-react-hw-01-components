import { List, Section, Title } from './Statistic.styled'
import { StatisticsItem } from './StatisticsItem'




export const Statistics = ({ data }) => {
    return (
        <Section>
              <Title>Upload stats</Title>
              <List>
                <StatisticsItem data={data} />
        </List>
        </Section>
      
    )
}