import css from './App.module.css';

import userData from '../../data/userData.json';
import friends from '../../data/friends.json';

import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friendsData={friends} />
    </>
  );
};
export default App;