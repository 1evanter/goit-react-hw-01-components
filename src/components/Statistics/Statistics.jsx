import { List, Section, Title } from './Statistic.styled'
import { StatisticsItem } from './StatisticsItem'




export const Statistics = ({ stats }) => {
    return (
        <Section>
              <Title>Upload stats</Title>
              <List>
                <StatisticsItem stats={stats} />
        </List>
        </Section>
      
    )
}