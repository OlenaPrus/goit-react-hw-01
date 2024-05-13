import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.modul.css';

export default function FriendList({ friendsData }) {
  return (
    <ul className={css.friendsList}>
      {friendsData.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
