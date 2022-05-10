//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


//import screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//import components
import TopBar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      {/*SideDrawer*/}
      {/*Backdrop*/}
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products:id" element={<ProductScreen />} />
          <Route path="/carts" element={<CartScreen />} />
        </Routes>
      </main>
      {/*CheckoutScreen*/}
      {/*OrderScreen*/}
      {/*OrderHistoryScreen*/}
      {/*ProfileScreen*/}
      {/*SettingsScreen*/}
      {/*AboutScreen*/}
      {/*ContactScreen*/}
      {/*LoginScreen*/}
      {/*SignupScreen*/}
      {/*Footer*/}
      </BrowserRouter>
  );
}

export default App;
