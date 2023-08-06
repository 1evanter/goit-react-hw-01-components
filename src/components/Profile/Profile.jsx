import { List, Section, Image, Descr, Item, Text, Name, } from './Profile.styled'

export const Profile = ({ data: { avatar, username, tag, location, stats: { followers, views, likes } } }) => {
    return (
        <Section>
            <Descr>
                <Image src={avatar} alt={username} />
                <Name>{username}</Name>
                <Text>@{tag}</Text>
                <Text>{location}</Text>
            </Descr>
            <List>
                <Item>
                    <Text>Followers</Text>
                   <b> <span>{followers }</span></b>
                </Item>
              <Item>
                <Text>Views</Text>
                    <b><span>{ views}</span></b>
              </Item>
              <Item>
                <Text>Likes</Text>
                   <b> <span>{likes }</span></b>
              </Item>
            </List>
        </Section>
    )
}