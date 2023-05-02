
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Cart from './Component/Cart';

function App() {
  return (
    <BrowserRouter>
    <Header name="Tanuja"/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  </BrowserRouter>
  );  
}

export default App;
