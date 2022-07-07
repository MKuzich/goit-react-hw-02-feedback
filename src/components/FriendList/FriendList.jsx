import { Friends, Friend, Status, Avatar, Name } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(fr => (
        <Friend key={fr.id}>
          <Status status={fr.isOnline}></Status>
          <Avatar src={fr.avatar} />
          <Name>{fr.name}</Name>
        </Friend>
      ))}
    </Friends>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
