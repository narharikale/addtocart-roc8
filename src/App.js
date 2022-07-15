import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './pages/Cart';
import { Prodcutlisting } from './pages/Prodcutlisting';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <Prodcutlisting/> } />
          <Route path='/cart' element={ <Cart/> } />
        </Routes>
    </div>
  );
}

export default App;
