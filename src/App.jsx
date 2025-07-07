import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './pages/Pizza';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './components/Login';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';  
import Profile from './pages/Profile';
import { CartProvider } from './context/CartContext';

const App =() => {

  return (
    <>
      <div>
        <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/p001" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> 
          <Route path='/profile' element={<Profile/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </CartProvider>
        <Footer />
      </div>
    </>
  );
};

export default App
