import { useState } from 'react';
import './App.css';
import AddFriend from './components/AddFriend';
import BillShare from './components/BillShare';

function App() {
  const FriendsList = useState([]);

  return (
    <div className="App">
      <AddFriend />
      <BillShare />
      <FriendsList />
    </div>
  );
}

export default App;
