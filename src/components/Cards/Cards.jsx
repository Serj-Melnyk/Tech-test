// import { CardTweet , Card , Li} from 'Cards/CardStyled';

// export const Cards = () => {
//     return (
       
//         <CardTweet>
//             <Card>
//                 <Li></Li>
//            </Card>

//             </CardTweet>
      
//     )
// }

import { useState } from 'react';
import {
  // Avatar,
  // Boy,
  Picture,
  Rectangle,
  StyledButton,
  StyledFollowingButton,
  Text,
  TextWrapper,
  Wrapper,
} from './CardStyled';
import { updateUsers } from 'services/fetch';

const Card = ({ users }) => {

  const { followers, tweets, following } = users;
const [isFollowing, setIsFollowing] = useState(following);

  const toggleActiveFollow = () => {
    
    if (!isFollowing) {
      users.followers += 1;
    } else {
       users.followers -= 1;
    }

    const followers = users.followers;
    const id = users.id;
    const updateFollowing = !isFollowing;

    updateUsers(id, updateFollowing, followers).then(
      setIsFollowing(!isFollowing)
    );
  };
  return (
    <Wrapper>
      <Picture></Picture>
      <Rectangle></Rectangle>
      {/* <Boy/> */}
      
        {/* <Avatar src={avatar} alt="avatar" /> */}

      {/* </Boy> */}
      <TextWrapper>
        <Text>{followers}</Text>
        <Text>{tweets} tweets</Text>
        <Text>{followers} followers</Text>
      </TextWrapper>
      {!isFollowing ? (
        <StyledButton onClick={toggleActiveFollow}>follow</StyledButton>
      ) : (
        <StyledFollowingButton onClick={toggleActiveFollow}>
          following
        </StyledFollowingButton>
      )}
    </Wrapper>
  );
};
export default Card


