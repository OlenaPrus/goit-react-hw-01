import css from './App.module.css';

import userData from '../../data/userData.json';
import friends from '../../data/friends.json';
import transaction from '../../data/transaction.json'

import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <div className={css.container}>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friendsData={friends} />
        <TransactionHistory items={transaction} />
      </div>
    </>
  );
};
export default App;
