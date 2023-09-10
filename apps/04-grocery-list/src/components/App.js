import AddItem from './AddItem';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import ItemsList from './ItemsList';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AddItem />
        <ItemsList />
      </div>
      <Footer />
    </>
  );
}

export default App;
