import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import PaymentFailuremodel from './pages/PaymentFailuremodel';



function App() {
  return (
   
      <Routes>
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<HomePage/>} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/paymentsucess" element={<PaymentSuccess/>}/>
        <Route path="/Cartpage" element={<CartPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/failure" element={<PaymentFailuremodel/>}/>
        
       
      </Routes>

    

  );
}

export default App;
