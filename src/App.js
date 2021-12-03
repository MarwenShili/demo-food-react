
import './App.css';
import Cart from './components/Carte/Cart';
import Header from './components/header/Header';
import List from './components/Lists/List';
import { useState } from 'react';
import ErrorModal from './components/UI/ErrorModal';

function App() {

  const [isOpenPopUp, setIsOpenPopUp] = useState(false)

  const popUphandler = () => {
    setIsOpenPopUp(true)
  }
  const closePopUp = () => {
    setIsOpenPopUp(false)
  }

  return (
    <div className="App">
      <Header openCart={popUphandler} />
      {isOpenPopUp && <Cart onClose={closePopUp} />}
      <section>
     <List />
     {/* <ErrorModal /> */}
     </section>
    </div>
  );
}

export default App;
