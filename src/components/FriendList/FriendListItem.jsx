import { Item, Image, Span, Name } from "./FriendList.styled";

export const FriendListItem = ({ friends }) => {
    return (
        friends.map(data => 
            <Item key={data.id}>
                <Span status={data.isOnline}></Span>
                <Image src={data.avatar} alt={data.name} />
                <Name>{data.name}</Name>
            </Item>
            )
    )
}