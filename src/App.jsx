import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pizza from './components/Pizza';
//import Cart from './components/Cart';
//import Register from './components/Register';
//import Login from './components/Login';
import Home from './components/Home';

const App =() => {

  return (
    <>
      <div>
        <Navbar />
        {/*<Home />*/}
        {/*<Register/> */}
        {/*<Login/>*/}
        {/*<Cart />*/}
        <Pizza/>
        <Footer />
      </div>
    </>
  );
};

export default App
