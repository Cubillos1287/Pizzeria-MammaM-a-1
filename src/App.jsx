import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
//import Register from './components/Register';
//import Login from './components/Login';
//import Home from './components/Home';

function App() {

  return (
    <>
      <div>
        <Navbar />
        {/*<Home />*/}
        {/*<Register/> */}
        {/*<Login/>*/}
        <Cart />
        <Footer />
      </div>
    </>
  )
}

export default App
