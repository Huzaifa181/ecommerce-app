import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import {Container, Row, Col} from 'react-bootstrap'
import Header from './components/Header'
// import {BrowserRouter} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreens'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
function App() {
  
  return (
    <BrowserRouter>
    <Header/>
        <main className='py-3'>
          <Container>
            <Route path='/login' component={LoginScreen}/>
            <Route path='/order/:id' component={OrderScreen}/>
            <Route path='/register' component={RegisterScreen}/>
            <Route path='/profile' component={ProfileScreen}/>
            <Route path='/shipping' component={ShippingScreen}/>
            <Route path='/payment' component={PaymentScreen}/>
            <Route path='/placeorder' component={PlaceOrderScreen}/>
            <Route path='/product/:id' component={ProductScreen}/>
            <Route path='/cart/:id?' component={CartScreen}/>
            <Route path='/' component={HomeScreen} exact/>
        </Container>
        </main>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
