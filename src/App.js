
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
