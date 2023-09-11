import { useState } from 'react';
import AddItem from './AddItem';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import ItemsList from './ItemsList';

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <>
      <Header />
      <div className="container">
        <AddItem addItem={addItem} />
        <ItemsList items={items} />
      </div>
      <Footer />
    </>
  );
}

export default App;
